    if (typeof Videos == 'undefined')
{
    Videos = {};
}

Videos.Field = Garnish.Base.extend({

    $input: null,
    $container: null,
    $spinner: null,
    $preview: null,
    $player: null,
    $playBtn: null,
    $openExplorerBtn: null,
    $removeBtn: null,

    inputId: null,
    explorer: null,
    playerModal: null,
    videoSelectorModal: null,
    explorerHtml: null,

    init: function(inputId)
    {
        this.inputId = inputId;
        this.$input = $('#'+inputId);
        this.$container = this.$input.parents('.videos-field');

        this.$spinner = $('.spinner', this.$container);
        this.$preview = $('.preview', this.$container);

        this.$playBtn = $('.play', this.$container);
        this.$openExplorerBtn = $('.videos-add', this.$container);
        this.$removeBtn = $('.delete', this.$container);

        this.addListener(this.$input, 'textchange', 'fieldPreview');
        this.addListener(this.$openExplorerBtn, 'click', 'openExplorer');
        this.addListener(this.$playBtn, 'click', 'playVideo');
        this.addListener(this.$removeBtn, 'click', 'removeVideo');
    },

    removeVideo: function(ev)
    {
        this.$input.val('');
        this.fieldPreview();
        ev.preventDefault();
    },

    openExplorer: function(ev)
    {
        if(!this.videoSelectorModal)
        {
            $videoSelectorModal = $('<div class="videoselectormodal modal"></div>').appendTo(Garnish.$bod);
            $explorerContainer = $('<div class="explorer-container"/>').appendTo($videoSelectorModal),
            $footer = $('<div class="footer"/>').appendTo($videoSelectorModal),
            $buttons = $('<div class="buttons right"/>').appendTo($footer),
            $cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo($buttons),
            $selectBtn = $('<input type="submit" class="btn submit disabled" value="'+Craft.t('Select')+'" />').appendTo($buttons);

            this.videoSelectorModal = new Garnish.Modal($videoSelectorModal, {
                visible: false,
                resizable: false,
            });

            this.addListener($cancelBtn, 'click', function() {
                this.videoSelectorModal.hide();
            });

            this.addListener($selectBtn, 'click', function() {
                this.$input.val(url);
                this.$input.trigger('change');
                this.videoSelectorModal.hide();
            });

            if(!this.explorer)
            {
                this.explorer = new Videos.Explorer($explorerContainer,
                {
                    namespaceInputId: this.inputId,

                    onPlayerHide: $.proxy(function()
                    {
                        this.videoSelectorModal.show();
                    }, this),
                    onPlayerShow: $.proxy(function()
                    {
                        this.videoSelectorModal.hide();
                    }, this),
                    onSelectVideo: $.proxy(function(url)
                    {
                        $selectBtn.removeClass('disabled');
                    }, this),
                    onDeselectVideo: $.proxy(function()
                    {
                        $selectBtn.addClass('disabled');
                    }, this)
                });

                this.videoSelectorModal.updateSizeAndPosition();
                Craft.initUiElements();
            }
        }
        else
        {
            this.videoSelectorModal.show();
        }
    },

    playVideo: function(ev)
    {
        var gateway = $(ev.currentTarget).data('gateway');
        var videoId = $(ev.currentTarget).data('id');

        if(!this.playerModal)
        {
            this.playerModal = new Videos.Player();
        }
        else
        {
            this.playerModal.show();
        }

        this.playerModal.play({
            gateway: gateway,
            videoId: videoId
        });
    },

    fieldPreview: function()
    {
        var val = this.$input.val();

        if (val)
        {
            this.$spinner.removeClass('hidden');
            $('.error', this.$container).addClass('hidden');

            Craft.postActionRequest('videos/fieldPreview', { url: val }, $.proxy(function(response, textStatus)
            {
                this.$spinner.addClass('hidden');
                this.$preview.show();

                if (textStatus == 'success')
                {
                    if (response.error)
                    {
                        this.$preview.html('<p class="error">'+response.error+'</p>');
                    }
                    else
                    {
                        this.$preview.html(response.preview);

                        $playBtn = $('.play', this.$container);
                        this.addListener($playBtn, 'click', 'playVideo');
                    }
                }

            }, this));
        }
        else
        {
            this.$preview.hide();
        }
    }
});

/**
 * Matrix compatibility
 */
$(document).ready(function() {

    if(typeof(Matrix) != "undefined")
    {
        Matrix.bind("dukt_videos", "display", function(cell) {

            var $field = $('.input', this);

            // ignore if we can't find that field
            if (! $field.length) return;

            var fieldName = cell.field.id+'['+cell.row.id+']['+cell.col.id+']',
                fieldId = fieldName.replace(/[^\w\-]+/g, '_');

            $field.attr('id', fieldId);

            cell.videosField = new Videos.Field(fieldId);

        });
    }
});
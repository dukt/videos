if (typeof Videos == 'undefined')
{
    Videos = {};
}

Videos.Field = Garnish.Base.extend({

    $input: null,
    $spinner: null,
    $preview: null,
    $player: null,

    explorer: null,
    playerModal: null,
    videoSelectorModal: null,

    lookupVideoTimeout: null,

    init: function(inputId)
    {
        this.$input = $('#'+inputId);
        this.$container = this.$input.parents('.dkv-video');
        this.$play = $('.play', this.$container);
        this.$spinner = $('.dk-spinner', this.$container);
        this.$preview = $('.dkv-preview-inject', this.$container);
        this.$addBtn = $('.dk-add, .dk-edit', this.$container);
        this.$removeBtn = $('.delete', this.$container);

        this.addListener(this.$input, 'textchange', 'lookupVideo');
        this.addListener(this.$play, 'click', 'playVideo');
        this.addListener(this.$addBtn, 'click', 'openSelectorModal');

        this.addListener(this.$removeBtn, 'click', $.proxy(function(ev) {

            this.$input.val('');
            this.lookupVideo();
            ev.preventDefault();
        }));
    },

    openSelectorModal: function(ev)
    {
        if(!this.videoSelectorModal)
        {
            $videoSelectorModal = $('<div class="videoselectormodal modal"></div>').appendTo(Garnish.$bod);
            $wrap = $('<div class="wrap"/>').appendTo($videoSelectorModal),
            $footer = $('<div class="footer"/>').appendTo($videoSelectorModal),
            $buttons = $('<div class="buttons right"/>').appendTo($footer),
            $cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo($buttons),
            $selectBtn = $('<input type="submit" class="btn submit" value="'+Craft.t('Select')+'" />').appendTo($buttons);

            this.videoSelectorModal = new Garnish.Modal($videoSelectorModal, {
                visible: false,
                resizable: true
            });

            this.addListener($cancelBtn, 'click', function() {
                this.videoSelectorModal.hide();
            });

            Craft.postActionRequest('videos/explorer', {}, $.proxy(function(response, textStatus)
            {
                $wrap.html(response.html);
                this.explorer = new Videos.Explorer($videoSelectorModal);
                this.videoSelectorModal.updateSizeAndPosition();
                Craft.initUiElements();
                console.log('Craft.initUiElements();');
            }, this));
        }
        else
        {
            this.videoSelectorModal.show();
        }
    },

    playVideo: function(ev) {
        var gateway = $(ev.currentTarget).data('gateway');
        var videoId = $(ev.currentTarget).data('id');

        if(!this.playerModal)
        {
            this.$player = $('<div class="player modal" />').appendTo(Garnish.$bod);

            this.playerModal = new Garnish.Modal(this.$player, {
                visible: false,
                resizable: true,
                onHide: $.proxy(function()
                {
                    this.$player.html('');
                }, this)
            });
        }
        else
        {
            this.playerModal.show();
        }

        var data = {
            gateway: gateway,
            videoId: videoId
        };

        Craft.postActionRequest('videos/player', data, $.proxy(function(response, textStatus)
        {
            this.$player.html(response.html);
            this.playerModal.updateSizeAndPosition();
        }, this));
    },

    lookupVideo: function()
    {
        var val = this.$input.val();

        if (val)
        {
            this.$spinner.removeClass('hidden');
            $('.dk-error', this.$container).addClass('hidden');

            Craft.postActionRequest('videos/lookupVideo', { url: val }, $.proxy(function(response, textStatus)
            {
                this.$spinner.addClass('hidden');

                if (response && textStatus == 'success')
                {
                    if (!response.hasOwnProperty('error'))
                    {
                        this.$preview.show();
                        this.$preview.html(response.preview);
                    }
                    else
                    {
                        $('.dk-error', this.$container).html(response.error);
                        $('.dk-error', this.$container).removeClass('hidden');
                        this.$preview.hide();
                    }
                }
                else
                {
                    this.$preview.hide();
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

            var $field = $('.dkv-input', this);

            // ignore if we can't find that field
            if (! $field.length) return;

            var fieldName = cell.field.id+'['+cell.row.id+']['+cell.col.id+']',
                fieldId = fieldName.replace(/[^\w\-]+/g, '_');

            $field.attr('id', fieldId);

            cell.videosField = new Videos.Field(fieldId);

        });
    }
});
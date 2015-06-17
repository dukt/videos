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
    $addBtn: null,
    $removeBtn: null,

    explorer: null,
    playerModal: null,
    videoSelectorModal: null,

    init: function(inputId)
    {
        this.$input = $('#'+inputId);
        this.$container = this.$input.parents('.videos-field');

        this.$spinner = $('.spinner', this.$container);
        this.$preview = $('.preview', this.$container);

        this.$playBtn = $('.play', this.$container);
        this.$addBtn = $('.videos-add', this.$container);
        this.$removeBtn = $('.delete', this.$container);

        this.addListener(this.$input, 'textchange', 'lookupVideo');
        this.addListener(this.$playBtn, 'click', 'playVideo');
        this.addListener(this.$addBtn, 'click', 'addVideo');
        this.addListener(this.$removeBtn, 'click', 'removeVideo');
    },

    removeVideo: function(ev)
    {
        this.$input.val('');
        this.lookupVideo();
        ev.preventDefault();
    },

    addVideo: function(ev)
    {
        if(!this.videoSelectorModal)
        {
            $videoSelectorModal = $('<div class="videoselectormodal modal"></div>').appendTo(Garnish.$bod);
            $wrap = $('<div class="wrap"/>').appendTo($videoSelectorModal),
            $footer = $('<div class="footer"/>').appendTo($videoSelectorModal),
            $buttons = $('<div class="buttons right"/>').appendTo($footer),
            $cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo($buttons),
            $selectBtn = $('<input type="submit" class="btn submit disabled" value="'+Craft.t('Select')+'" />').appendTo($buttons);

            this.videoSelectorModal = new Garnish.Modal($videoSelectorModal, {
                visible: false,
                resizable: true
            });

            this.addListener($cancelBtn, 'click', function() {
                this.videoSelectorModal.hide();
            });

            this.addListener($selectBtn, 'click', function() {
                this.$input.val(url);
                this.$input.trigger('change');
                this.videoSelectorModal.hide();
            });

            Craft.postActionRequest('videos/explorer', {}, $.proxy(function(response, textStatus)
            {
                $wrap.html(response.html);

                this.explorer = new Videos.Explorer($videoSelectorModal, {
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
                console.log('Craft.initUiElements();');
            }, this));
        }
        else
        {
            this.videoSelectorModal.show();
        }
    },

    playVideoOld: function(ev)
    {
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

    playVideo: function(ev)
    {
        var gateway = $(ev.currentTarget).data('gateway');
        var videoId = $(ev.currentTarget).data('id');

        if(!this.playerModal)
        {
            this.playerModal = new Videos.Player({
                gateway: gateway,
                videoId: videoId
            });
        }
        else
        {
            this.playerModal.show();
        }
    },

    lookupVideo: function()
    {
        var val = this.$input.val();

        if (val)
        {
            this.$spinner.removeClass('hidden');
            $('.error', this.$container).addClass('hidden');

            Craft.postActionRequest('videos/lookupVideo', { url: val }, $.proxy(function(response, textStatus)
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
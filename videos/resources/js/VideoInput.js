/**
 * Tweet field input class
 */

var $playerModal = new PlayerModal();

VideoInput = Garnish.Base.extend({

    $input: null,
    $spinner: null,
    $preview: null,

    lookupVideoTimeout: null,

    init: function(inputId)
    {
        this.$input = $('#'+inputId);
        this.$container = this.$input.parents('.dkv-video');


        this.$spinner = this.$input.next();
        this.$preview = this.$spinner.next();

        //$(this.$container).on('click', 'img', this.playVideo);

        this.addPreviewListeners();

        this.addListener(this.$input, 'textchange', 'lookupVideo');
    },

    addPreviewListeners: function()
    {
        this.$image = $('img', this.$container);

        this.addListener(this.$image, 'click', 'playVideo');
    },

    playVideo: function() {
        $playerModal.play(this.$input.val());
    },

    lookupVideo: function()
    {
        var val = this.$input.val();

        if (val)
        {
            this.$spinner.removeClass('hidden');

            Craft.postActionRequest('videos/lookupVideo', { url: val }, $.proxy(function(response, textStatus)
            {
                this.$spinner.addClass('hidden');

                if (response && textStatus == 'success')
                {
                    if (!response.hasOwnProperty('error'))
                    {
                        if (!this.$preview.length)
                        {
                            this.$preview = $('<div class="dkv-preview-inject"/>').insertAfter(this.$spinner);
                        }
                        else
                        {
                            this.$preview.show();
                        }

                        this.$preview.html(response.preview);

                        this.addPreviewListeners();
                    }
                    else
                    {
                        this.$preview.hide();
                    }

                } else {
                    this.$preview.hide();
                }
            }, this));
        }
        else
        {
            this.$preview.hide();
        }
    }
})
/**
 * VideoField
 */

VideoField = Dukt.Base.extend({

    $input: null,
    $spinner: null,
    $preview: null,

    lookupVideoTimeout: null,

    init: function(inputId)
    {
        // elements

        this.$input = $('#'+inputId);
        this.$container = this.$input.parents('.dkv-video');
        this.$spinner = $('.dk-spinner', this.$input.parents('.dkv-video'));
        this.$preview = $('.dkv-preview-inject', this.$input.parents('.dkv-video'));


        // url input

        this.addListener(this.$input, 'textchange', 'lookupVideo');


        // initial lookup

        // if(this.$input.val().length > 0)
        // {
        //     this.lookupVideo();
        // }


        // preview video

        var $this = this;

        this.$container.on('click', '.dkv-image', function(ev)
        {
            $this.playVideo();
            ev.preventDefault();
        });


        // add / change

        $('.dk-add, .dk-edit', this.$container).on('click', function(ev)
        {
            $manager.open($this);
            ev.preventDefault();
        });


        // remove

        this.$container.on('click', '.dk-remove', function(ev)
        {
            $this.$input.val('');
            $this.lookupVideo();
            ev.preventDefault();
        });
    },

    playVideo: function() {
        $player.play(this.$input.val());
    },

    lookupVideo: function()
    {
        var val = this.$input.val();

        if (val)
        {
            this.$spinner.removeClass('hidden');
            $('.dk-error', this.$container).addClass('hidden');

            Dukt.postActionRequest('videos/lookupVideo', { url: val }, $.proxy(function(response, textStatus)
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
 * Player Modal
 */
var Player = Modal.extend({

    init: function()
    {
        this.base();
    },

    play: function (url)
    {
        var data = {
            url: url
        };

        // Add the CSRF Token
        data[csrfTokenName] = csrfTokenValue;

        $.post(Dukt.getActionUrl('videos/player'), data, $.proxy(function(response, textStatus, jqXHR)
        {
            if (textStatus == 'success')
            {
                this.$inject.html(response);

                this.open();
            }
        }, this));
    },

    onBeforeOpen: function()
    {
        $('iframe', this.$container).height(this.$container.height());
    },

    onBeforeClose: function()
    {
        this.$inject.html('');
    }
});


/**
 * Instantiate Player
 */
var $player = new Player();


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

            cell.videosField = new VideoField(fieldId);

        });
    }
});
/**
 * Manager modal
 */
var Manager = Modal.extend({

    $field: null,

    init: function()
    {
        this.base();

        $.post(Craft.getUrl('videos/_manager_modal'), {}, $.proxy(function(response, textStatus, jqXHR)
        {
            if (textStatus == 'success')
            {
                this.$inject.html(response);


                // Activates Knockout
                ko.applyBindings(new KoManager(), $('.videos-manager', this.$container).get(0));
            }

        }, this));
    },

    getVideosError: function(msg, absolute)
    {
        var container = $('.videos-main .dk-middle');
        var error = $('.dk-error', container);

        error.html(msg);
        error.removeClass('hidden');

        if(absolute)
        {
            error.addClass('dk-absolute');
            Dukt.Utils.positionCenter(error, container);
        }
        else
        {
            error.removeClass('dk-absolute');
            error.css('width', 'auto');
            error.css('height', 'auto');
        }
    },

    getVideosErrorReset: function()
    {
        var container = $('.videos-main .dk-middle');
        var error = $('.dk-error', container);

        error.html('');
        error.addClass('hidden');
    },

    spinner: function(status)
    {
        if(status == 'on')
        {
            $('.dk-spinner', this.$container).removeClass('hidden');
        }
        else
        {
            $('.dk-spinner', this.$container).addClass('hidden');
        }
    },

    open: function(field)
    {
        this.base();

        this.$field = field;

        Dukt.Utils.positionCenter($('.dk-center', this.$container), this.$container);
    },


    play: function(video)
    {
        $('.videos-manager-player', this.$container).removeClass('hidden');
        $('.videos-manager-player', this.$container).html('<iframe src="'+video.embedUrl+'autoplay=1" />');
        $('.dk-back', this.$container).removeClass('hidden');
    },

    back: function()
    {
        $('.videos-manager-player', this.$container).addClass('hidden');
        $('.videos-manager-player', this.$container).html('');
        $('.dk-back', this.$container).addClass('hidden');
    },

    more: function(status)
    {
        if(status == 'show')
        {
            $('.dk-more', this.$container).removeClass('hidden');
        }
        else
        {
            $('.dk-more', this.$container).addClass('hidden');
        }
    }
});



/**
 * Instantiate Manager
 */
var $manager = new Manager();
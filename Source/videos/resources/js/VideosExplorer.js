if (typeof Videos == 'undefined')
{
    Videos = {};
}

Videos.Explorer = Garnish.Base.extend({

    playerModal: null,
    previewInject: null,
    searchTimeout: null,

    init: function($container, settings)
    {
        this.settings = settings;

        this.$container = $container;
        this.$spinner = $('.spinner', this.$container);
        this.$gateways = $('.gateways select', this.$container);
        this.$sectionLinks = $('nav a', this.$container);
        this.$search = $('.search', this.$container);
        this.$videos = $('.videos', this.$container);


        // Section Links

        this.addListener(this.$sectionLinks, 'click', $.proxy(function(ev) {

            this.$sectionLinks.filter('.sel').removeClass('sel');

            $(ev.currentTarget).addClass('sel');

            gateway = $(ev.currentTarget).data('gateway');
            method = $(ev.currentTarget).data('method');
            options = $(ev.currentTarget).data('options');

            this.getVideos(gateway, method, options);

            ev.preventDefault();
        }));


        // Search

        this.addListener(this.$search, 'textchange', $.proxy(function(ev)
        {
            if (this.searchTimeout)
            {
                clearTimeout(this.searchTimeout);
            }

            this.searchTimeout = setTimeout($.proxy(this, 'search', ev), 500);
        }, this));

        this.addListener(this.$search, 'keypress', function(ev)
        {
            if (ev.keyCode == Garnish.RETURN_KEY)
            {
                ev.preventDefault();

                this.search(ev);
            }
        });


        // Trigger first click

        $('nav div:not(.hidden) a:first', this.$container).trigger('click');
    },

    search: function(ev)
    {
        q = $(ev.currentTarget).val();

        if(q.length > 0)
        {
            gateway = this.$gateways.val();
            method = 'search';
            options = {
                q: q
            };

            this.getVideos(gateway, method, options);
        }
        else
        {
            this.$videos.html('');
        }
    },

    playVideo: function(ev)
    {
        var gateway = $(ev.currentTarget).data('gateway');
        var videoId = $(ev.currentTarget).data('id');

        if(!this.playerModal)
        {
            this.playerModal = new Videos.Player({
                gateway: gateway,
                videoId: videoId,
                onHide: $.proxy(function() {
                    this.settings.onPlayerHide();
                }, this)
            });
        }
        else
        {
            this.playerModal.play({
                gateway: gateway,
                videoId: videoId,
            });

            this.playerModal.show();
        }
    },

    selectVideo: function(ev)
    {
        this.$videoElements.removeClass('sel');
        $(ev.currentTarget).addClass('sel');

        url = $(ev.currentTarget).data('url');

        this.settings.onSelectVideo(url);
    },

    getVideos: function(gateway, method, options)
    {
        data = {
            gateway: gateway,
            method: method,
            options: options
        };

        this.$spinner.removeClass('hidden');

        Craft.postActionRequest('videos/getVideos', data, $.proxy(function(response, textStatus)
        {
            this.deselectVideos();
            this.$spinner.addClass('hidden');
            this.$videos.html('');

            if(textStatus == 'success')
            {
                if(typeof(response.error) == 'undefined')
                {
                    this.$videos.html(response.html);

                    this.$playBtns = $('.play', this.$videos);
                    this.$videoElements = $('.video', this.$videos);

                    this.addListener(this.$playBtns, 'click', 'playVideo');
                    this.addListener(this.$videoElements, 'click', 'selectVideo');
                }
                else
                {
                    this.$videos.html('<p class="error">'+response.error+'</p>');
                }
            }

            $('.main', this.$container).animate({scrollTop:0}, 0);

        }, this));
    },

    deselectVideos: function()
    {
        if(this.$videoElements)
        {
            currentVideo = this.$videoElements.filter('.sel');
            currentVideo.removeClass('.sel');

            this.settings.onDeselectVideo();
        }
    }
});


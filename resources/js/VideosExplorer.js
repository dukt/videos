if (typeof Videos == 'undefined')
{
    Videos = {};
}

Videos.Explorer = Garnish.Base.extend({

    $container: null,
    $explorer: null,
    $gateways: null,
    $main: null,
    $mainContent: null,
    $modal: null,
    $playBtns: null,
    $scroller: null,
    $search: null,
    $sectionLinks: null,
    $spinner: null,
    $toolbar: null,
    $videoElements: null,
    $videos: null,

    gateways: null,
    playerModal: null,
    searchTimeout: null,


    init: function($container, settings)
    {
        this.settings = settings;

        this.$container = $container;

        var data = {
            namespaceInputId: this.settings.namespaceInputId
        };

        Craft.postActionRequest('videos/explorer/getModal', data, $.proxy(function(response, textStatus)
        {
            if(textStatus == 'success')
            {
                if(response.success)
                {
                    this.$modal = $(response.html).appendTo(this.$container);

                    this.$main = $('.main', this.$modal);
                    this.$spinner = $('.spinner', this.$modal);
                    this.$gateways = $('.gateways select', this.$modal);
                    this.$sectionLinks = $('nav a', this.$modal);
                    this.$toolbar = $('.toolbar', this.$modal);
                    this.$search = $('.search', this.$modal);
                    this.$mainContent = $('.main .content', this.$modal);
                    this.$videos = $('.videos', this.$modal);
                    this.$scroller = this.$main;
                    this.$explorer = $('.videos-explorer', this.$container);

                    this.gateways = this.$explorer.data('gateways');

                    this.addListener(this.$gateways, 'change', 'handleGatewayChange');
                    this.addListener(this.$sectionLinks, 'click', 'handleSectionClick');
                    this.addListener(this.$search, 'textchange', 'handleSearchChange');
                    this.addListener(this.$search, 'blur', 'handleSearchBlur');
                    this.addListener(this.$search, 'keypress', 'handleSearchKeypress');

                    Craft.initUiElements();

                    this.selectGateway(this.$gateways.val());

                    $('nav div:not(.hidden) a:first', this.$modal).trigger('click');
                }
                else
                {
                    var errorMessage = "Couldn’t load explorer manager.";

                    if(response.error)
                    {
                        errorMessage = response.error;
                    }


                    var $error = $('<div class="error">'+errorMessage+'</div>');

                    $error.appendTo(this.$container);
                }
            }
            else
            {
                var errorMessage = "Couldn’t load explorer manager.";
                var $error = $('<div class="error">'+errorMessage+'</div>');

                $error.appendTo(this.$container);
            }
        }, this));
    },

    handleSearchChange: function(ev)
    {
        if (this.searchTimeout)
        {
            clearTimeout(this.searchTimeout);
        }

        this.searchTimeout = setTimeout($.proxy(this, 'search', ev), 500);
    },

    handleSearchBlur: function(ev)
    {
        var q = $(ev.currentTarget).val();

        if(q.length == 0)
        {
            this.$sectionLinks.filter('.sel').trigger('click');
        }
    },

    handleSearchKeypress: function(ev)
    {
        if (ev.keyCode == Garnish.RETURN_KEY)
        {
            ev.preventDefault();

            this.search(ev);
        }
    },

    handleGatewayChange: function(ev)
    {
        this.selectGateway(ev.currentTarget.value);
    },

    selectGateway: function(gatewayHandle)
    {
        $.each(this.gateways, $.proxy(function(k, gateway)
        {
            if(gateway.handle == gatewayHandle)
            {
                if(!gateway.supportsSearch)
                {
                    this.$search.val('');
                    this.$search.addClass('disabled');
                    this.$search.attr('disabled', true);
                }
                else
                {
                    this.$search.removeClass('disabled');
                    this.$search.attr('disabled', false);
                }
            }
        }, this));
    },

    handleSectionClick: function(ev) {

        this.$sectionLinks.filter('.sel').removeClass('sel');

        $(ev.currentTarget).addClass('sel');

        gateway = $(ev.currentTarget).data('gateway');
        method = $(ev.currentTarget).data('method');
        options = $(ev.currentTarget).data('options');

        if(typeof(options) != 'undefined')
        {
            options = JSON.stringify(options);
            options = $.parseJSON(options);
        }

        this.getVideos(gateway, method, options);

        ev.preventDefault();
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
            this.playerModal.show();
        }

        this.settings.onPlayerShow();

        this.playerModal.play({
            gateway: gateway,
            videoId: videoId,
        });
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
        this.removeListener(this.$scroller, 'scroll');

        data = {
            gateway: gateway,
            method: method,
            options: options
        };

        this.$spinner.removeClass('hidden');

        Craft.postActionRequest('videos/explorer/getVideos', data, $.proxy(function(response, textStatus)
        {
            this.deselectVideos();
            this.$spinner.addClass('hidden');
            this.$videos.html('');

            if(textStatus == 'success')
            {
                if(response.error)
                {
                    this.$mainContent.html('<p class="error">'+response.error+'</p>');
                }
                else
                {
                    $('.error', this.$mainContent).remove();

                    this.$videos = $('<div class="videos" />');
                    this.$videos.html(response.html);

                    this.$mainContent.append(this.$videos);

                    this.$playBtns = $('.play', this.$videos);
                    this.$videoElements = $('.video', this.$videos);

                    this.addListener(this.$playBtns, 'click', 'playVideo');
                    this.addListener(this.$videoElements, 'click', 'selectVideo');

                    if(response.more)
                    {
                        $moreBtn = $('<a class="more btn">More</a>');
                        this.$videos.append($moreBtn);

                        var moreOptions = {};

                        if(options)
                        {
                            var moreOptions = options;
                        }

                        moreOptions.moreToken = response.moreToken;

                        this.addListener($moreBtn, 'click', $.proxy(function() {
                            this.loadMore(gateway, method, moreOptions);
                        }, this));

                        this.addListener(this.$scroller, 'scroll', $.proxy(function() {
                            this.maybeLoadMore(gateway, method, moreOptions);
                        }, this));
                    }
                }
            }

            $('.main', this.$modal).animate({scrollTop:0}, 0);

        }, this));
    },

    maybeLoadMore: function(gateway, method, moreOptions)
    {
        if (this.canLoadMore())
		{

			this.loadMore(gateway, method, moreOptions);
		}
    },

    canLoadMore: function()
    {
        var containerScrollHeight = this.$scroller.prop('scrollHeight'),
            containerScrollTop = this.$scroller.scrollTop(),
            containerHeight = this.$scroller.outerHeight();

        return (containerScrollHeight - containerScrollTop <= containerHeight + 15);
    },

    loadMore: function(gateway, method, options)
    {
        this.removeListener(this.$scroller, 'scroll');

        $('.more', this.$videos).remove();

        this.$spinner.removeClass('hidden');
        $videosSpinner = $('<div class="spinner" />');
        this.$videos.append($videosSpinner);

        data = {
            gateway: gateway,
            method: method,
            options: options
        };

        Craft.postActionRequest('videos/explorer/getVideos', data, $.proxy(function(response, textStatus)
        {
            this.deselectVideos();

            this.$spinner.addClass('hidden');
            $videosSpinner.remove();

            if(textStatus == 'success')
            {
                if(typeof(response.error) == 'undefined')
                {
                    this.$videos.append(response.html);

                    this.$playBtns = $('.play', this.$videos);
                    this.$videoElements = $('.video', this.$videos);

                    this.addListener(this.$playBtns, 'click', 'playVideo');
                    this.addListener(this.$videoElements, 'click', 'selectVideo');

                    if(response.more)
                    {
                        $moreBtn = $('<a class="more btn">More</a>');
                        this.$videos.append($moreBtn);

                        if(typeof(options) == 'undefined')
                        {
                            var moreOptions = {};
                        }
                        else
                        {
                            var moreOptions = options;
                        }

                        moreOptions.moreToken = response.moreToken;

                        this.addListener($moreBtn, 'click', $.proxy(function() {
                            this.loadMore(gateway, method, options);
                        }, this));

                        this.addListener(this.$scroller, 'scroll', $.proxy(function() {
                            this.maybeLoadMore(gateway, method, moreOptions);
                        }, this));
                    }
                }
                else
                {
                    this.$videos.html('<p class="error">'+response.error+'</p>');
                }
            }
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

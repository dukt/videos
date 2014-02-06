/**
 * Knockout Manager
 */
function KoManager() {

    var $this = this;

    // gateways

    $this.gateways = ko.observableArray();


    Craft.postActionRequest('videos/getGatewaysWithSections', {}, $.proxy(function(response, textStatus)
    {
        if (response && textStatus == 'success')
        {
            if (!response.hasOwnProperty('error'))
            {
                $this.gateways(response.gateways);



                //init some stuff

                var videosContainer = $('.videos-main .dk-middle', $manager.$container);
                var noVideos = $('.dk-no-videos', videosContainer);

                Dukt.Utils.positionCenter(noVideos, videosContainer);




                if($this.gateways().length == 0)
                {
                    $('.videos-no-gateway', this.$container).removeClass('hidden');
                    $('.videos-gateways-loading', this.$container).addClass('hidden');
                }

                $('.videos-sidebar .dk-section:first-child li:first-child', $manager.$container).trigger('click');
            }
            else
            {
                $manager.error(response.error);
            }
        }
        else
        {
            $manager.error("Couldn't get gateways.")
        }

    }, this));




    // nav

    $this.videos = ko.observable();
    $this.selectedGateway = ko.observable();
    $this.selectedSectionItem = ko.observable();
    $this.selectedVideoIndex = ko.observable();

    $this.goToSectionItem = function(item)
    {
        $manager.spinner('on');

        var data = {
            url: item.url
        };

        $this.getVideos(data);

        $this.selectedSectionItem(item.url);
    };


    // search

    $this.searchQuery = "";
    $this.previousSearchQuery = "";

    $this.searchTimeout = false;

    $this.pagination = {
        page:1,
        perPage: 36
    };

    $this.getVideosData = {};

    $this.getVideos = function(data)
    {
        var more = false;

        if(typeof data == 'undefined')
        {
            more = true;
            data = $this.getVideosData;
        }
        else
        {
            $this.getVideosData = data;

            // reset pagination
            $this.pagination = {
                page:1,
                perPage: 36
            };
        }

        if(typeof data.options == 'undefined')
        {
            data.options = {};
        }

        data.options.page = $this.pagination.page;

        data.options.perPage = $this.pagination.perPage;


        $manager.spinner('on');

        $manager.getVideosErrorReset();

        $manager.more('hide');

        Craft.postActionRequest('videos/getVideosFromUrl', data, $.proxy(function(response, textStatus)
        {
            $manager.spinner('off');

            if (response && textStatus == 'success')
            {
                if (!response.hasOwnProperty('error'))
                {
                    // success

                    $('.dk-videos', $manager.$container).removeClass('hidden');

                    if(!more)
                    {

                        $this.selectedVideoIndex(null);
                        $('.submit', $manager.$container).addClass('disabled');

                        $('.videos-main .dk-middle', $manager.$container).get(0).scrollTop = 0;

                        $this.videos(response.videos);
                    }
                    else
                    {
                        $this.videos($this.videos().concat(response.videos));
                    }

                    if($this.videos().length == 0)
                    {
                        $('.dk-no-videos', $manager.$container).removeClass('hidden');
                    }
                    else
                    {
                        $('.dk-no-videos', $manager.$container).addClass('hidden');
                    }

                    if(typeof response.videos != 'undefined')
                    {
                        if(response.videos.length == data.options.perPage)
                        {
                            // show load more
                            $manager.more('show');
                        }
                        else
                        {
                            $manager.more('hide');
                        }
                    }
                    else
                    {
                        if(!more)
                        {
                            // hide videos
                            $('.dk-videos', $manager.$container).addClass('hidden');

                            // error
                            $manager.getVideosError("Couldn't get videos.", true);
                        }
                        else
                        {
                            // error
                            $manager.getVideosError("Couldn't get videos.");
                        }
                    }
                }
                else
                {
                    if(!more)
                    {
                        // hide videos

                        $('.dk-videos', $manager.$container).addClass('hidden');

                        // error
                        $manager.getVideosError(response.error, true);
                    }
                    else
                    {
                        // error
                        $manager.getVideosError(response.error);
                    }
                }
            }
            else
            {

            }
        }, this));
    };

    $this.more = function()
    {
        $this.pagination.page = $this.pagination.page + 1;
        $this.getVideos();
    }

    $this.doSearch = function(force)
    {
        if(typeof force != 'undefined' && force)
        {
            $this.previousSearchQuery = '';
        }

        if($this.searchQuery == '')
        {
            $this.previousSearchQuery = $this.searchQuery;
        }
        else if($this.previousSearchQuery != $this.searchQuery)
        {
            $this.previousSearchQuery = $this.searchQuery;

            clearTimeout($this.searchTimeout);

            $manager.spinner('on');

            $this.searchTimeout = setTimeout(function()
            {
                // search now

                var data = {
                    url: $this.selectedGateway()+'/search',
                    options: {
                        q: $this.searchQuery
                    }
                };

                $this.getVideos(data);

            }, 800);
        }
    };


    // cancel

    $this.cancel = function()
    {
        $manager.close();
    };


    // back

    $this.back = function()
    {
        $manager.back();
    };

    // play

    $this.play = function(video)
    {
        $manager.play(video);
    };


    // submit

    $this.submit = function(a, b, c, d)
    {
        $target = $(b.target);

        if(!$target.hasClass('disabled'))
        {
            var index = $this.selectedVideoIndex();
            var videos = $this.videos();
            var video = videos[index];

            var field = $manager.$field;

            field.$input.val(video.url);
            field.lookupVideo();

            $manager.close();
        }
    };

    // selectVideo

    $this.selectVideo = function(index, video)
    {
        $this.selectedVideoIndex(index);

        $('.submit', $manager.$container).removeClass('disabled');
    };
}

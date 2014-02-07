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

                if($this.gateways().length == 0)
                {
                    $('.videos-no-gateway', this.$container).removeClass('hidden');
                    $('.videos-gateways-loading', this.$container).addClass('hidden');
                }

                $('.videos-sidebar .dk-section:first-child li:first-child', $manager.$container).trigger('click');


                var videosContainer = $('.videos-main .dk-middle', $manager.$container);
                var noVideos = $('.dk-no-videos', videosContainer);

                Dukt.Utils.positionCenter(noVideos, videosContainer);
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


    $this.lastRequestData = {};

    $this.defaultPagination = function()
    {
        return {
            page:1,
            perPage: 36,
            nextPageToken: null
        };
    }

    $this.pagination = $this.defaultPagination();

    $this.getVideos = function(data)
    {
        var more = false;

        console.log('init data', data);

        if(typeof data == 'undefined')
        {
            // no data ? try to use last request for more
            more = true;
            data = $this.lastRequestData;
        }
        else
        {
            // data ? let's remember about it
            $this.lastRequestData = data;
        }

        if(typeof data.options == 'undefined')
        {
            console.log('no existing options', data);
            // no existing options ? use the defaults
            data.options = {};
            $this.pagination = $this.defaultPagination();
        }
        else
        {
            // make pagination move
            console.log('existing options', data);
        }


        data.options.page = $this.pagination.page;
        data.options.perPage = $this.pagination.perPage;
        data.options.nextPageToken = $this.pagination.nextPageToken;

        console.log('used data', data);

        $manager.spinner('on');

        $manager.getVideosErrorReset();

        $manager.more('hide');

        Craft.postActionRequest('videos/getVideosFromUrl', data, $.proxy(function(response, textStatus)
        {
            $manager.spinner('off');

            if (response && textStatus == 'success')
            {
                if (response.hasOwnProperty('nextPageToken'))
                {
                    $this.pagination.nextPageToken = response.nextPageToken;
                    console.log('nextPageToken', response.nextPageToken);
                }

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

                    console.log('response.videos', data.options.perPage, response.videos);

                    if(typeof response.videos != 'undefined')
                    {
                        if(response.videos.length == data.options.perPage)
                        {
                            console.log('show');
                            // show load more
                            $manager.more('show');
                        }
                        else
                        {
                            $manager.more('hide');
                            console.log('hide');
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

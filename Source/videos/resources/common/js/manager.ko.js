/**
 * Knockout Manager
 */
function KoManager() {

    var $this = this;

    // gateways

    $this.gateways = ko.observableArray();


    Dukt.postActionRequest('videos/getGatewaysWithSections', {}, $.proxy(function(response, textStatus)
    {
        // console.log('gatewaysWithSections', response);

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


    ko.bindingHandlers.updateVideos = {
        update: function(element) {
            var videosContainer = $('.videos-main .dk-middle', $manager.$container);
            var noVideos = $('.dk-no-videos', videosContainer);

            Dukt.Utils.positionCenter(noVideos, videosContainer);

            // run it a bit later just in case
            setTimeout(function() {
                Dukt.Utils.positionCenter(noVideos, videosContainer);
            }, 1);
        }
    };

    $this.videos = ko.observable();
    $this.selectedGateway = ko.observable();
    $this.selectedSectionItem = ko.observable();
    $this.selectedVideoIndex = ko.observable();

    $this.goToSectionItem = function(item)
    {
        $manager.spinner('on');

        $this.resetVideosRequest();

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


    // reset videos request

    $this.resetVideosRequest = function()
    {
        $this.lastRequestData = {};

        $this.pagination = {
            page:1,
            nextPage: null,
            nextPageToken: null
        };
    }


    // get videos

    $this.getVideos = function(data)
    {
        var isNewRequest = true;

        // console.log('init data', data);
        // console.log('last request data', $this.lastRequestData);

        if(typeof data == 'undefined')
        {
            // no data ? try to use last request for more
            isNewRequest = false;
            data = $this.lastRequestData;
        }
        else
        {
            // data ? let's remember about it
            $this.lastRequestData = data;
        }

        if(typeof data.options == 'undefined')
        {
            data.options = {};
        }

        if($this.pagination.nextPage != null)
        {
            data.options.nextPage = $this.pagination.nextPage;
        }

        if($this.pagination.nextPageToken != null)
        {
            data.options.nextPageToken = $this.pagination.nextPageToken;
        }

        // console.log('used data', data);

        $manager.spinner('on');

        $manager.getVideosErrorReset();

        $manager.more('hide');


        // perform request

        Dukt.postActionRequest('videos/getVideosFromUrl', data, $.proxy(function(response, textStatus)
        {
            $manager.spinner('off');

            if (response && textStatus == 'success' && !response.hasOwnProperty('error') && typeof response.videos != 'undefined')
            {
                // pagination

                if (response.hasOwnProperty('nextPage'))
                {
                    $this.pagination.nextPage = response.nextPage;
                }

                if (response.hasOwnProperty('nextPageToken'))
                {
                    $this.pagination.nextPageToken = response.nextPageToken;
                }

                if (response.hasOwnProperty('more') && response.more == true)
                {
                    $manager.more('show');
                }

                // handle response

                $('.dk-videos', $manager.$container).removeClass('hidden');

                if (isNewRequest)
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


                // no videos

                // console.log('manager container', $manager.$container);

                if($this.videos().length == 0)
                {
                    $('.dk-no-videos', $manager.$container).removeClass('hidden');
                    
                    $manager.more('hide');
                }
                else
                {
                    $('.dk-no-videos', $manager.$container).addClass('hidden');
                }


                var videosContainer = $('.videos-main .dk-middle', $manager.$container);
                var noVideos = $('.dk-no-videos', videosContainer);

                Dukt.Utils.positionCenter(noVideos, videosContainer);
            }
            else
            {
                // error

                if(!response || typeof response.videos == 'undefined')
                {
                    error = "Couldn't get videos.";
                }
                else if(response.hasOwnProperty('error'))
                {
                    error = response.error;
                }


                // display error

                if (isNewRequest)
                {
                    // inline error
                    $manager.getVideosError(error);
                }
                else
                {
                    // hide videos
                    $('.dk-videos', $manager.$container).addClass('hidden');

                    // error
                    $manager.getVideosError(error, true);
                }
            }
        }, this));
    };

    $this.more = function()
    {
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

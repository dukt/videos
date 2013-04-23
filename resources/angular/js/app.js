
/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://dukt.net/addons/craft/videos/license
 * @link      http://dukt.net/addons/craft/videos/
 */

'use strict';

// App module

var videos = angular.module('videos', []).

    // prevent scroll to top of page

    value('$anchorScroll', angular.noop).


    // config routes

    config(['$routeProvider', function($routeProvider, $locationProvider) {

        var emptyPartial = Craft.getResourceUrl('videos/angular/partials/empty.html');

        $routeProvider.
            when('/', {templateUrl: emptyPartial,   controller: ServicesListCtrl}).
            when('/:serviceKey', {templateUrl: emptyPartial, controller: ServicesListCtrl}).
            when('/:serviceKey/:methodName', {templateUrl: emptyPartial, controller: ServicesListCtrl}).
            when('/:serviceKey/:methodName/:playlistId', {templateUrl: emptyPartial, controller: ServicesListCtrl}).
            otherwise({redirectTo: '/'});
    }]);


// Angular Service

videos.factory("VideosService",function($rootScope, $http){
        var ret = {
            searchQuery: "",
            currentService: false,
            currentMethod: false,
            services: false,
            loader: {
                on: function() {
                    console.log('loader on');
                    $('.dkv-main .dkv-toolbar .dkv-spinner').removeClass('dkv-hidden');
                },
                off: function() {
                    console.log('loader off');
                    $('.dkv-main .dkv-toolbar .dkv-spinner').addClass('dkv-hidden');
                }
            },
            videoMore: {
                on: function() {
                    $('.dkv-video-more').css('display', 'block');
                },
                off: function() {
                    $('.dkv-video-more').css('display', 'none');
                }
            },
            refreshServicesTokens: function() {
                console.log('refreshing tokens');
                $http({method: 'POST', url: DkvEndpoint.url('refreshServicesTokens')}).
                        success(function(data, status, headers, config) {
                            console.log(data);
                        }).
                        error(function(data, status, headers, config) {
                          console.log('error', data, status, headers, config);
                        });
            }
        };

        return ret;
});

// Craft Videos App

videos.run(function($rootScope, $http, $location, $q, $routeParams, VideosService) {

    console.log('run', videos);

    // --------------------------------------------------------------------

    // initialize videos



    // --------------------------------------------------------------------

    VideosService.refreshServicesTokens();

    // get services

    $http({method: 'POST', url: DkvEndpoint.url('services')}).
        success(function(data, status, headers, config) {

            console.log('services success');

            $('.dkv-modal').removeClass('dkv-loading');

            $rootScope.services = data;


            // no service ? display an error

            console.log('number of services detected : ', $rootScope.services.length);

            if($rootScope.services.length == 0)
            {
                $rootScope.errorMessage = "Set up a video service";

                $('.dkv-getStarted').css('display', 'block');
                $('.dkv-modal').css('display', 'none');

                return false;
            }

            // refresh services token periodically

            setInterval(function() {
                //
                console.log('check and refresh services tokens');

                VideosService.refreshServicesTokens();
            }, 180000);


            // get playlists for this service

            $.each(data, function(k, el) {
                $http({method: 'POST', url: DkvEndpoint.url('playlists', {service:el.name})}).
                    success(function(data2, status2, headers2, config2) {
                        $rootScope.services[k].playlists = data2;
                    }).
                    error(function(data2, status2, headers2, config2) {
                        console.log('error', data2, status2, headers2, config2);
                    });
            });


            // set the first service as current

            $.each($rootScope.services, function (k, el) {

                if($routeParams.serviceKey == k || typeof($routeParams.serviceKey) == "undefined")
                {
                    // define element as current service

                    $rootScope.currentService = el;


                    // break the each loop

                    return false;
                }

            });

            console.log('currentService', $rootScope.currentService);
            console.log('$routeParams.serviceKey', $routeParams.serviceKey);

            // update selected field

            $rootScope.serviceKey = $rootScope.currentService.name;

            // redirect if needed

            if($location.path() == "/" || $location.path() == "")
            {
                console.log('redirect', $rootScope.serviceKey+"/uploads");

                $location.path($rootScope.serviceKey+"/uploads");
            }

        }).
        error(function(data, status, headers, config) {
          console.log('error', data, status, headers, config);
        });

    // --------------------------------------------------------------------

    // service change

    $rootScope.serviceChange = function()
    {
        console.log('serviceChange', this.serviceKey);

        // define current service

        $rootScope.currentService = $rootScope.services[this.serviceKey];

        var methodName = $routeParams.methodName;

        if(methodName == "playlist")
        {
            methodName = "favorites";
        }

        // re-run rearch

        $rootScope.search();

        // change route

        $location.path($('.dkv-sidebar select').val()+"/"+methodName);


    }

    // --------------------------------------------------------------------

    // service change

    $rootScope.getClass = function(path)
    {
        var pat = new RegExp("\/.*\/"+path);
        var match = $location.path().match(pat);

        if (match)
        {
            return "active";
        }
        else
        {
            return "";
        }
    };

    // --------------------------------------------------------------------

    // search field

    var searchTimer = false;

    $rootScope.search = function()
    {
        // define searchQuery, VideosService helps for persistance

        if(typeof(this.searchQuery) != "undefined")
        {
            VideosService.searchQuery = this.searchQuery;
        }

        var searchQuery = VideosService.searchQuery;

        // redirect to search

        var pat = new RegExp("\/.*\/"+"search");
        var match = $location.path().match(pat);

        if (match)
        {

        }
        else
        {
            $location.path($routeParams.serviceKey+"/search");
        }

        // time out before search

        if(searchQuery != "")
        {
          clearTimeout(searchTimer);

          searchTimer = setTimeout(function() {

                // perfom search request

                console.log('search', $routeParams.serviceKey, searchQuery);

                searchRequest($routeParams, searchQuery, VideosService);

            }, 500);
        }
    }

    function searchRequest($routeParams, searchQuery, VideosService)
    {
        var opts = {
          method:'search',
          service:$routeParams.serviceKey,
          searchQuery: searchQuery,
          page: 1,
          perPage: Dukt_videos.pagination_per_page
        };

        VideosService.loader.on();

        $http({method: 'POST', url: DkvEndpoint.url('search', opts), cache: true}).
          success(function(data, status, headers, config)
          {
                $rootScope.videos = data;

                dkvideos.scroll.init();

                if(data.length < Dukt_videos.pagination_per_page)
                {
                    VideosService.videoMore.off();
                }
                else
                {
                    VideosService.videoMore.on();
                }

                VideosService.loader.off();
          }).
          error(function(data, status, headers, config)
          {
            console.log('error', data, status, headers, config);
          });
    }


    // press enter triggers search

    $(document).on('keypress', '.dkv-search input', function(e) {
        if(e.keyCode == "13") {
            $rootScope.search();
        }
    });
});



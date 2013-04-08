'use strict';

/* App Module */


var duktvideos = angular.module('duktvideos', []).

  config(['$routeProvider', function($routeProvider, $locationProvider) {

  $routeProvider.
      when('/', {templateUrl: Craft.getResourceUrl('duktvideos/angular/partials/details.html'),   controller: ServicesListCtrl}).
      when('/:serviceKey', {templateUrl: Craft.getResourceUrl('duktvideos/angular/partials/details.html'), controller: ServicesListCtrl}).
      when('/:serviceKey/:methodName', {templateUrl: Craft.getResourceUrl('duktvideos/angular/partials/details.html'), controller: ServicesListCtrl}).
      when('/:serviceKey/:methodName/:playlistId', {templateUrl: Craft.getResourceUrl('duktvideos/angular/partials/details.html'), controller: ServicesListCtrl}).
      otherwise({redirectTo: '/'});
}]);


// Dukt Videos Service

duktvideos.factory("DuktVideosService",function($rootScope, $http){
        var ret = {
            searchQuery: "",
            currentService: false,
            currentMethod: false,
            services: false,
            loader: {
                on: function() {
                    $('.dv-main .toolbar .spinner').removeClass('hidden');
                },
                off: function() {
                    $('.dv-main .toolbar .spinner').addClass('hidden');
                }
            },
            videoMore: {
                on: function() {
                    $('.dv-video-more').css('display', 'block');
                },
                off: function() {
                    $('.dv-video-more').css('display', 'none');
                }
            },
            refreshServicesTokens: function() {
                $http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/refreshServicesTokens')}).
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

// Dukt Videos App

duktvideos.run(function($rootScope, $http, $location, $q, $routeParams, DuktVideosService) {

    console.log('run', videos);

    // --------------------------------------------------------------------
    
    // initialize videos
    
    

    // --------------------------------------------------------------------

    // get services

    $http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/services')}).
        success(function(data, status, headers, config) {

            console.log('services success');

            $('.dv-box').removeClass('dv-loading');

            $rootScope.services = data;


            // no service ? display an error

            console.log('number of services detected : ', $rootScope.services.length);

            if($rootScope.services.length == 0)
            {
                $rootScope.errorMessage = "Set up a video service";

                $('.dv-getStarted').css('display', 'block');
                $('.dv-box').css('display', 'none');

                return false;
            }

            // refresh services token periodically
            
            setInterval(function() {
                // 
                console.log('check and refresh services tokens');

                DuktVideosService.refreshServicesTokens();
            }, 180000);
            

            // get playlists for this service

            $.each(data, function(k, el) {
                $http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/playlists', {service:el.name})}).
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
        $rootScope.currentService = $rootScope.services[this.serviceKey];
        $location.path($('.dv-sidebar select').val()+"/"+$routeParams.methodName);
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
        // define searchQuery, DuktVideosService helps for persistance

        if(typeof(this.searchQuery) != "undefined")
        {
            DuktVideosService.searchQuery = this.searchQuery;
        }

        var searchQuery = DuktVideosService.searchQuery;

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

                searchRequest($routeParams, searchQuery, DuktVideosService);

            }, 500);
        }
    }

    function searchRequest($routeParams, searchQuery, DuktVideosService)
    {
        var opts = {
          method:'search',
          service:$routeParams.serviceKey,
          searchQuery: searchQuery,
          page: 1,
          perPage: Dukt_videos.pagination_per_page
        };

        DuktVideosService.loader.on();

        $http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/search', opts), cache: true}).
          success(function(data, status, headers, config)
          {
                $rootScope.videos = data;

                if(data.length < Dukt_videos.pagination_per_page)
                {
                    DuktVideosService.videoMore.off();
                }
                else
                {
                    DuktVideosService.videoMore.on();
                }

                DuktVideosService.loader.off();
          }).
          error(function(data, status, headers, config)
          {
            console.log('error', data, status, headers, config);
          });
    }

    // press enter triggers search

    $(document).on('keypress', '.search input', function(e) {
        if(e.keyCode == "13") {
            $rootScope.search();
        }
    });
});



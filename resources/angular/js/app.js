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

duktvideos.factory("DuktVideosService",function($rootScope){
        return { searchQuery: "", currentService: false, currentMethod: false, services: false};
});

// Dukt Videos App

duktvideos.run(function($rootScope, $http, $location, $q, DuktVideosService) {



    // --------------------------------------------------------------------
    
    // get services

    $http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', {method:'services'})}).
        success(function(data, status, headers, config) {

            $rootScope.services = data;

            $.each(data, function(k, el) {
                $rootScope.serviceKey = el.name;
                return false;
            });

            if($location.path() == "/" || $location.path() == "")
            {
                $location.path($rootScope.serviceKey+"/myvideos");   
            }

            $('.search input').keypress(function(e) {
                if(e.keyCode == "13") {
                    // enter
                    console.log('enter', DuktVideosService);
                    search();
                }
            });
        }).
        error(function(data, status, headers, config) {
          console.log('error', data, status, headers, config);
        });
    // --------------------------------------------------------------------

    // // default current service

    // if(typeof($rootScope.services) != "undefined")
    // {
    //     $rootScope.currentService = $rootScope.services[$rootScope.serviceKey]; 
    // }

    // --------------------------------------------------------------------

    $rootScope.serviceChange = function()
    {
        $location.path($('.dv-sidebar select').val()+"/"+$rootScope.methodName);
    }

    // --------------------------------------------------------------------

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

    $rootScope.search = function(force)
    {
        if(typeof(this.searchQuery) != "undefined")
        {
            DuktVideosService.searchQuery = this.searchQuery;
        }

        search();
    }

    // --------------------------------------------------------------------

    // search function

    function search(force)
    {
        var searchQuery = DuktVideosService.searchQuery;

        var pat = new RegExp("\/.*\/"+"search");
        var match = $location.path().match(pat);

        if (match)
        {

        }
        else
        {
          $location.path($rootScope.serviceKey+"/search");
        }

        if(typeof(force) == 'undefined')
        {
            force = false;
        }

        if(searchQuery != "" || force == true)
        {
          clearTimeout(searchTimer);

          searchTimer = setTimeout(function() {

            console.log('search', DuktVideosService);

            var opts = {
              method:'search',
              service:DuktVideosService.currentService,
              searchQuery: searchQuery,
              page: 1,
              perPage: Dukt_videos.pagination_per_page
            };

            $('.dv-main .toolbar .spinner').removeClass('hidden');

            $http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', opts), cache: true}).
              success(function(data, status, headers, config)
              {
                $rootScope.videos = data;
                if($rootScope.videos.length == 0)
                {
                  //$('.dv-empty').css('display', 'block'); 
                }
                if(data.length < Dukt_videos.pagination_per_page)
                {
                  $('.dv-video-more').css('display', 'none');
                }
                else
                {

                  $('.dv-video-more').css('display', 'block');
                }
                $('.dv-main .toolbar .spinner').addClass('hidden');

              }).
              error(function(data, status, headers, config)
              {
                console.log('error', data, status, headers, config);
              });
          }, 500);

        }
    }

    // --------------------------------------------------------------------
});
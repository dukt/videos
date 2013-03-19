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


duktvideos.run(function($rootScope, $http, $location, $q) {

    $http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', {method:'services'})}).
        success(function(data, status, headers, config) {

            $rootScope.services = data;

            $.each(data, function(k, el) {
                $rootScope.serviceKey = k;
                return false;
            });

            if($location.path() == "/" || $location.path() == "")
            {
                $location.path($rootScope.serviceKey+"/search");   
            }

        }).
        error(function(data, status, headers, config) {
          console.log('error', data, status, headers, config);
        });

});



duktvideos.factory("DuktVideosService",function($rootScope){
        return { searchQuery: "", currentService: false, services: false};
});
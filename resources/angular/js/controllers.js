var once = false;

function ServicesListCtrl($scope, $routeParams, $http, $rootScope, $location, $route, DuktVideosService)
{

	if(!once)
	{
		$rootScope.$on('$routeChangeSuccess', function(scope, newRoute){
		    
		    

			$rootScope.serviceKey = $scope.serviceKey = $routeParams.serviceKey;
			$rootScope.methodName = $routeParams.methodName; 

			DuktVideosService.currentService = $rootScope.serviceKey;
			
		});
		once = true;
	}

	$scope.playlistId = $routeParams.playlistId;


	// default current service

	if(typeof($rootScope.services) != "undefined")
	{
		$scope.currentService = $rootScope.services[$rootScope.serviceKey];	
	}

	// videos equals s$rootScope.{service_key}_videos
	//$rootScope.videos = eval("$rootScope."+$rootScope.serviceKey+"_videos");


	// --------------------------------------------------------------------

	if($rootScope.serviceKey && $rootScope.methodName)
	{
		if($rootScope.methodName == "search")
		{
			$rootScope.search(true);
			return; // otherwise it loads the search page after having searched
		}

		var opts = {
			method:$rootScope.methodName,
			service:$rootScope.serviceKey,
			page:1,
			perPage:Dukt_videos.pagination_per_page
			//playlistId:$scope.playlistId
		};

		$('.dv-main .toolbar .spinner').removeClass('hidden');

		$http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', opts), cache: false}).
			success(function(data, status, headers, config)
			{
				$rootScope.videos = data;

				if (data.length < Dukt_videos.pagination_per_page) {
					$('.dv-video-more').css('display', 'none');
				} else {
					$('.dv-video-more').css('display', 'block');
				}

				$('.dv-main .toolbar .spinner').addClass('hidden');

			}).
			error(function(data, status, headers, config)
			{
				console.log('error', data, status, headers, config);
			});
	}


	// --------------------------------------------------------------------


	$scope.play = function(video)
	{
		$('#player').css('visibility', 'visible');
		$('#player-overlay').css('visibility', 'visible');
		
		$scope.selected = video;

		//loadVideo(video.id);

		$http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', {method:'embed', videoUrl:video.url, service: $scope.serviceKey})}).
        success(function(data, status, headers, config) {
        	console.log('--success', $.parseJSON(data));
        	$('#player #videoDiv').html($.parseJSON(data));
        }).
        error(function(data, status, headers, config) {
          console.log('--error', data, status, headers, config);
        });


		console.log('play video', video.id);
	}

	// --------------------------------------------------------------------

	$scope.isSelected = function(video) {
	    return $scope.selected === video;
	}

	// --------------------------------------------------------------------
	
	$scope.moreVideos = function()
	{
		var offset = $rootScope.videos.length;
		console.log('offset', offset);
		$('.dv-video-more').css('display', 'none');

		perPage = Dukt_videos.pagination_per_page;
		page = Math.floor(offset / perPage) + 1;

		console.log('page', page);
		console.log('perPage', perPage);
		console.log('--', DuktVideosService.currentService);
		var opts = {
			method:$rootScope.methodName,
			service:DuktVideosService.currentService,
			searchQuery: DuktVideosService.searchQuery,
			page:page,
			perPage:perPage
		};

		$http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', opts), cache: true}).
			success(function(data, status, headers, config)
			{
				console.log('xxxxsuccess', data);

				console.log('-----success', data.length);
				$.merge($rootScope.videos, data);

				if($rootScope.videos.length == 0)
				{
					// $('.dv-empty').css('display', 'block');	
				}

				console.log('success', data.length);
				if(data.length < Dukt_videos.pagination_per_page)
				{
					console.log('display none');
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
	}
}
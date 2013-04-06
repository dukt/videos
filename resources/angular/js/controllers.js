var once = false;

function ServicesListCtrl($scope, $routeParams, $http, $rootScope, $location, $route, DuktVideosService)
{

	if(!once)
	{
		$rootScope.$on('$routeChangeSuccess', function(scope, newRoute){
		    
			$rootScope.serviceKey = $scope.serviceKey = $routeParams.serviceKey;
			$rootScope.methodName = $routeParams.methodName; 

			console.log($rootScope.serviceKey);
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
			//playlistId:$scope.playlistId
		};

		$('.dv-main .toolbar .spinner').removeClass('hidden');

		$http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', opts), cache: true}).
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

	$rootScope.serviceChange = function()
	{
		$location.path($('.dv-sidebar select').val()+"/"+$rootScope.methodName);
	}

	// --------------------------------------------------------------------

	$scope.getClass = function(path)
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
	
	//$scope.searchQuery = DuktVideosService.searchQuery;
	//$scope.searchQuery = DuktVideosService.searchQuery;
	var searchTimer = false;

	$rootScope.search = function(force)
	{
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

		if($scope.searchQuery != "" || force == true)
		{
			clearTimeout(searchTimer);

			searchTimer = setTimeout(function() {
				
				var opts = {
					method:'search',
					service:$rootScope.serviceKey,
					searchQuery: $scope.searchQuery
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


	$scope.play = function(video)
	{
		$('#player').css('visibility', 'visible');
		$('#player-overlay').css('visibility', 'visible');
		
		$scope.selected = video;

		loadVideo(video.id);

		console.log('play video', video.id);
	}

	$scope.isSelected = function(video) {
	    return $scope.selected === video;
	}

	$scope.moreVideos = function()
	{
		var offset = $rootScope.videos.length;

		$('.dv-video-more').css('display', 'none');

		var opts = {
			method:$rootScope.methodName,
			service:$rootScope.serviceKey,
			searchQuery: DuktVideosService.searchQuery,
			offset: offset
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
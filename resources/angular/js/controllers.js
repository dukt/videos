function ServicesListCtrl($scope, $routeParams, $http, $rootScope, $location, DuktVideosService) {

	console.log('!!controller');
	console.log('!!rootScope.testService');


	console.log('!!--------------------------------');

	// if($('.dv-player-placeholder').length > 0)
	// {
	// 	setTimeout(function() { $('#player').css('top', $('.dv-player-placeholder').position().top);	}, 1000);
	// }
	

	$scope.serviceKey = $routeParams.serviceKey;
	$scope.methodName = $routeParams.methodName;
	$scope.playlistId = $routeParams.playlistId;
	console.log('$scope.playlistId', $scope.playlistId);

	if(typeof($rootScope.services) != "undefined")
	{
		$scope.currentService = $rootScope.services[$scope.serviceKey];	
	}

	//

	//console.log('current', $rootScope.services);
	//DuktVideosService.currentService = DuktVideosService.services[$scope.serviceKey];

	console.log("-----", $rootScope.services);

	DuktVideosService.services = "yeah";

	$scope.videos = eval("$rootScope."+$scope.serviceKey+"_videos");

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

	if($scope.serviceKey && $scope.methodName)
	{
		setTimeout(function() {
			$scope.search(true);	
		}, 100);
			
		// $scope.$watch('searchQuery', function(value) {
		// 	console.log('xxx', value);
		// });


		var opts = {
			method:$scope.methodName,
			service:$scope.serviceKey,
			playlistId:$scope.playlistId
		};

		$('.dv-main .toolbar .spinner').removeClass('hidden');
		//$('.dv-empty').css('display', 'none');	



		$http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', opts), cache: true}).
			success(function(data, status, headers, config)
			{
				console.log('success', data);
				$scope.videos = data;
				if($scope.videos.length == 0)
				{
					//$('.dv-empty').css('display', 'block');	
				}

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

	// --------------------------------------------------------------------

	$scope.serviceChange = function()
	{
		//$scope.service
		$location.path($scope.serviceKey+"/"+$scope.methodName);
		console.log($scope.methodName);
		$scope.getClass($scope.methodName);
	}

	// --------------------------------------------------------------------
	
	$scope.searchQuery = DuktVideosService.searchQuery;
	//$scope.searchQuery = DuktVideosService.searchQuery;
	var searchTimer = false;

	$scope.search = function(force)
	{
		if(typeof(force) == 'undefined')
		{
			force = false;
		}

		console.log('launch search');
		if(DuktVideosService.searchQuery != $scope.searchQuery || force == true)
		{
			DuktVideosService.searchQuery = $scope.searchQuery;

			clearTimeout(searchTimer);

			searchTimer = setTimeout(function() {
				console.log(DuktVideosService.searchQuery);
				
				var opts = {
					method:$scope.methodName,
					service:$scope.serviceKey,
					searchQuery: DuktVideosService.searchQuery
				};

				$('.dv-main .toolbar .spinner').removeClass('hidden');
				//$('.dv-empty').css('display', 'none');	

				// $http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', opts), cache: true}).
				// 	success(function(data, status, headers, config)
				// 	{
				// 		console.log('hello !', DuktVideosService.searchQuery);
				// 		console.log('success', data);
				// 		$scope.videos = data;
				// 		if($scope.videos.length == 0)
				// 		{
				// 			//$('.dv-empty').css('display', 'block');	
				// 		}
				// 		if(data.length < Dukt_videos.pagination_per_page)
				// 		{
				// 			console.log('display none');
				// 			$('.dv-video-more').css('display', 'none');
				// 		}
				// 		else
				// 		{

				// 			$('.dv-video-more').css('display', 'block');
				// 		}
				// 		$('.dv-main .toolbar .spinner').addClass('hidden');

				// 	}).
				// 	error(function(data, status, headers, config)
				// 	{
				// 		console.log('error', data, status, headers, config);
				// 	});
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
		var offset = $scope.videos.length;

		$('.dv-video-more').css('display', 'none');

		var opts = {
			method:$scope.methodName,
			service:$scope.serviceKey,
			searchQuery: DuktVideosService.searchQuery,
			offset: offset
		};

		$http({method: 'POST', url: Craft.getActionUrl('duktvideos/ajax/angular', opts), cache: true}).
			success(function(data, status, headers, config)
			{
				console.log('xxxxsuccess', data);

				console.log('-----success', data.length);
				$.merge($scope.videos, data);

				if($scope.videos.length == 0)
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
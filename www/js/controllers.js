angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
//RD, BL, YL, OR, GR, or SV

.controller('MetroLinesCtrl', function($scope) {
  $scope.metroLines = [
    { title: 'Red', id: 'RD' },
    { title: 'Yellow', id: 'YL' },
    { title: 'Green', id: 'GR' },
    { title: 'Blue', id: 'BL' },
    { title: 'Orange', id: 'OR' },
    { title: 'Silver', id: 'SV' }
  ];
})

.controller('StationsListCtrl', function($scope, $http, $stateParams) {
	$scope.metroLine = $stateParams.lineName;
	var config = {
				method: 'GET',
				data: "{body}",
				cache: false,
				params : { 
							'LineCode':$stateParams.lineID
						},
				url: 'https://api.wmata.com/Rail.svc/json/jStations',
				headers: {
					'api_key':'ssss'
				}
			}

	$http(config).then(
		function(response){
			$scope.stations = response.data.Stations;
			console.log( response ) ;
			console.log( 'SUCCES');
			return;
		}, 
		function(response){
			console.log( 'FAIL');
		}
	);
			
});

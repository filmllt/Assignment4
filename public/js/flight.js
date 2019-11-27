var app = angular.module('flightApp', []);

    app.controller('searchCtrl', function ($scope, $http, $window) {

  $scope.submit = function (departing,returning,adults,cabin) {
	$window.location.href = "result.html";
	// console.log(departing+' '+returning+' '+adults+' '+cabin);
  };
	  
	//   $scope.listOption = [
	// 	{ name: 'Suvarnabumi (BKK)',idPlace:'BKK' },
	// 	{ name: 'Donmueng (DMK)',idPlace:'DMK' }
	//   ];

	  $scope.change = function(city,choice){
		  console.log(choice);
		if(choice === 'departing'){
			if(city === 'Bangkok'||city === 'bangkok'){
				$scope.departing  = [
					{ name: 'Suvarnabumi (BKK)',idPlace:'BKK' },
					{ name: 'Donmueng (DMK)',idPlace:'DMK' }
				  ];
			}else if(city === 'Paris'||city === 'paris'){
				$scope.departing = [
					{name: 'Brisbane Airport',idPlace:'BbA'},
					{ name: 'Sheremetyevo',idPlace:'She' }
				];
			}else{
				$scope.departing = null;
			}
		}else if(choice === 'returning'){
			if(city === 'Bangkok'||city === 'bangkok'){
				$scope.returning  = [
					{ name: 'Suvarnabumi (BKK)',idPlace:'BKK' },
					{ name: 'Donmueng (DMK)',idPlace:'DMK' }
				  ];
			}else if(city === 'Paris'||city === 'paris'){
				$scope.returning = [
					{name: 'Brisbane Airport',idPlace:'BbA'},
					{ name: 'Sheremetyevo',idPlace:'She' }
				];
			}else{
				$scope.returning = null;
			}

		}
		
	  };
	  
    });

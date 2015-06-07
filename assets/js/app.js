'use strict';

/* App Module */

var URL = 'https://sleepy-springs-5486.herokuapp.com/mail/send';

var apartmentApp = angular.module('app',[]);


apartmentApp.controller('EmailController', ['$scope','$http', function($scope, $http) {
  
  $scope.alerts=[];
        $scope.email= {};
    

        $scope.sendEmail = function(){
            
		$scope.email ={
            
            'name' : $scope.name,
			'emailFrom' : $scope.emailFrom,
            'emailTo' : 'progulj@gmail.com',
            'message' : $scope.message,
            'subject' : $scope.subject
		}
                  
		$http.post(URL, $scope.email).
			success(function(data, status, headers, config) {
            
            $scope.email= {};
            
            $scope.name = '';
			$scope.emailFrom= '';
            $scope.message= '';
            $scope.subject= '';
				
			$scope.alerts.push({
            type: 'succes',
            msg: " Email sended!"
        });

  }).
  error(function(data, status, headers, config) {
   
                    
         $scope.alerts.push({
             type: 'danger',
             msg: " Email not sent!"
            });
        });
        };
}]);

 


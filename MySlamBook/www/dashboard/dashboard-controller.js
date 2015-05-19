'use strict';

angular.module('MyApp.controllers').controller('DashboardCtrl', 
  function($scope, $state, $firebase) {
 var ref = new Firebase("https://collegetest.firebaseio.com/cityoffer");
        $scope.messages = $firebase(ref);
           $scope.addMessage = function(e) {
           $scope.sendMsg = function() {
			    var today = new Date();
			    var dd = today.getDate();
			    var mm = today.getMonth()+1; //January is 0!

			    var yyyy = today.getFullYear();
			    if(dd<10){
			        dd='0'+dd
			    } 
			    if(mm<10){
			        mm='0'+mm
			    } 
			    var today = dd+'/'+mm+'/'+yyyy;

                  $scope.messages.$add({Name: $scope.name1, Mobile: $scope.mobile, Mail: $scope.mail, Hobby: $scope.hobby, Fear: $scope.fear,
                  Food: $scope.food, Crush: $scope.crush, Friend: $scope.friend, Invisible: $scope.invisible, Impthing: $scope.impthing,
                  Like: $scope.like, date: today});
                  $scope.name1 = "";
                  $scope.mobile = "";
                  $scope.mail = "";
                  $scope.hobby = "";
                  $scope.fear = "";
                  $scope.food = "";
                  $scope.crush = "";
                  $scope.friend = "";
                  $scope.invisible = "";
                  $scope.impthing = "";
                  $scope.like = "";
                }
        }
        $scope.clear = function(){
          $scope.name = "";
        }
  console.log('HomeTabCtrl');
  });

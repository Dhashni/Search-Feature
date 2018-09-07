/**
 * Created by soheil on 9/5/14.
 */
var app = angular.module('myApp' ,[]);

app.controller("MainCtrl", function($scope){

    $scope.people = [
        {
            name:'Dhashni'
        },
        {
            name:'Thiagarajan'
        },
        {
            name:'Vigna'
        }

    ]



});
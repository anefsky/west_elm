var app = angular.module('myApp', []);

var pageController = app.controller('pageController', function($scope) {

    $scope.showConfirm = false;

    $scope.doShowConfirm = function(doShow) {
        $scope.showConfirm = doShow;
    }

});

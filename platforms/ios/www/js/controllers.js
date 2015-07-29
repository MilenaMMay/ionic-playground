angular.module('starter.controllers', [])


.controller('SearchCtrl', function($scope) {
  $scope.search = function() {
    $state.go('list');
  };
});

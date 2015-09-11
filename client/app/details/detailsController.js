var details = angular.module('myApp.details', []);

details.controller('detailsController', ['$scope', 'Details', 'Map', function ($scope, Details, Map){

  $scope.picturesArr = [
    'assets/images/default-japan-slideshow-1.jpeg',
    'assets/images/default-japan-slideshow-2.jpeg',
    'assets/images/default-japan-slideshow-3.jpeg',
    'assets/images/default-japan-slideshow-4.jpeg',
    'assets/images/default-japan-slideshow-5.jpeg',
    'assets/images/default-japan-slideshow-6.jpeg',
    'assets/images/default-japan-slideshow-7.jpeg',
    'assets/images/default-japan-slideshow-8.jpeg',
    'assets/images/default-japan-slideshow-9.jpeg'
  ];

  $scope.currentNeighborhood = Details.currentNeighborhood;

  $scope.displayMarkers = function(place) {
    var coordinates = {
      latitude: place[1][0].geometry.location.lat,
      longitude: place[1][0].geometry.location.lng
    }
    Map.dropMarker(coordinates, place[1].name)
  }


  //----------------------------------------------------------------------------------
  //to expand and collapse icons section

  $scope.isCollapsed = true;
  $scope.moreLess = '+ More';
  $scope.expandCollapse = function() {
    if ($scope.moreLess === '+ More') {
      $scope.moreLess = '- Less';
    } else if ($scope.moreLess === '- Less') {
      $scope.moreLess = '+ More';
    }
    $scope.isCollapsed = !$scope.isCollapsed;
  };

  //----------------------------------------------------------------------------------




}]);

mapMod // = angular.module('myApp.mapServices',[])
.factory('Map', function () {

  var map;
  var mapOptions = {
    center: {
        lat: 0,
        lng: 0
      },
    zoom: 4
  };

  var marker;
  var circle;

  //----------------------------------------------------------------------------------
  //Initialize the map with a coordinates object
  var initialize = function (coordinates) {
    coordinates = coordinates ||  {
      latitude: 38.5,
      longitude: -96
    };

    mapOptions.center.lat = coordinates.latitude;
    mapOptions.center.lng = coordinates.longitude;

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    console.log("map initialized")
  }


  //----------------------------------------------------------------------------------
  //Pan and focus on the coordinate set of interest
  var panAndFocus = function (coordinates, zoom) {
    var latLng = { lat: coordinates.latitude, lng: coordinates.longitude };
    zoom = zoom || 11;    //11 corresponds to a radius of 20 kms

    map.panTo(latLng);
    map.setZoom(zoom);
  }

  //----------------------------------------------------------------------------------
  //Drop a marker
  var dropMarker = function (coordinates, title, tooltip) {
    var latLng = {lat: coordinates.latitude, lng: coordinates.longitude};

    // if(marker) { marker.setMap(null); }
    marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: title
    });

    //remove
    // console.log(tooltip)

    // if(tooltip) {
    //   var infowindow = new google.maps.InfoWindow({
    //     content: tooltip
    //   });
    //   marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    //   });
      // marker.addListener('click', function() {
      //   infowindow.close(map, marker);
      // });
    // }
  }

  //----------------------------------------------------------------------------------
  //Drop a marker with LABEL
  var dropMarkerWithLabel = function (coordinates, title) {
    var latLng = {lat: coordinates.latitude, lng: coordinates.longitude};

    var markerLabel = new MarkerWithLabel({
      position: latLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 0, //tamaño 0
      },
      map: map,
      draggable: true,
      labelAnchor: new google.maps.Point(10, 10),
      labelClass: "popper", // the CSS class for the label
    });
  }

  //----------------------------------------------------------------------------------
  //Draw a circle with a given radius
  var drawCircle = function (coordinates, radius, color) {
    var radius = radius || 4000;
    var latLng = {lat: coordinates.latitude, lng: coordinates.longitude};

    // console.log('radius:', radius);
    // console.log('latLng:', latLng);

    // if(circle) { circle.setMap(null); }
    circle = new google.maps.Circle({
      strokeColor: '#DDDDDD',
      strokeOpacity: .6,
      strokeWeight: 0.5,
      fillColor: '#FF2603',
      fillOpacity: 0.2,
      map: map,
      center: latLng,
      radius: radius
    });
  }

  return {
    initialize: initialize,
    panAndFocus: panAndFocus,
    dropMarker: dropMarker,
    drawCircle: drawCircle,
    dropMarkerWithLabel: dropMarkerWithLabel
  };

});

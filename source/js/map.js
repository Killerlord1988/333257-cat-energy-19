var tabletWidth = 768;
var desktopWidth = 1300;
var smallPin = {width: 62, height: 53};
var bigPin = {width: 124, height: 106};

function initMap() {
  var viewport = document.documentElement.clientWidth || window.innerWidth;
  var mapCenter = viewport < desktopWidth ? {lat: 59.938882, lng: 30.32323} : {lat: 59.939065, lng: 30.319335};
  var pinSize = viewport < tabletWidth ? smallPin : bigPin;

  var mapOptions = {
    center: mapCenter,
    zoom: 16
  }

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var image = {
    url: "img/map-pin.png",
    scaledSize: pinSize
  };

  var position = {lat: 59.938918,  lng: 30.323167};

  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "CAT ENERGY",
    icon: image
  });
}


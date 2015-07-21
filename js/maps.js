var map;
var arrMarkers = [];
var arrInfoWindows = [];

function initialize() {
    var mapOptions = {
        zoom: 14,
        scrollwheel: false,
        center: new google.maps.LatLng(49.839996, 24.036611),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var latlngbounds = new google.maps.LatLngBounds();
    $.getJSON("../json/points.json", {}, function(data) {
        $.each(data.places, function(i, item) {
            var icon = "";
            switch (item.icon) {
                case "start":
                    icon = "start";
                    break;
            }
            var iconImg = {
                url: "http://lvivskadesiatka.org.ua/images/point-" + icon + ".png",
                // This marker is 20 pixels wide by 32 pixels tall.
                size: new google.maps.Size(29, 40)
                // The origin for this image is 0,0.
                // origin: new google.maps.Point(0,0),
                // The anchor for this image is the base of the flagpole at 0,32.
                // anchor: new google.maps.Point(0, 0)
            };
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(item.lat, item.lng),
                map: map,
                title: item.title,
                icon: iconImg
            });
            latlngbounds.extend(new google.maps.LatLng(item.lat, item.lng));
            arrMarkers[i] = marker;
            var infowindow = new google.maps.InfoWindow({
                content: "<h3>" + item.title + "</h3><p>" + item.description + "</p>"
            });
            arrInfoWindows[i] = infowindow;
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        });
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

var map;
google.maps.event.addDomListener(window, "load", function () {

    var map = new google.maps.Map(document.getElementById("map_div"), {
      center: new google.maps.LatLng(),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infoWindow = new google.maps.InfoWindow();

    function createMarker(options, html) {
      var marker = new google.maps.Marker(options);
      if (html) {
        google.maps.event.addListener(marker, "click", function () {
          infoWindow.setContent(html);
          infoWindow.open(options.map, this);
        });
      }
      return marker;
    }
    var marker0 = createMarker({
        position: new google.maps.LatLng(33.808678, -117.918921),
        map: map,
        icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
      }, "<h1>Marker 0</h1><p>This is the home marker.</p>");
    
      var marker1 = createMarker({
        position: new google.maps.LatLng(33.818038, -117.928492),
        map: map
      }, "<h1>Marker 1</h1><p>This is marker 1</p>");
    
      var marker2 = createMarker({
        position: new google.maps.LatLng(33.803333, -117.915278),
        map: map
      }, "<h1>Marker 2</h1><p>This is marker 2</p>");
    });
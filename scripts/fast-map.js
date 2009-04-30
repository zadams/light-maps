$("#mapimage").mouseover(
  function () {
    $('#maphelp').toggleClass('hide');
  }
);
$("#maphelp").mouseout(
  function () {
    $(this).toggleClass('hide');
  }
);

function drawMap() {        
  $('#map_layer').jmap('init', {'mapCenter':[mapinfo.centerpoint.lat,mapinfo.centerpoint.long], 'mapZoom':parseInt(mapinfo.zoomlevel)});
  $.each(mapinfo.markers,function(i,marker) {
      if (marker.point != "undefined") {
        $('#map_layer').jmap('AddMarker', {'pointLatLng': [marker.point.lat,marker.point.long]});
      }
  });
}

$("#maphelp").click(
  function() {
    $.getScript("http://maps.google.com/maps?file=api&v=2.x&sensor=false&async=2&callback=drawMap&key=ABQIAAAAKGZy6TR3F2hathnbpfaMuBT2yXp_ZAY8_ufC3CFXhHIE1NvwkxThSPT-qQu2dQDjdn9b3xpMXw0M9w");
  });
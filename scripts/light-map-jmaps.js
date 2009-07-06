/*
* Copyright (c) 2009 Zack Adams
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
* A light implementation of Google maps using the Google Maps static
* API, jQuery, and jMaps
*
*/

function drawMap() {
  $('#map_layer').jmap('init', {'mapCenter':[mapinfo.centerpoint.lat,mapinfo.centerpoint.long], 'mapZoom':parseInt(mapinfo.zoomlevel)});
  $.each(mapinfo.markers,function(i,marker) {
      if (marker.point != "undefined") {
        $('#map_layer').jmap('AddMarker', {'pointLatLng': [marker.point.lat,marker.point.long]});
      }
  });
}

function getDynamicMap() {
	$.getScript("http://maps.google.com/maps?file=api&v=2.x&sensor=false&async=2&callback=drawMap&key=ABQIAAAArXqxNzbMOprBeH2hs04iDxTBKba3bhFBs2AMuovWscDuYkI8PxT3QmKOXJc_m9p6J3nUFu9WBFON5A");
}

function addmaphelpdiv() {
	var width = 0, height = 0, h1margin = 0;
	width = $("#map_layer").width();
	height = $("#map_layer").height();
	$("#map_layer").prepend("<div id='maphelp' class='hide'><h1>Click to Interact</h1></div>");
	h1margin = (height / 2) - ($("#maphelp h1").height() / 2);
	$("#maphelp").css('width',width);
	$("#maphelp").css('height',height);
	$("#maphelp h1").css('margin-top',h1margin);
	
	$("#maphelp").click(
	  function() {
			getDynamicMap();
	});
}

$(document).ready(function() {
	addmaphelpdiv();
	mapAutoload == 'false';
	
	$("#map_layer").mouseover(
	  function () {
	    $('#maphelp').removeClass('hide');
	  }
	);
	
	$("#maphelp").mouseout(
		function() {
			$("#maphelp").addClass('hide');
		}
	);
	
	if (mapAutoload && mapAutoload == 'true'){
	  $(document).ready(function() { getDynamicMap(); });
	}
})
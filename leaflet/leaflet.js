var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});

// use this method for two requests of the same image with different parameters
var iiifUrl = 'http://www.e-codices.unifr.ch/loris/cma/cma-1955-74/cma-1955-74_000b.jp2/info.json';

var layer1 = L.tileLayer.iiif(iiifUrl, {
    fitBounds: false,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(iiifUrl, {
    quality: 'gray'
  }
).addTo(map);


// use this method to layer two separate image requestsinfo.json
// var layer1 = L.tileLayer.iiif('https://stacks.stanford.edu/image/iiif/zf275jj8939%2FMartellus_300ppi_natural_color_panorama_WIP2/info.json', {
//     fitBounds: false,
//   }
// ).addTo(map);

// var layer2 = L.tileLayer.iiif(
//   'https://stacks.stanford.edu/image/iiif/zf275jj8939%2FMartellus_300ppi_combined_processes_WIP2_panorama_with_blue_water/info.json'
// ).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);

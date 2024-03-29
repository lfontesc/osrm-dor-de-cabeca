'use strict';

var L = require('leaflet');

var geocoder = function(i, num) {
  
  var container = L.DomUtil.create('div',
      function() {
        if (i === 0) {
          return "osrm-directions-origin";
        } else if (i === num - 1) {
          return "osrm-directions-destination";
        }
        return "osrm-directions-via";
      }()),
    label = L.DomUtil.create('label', 'osrm-form-label', container),
    input = L.DomUtil.create('input', '', container),
    teste = L.DomUtil.create('div','',container)
    close = L.DomUtil.create('span', 'osrm-directions-icon osrm-close-icon', container),
    name = String.fromCharCode(65 + i),
    icon = L.DomUtil.create('div', 'leaflet-osrm-geocoder-label', label);
  icon.innerHTML = name;
  teste.innerHTML = '<select><option>1</option><option>2</option><option>3</option></select>';
  return {
    container: container,
    input: input,
    closeButton: close
  };
};




module.exports = geocoder;

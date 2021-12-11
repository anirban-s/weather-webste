const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiY29kaW5ndHV0b3JpYWwxMDEiLCJhIjoiY2t3Z2Q0enE5MDRiZTJ2bzB6ZW11Z3RxYSJ9.KrNj-vrsd4T0ZM0FNMVfBg";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location service!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;

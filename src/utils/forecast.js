const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9c714cfc346fb3ef7e4c4734598ec3df&query=" +
    latitude +
    "," +
    longtitude +
    "&units=f";
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const { temperature, feelslike, weather_descriptions, humidity } =
        response.body.current;
      callback(
        undefined,
        `${weather_descriptions[0]}. It is currently ${temperature} degrees out, It feels like ${feelslike} degrees out. Humidity is ${humidity}%.`
      );
    }
  });
};

module.exports = forecast;

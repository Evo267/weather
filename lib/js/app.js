var weatherApp = angular.module('weatherApp', []);

// defining API constants, probrably there's a better way to this. But it will work just fine in this small app.
weatherApp.constant("API_URL", "http://api.apixu.com/v1/current.json?key=ee5bb2f9b01b4ddfbf5100135171306");
weatherApp.constant("API_URL_FORECAST", "http://api.apixu.com/v1/forecast.json?key=ee5bb2f9b01b4ddfbf5100135171306");
weatherApp.constant("API_URL_SEARCH", "http://api.apixu.com/v1/search.json?key=ee5bb2f9b01b4ddfbf5100135171306");

// This app was created by Rafael G. Machado
// http://www.rafaelmachado.pt
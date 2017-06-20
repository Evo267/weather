// city weather directive, so we don't repeat HTML if it's needed.
weatherApp.directive('cityWeather', function(){
    return {
        restrict: 'A',
        templateUrl: './partials/city_weather.html'
    }
});
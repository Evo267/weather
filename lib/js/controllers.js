weatherApp.controller('weatherCtrl', function($scope, $http, API_URL, API_URL_FORECAST, API_URL_SEARCH){

    // featured cities that we display in the page
    $scope.featured_cities = ['Lisbon', 'Porto', 'Madrid', 'London', 'Paris', 'Berlin', 'Rome', 'Moscow', 'New York'];

    // main city, is also the SELECTED CITY. 
    $scope.mainCity = 'Lisbon';

    // the request we do, to get the data, and inject it into the weather variable, which holds the weather forecast!
    $scope.getForecast = function() { 
        $http.get(API_URL_FORECAST, { params: { "q": $scope.mainCity, "days": 6 } })
            .then(function(response) {
                $scope.weather = response.data;
            });
    };

    // get the default forecast
    $scope.getForecast();

    // if a featured city is clicked, then we'll change the city selected to the one changed to.
    // also we'll call again the getForecast function so we get the weather!

    $scope.changeCity = function(city){
        $scope.mainCity = city;
        $scope.getForecast();
    }


    // this is the search city function, were we're calling the API, inject the results into results variable, and show them to the user.
    $scope.searchCity = function(search){
        $http.get(API_URL_SEARCH, { params: { "q": search } })
            .then(function(response) {
                $scope.results = response.data;
            });
    }

    // watch the modal input to search for a city, if activated then it will trigger the searchCity function
    // and if the user clicks in one of the results then changeCity will get trigged.
    $scope.$watch('searchVal', function(nVal, oVal) {
        if (nVal !== oVal) {
            $scope.searchCity(nVal);
        }
    });
    

});
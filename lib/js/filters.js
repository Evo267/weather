// custom date filer, so angularJs doesnt really like the json's date anyways so yeah.
// Example of the output is: Tuesday, June 20, 2017
weatherApp.filter('CustomDate', ['$filter', function($filter) {
    return function(date) {
        var convertedDate = new Date(date);
        return $filter('date')(convertedDate, 'EEEE, MMMM d, y');
    }
}]);


//Custom filter for temperature. Just adding ºC after the string.
weatherApp.filter('temperature', function() {
    return function(input) {
        return input+'ºC';
    };
});
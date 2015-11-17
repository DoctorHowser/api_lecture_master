var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
    $scope.results = [];

    var apikey = "80b5c075916a28c201e49507314e858c26537c06";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=25';
    var query = 'Batman';

    var finalURL = gameSearchURL + '&query=' + encodeURI(query) + '&json_callback=JSON_CALLBACK';

    $http.jsonp(finalURL).then(
        function(response) {
            $scope.results = (response.data.results);
            console.log($scope.results)
        }
    );


}]);
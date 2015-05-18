/// <reference path="jquery-1.7.1.js" />
/// <reference path="angular.js" />
/// <reference path="angular-route.js" />


(function (angular, $) {
    var app = angular.module('app', ['ngRoute']);
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'views/main.html'
              // controller: 'MainCtrl'
          })
          .when('/center', {
              templateUrl: 'views/center.html'
              // controller: 'MainCtrl'
          })
          .when('/class', {
              templateUrl: 'views/class.html',
              // controller: 'ClassCtrl'
          })
            .when('/test', {
                templateUrl: '/test.aspx',
                // controller: 'ClassCtrl'
            })
          .otherwise({
              redirectTo: '/'
          });

        //use the HTML5 History API
        //$locationProvider.html5Mode(true);
    }]);

    app.controller('contrl', ['$scope', '$location', function ($scope, $location) {

        //$scope.$root.$on('$locationChangeStart', function (e) {
        //    //e.stopPropagation();
        //    e.preventDefault();
        //    $scope.url = $location.url();
        //});

        $scope.newUrl = '/test.aspx';

        $scope.notFilterAge = function () {
            $scope.newUrl = '/test.aspx';
        };

        $scope.filterAge = function () {
            $scope.url = '/test.aspx?age=23';
        };


    }]);

})(angular, jQuery);
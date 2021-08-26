(function () {
'use strict';


angular.module('RoutingApp', ['ui.router']);

angular.module('RoutingApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider , $urlRouterProvider) {

  // Redirect to tab1 if no other URL matches
  $urlRouterProvider.otherwise('/tab1');

  // Set up UI States

  $stateProvider
    .state('tab1', {
      url: '/tab1' ,
      templateUrl: 'SRC/tab1.html'
    })

    .state('tab2', {
      url: '/tab2',
      templateUrl: 'SRC/tab2.html'
    });

};




})();

(function () {
'use strict';

angular.module('RouttingApp', ['ui.router']);



angular.module('RouttingApp')
.config(RoutesConfig);



RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/tab1');

  $stateProvider
  .state('tab1', {
    url: '/tab1',
    templateUrl: 'SRC3/tab1.html'
  })

  .state('tab2', {
    url: '/tab2',
    templateUrl: 'SRC3/tab2.html'
  })





}



})();

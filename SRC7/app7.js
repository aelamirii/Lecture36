(function () {
'use strict';

angular.module('RouttingApp', ['ui.router']);

angular.module('RouttingApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/tab1-1');

  $stateProvider
  .state('tab1', {
    url : '/tab1-1',
    templateUrl: 'SRC7/tab1.html'
  })
  .state('tab2', {
    url : '/tab2-2',
    templateUrl: 'SRC7/tab2.html'
  });



}





})();

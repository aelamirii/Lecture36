(function () {
'use strict';

angular.module('RouttingApp', ['ui.router']);

angular.module('RouttingApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider , $urlRouterProvider) {

      console.log("azaa");
  $urlRouterProvider.otherwise('/tab1-1');

  $stateProvider
  .state('tab1', {
    url: '/tab1-1',
    templateUrl: 'SRC6/tab1.html'
  })
  .state('tab2', {
    url: '/tab2-2',
    templateUrl: 'SRC6/tab2.html'
  });



};



})();

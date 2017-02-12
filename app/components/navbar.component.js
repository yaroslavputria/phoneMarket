'use strict';

angular.module('phoneMarketAngularApp')
  .component('navbarComp', {
    templateUrl: 'components/navbar.component.html',
    controller: ['Phone',
      function navbarController(Phone) {
        var self = this;

      }
    ]
  });

'use strict';

angular.module('phoneMarketAngularApp')
  .component('basketComp', {
    templateUrl: 'components/basket.component.html',
    controller: ['Phone',
      function basketController(Phone) {
        var self = this;
      }
    ]
  });

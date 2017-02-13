'use strict';

angular.module('phoneMarketAngularApp')
  .component('basketComp', {
    templateUrl: 'components/basket.component.html',
    controller: ['Phone', '$scope', '$window',
      function basketController(Phone, $scope, $window) {
        var self = this;
        var basket;

        self.basketVisibility = false;

        refreshBasket();

        $scope.$watch(function(){return $window.localStorage.basket;}, function(newBasket, prevBasket) {
          if (newBasket!==prevBasket) {
            refreshBasket();
          }
        });

        function refreshBasket() {
          self.count = 0;
          if ($window.localStorage.basket) {
            basket = JSON.parse($window.localStorage.basket);
            for (var i in basket) {
              self.count += basket[i];
            }
          }
        }

      }
    ]
  });

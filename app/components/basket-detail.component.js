'use strict';

angular.module('phoneMarketAngularApp')
.directive('basketDetailComp', function(Phone) {
  return {
    link: function(scope, el, attrs) {
      scope.basketInfos = {};
      if (localStorage.basket) {
        scope.basket = JSON.parse(localStorage.basket);
        for (let i in scope.basket) {
          Phone.getPhoneAjax(i).then((phoneInfo) => {
            scope.$evalAsync(function() {
              scope.basketInfos[i] = {
                title: phoneInfo.title,
                price: phoneInfo.shortInfoList.Price,
                count: scope.basket[i]
              };
            });
          });
        }
      } else {
        scope.basket = null;
      }
    },
    restrict: "E",
    templateUrl: 'components/basket-detail.component.html'
  }
});

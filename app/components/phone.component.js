'use strict';

angular.module('phoneMarketAngularApp')
.directive('phoneComp', function(Phone) {
  return {
    link: function(scope, el, attrs) {

      Phone.getPhoneAjax(attrs.phoneid).then((phoneInfo) => {
        scope.$evalAsync(function() { scope.phoneInfo = phoneInfo;});
      });
      scope.addToCard = function() {
        Phone.addToCard(scope.phoneInfo.id);
      };
    },
    restrict: "E",
    templateUrl: 'components/phone.component.html'
  }
});
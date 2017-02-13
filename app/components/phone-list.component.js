'use strict';

angular.module('phoneMarketAngularApp')
  .component('phoneListComp', {
    templateUrl: 'components/phone-list.component.html',
    controller: ['Phone', '$scope',
      function phoneListController(Phone, $scope) {
        var self = this;
        self.searchKey = '';

        self.searchChanged = function(searchKey) {
          Phone.getPhoneIdListAjax1(searchKey).then((phoneList) => {
            $scope.$evalAsync(self.phoneIdList = phoneList);
          });
        };

        Phone.getPhoneIdListAjax().then((phoneList) => {
          $scope.$evalAsync(self.phoneIdList = phoneList);
        });
      }
    ]
  });

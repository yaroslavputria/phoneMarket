'use strict';

angular.module('phoneMarketAngularApp')
  .component('phoneListComp', {
    templateUrl: 'components/phone-list.component.html',
    controller: ['Phone', '$scope',
      function phoneListController(Phone, $scope) {
        var self = this;
        self.searchKey = '';

        self.searchChanged = function(searchKey) {
          Phone.getPhoneIdListAjax(searchKey).then((phoneList) => {
            $scope.$evalAsync(self.phoneIdList = phoneList);
          });
        };

        Phone.getPhoneIdListAjax(self.searchKey).then((phoneList) => {
          $scope.$evalAsync(self.phoneIdList = phoneList);
        });
      }
    ]
  });

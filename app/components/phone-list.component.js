'use strict';

angular.module('phoneMarketAngularApp')
  .component('phoneListComp', {
    templateUrl: 'components/phone-list.component.html',
    controller: ['Phone',
      function phoneListController(Phone) {
        var self = this;
        self.phoneIdList = ['tmp'];
        Phone.getPhoneIdListAjax().then((phoneList) => {
          self.phoneIdList = phoneList;
        });
      }
    ]
  });

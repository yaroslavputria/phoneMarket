'use strict';

angular.
  module('phoneMarketAngularApp').
  factory('Phone', function() {
      return {
        gepPhoneIdList: function() {
          return ['p1', 'p2', 'p3', 'p4'];  
        },
        getPhone: function(id){
          if (id) {
            return {
              id: 'p1',
              title:'Iphone',
              imgUrl: 'images/p1.jpg',
              shortInfoList: {
                Color: 'red',
                Height: '100mm',
                Width: '50mm',
                Weight: '110g',
                Price: '100$'
              }
            };
           }
        }
      };
    }
  );

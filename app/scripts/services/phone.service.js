'use strict';

angular.
  module('phoneMarketAngularApp').
  factory('Phone', function($http) {
      // var allPhoneInfos = $http({
      //   method: 'GET',
      //   url: './phones.json'
      // }).then((res) => {
      //   return res.data;
      // },
      // (err) => {

      // });
      function allPhonesInfosPromise() {
        return new Promise(function(resolve, reject){
          resolve(
            {
              "p1": {
                "id": "p1",
                "title":"Iphone",
                "imgUrl": "images/p1.jpg",
                "shortInfoList": {
                  "Color": "red",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "100$"
                }
              },
              "p2": {
                "id": "p2",
                "title":"Iphone",
                "imgUrl": "images/p1.jpg",
                "shortInfoList": {
                  "Color": "red",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "100$"
                }
              },
              "p3": {
                "id": "p3",
                "title":"Iphone",
                "imgUrl": "images/p1.jpg",
                "shortInfoList": {
                  "Color": "red",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "100$"
                }
              },
              "p4": {
                "id": "p4",
                "title":"Iphone",
                "imgUrl": "images/p1.jpg",
                "shortInfoList": {
                  "Color": "red",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "100$"
                }
              },
              "p5": {
                "id": "p5",
                "title":"Iphone",
                "imgUrl": "images/p1.jpg",
                "shortInfoList": {
                  "Color": "red",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "100$"
              }
            }
          });
        });
      }

      var factory = {};

      factory.getPhoneIdListAjax = function() {
        return allPhonesInfosPromise().then((data) => {
          return Object.keys(data);
        });
      };

      factory.getPhoneAjax = function(id) {
        return allPhonesInfosPromise().then((data) => {
          return data[id];
        });
      };
      // return {
      //   gepPhoneIdList: function() {
      //     return ['p1', 'p2', 'p3', 'p4'];  
      //   },
      //   getPhone: function(id){
      //     if (id) {
      //       return {
      //         id: 'p1',
      //         title:'Iphone',
      //         imgUrl: 'images/p1.jpg',
      //         shortInfoList: {
      //           Color: 'red',
      //           Height: '100mm',
      //           Width: '50mm',
      //           Weight: '110g',
      //           Price: '100$'
      //         }
      //       };
      //      }
      //   }
      // };

      return factory;
    }
  );

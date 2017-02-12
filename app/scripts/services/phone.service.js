'use strict';

angular.
  module('phoneMarketAngularApp').
  factory('Phone', function() {
      function allPhonesInfosPromise() {
        return new Promise(function(resolve, reject){
          resolve(
            {
              "p1": {
                "id": "p1",
                "title":"Iphone1",
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
                "title":"Iphone2",
                "imgUrl": "images/p2.jpg",
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
                "title":"Iphone3",
                "imgUrl": "images/p3.jpg",
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
                "title":"Iphone4",
                "imgUrl": "images/p4.jpg",
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
                "title":"Iphone5",
                "imgUrl": "images/p5.jpg",
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

      return factory;
    }
  );

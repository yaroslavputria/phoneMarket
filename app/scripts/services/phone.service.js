'use strict';

angular.
  module('phoneMarketAngularApp').
  factory('Phone', function() {

      function allPhonesInfosPromise() {
        return new Promise(function(resolve){
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
                  "Price": "10",
                  "Shipping": "12.33"
                }
              },
              "p2": {
                "id": "p2",
                "title":"Iphone2",
                "imgUrl": "images/p2.jpg",
                "shortInfoList": {
                  "Color": "blue",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "20",
                  "Shipping": "12.33"
                }
              },
              "p3": {
                "id": "p3",
                "title":"Iphone3",
                "imgUrl": "images/p3.jpg",
                "shortInfoList": {
                  "Color": "green",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "30",
                  "Shipping": "12.33"
                }
              },
              "p4": {
                "id": "p4",
                "title":"Iphone4",
                "imgUrl": "images/p4.jpg",
                "shortInfoList": {
                  "Color": "white",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "40",
                  "Shipping": "12.33"
                }
              },
              "p5": {
                "id": "p5",
                "title":"Iphone5",
                "imgUrl": "images/p5.jpg",
                "shortInfoList": {
                  "Color": "blue",
                  "Height": "100mm",
                  "Width": "50mm",
                  "Weight": "110g",
                  "Price": "50",
                  "Shipping": "12.33"
              }
            }
          });
        });
      }

      function checkForSearch(obj, key) {
        var fullStrForSearch = '';
        for (var i in obj) {
          if (i!=='id' && i!=='imgUrl' && i!=='shortInfoList') {
            fullStrForSearch += obj[i];
          } else if (i==='shortInfoList'){
            for (var j in obj[i]){
              fullStrForSearch += obj[i][j];
            }
          }
        }
        return fullStrForSearch.includes(key);
      }

      var factory = {};

      factory.getPhoneIdListAjax = function(key) {
        return allPhonesInfosPromise().then(function(data) {
          var filteredList = [];
          for (var i in data) {
            if (checkForSearch(data[i], key)) {
              filteredList.push(i);
            }
          }
          return filteredList;
        });
      };

      factory.getPhoneAjax = function(id) {
        return allPhonesInfosPromise().then(function(data) {
          return data[id];
        });
      };

      factory.addToCard = function(id) {
        var basket = {};
        if (localStorage.basket) {
          basket = JSON.parse(localStorage.basket);
          if (basket[id]) {
            basket[id] += 1;
          } else {
            basket[id] = 1;
          }
          localStorage.setItem('basket', JSON.stringify(basket));
        } else {
          var obj = {};
          obj[id] = 1;
          localStorage.setItem('basket', JSON.stringify(obj));
        }
      };

      return factory;
    }
  );

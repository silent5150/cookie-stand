'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allShops = [];

function CookieShop(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesSoldPerHour = [];
  this.randomCustPerHour = [];
  allShops.push(this);
  this.calcRandomCustomersPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    }
  },
  this.calcCookiesSoldPerHour = function() {
  this.calcRandomCustomersPerHour();
  for (var i = 0; i < hours.length; i++) {
    this.cookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCustomer * this.randomCustPerHour[i]));
  }
};
}
var thing = new CookieShop('First And Pike', 23, 65, 6.3);
thing.calcCookiesSoldPerHour();
console.log(allShops);

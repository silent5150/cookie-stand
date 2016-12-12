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
<<<<<<< HEAD
=======
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
=======


var firstAndPike = {
  locationName: 'First and Pike',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerCust: 6.3,
  randomCustomerPerHour: function() {
},
  cookiesSoldPerCustomer: [],
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour);
    };

var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerCust: 1.2,
  randomCustomerPerHour: function()  {
},
  cookiesSoldPerCustomer: [],
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour);
    };

var seattleCenter = {
  locationName: 'Seattle Center',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerCust: 3.7,
  randomCustomerPerHour: function()  {
},
  cookiesSoldPerCustomer: [],
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour);
    };

var capitolHill = {
  ocationName: 'Capitol Hill',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesPerCust: 2.3,
  randomCustomerPerHour: function()

  {
 },
 cookiesSoldPerCustomer: [],
 calcCookiesSoldPerHour: function() {
   for (var i = 0; i < hours.length; i++) {
     this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
     console.log(this.randomCustPerHour);
   };

var alki = {
  locationName: 'Alki',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerCust: 4.6,
  randomCustomerPerHour: function()  {
},
  cookiesSoldPerCustomer: [],
  calcCookiesSoldPerHour: function() {
>>>>>>> aca4c368aee91af0d3dfdb91d1e461fbebb4744b
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

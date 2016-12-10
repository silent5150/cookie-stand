'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var FirstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  randomHourlyCust:[],
  totalCookieSoldPerHour: [],
  totalDailyCookieSales: 0,
  calculateRandomCustPerHour: function() {

    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour);
    }
  },
  calcTotalCookiesPerHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomHourlyCust[i] * this .avgCookiePerCust));
      console.log[this.totalCookiesSoldEachHour];
    }
  },
  render: function() {
  }
};

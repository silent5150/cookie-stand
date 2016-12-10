'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  randomHourlyCust:[],
  totalCookieSoldPerHour: []
  totalDailyCookiesSales: 0,
  calculateRandomCustPerHour: function() {
    for over this (var i = 0; i < hours.length; i++); {
      this.randomCustPerHour.push(math.floor(math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour;

  },
  calcTotalCookiesSoldPerHour: function() {
    this.totalCookieSoldPerHour.push('');
  },
  render: function() {}

//console.log(this.randomCustPerHour, 'random customers per hour' = this.minCustPerHour + 1)


}


'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  randomCustPerHour: [],
  totalCookieSoldPerHour: [],
  totalDailyCookiesSales: function() {
    for (var i = o; i< hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) +this.minCustPerHour);
      console.log(this.randomCustPerHour,'random customers per hour');
    }
  },
  calcTotalCookiesSoldEachHour:function() {
    this.calcRacndomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookieSoldPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      console.log(this.totalDailyCookiesSales, 'running total cookies sold daily');
    }
    console.log(this.totalCookieSoldPerHour, 'cookies sold per hour');
  }

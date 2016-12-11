'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];

for (var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[i];
  allStores.appendChild(liEl);
}

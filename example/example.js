var DateTime = require('../DateTime.js');
var React = require('react');
var ReactDOM = require('react-dom');

var DATE_FORMAT = 'YYYY-MM-DD';
var TIME_FORMAT = 'HH:mm:ssZ';

ReactDOM.render(
  React.createElement(DateTime, {
    dateFormat: DATE_FORMAT,
    timeFormat: TIME_FORMAT,
    // utcOffset: -new Date().getTimezoneOffset(),
    onChange: function(m) {
      console.log(m, m.toDate());
    }
  }),
  document.getElementById('datetime')
);

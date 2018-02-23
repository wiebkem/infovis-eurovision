$(document).ready(function() {
    setYearSelectOptions();
    setCountrySelectOptions();
});

function setYearSelectOptions() {
    /* years from 2007 - 2017 */
    var yearStart = 2007;
    var yearEnd = 2017;
    for(var i = yearEnd; i >= yearStart; i--) {
      $("#yearSelection").append($('<option>', {
         value: i,
         text : i
      }));
    }
};

function setCountrySelectOptions() {
    var countries = [];
    d3.csv('data/map-code.csv', function (data) {
      console.log(data);
      data.forEach(function (entry) {
        entry['Country'] = entry['Country'];
        entry['Countrycode'] = entry['Countrycode'];
      });
      countries = data;
    });

    countries.forEach(function (country) {
      $("#countrySelection").append($('<option>', {
         value: country['Country'],
         text : country['Countrycode']
      }));
    });
};

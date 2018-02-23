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
    var yearStart = 1956;
    var yearEnd = 2017;
    for(var i = yearEnd; i >= yearStart; i--) {
      $("#countrySelection").append($('<option>', {
         value: i,
         text : i
      }));
    }
};

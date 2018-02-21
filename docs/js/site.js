$(document).ready(function() {
    setYearSelectOptions();
});

function setYearSelectOptions() {
    /* years from 1956 - 2017 */
    var yearStart = 1956;
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

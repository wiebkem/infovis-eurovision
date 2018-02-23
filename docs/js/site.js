/* years from 2007 - 2017 */
var yearStart = 2007;
var yearEnd = 2017;

$(document).ready(function() {
    setYearSelectOptions();
    setCountrySelectOptions();

    fetchVotes(yearEnd);

    $('#yearSelection').change(function() {
        fetchVotes($(this).val());
    });
    $('#countrySelection').change(function() {
        setSelectedCountry($(this).val());
        renderVotes();
        renderCountryInfo();
    });
});

function renderCountryInfo() {
	if (currentCountryInfo[selectedCountry] == undefined) {
		console.log(selectedCountry,' did not participate in the final this year.');
	} else {
		
	}
}

function setYearSelectOptions() {
    for(var i = yearEnd; i >= yearStart; i--) {
      $("#yearSelection").append($('<option>', {
         value: i,
         text : i
      }));
    }
};

function setCountrySelectOptions() {
    d3.csv('data/map-code.csv', function (data) {
      console.log(data);
      data.forEach(function (entry) {
        $("#countrySelection").append($('<option>', {
           value: entry['Countrycode'],
           text : entry['Country']
        }));
      });
    });
};

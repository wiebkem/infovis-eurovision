/* years from 2007 - 2017 */
var yearStart = 2007;
var yearEnd = 2017;

var mapCode = [];

$(document).ready(function() {
    setYearSelectOptions();
    setCountrySelectOptions();

    fetchVotes(yearEnd);

    $('#yearSelection').change(function() {
        fetchVotes($(this).val());
        renderVotes();
        renderCountryInfo();
    });
    $('#countrySelection').change(function() {
        setSelectedCountry($(this).val());
        renderVotes();
        renderCountryInfo();
    });
});

function renderCountryInfo() {
	if (currentCountryInfo[selectedCountry] == undefined) {
      $('.info-box').removeClass('active');
      $('#did-not-participate').addClass('active');
      mapCode.forEach(function(val){
          if (val['Countrycode'] == selectedCountry){
              $('#countryname').text(val['Country']);
          }
      });
		  console.log(selectedCountry,' did not participate in the final this year.');
	} else {
      $('.info-box').removeClass('active');
      $('#participated').addClass('active');
      var country = currentCountryInfo[selectedCountry];
      $("#artistname").text(country['Artist']);
      $("#songname").text(country['Song']);
      $("#total-score").text(country['Total score']);
      $("#televoting-score").text(country['Televoting score']);
      $("#jury-score").text(country['Jury score']);
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
        mapCode = data;
      data.forEach(function (entry) {
        $("#countrySelection").append($('<option>', {
           value: entry['Countrycode'],
           text : entry['Country']
        }));
      });
    });
};

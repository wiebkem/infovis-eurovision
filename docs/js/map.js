var currentVotes = [];
var defaultColor = "#acacac";
var scoreColors = [
	"#000000",
	"#111111",
	"#222222",
	"#333333",
	"#444444",
	"#555555",
	"#666666",
	"#777777",
	"#888888",
	"#999999",
	"#aaaaaa",
	"#bbbbbb",
];
var selectedColor = "red";

function setCountryFill(countryCode, color) {
	d3.select("#"+countryCode)
		.style("fill", color);
	console.log(countryCode + ';' + color);
}

function fetchVotes(year) {
	d3.csv('data/'+year+'.csv', function (data) {
		data.forEach(function (entry) {
			entry['From'] = entry['From'];
			entry['To'] = entry['To'];
			entry['Points'] = +entry['Televoting points'];
		});
		currentVotes = data;
	});
}

function renderVotes(countryCode) {
	if (countryCode == undefined) {
		$(".europe").style("fill",defaultColor);
	} else {
		currentVotes.forEach(function (vote) {
			if (vote['To'] == countryCode) {
				setCountryFill(vote['From'], scoreColors[vote['Points']]);
			}
		});
		setCountryFill(countryCode, selectedColor);
	}
}

var currentVotes = [];
var defaultColor = "#acacac";
var scoreColors = [
	"#FFF0F0",//0
	"#FFE6E6",//1
	"#FFD9D9",//2
	"#FFCCCC",//3
	"#FFBFBF",//4
	"#FFB0B0",//5
	"#FF9E9E",//6
	"#FF8787",//7
	"#FF6B6B",//8
	"#purple",//9
	"#FF4D4D",//10
	"purple",//11
	"#FF3838"//12
];
var selectedColor = "#2F80ED";
var selectedCountry = undefined;

function setSelectedCountry(countryCode) {
	selectedCountry = countryCode;
}

function setCountryFill(countryCode, color) {
	if (countryCode == undefined) {return;}
	d3.selectAll("#"+countryCode)
		.style("fill", color);
	console.log(countryCode + ';' + color);
}

function fetchVotes(year) {
	d3.csv('data/'+year+'.csv', function (data) {
		//data.forEach(function (entry) {
		//	entry['From'] = entry['From'];
		//	entry['To'] = entry['To'];
		//	entry['Points'] = +entry['Televoting points'];
		//});
		console.log('loaded votes for year ',year);
		currentVotes = data;
	});
}

function renderVotes() {
	$("path").css("fill",defaultColor);
	if (selectedCountry == undefined) {
		//maybe do something, idk
	} else {
		currentVotes.forEach(function (vote) {
			if (vote['To'] == selectedCountry) {
				setCountryFill(vote['From'], scoreColors[vote['Televoting points']]);
			}
		});
		setCountryFill(selectedCountry, selectedColor);
	}
}

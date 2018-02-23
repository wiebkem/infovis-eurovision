var fs = require('fs');

//get requested year
var year = ''+process.argv[2];

//import year data
eval(fs.readFileSync('json/'+year+'.js')+'');

console.log("Country code,Artist,Song,Total score,Televoting score,Jury score,Placement");
Object.keys(voting_table_main).forEach(function(countryCode){
	console.log(
		countryCode+','+
		voting_songs[countryCode][0]+','+
		voting_songs[countryCode][1]+','+
		voting_table_main[countryCode][2]+','+
		voting_table_main[countryCode][3]+','+
		voting_table_main[countryCode][4]+','+
		voting_table_main[countryCode][1]
	)
});

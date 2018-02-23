var fs = require('fs');
console.log("From,To,Televoting points");

//get requested year
var year = ''+process.argv[2];

//import year data
eval(fs.readFileSync('json/'+year+'.js')+'');

voting_point.forEach(function (val){
	console.log(val[0]+','+val[1]+','+(voting_jurymembers==null ? val[2] : val[3]) );
});

## How to use the scraper
### Compiling the scraper
The scraper is written in go, and all contained in one file scraper.go. It uses no packages from outside the standard library, so it can be compiled with the command 
```bash
go build scraper.go
```

### Using the scraper
The scraper can be called from the output file "scraper". The first command-line argument is the eschome url it should read from. The scraper then writes the parsed CSV content to stdout
```bash
./scraper http://eschome.net/databaseoutput108.php
```
Consequent command-line arguments turn the request into a POST request, and adds each string as a url split with colons, for example:
```bash
./scraper http://eschome.net/databaseoutput108.php "year_from:1957" "year_to:2017"
```
This sends a post request with the body 
```
{
	year_from: "1957", 
	year_to: "2017" 
}
```

#!/usr/bin/bash
mkdir json 2>/dev/null
curl_as_browser() {  
	curl -H 'pragma: no-cache' -H 'accept-encoding: gzip, deflate' -H 'accept-language: en-US,en;q=0.9' -H 'upgrade-insecure-requests: 1' -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36' -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'cache-control: no-cache' -H 'authority: pix.eurovisionworld.com' -H 'cookie: __cfduid=d4b58a13aae485387d726f458c9f0aef01519335320' --compressed $1 > $2
}

curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/93.js json/2017.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/87.js json/2016.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/78.js json/2015.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/1.js json/2014.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/2.js json/2013.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/3.js json/2012.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/4.js json/2011.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/7.js json/2010.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/8.js json/2009.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/9.js json/2008.js
curl_as_browser https://pix.eurovisionworld.com/scripts/js/voting/10.js json/2007.js

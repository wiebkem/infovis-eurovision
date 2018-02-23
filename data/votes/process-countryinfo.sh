#!/usr/bin/bash
mkdir csv 2>/dev/null
node eurovisionworld-countryinfo.js 2017 > csv/2017-countryinfo.csv
node eurovisionworld-countryinfo.js 2016 > csv/2016-countryinfo.csv
node eurovisionworld-countryinfo.js 2015 > csv/2015-countryinfo.csv
node eurovisionworld-countryinfo.js 2014 > csv/2014-countryinfo.csv
node eurovisionworld-countryinfo.js 2013 > csv/2013-countryinfo.csv
node eurovisionworld-countryinfo.js 2012 > csv/2012-countryinfo.csv
node eurovisionworld-countryinfo.js 2011 > csv/2011-countryinfo.csv
node eurovisionworld-countryinfo.js 2010 > csv/2010-countryinfo.csv
node eurovisionworld-countryinfo.js 2009 > csv/2009-countryinfo.csv
node eurovisionworld-countryinfo.js 2008 > csv/2008-countryinfo.csv
node eurovisionworld-countryinfo.js 2007 > csv/2007-countryinfo.csv

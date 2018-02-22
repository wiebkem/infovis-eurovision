# About the eurovisionworld.com scraper
This scraper is written in node and bash. Obviously it thus depends on bash and node.js, and it also uses cURL to fetch the json voting data, and so that is also required as a dependency.

## How to fetch, process and use data
The script "fetch-votes.sh" curls vote data from eurovisionworld, and puts it in the json subdirectory. The process-votes.js script then parses these into csv files and places them in the csv subdirectory. These scripts are not tested outside a UNIX-like environment and assume the scripts are exectuted in the local scope.

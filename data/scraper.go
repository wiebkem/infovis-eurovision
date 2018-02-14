package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	//"log"
	"regexp"
)

func main() {
	fmt.Println(curlAndParse(os.Args[1]))

	//http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	//	fmt.Fprintf(w, curlAndParse("http://"+r.URL.Path[1:]))
	//})
	//log.Fatal(http.ListenAndServe(":8080", nil))
}

func curlAndParse(requestUrl string) string {
	var client http.Client
	resp, err := client.Get(requestUrl)
	parsedCSV := ""
	if err != nil {
		fmt.Println("FATAL")
	}
	defer resp.Body.Close()
	if resp.StatusCode == http.StatusOK {
		bodyBytes, _ := ioutil.ReadAll(resp.Body)
		bodyString := string(bodyBytes)

		stripLeadingWhitespace := regexp.MustCompile(`\n\s*`)
		bodyString = stripLeadingWhitespace.ReplaceAllString(bodyString, "\n")

		extractContent := regexp.MustCompile(`(?s).*<form.*?>(.*)</form>.*`)
		bodyString = extractContent.ReplaceAllString(bodyString, "$1")

		mergeTableData := regexp.MustCompile(`(?s)<tr.*?>(.*?)</tr>`)
		removeLineBreaks := regexp.MustCompile(`\n`)
		stripTags := regexp.MustCompile(`<.*?>`)
		removeLeadingColonAndWhitespace := regexp.MustCompile(`^[;\s]*`)
		removeColonPadding := regexp.MustCompile(`\s*;\s*`)
		removeDoubleColons := regexp.MustCompile(`;+`)

		_ = mergeTableData.ReplaceAllStringFunc(bodyString, func(match string) string {
			processedMatch := stripTags.ReplaceAllString(match, "")
			processedMatch = removeLineBreaks.ReplaceAllString(processedMatch, ";")
			processedMatch = removeLeadingColonAndWhitespace.ReplaceAllString(processedMatch, "")
			processedMatch = removeColonPadding.ReplaceAllString(processedMatch, ";")
			processedMatch = removeDoubleColons.ReplaceAllString(processedMatch, ";")
			parsedCSV += processedMatch + "\n"
			return ""
		})
		bodyString = ""
		return parsedCSV
	} else {
		return ""
	}
}

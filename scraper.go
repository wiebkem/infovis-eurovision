package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"os"
	"regexp"
)

func main() {
	var client http.Client
	resp, err := client.Get(os.Args[1])
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
		removeSpacePadding := regexp.MustCompile(`\s*;\s*`)
		removeDoubleSemicolons := regexp.MustCompile(`;+`)
		
		_ = mergeTableData.ReplaceAllStringFunc(bodyString, func(match string) string {
			processedMatch := stripTags.ReplaceAllString(match, "")
			processedMatch = removeLineBreaks.ReplaceAllString(processedMatch,";")
			processedMatch = removeLeadingColonAndWhitespace.ReplaceAllString(processedMatch, "")
			processedMatch = removeLineBreaks.ReplaceAllString(processedMatch,";")
			processedMatch = removeSpacePadding.ReplaceAllString(processedMatch,";")
			processedMatch = removeDoubleSemicolons.ReplaceAllString(processedMatch,";")
			fmt.Println(processedMatch)
			return ""
		})
		bodyString = ""
		fmt.Println(bodyString)
	}

}

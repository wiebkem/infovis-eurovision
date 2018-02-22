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
}

func curl(year string) string {
	var client http.Client
	resp, err := client.Get("https://eurovisionworld.com/eurovision/" + year)
	if err != nil {
		fmt.Println("FATAL")
	}
	defer resp.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(resp.Body)
	bodyString := string(bodyBytes)
	return bodyString
}

func curlAndParse(year string) string {
	rawString := curl(year)

	//fmt.Println(rawString)
	extractVotes := regexp.MustCompile(`(?s)<td trid="(\w\w)" tdid="(\w\w)">(.*?)<\/td>`)
	votes := extractVotes.FindAllStringSubmatch(rawString, -1)

	for _, val := range votes {
		fmt.Println(val[0])
	}
	return ""
}

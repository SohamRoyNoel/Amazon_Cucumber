$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Test Flow",
  "description": "",
  "id": "test-flow",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 25,
  "name": "Book Selection",
  "description": "",
  "id": "test-flow;book-selection",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@amazonBOOKselection"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Get the count of the search result for \"Selenium Webdriver\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Select the books with following details for \"Selenium WebDriver, 1e\"",
  "rows": [
    {
      "cells": [
        "Selenium WebDriver, 1e",
        "Rajeev Gupta"
      ],
      "line": 28
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Verify the book name, authorname, price",
  "rows": [
    {
      "cells": [
        "Selenium WebDriver, 1e",
        "Gupta",
        "496"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Write it in excel file",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Webdriver",
      "offset": 40
    }
  ],
  "location": "StepDefination.get_the_count_of_the_search_result_for_something(String)"
});
formatter.result({
  "duration": 8250569600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium WebDriver, 1e",
      "offset": 45
    }
  ],
  "location": "StepDefination.select_the_books_with_following_details_for_something(String,DataTable)"
});
formatter.result({
  "duration": 6294730300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.verify_the_book_name_authorname_price(DataTable)"
});
formatter.result({
  "duration": 24135901,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[starts-with(@id,\u0027productTitle\u0027)]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-LHLA0PA\u0027, ip: \u0027192.168.153.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\soham\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63658}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d01709ffb925c1cb9d97bf3abeee9124\n*** Element info: {Using\u003dxpath, value\u003d//span[starts-with(@id,\u0027productTitle\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat StepDefinations.StepDefination.verify_the_book_name_authorname_price(StepDefination.java:97)\r\n\tat ✽.Then Verify the book name, authorname, price(src/test/java/Features/Amazon.feature:29)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 60863099,
  "status": "passed"
});
});
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
  "rows": [
    {
      "cells": [
        "Selenium WebDriver, 1e",
        "Gupta",
        "496"
      ],
      "line": 32
    }
  ],
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
  "duration": 10321976400,
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
  "duration": 6885947900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.verify_the_book_name_authorname_price(DataTable)"
});
formatter.result({
  "duration": 3140388500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.write_it_in_excel_file(DataTable)"
});
formatter.result({
  "duration": 417684400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.codoid.products.fillo.SelectExcelUtil.runSelectQuery(SelectExcelUtil.java:46)\r\n\tat com.codoid.products.fillo.Select.getRecordset(Select.java:61)\r\n\tat com.codoid.products.fillo.Connection.executeQuery(Connection.java:64)\r\n\tat StepDefinations.StepDefination.write_it_in_excel_file(StepDefination.java:131)\r\n\tat ✽.And Write it in excel file(src/test/java/Features/Amazon.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 57911600,
  "status": "passed"
});
});
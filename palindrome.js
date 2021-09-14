function reverse(str) {
  var listOfChars = str.split("");
  var reversedListOfChars = listOfChars.reverse();
  var reversedStr = reversedListOfChars.join("");
  return reversedStr;
}

function isPalindrome(str) {
  var reversedElement = reverse(str);
  if (str === reversedElement) {
    return true;
  }
  return false;
}

var date = {
  day: 05,
  month: 9,
  year: 2020,
};

function convertNumToStr(date) {
  var dateStr = { day: "", month: "", year: "" };
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();

  return dateStr;
}
  
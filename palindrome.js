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

function convertDateToStr(date) {
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

function getDatesInAllFormats() {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function palindromeForAllDateFormats() {
  var listOfDateFormats = getDatesInAllFormats(date);

  var palindromeChecker = false;

  for (var i = 0; i < listOfDateFormats.length; i++)
    if (isPalindrome(listOfDateFormats[i] )) {
      palindromeChecker = true;
      break;
    }

  return palindromeChecker;
}

console.log(palindromeForAllDateFormats(date));

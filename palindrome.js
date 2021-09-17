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

function getDatesInAllFormats(date) {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function palindromeForAllDateFormats(date) {
  var listOfDateFormats = getDatesInAllFormats(date);

  var palindromeChecker = false;

  for (var i = 0; i < listOfDateFormats.length; i++)
    if (isPalindrome(listOfDateFormats[i])) {
      palindromeChecker = true;
      break;
    }

  return palindromeChecker;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

var date = {
  day: 31,
  month: 12,
  year: 2024,
};

function getNextPalindromeDate(date) {
  var ctr = 0;
  var nextDate = getNextDate(date);

  while (1) {
    ctr++;
    var isPalindrome = palindromeForAllDateFormats(nextDate);
    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [ctr, nextDate];
}

var inputDate = document.querySelector("#date-of-birth");
var clickButton = document.querySelector("#check-palindrome-btn");
var output = document.querySelector("#output");

function eventListener(e) {
  var bdayStr = inputDate.value;

  if (bdayStr !== "") {
    var arrayOfDate = bdayStr.split("-");
    var date = {
      day: Number(arrayOfDate[2]),
      month: Number(arrayOfDate[1]),
      year: Number(arrayOfDate[0]),
    };
    var isPalindrome = palindromeForAllDateFormats(date);
    if (isPalindrome) {
      output.innerText = "Your Birthday Is A Palindrome";
    } else {
      var [ctr, nextDate] = getNextPalindromeDate(date);
      output.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}. You missed it by ${ctr} days`;
    }
  }
}

clickButton.addEventListener("click", eventListener);

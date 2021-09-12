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

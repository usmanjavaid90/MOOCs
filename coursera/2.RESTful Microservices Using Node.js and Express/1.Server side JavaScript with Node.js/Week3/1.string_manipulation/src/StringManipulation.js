//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length;
}

//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (var i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      count += 1;
    }
  }
  return count;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  let m = str.length;
  let n = checkStr.length;

  for (var i = 0; i <= m - n; i++){
    if (str[i] == checkStr[0]) {
      if (str.slice(i, i + n) == checkStr) {
        return true;
      }
    }
  }
  return false;
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  n = str.length;
  if (n == 0) {
    return str;
  }
  let string = str[0].toUpperCase();
  
  for (var i = 1; i < n; i++) {
    if (str[i - 1] == ' ') {
      string += str[i].toUpperCase();
    }
    else {
      string += str[i];
    }
  }
  return string;  
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {

  let longest = '';
  let len = 0;
  let cur = '';
  let count = 0;
  const n = str.length;

  for (var i = 0; i < n; i++) {
    if (str[i] == ' ') {
      if (count > len) {
        longest = cur;
        len = count;
        cur = '';
        count = 0;
      }
    }
    else {
      count += 1;
      cur += str[i];
    }
  }


  if (count > len) {
    return cur
  }

  return longest

}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}
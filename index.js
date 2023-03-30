function isPalindrome(word) {
  for (i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
    We'll be invoking the function with an argument of a lower-case string (single word)
    To evaluate if it's a palindrome, we need to look at each letter of the string
    Look at the first letter, then compare it to the last letter
    Then do the same with the second letter and the second-to-last letter
    And repeat until you get to the middle of the word
    Iterate through each letter of the word -- so we need a for loop, with iteration
    Iterate until the middle of the word -- indicated by being less than half of the string's length
    If at any point the two compared characters don't match, return false
    Otherwise return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

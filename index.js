/** @format */

function isPalindrome(word) {
	// Write your algorithm here
	// Convert the word to lowercase to handle case sensitivity
	const normalizedWord = word.toLowerCase();
	// Reverse the word
	const reversedWord = normalizedWord.split("").reverse().join("");
	// Check if the reversed word is the same as the original word
	return normalizedWord === reversedWord;
}

/* 
  Add your pseudocode here
  1. Convert the word to lowercase.
  2. Reverse the word.
  3. Compare the reversed word with the original word.
  4. If they are the same, return true.
  5. Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  The function isPalindrome takes a string as input and checks if it is a palindrome. 
  A palindrome is a word that reads the same backward as forward. 
  The function first converts the input string to lowercase to ensure the comparison is case-insensitive. 
  Then, it reverses the string and compares the reversed string to the original string. 
  If they are the same, the function returns true, indicating that the input string is a palindrome. 
  Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));

	// Additional tests
	console.log("Expecting: true");
	console.log("=>", isPalindrome("level"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("palindrome"));

	console.log("");

	console.log("Expecting: true");
	console.log("=>", isPalindrome("madam"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("example"));
}

module.exports = isPalindrome;

/**
 1. Initialize variables:
   - length = 0
   - wordCount = 0
   - vowelCount = 0
   - currentWord = ""
   - isWordStarted = false

2. Read the input sentence character by character until the end of the sentence (character '.') is reached.

3. For each character read:
   a. Increment the length variable by 1.
   b. If the character is not a space:
      i. Append the character to the currentWord.
      ii. Set isWordStarted to true if it was false (i.e., a new word starts).
   c. If the character is a space:
      i. Set isWordStarted to false (i.e., the word ends).
      ii. Increment wordCount by 1 if the currentWord is not empty.
      iii. Reset the currentWord to an empty string.

4. After the loop (i.e., after reaching the end of the sentence), check if there is any remaining word in the currentWord variable:
   a. Increment wordCount by 1 if the currentWord is not empty.

5. Convert the entire sentence to lowercase for vowel counting.

6. For each character in the sentence:
   a. If the character is a vowel (i.e., 'a', 'e', 'i', 'o', 'u'):
      i. Increment vowelCount by 1.

7. Output the following results:
   - Length of the sentence (length)
   - Number of words in the sentence (wordCount)
   - Number of vowels in the sentence (vowelCount)

 */


   ////////////////////////////
//    CODE IN JAVASCRIPT
function analyzeSentence(sentence) {
  // Initialize variables
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;
  let currentWord = "";
  let isWordStarted = false;

  // Read the sentence character by character
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    length++;

    // If the character is not a space, add it to the current word
    if (char !== ' ') {
      currentWord += char;
      isWordStarted = true;
    }

    // If the character is a space or it's the last character in the sentence
    if (char === ' ' || i === sentence.length - 1) {
      // If a word has ended, increment the word count
      if (isWordStarted) {
        wordCount++;
        isWordStarted = false;
      }
      // Reset the currentWord for the next word
      currentWord = "";
    }

    // Count vowels
    const lowercaseChar = char.toLowerCase();
    if (lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' || lowercaseChar === 'o' || lowercaseChar === 'u') {
      vowelCount++;
    }
  }

  // Output the results
  console.log("Length of the sentence:", length);
  console.log("Number of words in the sentence:", wordCount);
  console.log("Number of vowels in the sentence:", vowelCount);
}

// Example usage:
const sentence = "Hello, this is a sample sentence. It ends here.";
analyzeSentence(sentence);

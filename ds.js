/**
Problem 1
1. Concatenate both sets into a single array.
2. Create an empty object to store the occurrences of each element as keys.
3. Iterate through the concatenated array and count the occurrences of each element using the object created in the previous step.
4. Finally, sum up all the distinct elements by iterating through the object's keys and adding the numeric keys (distinct elements) to get the total sum.
Here's the JavaScript code to achieve this:
 */

///////////////////////
////Code in Javascript
function sumOfDistinctElements(set1, set2) {
    // Concatenate both sets into a single array
    const concatenatedArray = set1.concat(set2);
  
    // Create an object to store the occurrences of each element
    const elementCounts = {};
  
    // Count occurrences of each element in the concatenated array
    for (let i = 0; i < concatenatedArray.length; i++) {
      const element = concatenatedArray[i];
      elementCounts[element] = (elementCounts[element] || 0) + 1;
    }
  
    // Sum up all the distinct elements
    let sum = 0;
    for (const element in elementCounts) {
      if (elementCounts.hasOwnProperty(element) && !isNaN(Number(element))) {
        sum += Number(element);
      }
    }
  
    return sum;
  }
  
  // Example usage:
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const output = sumOfDistinctElements(set1, set2);
  console.log("Output:", output); // Output: 13
  


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
  

/**
 Problem 2
 Define a procedure dot_product that takes two vector arrays v1 and v2 as input and calculates their dot product.

The procedure should create a variable ps and set it to zero.
Loop through each element of v1 and v2 simultaneously.
For each pair of corresponding elements, multiply them and add the result to the ps variable.
After the loop, return the value of ps as the dot product of v1 and v2.
Define a procedure are_vectors_orthogonal that takes two vector arrays v1 and v2 as input and checks if they are orthogonal.

Call the dot_product procedure with v1 and v2 as arguments and store the result in a variable dotProduct.
If the dotProduct is equal to zero, then the vectors are orthogonal. Return true.
Otherwise, the vectors are not orthogonal. Return false.
Repeat the following steps for each pair of vectors (v1, v2) in the input:

a. Call the are_vectors_orthogonal procedure with v1 and v2 as arguments.
b. If the return value is true, print "Vectors v1 and v2 are orthogonal."
c. If the return value is false, print "Vectors v1 and v2 are not orthogonal."

Here's the JavaScript code representation of the algorithm:
 */

//////////////////////////////////////////
///////Code in Javascript
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  function are_vectors_orthogonal(v1, v2) {
    const dotProduct = dot_product(v1, v2);
    return dotProduct === 0;
  }
  
  // Example usage:
  const vectors = [
    [[1, 0], [0, 1]], // Two orthogonal vectors
    [[1, 2], [3, 4]], // Two non-orthogonal vectors
    [[2, 0, 1], [0, 1, 0]], // Two orthogonal vectors
  ];
  
  for (const [v1, v2] of vectors) {
    if (are_vectors_orthogonal(v1, v2)) {
      console.log("Vectors v1 and v2 are orthogonal.");
    } else {
      console.log("Vectors v1 and v2 are not orthogonal.");
    }
  }

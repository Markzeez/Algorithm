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
  
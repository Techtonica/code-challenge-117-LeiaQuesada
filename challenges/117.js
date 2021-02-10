// ## Array Intersection
//
// _Idea from_ _[lodash _.intersection](https://lodash.com/docs/4.17.15#intersection)_
//
// Given two arrays, find the item(s) that are present in both.
//
// ```
// `let a = ['A', 'B', 'Z']
// let b = ['Z', 'X', 'Y']
//
// intersection(a, b)
// _// => ['Z']_`
//
// ```
//
// To get it working, don't worry about efficiency. Later we'll learn about specialized data structures that make this simpler/efficient.

function intersection(a, b){
  // create accumulator array to be returned
  let same = [];
    // for loop to check elements of outter array
    for (let i = 0; i < a.length; i++) {
    // for loop to check ele of inner array 
      for (let j = 0; j < b.length; i++) {
        // check if outer array ele is in inner array
        if (a[i] === b[j]) {
        // if so, push ele into return array
          same.push(b[j]);
        }
      }
    }
  return same;
}



module.exports = intersection;

function reverseString(str) {
  let y = str.length
  let oStr = ""
    while (y > 0) {
      y--
      oStr += str[y]
    }
  return oStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// what I am trying to do is reverse the order of all of the characters in a string

// for example, If I am given "house", I want to return "esuoh"

// put another way:
// h o u s e
// 0 1 2 3 4 
// turns into
// e s u o h
// 0 1 2 3 4 

// the index range we will always be working with is 0 through str.length - 1

// we always want string.length - 1 to be the new zero
// and
// we always want 0 to be the new string.length - 1

// hard coded, we want... string.length - 1, string.length - 2, string.length - 3, etc UNTIL 0

// let x = string.length
// let y = 0

// for string.length 


//test commit
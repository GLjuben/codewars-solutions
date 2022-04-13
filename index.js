// My codewars practice

// 1.Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
// call the function;
// minMax([1,2,3,4,5]);

//2.In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
const filter_list = (l) => {
  // Return a new array with the strings filtered out
  return l.filter((e) => {
    return typeof e === "number";
  });
};
// call the function
// filter_list([1,2,'aasf','1','123',123]);

// 3. Convert a String to a Number!
const stringToNumber = (str) => {
  return parseInt(str);
  //or
  //return Number(str);
};
//call the func;
// stringToNumber('123456')
// stringToNumber('-5')

//4. Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
const areYouPlayingBanjo = (name) => {
  if (name.charAt(0) === "R" || name.charAt(0) === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
  // other soultion:
  //   let namee = name.split("");
  //   if (namee[0] === "R" || namee[0] === "r") {
  //     return name + " " + "plays banjo";
  //   } else {
  //     return name + " " + "does not play banjo";
  //   }
};
//call the func:
// areYouPlayingBanjo('Paul');
// areYouPlayingBanjo('Ringo');

//5.Given a number n, return the number of positive odd numbers below n
const oddCount = (n) => {
  return Math.floor(n / 2);
};
// call the func:
// oddCount(15);

//6.Complete the solution so that it reverses the string passed into it.
const solution = (str) => {
  return str.split("").reverse().join("");
};
// solution('world')

//7.Implement a function that accepts 3 integer values a, b, c.
//The function should return true if a triangle can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).
const isTriangle = (a, b, c) => {
  return a + b > c && a + c > b && c + b > a;
};
// isTriangle(1, 2, 3);

//8. Write a function that always returns 5.
//Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
const unusualFive = () => {
  return "aaale".length;
};

//9. Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
//past();

//10. Remove first and last character from the string;
function removeChar(str) {
  return str.slice(1, -1);
}
//removeChar('Words');

//11.he cockroach is one of the fastest insects. Write a function which takes its speed in km per
//hour and returns it in cm per second, rounded down to the integer (= floored).
function cockroachSpeed(s) {
  //Good Luck!
  let kmToCm = Math.floor((s * 100000) / 3600);
  return kmToCm;
}
// cockroachSpeed(16);

//12.This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  // your code........
  return number % 2 === 0 ? number * 8 : number * 9;
}

//13. You are given the length and width of a 4-sided polygon.
//The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = (l, w) => {
  if (l === w) {
    return l * w;
  } else {
    return l * 2 + w * 2;
  }
};
// areaOrPerimeter(6, 10) --> 32
// areaOrPerimeter(4, 4) --> 16

//14.Take an array and remove every second element from the array.
//Always keep the first element and start removing with the next element.
function removeEveryOther(arr) {
  return arr.filter((e, i) => i % 2 === 0);
}
// removeEveryOther([
//   "Keep",
//   "Remove",
//   "Keep",
//   "Remove",
//   "Keep",
//   "Remove",
//   "Keep",
// ]);

//15. All of the animals are having a feast! Each animal is bringing one dish.
//There is just one rule: the dish must start and end with the same letters as the animal's name.
//For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate
// whether the beast is allowed to bring the dish to the feast.
//Assume that beast and dish are always lowercase strings, and that each has at least two letters.
//beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
  //your function here
  //first letter beast
  let fbl = beast.charAt(0);
  // last letter beast
  let lbl = beast.charAt(beast.length - 1);

  //first letter dish
  let fdl = dish.charAt(0);
  //last letter dish
  let ldl = dish.charAt(dish.length - 1);

  if (fbl === fdl && lbl === ldl) {
    return true;
  } else {
    return false;
  }
}
// feast('beastName','dishName')

//16.You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
function otherAngle(a, b) {
  let aA = Math.abs(a);
  let bB = Math.abs(b);

  let c = 180 - (aA + bB);
  return c;
}
// otherAngle(45,65)

// 17. Your task is to make two functions (max and min, or maximum and
//minimum, etc., depending on the language) that receive
// a list of integers as input and return, respectively, the largest and lowest number in that list.
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
// min([-52, 56, 30, 29, -54, 0, -110]);
// max([-52, 56, 30, 29, -54, 0, -110]);

//18. Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
  } else if (p1 === "paper" && p2 === "paper") {
    return "Draw!";
  } else if (p1 === "paper" && p2 === "scissors") {
    return "Player 2 won!";
  } else if (p1 === "rock" && p2 === "paper") {
    return "Player 2 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "rock") {
    return "Draw!";
  } else if (p1 === "scissors" && p2 === "scissors") {
    return "Draw!";
  }
};
// rps("scissors", "scissors");
// rps("rock", "paper");
// rps("paper", "rock");

//19.
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
// findNeedle([
//   "3",
//   "123124234",
//   undefined,
//   "needle",
//   "world",
//   "hay",
//   2,
//   "3",
//   true,
//   false,
// ]);

//20. Build a function that returns an array of integers from n to 1 where n>0.
const reverseSeq = (n) => {
  let array = [];
  for (let i = n; i > 0; i -= 1) {
    array.push(i);
  }
  return array;
};
// reverseSeq(5);

//21.Given a string str, reverse it omitting all non-alphabetic characters
function reverseLetter(str) {
  //coding and coding..
  return str
    .match(/[a-zA-Z]+/g)
    .join("")
    .split("")
    .reverse()
    .join("");
}
reverseLetter("ultr530?n");

//22. create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
const gimme = (inputArray) => {
  // Implement this function
  let sorted = [...inputArray].sort((a, b) => a - b);
  let index = inputArray.indexOf(sorted[1]);
  return index;
};
// gimme([2, 3, 1])

//23.Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
const disemvowel = (str) => {
  let newString = "",
    i;
  for (let i = 0; i < str.length; i++) {
    if (!"aeiouAEIOU".includes(str.charAt(i))) {
      newString += str[i];
    }
  }
  return newString;
};

// disemvowel(
//   "Led Zeppelin are talented, complex, grasping, beautiful and dangerous,they made one of the most enduring bodies of composition and performance in twentieth-century music, despite everything they had to overpower, including themselves"
// );

// /24.An isogram is a word that has no repeating letters,
//consecutive or non-consecutive. Implement a function that determines whether a string that contains only
// letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
const isIsogram = (str) => {
  let strToLowercase = str.toLowerCase();
  let arr = strToLowercase.split("");
  let result = arr.every((a, b) => strToLowercase.indexOf(a) === b);
  return result;
};
// isIsogram("Dermatoglyphics");
// isIsogram("aba");

//25.Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  let numbers = n;
  let reversedArr = String(numbers).split("").reverse().map(Number);
  return reversedArr;
}
//   digitize(348523197)

//26.Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = (test, original) => {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

// 27. This time no story, no theory. The examples below show you how to write function accum:
const accum = (s) => {
  // your code
  const result = [];
  const lowerString = s.toLowerCase();
  for (let i = 0; i < lowerString.length; i++) {
    let str = lowerString[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += lowerString[i];
    }
    result.push(str);
  }
  return result.join("-");
};
// accum("RqaEzty")

// 28. Finish the solution so that it sorts the passed in array of numbers. If the function passes in an
//empty array or null/nil value then it should return an empty array.
const solutions = (nums) => {
  if (nums === 0 || nums === null) {
    return [];
  } else if (nums !== 0) {
    return nums.sort((a, b) => a - b);
  }
};
// solutions([1, 2, 10, 50, 5]);

// 29.Implement a function that adds two numbers together and returns their sum in binary.
//The conversion can be done before, or after the addition.
// The binary number returned should be a string.
const addBinary = (a, b) => {
  let sum = a + b;
  return sum.toString(2);
};
addBinary(2, 3);

// 30. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
const validatePIN = (pin) => {
  //return true or false
  return /^(\d{4}|\d{6})$/.test(pin);
};
// validatePIN('1234')

// 31.Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  var vowelsCount = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
// getCount("gentelmen you can not fight in here this is the war room");

// 32. Write a function that takes an array of strings as an argument and returns a
// sorted array containing the same strings, ordered from shortest to longest.
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
const sortByLength = (array) => {
  // Return an array containing the same strings, ordered from shortest to longest
  let sortedArr = array.sort((e1, e2) => {
    if (e1.length > e2.length) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortedArr;
};
// sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);

//33. Given a non-empty array of integers, return the
// result of multiplying the values together in order
function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result = result * x[i];
  }
  return result;
}
// grow([1, 2, 3, 4]);

//34. Write a function named repeater() that takes two arguments (a string and a number),
// and returns a new string where the input string is repeated that many times.
function repeater(string, n) {
  let result = string.repeat(n);
  return result;
}
// repeater("a", 5);

// 35.Your task is to make a function that can take any non-negative integer as an argument and
// return it with its digits in descending order. Essentially, rearrange the digits to create the
// highest possible number.
function descendingOrder(n) {
  let numToStrArr = n
    .toString()
    .split("")
    .map((n) => parseInt(n));
  let sortedArr = numToStrArr.sort((a, b) => b - a);
  let convNumToStr = sortedArr.map((a) => a.toString()).join("");
  let reversedInt = parseInt(convNumToStr);
  return reversedInt;
}
// descendingOrder(23455512);

// 36. Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
  //enter code here
  const sumOfNums = array.reduce((total, item) => total + item, 0);
  if (sumOfNums % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// oddOrEven([1, 2, 3, 4, 5]);
// oddOrEven([1, 2, 3, 4, 6]);

//37. Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.
function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let totalSum = marks.reduce((total, mark) => total + mark, 0);
  let averageSum = totalSum / marks.length;
  let roundedSum = Math.floor(averageSum);
  return roundedSum;
}
// getAverage([5, 4, 2, 3, 3, 4, 2, 3, 4, 4, 5, 5, 5, 5, 1, 2, 5, 2, 3]);

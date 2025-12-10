function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, "VIII", 9);
  arr.unshift("I", 2, "three");
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) == !-1) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array"],
  ["mutate", 1327.98, "splice", "slice", "push"],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
  // Only change code above this line
];

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
}

function factorialize(num) {
  let count = 1;
  while (num >= 1) {
    count = count * num--;
  }
  return count;
}

factorialize(5);

function word(str) {
  let newArr = str.split("");
  let longestWord = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length > longestWord) {
      longestWord = newArr[i].length;
    }
  }
  return longestWord;
}
word("The quick brown fox jumped over the lazy dog");

function largestOfFour(arr) {
  let bigArr = [];
  for (let i = 0; i < arr.length; i++) {
    let bigNum = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > bigNum) {
        bigNum = arr[i][j];
      }
    }
    bigArr.push(bigNum);
  }
  return bigArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

function confirmEnding(str, target) {
  let lengthStr = str.length;
  let lengthTarget = target.length;

  return str.substring(lengthStr - lengthTarget) === target;
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  let word = "";
  if (num <= 0) {
    return word;
  } else {
    for (let i = 0; i < num; i++) {
      word = word + str;
    }
    return word;
  }
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
  let truncate = "...";
  if (str.length > num) {
    let word = str.slice(0, num);
    return (word = word + truncate);
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num) === true) {
      break;
    } else {
      num = undefined;
    }
  }
  return num;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

function booWho(bool) {
  return typeof bool === "boolean";
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
  let newArr = [...arr];

  return newArr.filter(Boolean);
}

bouncer([false, null, 0, NaN, undefined, ""]);

function getIndexToIns(arr, num) {
  let sortedArr = arr.sort((a, b) => a - b);
  let indx;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= num) {
      indx = i;
      return indx;
      break;
    }
  }
  return arr.length;
}

getIndexToIns([], 50);

function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      return false;
    }
  }
  return true;
}

mutation(["Mary", "Army"]);

function chunkArrayInGroups(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Languague Detection Code
import { franc, francAll } from "franc";
import langs from "langs";

const text = process.argv[2];
const code = franc(text);

const language = langs.where("3", code);
console.log(language.name);

// Languague Detection Code
import { franc, francAll } from "franc";
import langs from "langs";

const text = process.argv[2];
const code = franc(text);

const language = langs.where("3", code);
console.log(language.name);

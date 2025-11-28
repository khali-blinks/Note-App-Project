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

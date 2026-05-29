const repeatNumbers = function (data) {
<<<<<<< HEAD

  let result = [];

  for (let i = 0; i < data.length; i++) {

    let number = data[i][0];
    let times = data[i][1];

    let part = "";

    for (let j = 0; j < times; j++) {
      part += number;
    }

    result.push(part);
=======
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let number = data[i][0];
    let repeat = data[i][1];

    let repeatedNumbers = "";

    for (let j = 0; j < repeat; j++) {
      repeatedNumbers += number;
    }

    result.push(repeatedNumbers);
>>>>>>> befe1c5 (Exercise 08 completed)
  }

  return result.join(", ");
};

console.log(repeatNumbers([[1, 10]])); 
// 1111111111

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
); 
// 11, 222

console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
); 
// 10101010, 343434343434, 9292

module.exports = repeatNumbers;

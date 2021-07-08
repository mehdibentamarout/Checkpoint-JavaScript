// 1-using + operator combine your partner first and last name .

function combine(str1, str2) {
  return str1 +" "+ str2;
}

// 2-find if the number 13 is a multiple of 3 or not.
const isMultipleOfThree = num => {
  if (num === 0) return true;

  if (num < 0) return false;

  return isMultipleOfThree(num - 3);
};


// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
var ages = [13, 14, 13, 15, 16, 17, 19, 13, 16, 15];

// 4-calculate your age in seconds.

function AgesInSeconds() {
  // TODO: your code here
}

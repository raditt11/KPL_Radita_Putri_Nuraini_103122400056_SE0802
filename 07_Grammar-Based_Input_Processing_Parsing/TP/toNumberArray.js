function toNumberArray(number) {
  let arr = [];

  // Jika input string
  if (typeof number === "string") {
    arr = number.split(",");
  }
  // Jika input array
  else if (Array.isArray(number)) {
    arr = number;
  } else {
    return [];
  }

  return arr
    .map(item => Number(item.trim()))
    .filter(num => !isNaN(num));
}

// Testing
console.log(toNumberArray("1, 2"))              // [1, 2]
console.log(toNumberArray(["1", "2"]))          // [1, 2]
console.log(toNumberArray(" 11,55,33   "))      // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]
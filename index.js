//For in interates in object:
const myObj = {
  name: "apurbo",
  estd: "1998"
};
for (value in myObj) {
  // we can write anything instead of value. it will work fine.
  //will just loop though the object named myObj and get the value
  console.log(value);
}

//For of  interates in array:
const newArray = [1, 2, 3, 4, 5, 6];
for (value of newArray) {
  console.log(value);
}

const myString = "I Love You";
for (value of myString) {
  console.log(value);
}

// if we run for in loop in an array/ string it will print the index number of the elements . Not the elements

//array:
for (value in newArray) {
  console.log(value);
}

// string:
for (value in myString) {
  console.log(value);
}

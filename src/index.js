// arrays

let favFood = "Dominos";

favFood = "Pasta";
//alert(favFood)

let str = "Hello, Twitch";
//alert(str[1])
//alert( str.charAt(1))

function divideAndMulti(n1, n2, n3) {
  let prod = (n1 / n2) * n3;
  //alert(prod)
}
divideAndMulti(12, 3, 4);

// create a function that takes in 1 number. alert the cube root of the number. call the function.
function cubeRootIt(robot) {
  //alert( Math.cbrt(robot).toFixed(4) )
}
cubeRootIt(9);

// *conditionals*
// create a function that takes in a month. If it is a summer month, alert "YAY". If another month, alert "Booo"
function checkForSummer(month) {
  let monthLowerCase = month.toLowerCase();
  if (
    monthLowerCase == "june" ||
    monthLowerCase == "july" ||
    monthLowerCase == "august"
  ) {
    alert("YAY");
  } else {
    alert("Booo");
  }
}

// *loops
// create a function that takes in a number. Console.log every number from 1 to that number while skippiing multiples of 5
function skip5s(n) {
  for (let i = 1; i <= n; i++) {
    if (i & (5 !== 0)) {
      console.log(i);
    }
  }
}

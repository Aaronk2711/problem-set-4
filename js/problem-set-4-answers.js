/*
 * SOLUTION: Hello.
 */

function hello() {  //defines function hello
  let result = "Hello, AP Computer Science Principles!"; //defines result as a string
  document.getElementById("output1").innerHTML = result; //prints the string 'result' on the page

  check("hello"); // uses the hidden js file to check the function hello
}

/*
 * SOLUTION: Hello, Again.
 */

function helloAgain() { //defines function helloagain
  let name = prompt("What is your name?"); //prompt the user to enter their name

  let result = "Hello, " + name + "!"; //defines result as a greeting with the persons name
  document.getElementById("output2").innerHTML = result; //prints the result to the page

  check("helloAgain", name); // uses the hiddn js file to check the function helloAgain
}

/*
 * SOLUTION: Celsius.
 */

function celsius() { //defines the function celsius
  let cels = Number(((Math.random() * 1001) - 100).toFixed(2)); //ggenerates a random number between 1 and 1000 to the second decimal point and assigns it to celsius

  let fahr = cels * 9 / 5 + 32; //converts the celcius to fahrenheit using the formula
  let result = cels + " degrees Celsius equals " + fahr.toFixed(2) + " degrees Fahrenheit."; // makes a full sentence with the celsius and farhenheit values
  document.getElementById("output3").innerHTML = result; //prints the full sentence to the page

  check("celsius", cels); //uses the hidden js file to check the function celsius
}

/*
 * SOLUTION: Fahrenheit.
 */

function fahrenheit() { // defines the function fahrenheit
  let fahr = Number(((Math.random() * 1001) - 100).toFixed(2)); //generates a random number between 1 and 1000 to the second decimal point and assigns it to farhenheit

  let cels = (fahr - 32) * 5 / 9; // converts fahrenheit to celsius using the formula
  let result = fahr + " degrees Fahrenheit equals " +  cels.toFixed(2) + " degrees Celsius."; // makes a full sentence with the different values
  document.getElementById("output4").innerHTML = result; // prints the sentence to the page

  check("fahrenheit", fahr); //uses the hidden js file to check the function fahrenheit
}

/*
 * SOLUTION: Inches.
 */

function inches() { //defines the function inches
  const MILE = 63360; //defines a mile as 63360 inches
  const YARD = 36; //defines a yard as 36 inches
  const FOOT = 12; //defines a foot as 12 inches

  let input = -1; //sets input to -1
  while (input < 0) { //checks if input is < 0, will be true the first time
    input = Number(prompt("Enter a non-negative integer.")); //asks the user to input a non-negative integer. Will go on until they enter a positive integer

    if (input === null) { //checks if the input is null
      break; //if it is null, it will break out of the if loop and goes to the end, will print nothing
    } else if (Number.isNaN(input)) { //checks if the number that is inputed is not a number
      input = -1; //sets input equal to -1, returns back to while loop
    } else if (!Number.isInteger(input)) { //checks if the number that is inputed is not an integer
      input = -1; //sets input equal to -1, returns back to while loop
    }
  }

  if (input !== null) { //checks if input is valid
    let inches = input; //sets inches to the input value
    let miles = Math.floor(inches / MILE); //converts inches into miles rounded down
    inches = inches % MILE; //returns the remaining inches so it can be used in the next formula
    let yards = Math.floor(inches / YARD); //converts remaining inches into yards rounded down
    inches = inches % YARD; //returns the remaining inches so it can be used in the next formula
    let feet = Math.floor(inches / FOOT); //converts remaining inches into feet rounded down
    inches = inches % FOOT; //returns remaining inches after all conversions

    let result = "Miles: " + miles + "<br/>" + //declares result as miles yards feet inches combined
                 "Yards: " + yards + "<br/>" +
                 "Feet: " + feet + "<br/>" +
                 "Inches: " + inches;
    document.getElementById("output5").innerHTML = result; //prints all of the values together
  } else {
    document.getElementById("output5").innerHTML = ""; //if input is null/not working, then it prints nothing
  }

  check("inches", input);//uses the hidden js file to check the function inches
}

/*
 * SOLUTION: Centimeters.
 */

function centimeters() { //defines function centimeters
  const KILOMETER = 100000; //defines a kilometer as 100000 cm
  const METER = 100; //defines a meter as 100 cm

  let input = -1; //sets input to -1
  while (input < 0) { //checks if input is less than 0, will be true the first time around
    input = Number(prompt("Enter a non-negative integer.")); //sets input equal to the users answer to the prompt

    if (input === null) { //checks if input is null
      break; //will break the if loop, go to the end and print nothing
    } else if (Number.isNaN(input)) { //checks if the number is not a number
      input = -1; //sets input to -1, will return to while loop
    } else if (!Number.isInteger(input)) { //checks if the number is not an integer
      input = -1; //sets input to -1, will return to while loop
    }
  }

  if (input !== null) { //checks if the input is valid
    let centimeters = input; //sets centimeters to the user input
    let kilometers = Math.floor(centimeters / KILOMETER); //converts centimeters into kilometers roiunded down
    centimeters = centimeters % KILOMETER; //returns the remaining centimeters so it can be used in the next formula
    let meters = Math.floor(centimeters / METER); //converts centimeters into meters rounded down
    centimeters = centimeters % METER;//returns the remaining centimeters after all conversions

    let result = "Kilometers: " + kilometers + "<br/>" + //declares result as kilometers meters centimeters combined
                 "Meters: " + meters + "<br/>" +
                 "Centimeters: " + centimeters;
    document.getElementById("output6").innerHTML = result; //prints all the values together
  } else {
    document.getElementById("output6").innerHTML = ""; //if input is null/not working, then it prints nothing
  }

  check("centimeters", input); //uses the hidden js file to check the function centimeters
}

/*
 * SOLUTION: Fluid Ounces.
 */

function fluidOunces() { //defines the function fluidOunces
  const GALLON = 128; //defines a gallon as 128 fluidounces
  const QUART = 32; //defines a quart as 32 fluidounces
  const PINT = 16; //defines a pint as 16 fluidounces
  const CUP = 8; //defines a cup as 8 fluidounces

  let input = -1; //sets input to -1
  while (input < 0) { //checks if the input is less than 0, will be true the first time
    input = Number(prompt("Enter a non-negative integer.")); //asks the user for an input and stores it in the input variable

    if (input === null) { //checks if input is null
      break; //will break the if loop, go to the end and print nothing
    } else if (Number.isNaN(input)) { //checks if the input is not a number
      input = -1; //sets input to -1, will return to while loop
    } else if (!Number.isInteger(input)) { //checks if the input is not an integer
      input = -1; //sets input to -1, will return to while loop
    }
  }

  if (input !== null) { //checks if input is not null
    let fluidOunces = input; //sets fluidounces to input
    let gallons = Math.floor(fluidOunces / GALLON); //converts fluidounces into gallons rounded down
    fluidOunces = fluidOunces % GALLON; //returns the remaining fluidounces so it can be used in the next formula
    let quarts = Math.floor(fluidOunces / QUART); //converts fluidounces into quarts rounded down
    fluidOunces = fluidOunces % QUART; //returns the remaining fluidounces so it can be used in the next formula
    let pints = Math.floor(fluidOunces / PINT); //converts fluidounces into pints rounded down
    fluidOunces = fluidOunces % PINT; //returns the remaining fluidounces so it can be used in the next formula
    let cups = Math.floor(fluidOunces / CUP); //converts fluidounces into cups rounded down
    fluidOunces = fluidOunces % CUP; //returns the remaining fluidounces after all conversions

    let result = "Gallons: " + gallons + "<br/>" + //declares result as gallons quarts pints cups fluidounces combined
                 "Quarts: " + quarts + "<br/>" +
                 "Pints: " + pints + "<br/>" +
                 "Cups: " + cups + "<br/>" +
                 "Fluid Ounces: " + fluidOunces;
    document.getElementById("output7").innerHTML = result; //prints all values together
  } else {
    document.getElementById("output7").innerHTML = ""; //if input is null/not working, just print nothing
  }

  check("fluidOunces", input); //uses the hiddn js file to check the function fluidounces

/*
 * SOLUTION: Ounces.
 */

function ounces() { //defines function ounces
  const TON = 32000; //defines a ton as 32000 ounces
  const POUND = 16; //defines a pound as 16 ounces

  let input = -1; //sets input to -1
  while (input < 0) { //checks if input is less than 0, will be true the first time
    input = Number(prompt("Enter a non-negative integer.")); //asks the user for an input and stores it

    if (input === null) { //checks if the input is null
      break; //will break the loop, go to end and print nothing
    } else if (Number.isNaN(input)) { //checks if input is not a number
      input = -1; //sets input to -1, returns to beginning of while loop
    } else if (!Number.isInteger(input)) { //checks if input is not an integer
      input = -1; //sets input to -1, returns to beginning of while loop
    }
  }

  if (input !== null) { //checks if input is not null
    let ounces = input; //sets ounces equal to input
    let tons = Math.floor(ounces / TON); //converts ounces into tons rounded down
    ounces = ounces % TON; //returns the remaining ounces so it can be used in the next formula
    let pounds = Math.floor(ounces / POUND); //converts ounces into pounds rounded down
    ounces = ounces % POUND; //returns the remaining ounces after all conversions

    let result = "Tons: " + tons + "<br/>" + //declares result as tons pounds ounces combined
                 "Pounds: " + pounds + "<br/>" +
                 "Ounces: " + ounces;
    document.getElementById("output8").innerHTML = result; //prints all of them together
  } else {
    document.getElementById("output8").innerHTML = ""; //if input is null or not working, prints nothing
  }

  check("ounces", input); //uses hidden js file to check the function ounces
}

/*
 * SOLUTION: Money.
 */

function money() { //defines function money
  const DOLLAR = 100; //defines dollar as 100 pennies
  const QUARTER = 25; //defines quarter as 25 pennies
  const DIME = 10; //defines dime as 10 pennies
  const NICKEL = 5; //defines nickel as 5 pennies

  let input = -1; //sets input equal to -1
  while (input < 0) { //checks if input is less than 0, will be true the first time
    input = Number(prompt("Enter a non-negative integer.")); //asks the user for input and stores it in input variable

    if (input === null) { //checks if user input is null
      break; //breaks out of loop, go to end and print nothing
    } else if (Number.isNaN(input)) { //checks if input is not a number
      input = -1; //sets input to -1, will go back to while loop
    } else if (!Number.isInteger(input)) { //checks if input is not an integer
      input = -1; //sets input to -1, will go back to while loop
    }
  }

  if (input !== null) { //checks if input is not null
    let pennies = input; //sets pennies equal to user input
    let dollars = Math.floor(pennies / DOLLAR); //converts pennies into dollars rounded down
    pennies = pennies % DOLLAR; //returns the remaining pennies so it can be used in the next formula
    let quarters = Math.floor(pennies / QUARTER); //converts pennies into quarters rounded down
    pennies = pennies % QUARTER; //returns the remaining pennies so it can be used in the next formula
    let dimes = Math.floor(pennies / DIME); //converts pennies into dimes rounded down
    pennies = pennies % DIME; //returns the remaining pennies so it can be used in the next formula
    let nickels = Math.floor(pennies / NICKEL); //converts pennies into nickels rounded down
    pennies = pennies % NICKEL; //returns the remaining pennies after all conversions

    let result = "Dollars: " + dollars + "<br/>" + //declares result as dollars quarters dimes nickels pennies combined
                 "Quarters: " + quarters + "<br/>" +
                 "Dimes: " + dimes + "<br/>" +
                 "Nickels: " + nickels + "<br/>" +
                 "Pennies: " + pennies;
    document.getElementById("output9").innerHTML = result; //prints all the values together
  } else {
    document.getElementById("output9").innerHTML = ""; //if results is null or not working, prints nothing
  }

  check("money", input); //uses hidden js file to check function money
}

/*
 * SOLUTION: Change.
 */

function change() { //defines function change
  const QUARTER = 25; //defines quarter as 25 pennies
  const DIME = 10; //defines dime as 10 pennies
  const NICKEL = 5; //defines nickel as 5 pennies

  let input = -1; //sets input equal to -1
  while (input < 0 || input >= 1) { //checks if input is less than 0 or greater than 1, will evaluate to true first time
    input = Number(prompt("Enter a non-negative number less than 1.00.")); //asks the user for an input and stores it as input

    if (input === null) { //checks if number is null
      break; //will break loop, go to end and print nothing
    } else if (Number.isNaN(input)) { //checks if input is not a number
      input = -1; //sets input to -1, will go back to while loop
    }
  }

  if (input !== null) { //checks if input is not null
    let pennies = input; //sets pennies equal to input
    pennies = Number((pennies * 100.00).toFixed(0)); //mutliplies pennies by 100 for easier conversions
    let quarters = Math.floor(pennies / QUARTER); //converts pennies into quarters rounded down
    pennies = pennies % QUARTER; //returns the remaining pennies so it can be used in the next formula
    let dimes = Math.floor(pennies / DIME); //converts pennies into dimes rounded down
    pennies = pennies % DIME; //returns the remaining pennies so it can be used in the next formula
    let nickels = Math.floor(pennies / NICKEL); //converts pennies into nickels rounded down
    pennies = pennies % NICKEL; //returns the remaining pennies after all conversions

    let coins = quarters + dimes + nickels + pennies; //sets coins to number of all types of coins combbined
    document.getElementById("output10").innerHTML = coins + (coins === 1 ? " coin." : " coins."); //checks if there is only 1 coin then prints number of coins and correct noun afterwards
  } else {
    document.getElementById("output10").innerHTML = ""; //if input is null/not working prints nothing
  }

  check("change", input); //uses hidden js file to check the funtion change
}

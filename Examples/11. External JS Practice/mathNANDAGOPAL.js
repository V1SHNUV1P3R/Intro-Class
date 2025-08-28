// Return a random integer between min and max, inclusive
function getRandomInt(min, max)
{
    var min = Number(document.getElementById("idTxtMin").value);
    var max = Number(document.getElementById("idTxtMax").value);

    //generate and store our random integer between the minimum and maximum values

    var randInt = Math.floor(Math.random() * (max - min + 1) ) + min;

    //return our randomly generated number
    return randInt;
}
function Task1()
{
    //var minimum = Number(document.getElementById("idTxtMin").value);
    var minimum = Number(idTxtMin.value);
    var maximum = Number(idTxtMax.value);

    //find the random integer between the max and min and store it
    var randomInteger = getRandomInt(minimum, maximum)

    var output = "The random number selected between ";
    output += minimum + " and " + maximum + " is " + randomInteger;

    alert(output);
}

//Take the input numToRound, and round it to numDecimal
//places, and return the rounded result
function roundNumber(numToRound, numDecimal)
{
    //store our power of 10 (how many decimals to round to)
    var power = Math.pow(10, numDecimal);

    //steps for rounding our number and storing it
    var newNum = numToRound * power;        //move the decimal place to the right
    newNum = Math.round(newNum);            //round the number
    newNum = newNum / power;                //move the decimal place to the left
    
    //return your rounded number
    return newNum;
}

//This function will use the roundNumber helper function to
//round the number the user inputs to the number of decimals
//the user inputs and alert the appropriate message
function Task2()
{
    //grab onto and store the number the user wants to round
    //and how many decimal places they wish to round that number
    var number = Number(idTxtValue.value);
    var decimal = Number(idTxtNumDigits.value);

    //use the roundNumber helper function to round
    //the number and store it
    var newDecimal = roundNumber(number, decimal);

    //generate and store our output message

    //alert the appropriate message
    alert(newDecimal);
}

//Take the input temperature in degrees Celsius, convert it
//to degrees Fahrenheit, and return that value
function getDegF(degC)
{
    var degF = degC * 9/5;
    degF = degF + 32;


    return degF;

}

//
function Task3()
{
    var degreesCelsius = Number(idTxtTemp.value);

    var degreesFahrenheit = getDegF(degreesCelsius)


    var output = degreesCelsius + " degrees Celsius converts to ";
    output += degreesFahrenheit + " degrees Fahrenheit. ";

    alert(output);
}
function getDefC(degF)
{
 var degC = degC - 32;
 degC = degF * 5/9;



return degC;
}
function Task4()
{
    var degreesFahrenheit = Number(idTxtTemp.value);

    var degreesCelsius = getDegC(degreesFahrenheit)


    var output = degreesFahrenheit + " degrees Fahrenheit converts to ";
    output += degreesCelsius + " degrees Celsius. ";

    alert(output);




}


//This function returns the distance between
//the points (x1,y1) and (x2,y2)
function getDistance(x1,y1,x2,y2)
{
    //Math.sqrt((x2-x1)^2 + (y2-y1)^2)

    // distance formula: sqrt of ((x2-x1)^2+(y2-y1)^2)
    var xSquared = Math.pow((x2-x1), 2);
    var ySquared = Math.pow((y2-y1), 2);

  
    //calculate the distance by
    //sqaure rooting the sum of xSqaured and ySqaured
    var distance = Math.sqrt(xSquared + ySquared);


    //return our distance
    return distance;


}
function displayDistance()
{
    //use get distancex1 y1 x2 y2 and store the distance
    //grab onto and store the values from the
    //text boxes the user filled in

    var X1 = Number(document.getElementById("idTxtX1").value);
    var Y1 = Number(document.getElementById("idTxtY1").value);
    var X2 = Number(document.getElementById("idTxtX2").value);
    var Y2 = Number(document.getElementById("idTxtY2").value);
    
    var distance = getDistance(X1,Y1,X2,Y2);

    //alert the following message:
    //The distance btween the two given points is (#)
    alert("The distance between (" + X1 + "," + Y1 + ") and (" + X2 + "," + Y2 + ") is " + distance );
}
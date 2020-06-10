//javascript standard easy way to find max values {it could be output only number}.....
var business = 950;
var minister = 550;
var government = 450;

var maxValue = Math.max(business, minister, government);
console.log(maxValue);



//find max of three values...
var business = 950;
var minister = 550;
var government = 450;

if(business > minister){
    if(business > government){
        console.log("business is bigger");
    }
    else{
        console.log("government is bigger");
    }
}
else{
    if(minister > government){
        console.log("minister is bigger");
    }
    else{
        console.log("government is bigger");
    }
} 


//find max of four values...
var business = 1500;
var minister = 1350;
var government = 1250;
var doctor = 1050;

if(business > minister){
    if(business > government){
        if(business > doctor){
            console.log("business is bigger");
        }
        else{
            console.log("doctor is bigger")
        }
    }
    else{
        console.log("government is bigger");
    }
}
else{
    if(minister > government){
        if(minister > doctor){
            console.log("minister is bigger");
        }
        else{
            console.log("doctor is bigger")
        }
    }
    else{
        console.log("government is bigger");
    }
}


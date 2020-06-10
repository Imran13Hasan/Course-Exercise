// Ekhane 10 er shoman or kom hole biscuits khabo kintu beshi hole noy. 
var biscuitPrice = 8;
if (biscuitPrice <= 10) {
    console.log("I will eat the biscuits");
}
else {
    console.log("Khali cha is better");
}


// Ekhane 10 er shoman hole biscuits khabo kintu 10 er kom or beshi hole noy. 
var biscuitPrice = 15;
if (biscuitPrice == 10) {
    console.log("I will eat the biscuits");
}
else {
    console.log("Khali cha is better");
}


// Ekhane 10 er kom or beshi hole biscuits khabo kintu 10 hole noy. 
var biscuitPrice = 10;
if (biscuitPrice != 10) {
    console.log("I will eat the biscuits");
}
else {
    console.log("Khali cha is better");
}

// Multiple conditionals | Ekhane 2 ta conditions e mante hobe must {(&&) it means 'And or Both'}
var jobPaiso = false;
var savingAmount = 200000;
if (jobPaiso == true && savingAmount >= 200000) {
    console.log("Asho tomar jonne patri khuji")
}
else{
    console.log("Tor kopale biya nai")
}


// Multiple conditionals | Ekhane jekono 1 ta condition mante hobe or 2 manleo hobe {(||) it means 'Or'}
var jobPaiso = false;
var savingAmount = 500000;
if (jobPaiso == true || savingAmount >= 200000) {
    console.log("Asho tomar jonne patri khuji")
}
else{
    console.log("Tor kopale biya nai")
}



// Multiple conditionals | Ekhane 2 ta condition e manle output ashbe 1no., Ektao na manle output ashbe 3 no., jodi jobPaiso condition mane r savingAmount er condition na o mane tobe output ashbe 2no. cz specific first conditon er jonne output deya ache. Abar shudu savingAmount condition manleo output 3no. ashbe cz savingAmount er jonne specific output deya nai.{(||) it means 'Or'}
var jobPaiso = true;
var savingAmount = 50000;
if (jobPaiso == true && savingAmount > 200000) {
    console.log("Asho tomar jonne patri khuji")
}
else if (jobPaiso == true) {
    console.log("Accha dekha jak")
}
else{
    console.log("Tor kopale biya nai")
}



// Multiple conditionals | Ekhane 2 ta condition e manle output ashbe 1no., Ektao na manle output ashbe 4no., jodi jobPaiso condition mane r savingAmount er condition na o mane tobe output ashbe 2no. cz specific first conditon er jonne output deya ache. Abar shudu savingAmount condition manleo output 3no. ashbe cz savingAmount er jonne specific output deya ache.{(||) it means 'Or'}
var jobPaiso = false;
var savingAmount = 300000;
if (jobPaiso == true && savingAmount > 200000) {
    console.log("Asho tomar jonne patri khuji")
}
else if (jobPaiso == true) {
    console.log("Accha dekha jak")
}
else if (savingAmount > 200000) {
    console.log("Thik ase dekha jabe")
}
else{
    console.log("Tor kopale biya nai")
}
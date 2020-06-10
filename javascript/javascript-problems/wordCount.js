var speech = "I am a      good person, my dream is become a    web developer";
var count = 0;

for(var i=0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){  // '&& speech[i-1] != " "' - this is for ignorance more than one white space so that code can't count white spaces as words...
        count++
    }
}
count++; //To add 1 number for last character...
console.log(count);
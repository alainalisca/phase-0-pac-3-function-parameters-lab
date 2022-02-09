//function logTwoValues(value1, value2) {
 //   console.log(`The two values are ${value1} and ${value2}.`);
//}

function introduction(name) {
    
    return (`Hi, my name is ${name}.`);
}
function introductionWithLanguage(name, language){ 
   
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`); 
}

function introductionWithLanguageOptional(name, language = "JavaScript") { 

    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
// takes in two arguments, a name and a language, and language defaults to JavaScript
}

// function introductionWithLanguageOptional(name, language = "Python") {

   // return `Hi, my name is ${name} and I am learning to program in ${language}.`;
//}

// takes in two arguments, a name and a language, and the default value can be overridden with an argument

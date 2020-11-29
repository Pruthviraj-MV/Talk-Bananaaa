
//here queryselctor assigns the entire event to the variable

//button click processing
var translateBtn = document.querySelector("#translate-btn");

//read input
var inputText = document.querySelector("#input-text");

//show output
var outputText = document.querySelector("#output-text");

//test server URL
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//source code of yoda url https://repl.it/@tanaypratap/lessonfourapi

var url = "https://api.funtranslations.com/translate/minion.json"



//function to create final URL with user input
function getFinalURL(text){
    return url+"?"+"text="+encodeURIComponent(text); //encoding user input string to attach with api url
}

function errorHandler (error) {
    console.log("Error Occurred");
    alert("Oops! Error Occurred. Please try after sometime");
}

//function to translation
function translatingHandler(){
    
    var userInput = inputText.value;
    
    fetch(getFinalURL(userInput))

        .then(response => response.json()) 
        //Also => .then(function responseHandler(response) { return reponse.json() ))
        
        .then(json => {
            var translatedText = json.contents.translated; //storing the translated value
            outputText.innerText = translatedText; //printing translated value in the output box
            console.log(json.contents.translated);
        })
       // Also => .then(function logJSON(json) { console.log(json) } )

       //error handling function
       .catch(errorHandler); //call back function if we encounter error on server
}



//EventListener needs an event like click,scroll... and a function to perform on it 
translateBtn.addEventListener("click" , translatingHandler);

    



var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#outputDivison");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){
    return serverURL +"?"+"text="+ input;
}

function errorHandler(error){
    console.log("error occured",error)
}
function changeImage(){
    document.getElementById("img").src="./images/Minions-Transparent-File.png";
    //document.getElementsByClassName("image").src="./images/Minions-Transparent-File.png";
}

function clickHandler(){
    changeImage();
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click",clickHandler);


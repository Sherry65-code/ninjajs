// Copyrights Parambir Singh AKA Hecker

var alertsignify = false;
function initAlert() {
    alertsignify = true;
    document.body.innerHTML += `    <div id="alert"><span id="head">Something</span><span id="message">Else</span><button id="submit" onclick="catchAlert()">Ok</button></div>`;
    document.head.innerHTML += `<link rel="stylesheet" href="https://raw.githubusercontent.com/Sherry65-code/ninjajs/main/ninja.css">`;
}
function throwAlert(heading, alerttext) {
if (alertsignify) {
    document.getElementById('head').innerHTML = heading;
    document.getElementById('message').innerHTML = alerttext;
    document.getElementById('alert').style.transform = "scale(1)";
}
else{
    alert("First Initialize using initAlert()");
}
}
function catchAlert() {
    if (alertsignify){
    document.getElementById('alert').style.transform = "scale(0)";
    }
    else{
        alert("First Initialize using initAlert()");
    }
}

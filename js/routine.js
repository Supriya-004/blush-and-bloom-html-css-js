function morning(){
window.location.href="morning.html";
}

function night(){
window.location.href="night.html";
}

function done(btn){

btn.innerHTML="✔ Done";
btn.style.background="green";
btn.disabled = true;

let buttons = document.querySelectorAll(".card button");

let allDone = true;

buttons.forEach(function(b){
if(!b.disabled){
allDone = false;
}
});
if(allDone){
alert("Your skincare is done!");
}

}
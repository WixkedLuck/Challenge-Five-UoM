var $time = $('#currentDay');
var getTime = moment().hour();
var button9 = document.getElementById('btn1');
var button10 = document.getElementById('btn10');
var button11 = document.getElementById('btn3');
var button12 = document.getElementById('btn12');
var button1 = document.getElementById('btn11');
var button2 = document.getElementById('btn22');
var button3 = document.getElementById('btn33');
var button4 = document.getElementById('btn4');
var button5 = document.getElementById('btn5');
var ClearBtn = document.getElementById('clear');

//assign scratchpad to id's
let scratchpad = document.querySelector('#NINEAM');
let scratchpad2 = document.querySelector('#TENAM');
let scratchpad3 = document.querySelector('#ELEVEN');
let scratchpad4 = document.querySelector('#TWELVE');
let scratchpad5 = document.querySelector('#ONE');
let scratchpad6 = document.querySelector('#TWO');
let scratchpad7 = document.querySelector('#THREE');
let scratchpad8 = document.querySelector('#FOUR');
let scratchpad9 = document.querySelector('#FIVE');

//check time first to possibily clear data
if (getTime == 0) {
    localStorage.clear();
}
//gets localstorage for each key
scratchpad.value = localStorage.getItem('Nine');
scratchpad2.value = localStorage.getItem('Ten');
scratchpad3.value = localStorage.getItem('Eleven');
scratchpad4.value = localStorage.getItem('Twelve');
scratchpad5.value = localStorage.getItem('One');
scratchpad6.value = localStorage.getItem('Two');
scratchpad7.value = localStorage.getItem('Three');
scratchpad8.value = localStorage.getItem('Four');
scratchpad9.value = localStorage.getItem('Five');



//display current time
window.setInterval(function () {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);

//function to save notes
function SaveNotes() {
    localStorage.setItem('Nine', scratchpad.value)
}

function SaveNotes2() {
    localStorage.setItem('Ten', scratchpad2.value)
}
function SaveNotes3() {
    localStorage.setItem('Eleven', scratchpad3.value)
}
function SaveNotes4() {
    localStorage.setItem('Twelve', scratchpad4.value)
}
function SaveNotes5() {
    localStorage.setItem('One', scratchpad5.value)
}
function SaveNotes6() {
    localStorage.setItem('Two', scratchpad6.value)
}
function SaveNotes7() {
    localStorage.setItem('Three', scratchpad7.value)
}
function SaveNotes8() {
    localStorage.setItem('Four', scratchpad8.value)
}
function SaveNotes9() {
    localStorage.setItem('Five', scratchpad9.value)
}




//click events for save buttons
button9.addEventListener('click', SaveNotes)
button10.addEventListener('click', SaveNotes2)
button11.addEventListener('click', SaveNotes3)
button12.addEventListener('click', SaveNotes4)
button1.addEventListener('click', SaveNotes5)
button2.addEventListener('click',SaveNotes6)
button3.addEventListener('click',SaveNotes7)
button4.addEventListener('click',SaveNotes8)
button5.addEventListener('click',SaveNotes9)

ClearBtn.addEventListener('click', function() {  
    localStorage.clear();
    location.reload();

});













//if statements to change background color depending on time 
if (getTime == 9) {
    document.getElementById('Nineam').style.backgroundColor = "white";
} else if (getTime < 9) {
    document.getElementById('Nineam').style.backgroundColor = "Green";
} else {
    document.getElementById('Nineam').style.backgroundColor = "Red";
}

if (getTime == 10) {
    document.getElementById('Tenam').style.backgroundColor = "white";
} else if (getTime < 10) {
    document.getElementById('Tenam').style.backgroundColor = "Green";
} else {
    document.getElementById('Tenam').style.backgroundColor = "Red";
}

if (getTime == 11) {
    document.getElementById('Elevenam').style.backgroundColor = "white";
} else if (getTime < 11) {
    document.getElementById('Elevenam').style.backgroundColor = "Green";
} else {
    document.getElementById('Elevenam').style.backgroundColor = "Red";
}

 if(getTime==12){
     document.getElementById('Twelevepm').style.backgroundColor = "white";
 }else if(getTime<12){
    document.getElementById('Twelevepm').style.backgroundColor = "Green";
 }else {
         document.getElementById('Twelevepm').style.backgroundColor = "Red";
 }

if(getTime==13){
   document.getElementById('Onepm').style.backgroundColor = "white";
 }else if(getTime<13){
    document.getElementById('Onepm').style.backgroundColor = "Green";
}else {
     document.getElementById('Onepm').style.backgroundColor = "Red";
 }

if(getTime==14){
    document.getElementById('Twopm').style.backgroundColor = "white";
 }else if(getTime<14){
     document.getElementById('Twopm').style.backgroundColor = "Green";
 }else {
    document.getElementById('Twopm').style.backgroundColor = "Red";
 }

if(getTime==15){
    document.getElementById('Threepm').style.backgroundColor = "white";
}else if(getTime<15){
    document.getElementById('Threepm').style.backgroundColor = "Green";
 }else {
     document.getElementById('Threepm').style.backgroundColor = "Red";
}

 if(getTime==16){
    document.getElementById('Fourpm').style.backgroundColor = "white";
 }else if(getTime<16){
    document.getElementById('Fourpm').style.backgroundColor = "Green";
 }else {
    document.getElementById('Fourpm').style.backgroundColor = "Red";
 }

 if(getTime==17){
    document.getElementById('Fivepm').style.backgroundColor = "white";
 }else if(getTime<17){
     document.getElementById('Fivepm').style.backgroundColor = "Green";
 }else {
     document.getElementById('Fivepm').style.backgroundColor = "Red";
 }




var $time= $('#currentDay'); 
var getTime=moment().hour();
var button1= document.getElementById('btn1');
var button2= document.getElementById('btn2');

let scratchpad = document.querySelector('#NINEAM'); 
let scratchpad2 = document.querySelector('#TENAM'); 

scratchpad.value=localStorage.getItem('Nine');
scratchpad2.value=localStorage.getItem('Ten');

//display current time

window.setInterval(function () {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);

//function to save notes
function SaveNotes(){

localStorage.setItem('Nine',scratchpad.value)
console.log('in function');

}
function SaveNotes2(){

    localStorage.setItem('Ten',scratchpad2.value)
    console.log('in function');
    
    }

button1.addEventListener('click',SaveNotes)
button2.addEventListener('click',SaveNotes2)











//if statements to change background color depending on time 
if(getTime==9){
    document.getElementById('Nineam').style.backgroundColor = "white";
}else if(getTime<9){
    document.getElementById('Nineam').style.backgroundColor = "Green";
}else {
    document.getElementById('Nineam').style.backgroundColor = "Red";
}

if(getTime==10){
    document.getElementById('Tenam').style.backgroundColor = "white";
}else if(getTime<10){
    document.getElementById('Tenam').style.backgroundColor = "Green";
}else {
    document.getElementById('Tenam').style.backgroundColor = "Red";
}

// if(getTime==11){
//     document.getElementById('Elevenam').style.backgroundColor = "white";
// }else if(getTime<11){
//     document.getElementById('Elevenam').style.backgroundColor = "Green";
// }else {
//     document.getElementById('Elevenam').style.backgroundColor = "Red";
// }

// if(getTime==12){
//     document.getElementById('Twelevepm').style.backgroundColor = "white";
// }else if(getTime<12){
//     document.getElementById('Twelevepm').style.backgroundColor = "Green";
// }else {
//     document.getElementById('Twelevepm').style.backgroundColor = "Red";
// }

// if(getTime==13){
//     document.getElementById('Onepm').style.backgroundColor = "white";
// }else if(getTime<13){
//     document.getElementById('Onepm').style.backgroundColor = "Green";
// }else {
//     document.getElementById('Onepm').style.backgroundColor = "Red";
// }

// if(getTime==14){
//     document.getElementById('Twopm').style.backgroundColor = "white";
// }else if(getTime<14){
//     document.getElementById('Twopm').style.backgroundColor = "Green";
// }else {
//     document.getElementById('Twopm').style.backgroundColor = "Red";
// }

// if(getTime==15){
//     document.getElementById('Threepm').style.backgroundColor = "white";
// }else if(getTime<15){
//     document.getElementById('Threepm').style.backgroundColor = "Green";
// }else {
//     document.getElementById('Threepm').style.backgroundColor = "Red";
// }

// if(getTime==16){
//     document.getElementById('Fourpm').style.backgroundColor = "white";
// }else if(getTime<16){
//     document.getElementById('Fourpm').style.backgroundColor = "Green";
// }else {
//     document.getElementById('Fourpm').style.backgroundColor = "Red";
// }

// if(getTime==17){
//     document.getElementById('Fivepm').style.backgroundColor = "white";
// }else if(getTime<17){
//     document.getElementById('Fivepm').style.backgroundColor = "Green";
// }else {
//     document.getElementById('Fivepm').style.backgroundColor = "Red";
// }








console.log(getTime);

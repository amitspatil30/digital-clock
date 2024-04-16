const time =document.getElementById("time");
const date =document.getElementById("date");


setInterval( function() {
let date=new Date();
time.innerHTML=date.toLocaleTimeString();
},1000);



setInterval(function(){
    let a=new Date();
    date.innerHTML=a.toLocaleDateString();

},1000);
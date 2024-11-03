function provideTime(){

const date=new Date();

const hours=date.getHours();
const minutes=date.getMinutes();
const sec=date.getSeconds();

const timer=hours.toString().padStart(2,'0')+":"+minutes.toString().padStart(2,'0')+":"+sec.toString().padStart(2,'0');

 document.getElementById("clock").innerHTML=timer;
}

function timer (){
    setInterval(provideTime,1000);
}

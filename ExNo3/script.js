function printCapital(){
    let capital="";
    let cap=document.forms["f"].country.value;
    if (cap=="india"){
        capital="NEW DELHI";
    }
    if (cap=="pakistan"){
        capital="ISLAMABAD";
    }
    if(cap=="bangladesh"){
        capital="DHAKA"
    }
    if (cap=="uae"){
        capital="DUBAI";
    }
    if (cap=="japan"){
        capital="TOKYO";
    }
    document.getElementById("txt").innerHTML=capital;
}
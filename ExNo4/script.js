function validateemail(){
    let inputvalue=document.getElementById("em").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(inputvalue);
}
function showmessage(){
    if(validateemail()){
        document.getElementById("check").innerHTML="Valid Email";
    }else{
        document.getElementById("check").innerHTML="Not a Valid Email";
    }
}
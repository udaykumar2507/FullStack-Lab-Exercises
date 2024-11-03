let arr=["wall5.jpeg","wall6.jpeg","wall7.jpeg","wall8.jpeg","wall9.jpeg"];
let i=0;
function moveRight(){
    if ((i%arr.length)<(arr.length)){
        i+=1;
        document.getElementById("img_slider").src=arr[i%arr.length];
    }
}
function moveLeft(){
    if (i>=0){
        i=(i-1+arr.length)%arr.length;
        document.getElementById("img_slider").src=arr[i%arr.length];
    }else{
        i=0;
    }
}
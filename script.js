// variable or initial valu 0 rakha
let  hr=0;
let  min=0;
let  sec=0;
let count=0;

// decide kare ga timer chal raha hai ki nhi ...false denote karega timer ruka hua hai or true means timer chal raha hai
let timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop() {
    timer =false;
}
function reset(){
    timer =false;

    hr =0;
    min =0;
    sec =0;
    count =0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}



// start fuction pe click karenge toh true or stop pe click karta hai timer ko false
function stopwatch() {
    
    if(timer == true){
        count = count+1;
        // har 10 milisec pe counter ka value increse

        if(count == 100){
            sec = sec + 1;
            count =0;
        }

        if(sec == 60){
            min = min +1;
            sec =0;
        }
// min 60 hojaye toh hour mai 1 increse hoga
        if(min ==60){
            hr = hr +1;
            min =0;
            sec =0;
// 1 hr complet hota hai toh min or sec 0 ho jata hai
        }

        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;

        setTimeout("stopwatch()",10);
        // setTimeout kuch milisec rukega fir se apna kam karega(isko hum 10 milisecond wait kara yenge( 10 ms 1000 part hota hai 1 sec ka)
        // stop pe koi click karega toh settimeout kam nhikarega
    
    }
}
// assess all the ids from html
let mystart = document.getElementById("start");
let mypause = document.getElementById("pause");
let myreset = document.getElementById("reset");

// we make a id to make it reset or stop
let intervalid=null;

// as we know initially everything is 0
let seconds=0, minutes=0, hours=0;

// fun to update time-jo sec,min vgera ke box hai uski id se access krke uska inner text change kro, jo abhi 0 0 0 hai
// means we are accesssing box from html,id and changing its value by the variable we maked 0 0 0

function updator(){
    // box ke andr jo no, hai usko string me bdlega, jo atleast 2 size ka hoga jese,00 
    document.getElementById("hrs").innerText = hours.toString().padStart(2, '0');
    document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("secs").innerText = seconds.toString().padStart(2, '0');
}

// we have to give diff functionality for start stop and pause

// 1 start action
// agr interval id null ni h to, har 1 sec me , sec cnt kro,then min,then hr, using set interval and call updater to change inner value
function startWatch(){
    if(!intervalid){
        intervalid= setInterval(function() {
            seconds++;
            if(seconds===60){
                seconds=0;
                minutes++;
                if(minutes===60){
                    minutes=0;
                    hours++;
                }
            }
            // jo values ari hai,inner html m dalte rho
            updator();
        },1000);
    }
}

// 2 pause action
// agr interval chlra h toh counting hori h,hum counting ko stop krne ke liye stop interval use krenge,or interval id again null kr denge
function pauseWatch(){
    clearInterval(intervalid);
    intervalid = null;
}

// 3 reset action
// sbse phle jha h jesa h, stop krenge,uske liye pause fun h, fir sbko 0 kr denge, updator ko call, taki oo 00 00 00 bna ske
function resetWatch(){
    pauseWatch();
    seconds=0;
    minutes=0;
    hours=0;
    updator();
}

// as we make 3 seprate fun, call them to the accessed elements,
mystart.addEventListener("click", startWatch);
mypause.addEventListener("click", pauseWatch);
myreset.addEventListener("click", resetWatch);
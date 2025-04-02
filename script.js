// 1 DC
let digitalpage = document.querySelector(".dc");
// above selecting ele, not work with getelebyclass because cant target a particular class , so many class may possible of same name
function gotodc(){
 window.location.href="digitalclock.html";
 
}
digitalpage.addEventListener('click',gotodc);


// SW
let stopwatchpage= document.querySelector(".sw");
function gotosw(){
    window.location.href="stopwatch.html";
}
stopwatchpage.addEventListener('click',gotosw);
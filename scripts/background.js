
var scroll = document.getElementById( 'scroll' );
var words = "create build destroy live make love craft <b>ART</b> ".split(" ");
var times = [350, 180, 180, 240, 130, 250, 250, 330, 1000]
var i=1;
if( document.referrer.indexOf(window.location.host) === -1 ){
    //  intro();
}

function intro(){
    if( (' ' + document.getElementById('header').className + ' ').indexOf(' ' + 'expanded' + ' ') == -1 ){
        i=1;
        console.log(i);
        document.getElementById('header').classList.add( 'expanded' );

        scroll.innerText = words[0] + " ";
        wordLoop();
    }
}

function wordLoop(){
    setTimeout(function(){
        scroll.innerHTML = words[i];  
        console.log(i);
        i++;
        if( i <= words.length ){
            wordLoop();   
        } else {
            scroll.innerText = "";
            document.getElementById( 'header' ).classList.remove( 'expanded');
        }
    }, times[i-1])
}

//scroll through pages
var scroll = 0;
var page = 0;
var pages = document.getElementsByClassName("page");
var height = pages.length * 800;
var contentContainer = document.getElementById("contentContainer");
var pHeight = document.getElementsByClassName("page")[0].offsetHeight;

function reCalculateHeights(){
    height = pages.length * 800;
    contentContainer = document.getElementById("contentContainer");
    pHeight = document.getElementsByClassName("page")[0].offsetHeight;
}

window.addEventListener("resize", reCalculateHeights);

document.addEventListener("wheel",scrollHandler);
window.addEventListener("keydown",keyHandler);

var navButtons = document.getElementById("navigation").children;
for(i=0; i<navButtons.length; i++){
    (function(){
        var x = i;
        navButtons[i].addEventListener("click",function(){navHandler(x);}, false);
    }());
}

function navHandler(i){
    console.log(i);
    scrollTopSmooth(contentContainer,page*pHeight, i*pHeight);
    page = i;
    navHighlight();
}

function scrollHandler(e){
    var threshold = 8;
    scroll += e.wheelDelta/Math.abs(e.wheelDelta);
    if( scroll < -threshold){
        console.log("scroll down");
        scroll = 0;
        scrollDown();
    } else if (scroll > threshold){
        console.log("scroll up");
        scroll = 0;
        scrollUp();
    }
//    console.log(scroll);
}

function keyHandler(e){
    if( e.keyCode == '38'){
        scrollUp();
    } else if( e.keyCode == '40'){
        scrollDown();
    }
}

var interval; //scoping is important
function scrollTopSmooth(ele,currentPos,finalPos){
    clearInterval(interval);
    ele.scrollTop = currentPos;
    delta = finalPos-currentPos;
//    console.log(delta);
    var i = 0;
    interval = setInterval( increment, 50);
    function increment(){
        i += 1;
        ele.scrollTop = currentPos + delta/20*i;
        if(i>=20){
            clearInterval(interval);
        }
    }
}

function scrollDown(){
    scrollTopSmooth(contentContainer,page*pHeight,Math.min((page + 1), pages.length-1)*pHeight);
    page = Math.min((page + 1), pages.length-1);
    navHighlight();
    //    location.hash = "#page"+page;
}

function scrollUp(){
    scrollTopSmooth(contentContainer,page*pHeight,Math.max((page - 1), 0)*pHeight);
    page = Math.max((page - 1), 0);
    navHighlight();
//    location.hash = "#page"+page;
}

function navHighlight(){
    document.getElementsByClassName("currentPage")[0].classList.remove("currentPage");
    navButtons[page].classList.add("currentPage");
        
}

//highlight images
var timeout = setInterval(focuser, 6000);
document.onmousemove = function(){
  clearInterval(timeout);
  timeout = setInterval(focuser, 6000);
}

var images = document.getElementsByClassName( 'item' );
function focuser(){
    var n = Math.floor(Math.random() * images.length);
    images[n].firstChild.classList.add( 'focus' );
    setTimeout(function(){images[n].firstChild.classList.remove( 'focus' );}, 2000)
}
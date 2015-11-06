
var scroll = document.getElementById( 'scroll' );
var words = "create build destroy live make love craft <b>ART</b> ".split(" ");
var times = [350, 180, 180, 240, 130, 250, 250, 330, 1000]
var i=1;
if( document.referrer.indexOf(window.location.host) === -1 ){
      intro();
}
var hashes = ["page1", "page2", "page3"];
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
var page = location.hash? parseInt(location.hash.substr(location.hash.length - 1))-1 : 0;
var pages = document.getElementsByClassName("page");
var height = pages.length * 800;
var navButtons = document.getElementById("navigation").children;
var contentContainer = document.getElementById("contentContainer");
var pHeight = document.getElementsByClassName("page")[0].offsetHeight;
render();

function reCalculateHeights(){
    height = pages.length * 800;
    contentContainer = document.getElementById("contentContainer");
    pHeight = document.getElementsByClassName("page")[0].offsetHeight;
    render();
}

window.addEventListener("resize", reCalculateHeights);
document.addEventListener("wheel",scrollHandler);
window.addEventListener("keydown",keyHandler);

for(i=0; i<navButtons.length; i++){
    (function(){
        var x = i;
        navButtons[i].addEventListener("click",function(){navHandler(x);}, false);
    }());
}

function navHandler(i){
    console.log(i);
    page = i;
    render();
}

function scrollHandler(e){
    var threshold = 8;
    scroll += e.wheelDelta/Math.abs(e.wheelDelta);
    if( scroll < -threshold){
        scroll = 0;
        scrollDown();
    } else if (scroll > threshold){
        scroll = 0;
        scrollUp();
    }
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
    page = Math.min((page + 1), pages.length-1);
    render();
}

function scrollUp(){
    page = Math.max((page - 1), 0);
    render();
}
function render(){
    contentContainer.style.marginTop = -page * pHeight+"px";
    document.getElementsByClassName("currentPage")[0].classList.remove("currentPage");
    navButtons[page].classList.add("currentPage");
    location.hash = hashes[page];
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

var scrollText = document.getElementById( 'scroll' );
var words = "create build destroy live make love craft <b>ART</b> ".split(" ");
var times = [350, 180, 180, 240, 130, 250, 250, 330, 1000]
var i=1;
if( document.referrer.indexOf(window.location.host) === -1 ){
      //intro();
}
function intro(){
    if( document.getElementById('header').classList.length == 0 ){
        i=1;
        console.log(i);
        document.getElementById('header').classList.add( 'expanded' );

        scrollText.innerText = words[0] + " ";
        wordLoop();
    }
}

function wordLoop(){
    setTimeout(function(){
        scrollText.innerHTML = words[i];  
        console.log(words[i]);
        i++;
        if( i <= words.length ){
            wordLoop();   
        } else {
            scrollText.textContent = '';
            document.getElementById( 'header' ).classList.remove( 'expanded');
        }
    }, times[i-1])
}

function show( type ){
    elements = document.getElementsByClassName("item");
    for(i=0; i<elements.length; i++){
        elements[i].classList.add("hidden");
    }
    if( type !== "all" ){
        elements = document.getElementsByClassName( type );
    }
    for(i=0; i<elements.length; i++){
        elements[i].classList.remove("hidden");
    }
}

/*
//prevent tabbing
var links = document.getElementsByTagName('a');
for(i=0; i<links.length; i++){
    links[i].setAttribute('tabindex','-1');
}

*/

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
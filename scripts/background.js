
var scrollText = document.querySelector( '#scroll' );
var words = "create build destroy live make love craft <b>ART</b> ".split(" ");
var times = [350, 180, 180, 240, 130, 250, 250, 330, 1000]
var i=1;
if( document.referrer.indexOf(window.location.host) === -1 ){
      //intro();
}
function intro(){
    if( document.querySelector('#header').classList.length == 0 ){
        i=1;
        console.log(i);
        document.querySelector('#header').classList.add( 'expanded' );

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
            document.querySelector( '#header' ).classList.remove( 'expanded');
        }
    }, times[i-1])
}

var menu = document.querySelectorAll(".type");
function show( t, type ){
    for(i=0; i<menu.length; i++){
        menu[i].classList.remove("focus");
    }
    t.classList.add("focus");
    elements = document.querySelectorAll(".item");
    for(i=0; i<elements.length; i++){
        elements[i].classList.add("hidden");
    }
    if( type !== "" ){
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

var images = document.querySelectorAll( '.item' );
function focuser(){
    var n = Math.floor(Math.random() * images.length);
    images[n].firstChild.classList.add( 'focus' );
    setTimeout(function(){images[n].firstChild.classList.remove( 'focus' );}, 2000)
}
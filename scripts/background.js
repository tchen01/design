document.getElementById('header').classList.add( 'expanded' );
var scroll = document.getElementById( 'scroll' );
var words = "create build destroy live make love craft <b>ART</b> ".split(" ");
var times = [300, 150, 150, 200, 100, 200, 200, 300, 1000]


var i=1

scroll.innerText = words[0] + " ";
wordLoop();

function wordLoop(){
    setTimeout(function(){
        scroll.innerHTML = words[i];   
        i++;
        if( i <= words.length ){
            wordLoop();   
        } else {
            scroll.innerText = "";
            document.getElementById( 'header' ).classList.remove( 'expanded');
        }
    }, times[i-1])
}

var timeout = setInterval(focuser, 6000);
document.onmousemove = function(){
  clearInterval(timeout);
  timeout = setInterval(focuser, 6000);
}

var images = document.getElementsByClassName( 'image' );
function focuser(){
    var n = Math.floor(Math.random() * images.length);
    images[n].firstChild.classList.add( 'focus' );
    setTimeout(function(){images[n].firstChild.classList.remove( 'focus' );}, 2000)
}
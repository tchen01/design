if( document.referrer.indexOf(window.location.host) === -1 ){
    var scroll = document.getElementById( 'scroll' );
    var words = "create build destroy live make love craft <b>ART</b> ".split(" ");
    var times = [350, 180, 180, 240, 130, 250, 250, 330, 1000]

    var i=1
    document.getElementById('header').classList.add( 'expanded' );

    scroll.innerText = words[0] + " ";
    wordLoop();
}

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
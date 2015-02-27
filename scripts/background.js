var scroll = document.getElementById( 'scroll' );
var words = "create build destroy live make love craft <b>ART</b>".split(" ");

function write(w){
}

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
    }, 210)
}
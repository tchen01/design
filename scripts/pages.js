var images = document.querySelectorAll('img');
var cover = document.querySelector('#cover');
for(i=0; i<images.length; i++){
    images[i].addEventListener('click', enlarge);
}

function enlarge(e){
    e.stopPropagation();
    /*for(i=0; i<images.length; i++){
        if( this != images[i] ){
            images[i].classList.remove('large');
        }
    }*/
    this.classList.toggle('large');
    cover.classList.toggle('expanded');
    document.addEventListener('click', shrink);
}

document.addEventListener('keydown', shrink);
function shrink(e){
    e.stopPropagation();
    if( e.keyCode == undefined || e.keyCode == 27){
        for(i=0; i<images.length; i++){
           images[i].classList.remove('large');
        }
        cover.classList.remove('expanded');
    }
}
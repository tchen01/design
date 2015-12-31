var images = document.getElementsByTagName('img');
for(i=0; i<images.length; i++){
    images[i].addEventListener('click', toggle);
}

function toggle(){
    this.classList.toggle('large'); 
}
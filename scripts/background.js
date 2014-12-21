
//colors: [text, background]
function switcher( e ){
  var ifr = document.getElementById( 'p_iframe' );
  ifr.src = './projects/' + e + '/index.html'; 
  document.getElementById( 'menu_container' ).className = e;
  
}
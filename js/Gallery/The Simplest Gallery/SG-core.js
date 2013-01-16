/*

The Simplest Gallery
The easiest way to make elements sroll like a slide gallery

author : Manuel Colombo
version: 1.0

jsfiddle example: http://jsfiddle.net/manuelcolombo/e5NQr/

*/


/*
Variable definition
You have to set the var lista: the elements of the gallery
and controlli: the sensible element, could be more than one and the class .next and .prev tell the scroll's direction. 
*/

controlli_1 = '.controller, .gallery img'; 
lista_1 = '#col-main .gallery img'; 


$(function(){ //document ready
		
		$(controlli_1).click(function(e){
			e.preventDefault();
		//set the scroll's direction
			if($(this).hasClass('prev')) { next=false; } else { next=true; }
			moveGallery(next, lista_1);
		});
});


function moveGallery(avanti, lista){
	var $active = $(lista+':visible');
  	if(avanti) 
  		var $next = ($active.next().length > 0) ? $active.next() : $(lista+':first');
  		else
  		var $next = ($active.prev().length > 0) ? $active.prev() : $(lista+':last');
  	$active.fadeOut(function(){	$next.fadeIn(); });
}

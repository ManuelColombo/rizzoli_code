//definizione delle variabili
lista = '#col-main .gallery img'; //gli elementi da far scorrere
controlli = '.controller, .gallery img'; // il controllo è un elemento che se cliccato fa cambiare foto, se ha la classe prev fa tornare indietro la gallery all'elemento precedente



function moveGallery(avanti, lista){
	var $active = $(lista+':visible');
  	if(avanti) 
  		var $next = ($active.next().length > 0) ? $active.next() : $(lista+':first');
  		else
  		var $next = ($active.prev().length > 0) ? $active.prev() : $(lista+':last');
  	$active.fadeOut(function(){	$next.fadeIn(); });
}

//document ready

$(function(){
		$(controlli).click(function(e){
			e.preventDefault();
			if($(this).hasClass('prev')) { next=false; } else { next=true; }
			moveGallery(next, lista);
		});
});


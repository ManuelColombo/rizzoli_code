var privacy=true;

$(function(){
	$('#sendmail').click(function(event){
		event.preventDefault();
		
		$('.error').hide();

		var valid = true;
		
		var nome		= 	$("#nome").val();
		var taglia		= 	$("#taglia").val();
		var codice		= 	$("#codice").val();
		var mail		= 	$("#mail").val();
		var accetto		= 	$('input:checkbox[name=acconsento]').is(':checked');
		var pubb		= 	$('input:radio[name=accetto]:checked').val();

		if (( !accetto ) && (privacy)) {
			$("input:checkbox[name=acconsento]").parent().find('.check').show();
			valid=false;
		}
		
		if (( !accetto ) && (!privacy)) {
			$("input:checkbox[name=acconsento]").parent().find('.check').show();
			valid=false;
		}

		if (( accetto ) && (!privacy)) {
			$("input:checkbox[name=acconsento]").parent().find('.warning').show();
			valid=false;
		}
		
		if (nome.length<1) {
			$("#nome").parent().find('.error').show();
			valid=false;
		}

		if ((mail.length<1) || ( checkemail(mail)==false)) {
			$("#mail").parent().find('.error').show();
			valid=false;
		}
		
		if (valid) {
			var datastr ='nome=' + nome + '&mail=' + mail + '&taglia=' + taglia + '&codice=' + codice + '&pubb=' + pubb;
			setTimeout("send('"+datastr+",')",2000);
		}

	 });


	$('.player').click(function(e){
		e.preventDefault();
		showVideo();
	});

	$('a.privacy').click(function(e){
		e.preventDefault();
		show_poput_Txt('privacy.html');
		privacy=true;
	});

	$('a.trattamento').click(function(e){
		e.preventDefault();
		show_poput_Txt('trattamento.html');
	});
	
	$('a.gallery').click(function(e){
		e.preventDefault();
		show_poput_Img('gallery.html');
	});

	
}); 

function send(datastr){
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: datastr,
		cache: false,
		success: function(html){
			$('#sendmail').hide();
			$('.error').hide();
			$('.response').html(html);
		},
		error: function (request, status, error) {
		        alert(request.responseText);
		    }
	});
}



function showVideo(){
	out =   '<div class="cover_all">';
	out += 	'<a class="close" href="#">CHIUDI</a>';
	out +=      '<div class="video">';
	out +=      '</div>';
	out +=  '</div>';

	$('body').append(out);
	$('.cover_all .video').load('video.html');
	
	$('.close').click(function(e){
			e.preventDefault();
			$('.cover_all').remove();
		});
}

function show_poput_Txt(page){
	out =   '<div class="cover_all">';
	out += 	'<a class="close" href="#">CHIUDI</a>';
	out +=      '<div class="testo">';
	out +=      '</div>';
	out +=  '</div>';

	$('body').append(out);
	$('.cover_all .testo').load(page);
	
	$('.close').click(function(e){
			e.preventDefault();
			$('.cover_all').remove();
		});
}

function show_poput_Img(page){
	out =   '<div class="cover_all gallery">';
	out += 	'<a class="close" href="#">CHIUDI</a>';
	out +=      '<div class="immagini">';
	out +=      '</div>';
	out += 	'<a class="arrow prev" href="#"> &lt; precedente</a>';
	out += 	'<a class="arrow next" href="#">successiva &gt; </a>';
	out +=  '</div>';
	$('body').append(out);
	$('.cover_all .immagini').load(page);
	
	document.body.style.overflow="hidden";
	
	$('.close').click(function(e){
			e.preventDefault();
			document.body.style.overflow="auto";
			$('.cover_all').remove();
		});

	$('.next, .immagini').click(function(e){
			e.preventDefault();
			moveGallery(true, '.image_list img');
		});
	$('.prev').click(function(e){
			e.preventDefault();
			moveGallery(false, '.image_list img');
		});
}

function moveGallery(avanti, lista){
	var $active = $(lista+':visible');
  	if(avanti) 
  		var $next = ($active.next().length > 0) ? $active.next() : $(lista+':first');
  		else
  		var $next = ($active.prev().length > 0) ? $active.prev() : $(lista+':last');
  	$active.fadeOut(function(){	$next.fadeIn(); });
}

//Advanced Email Check credit-
//By JavaScript Kit (http://www.javascriptkit.com)
//Over 200+ free scripts here!

var testresults;

function checkemail(indirizzo){
	
	var str=indirizzo;
	
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	
	if (filter.test(str))
		testresults=true;
	else{
		testresults=false;
	}
	return (testresults);
}

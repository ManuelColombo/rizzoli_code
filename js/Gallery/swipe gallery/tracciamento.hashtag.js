/*
Creazione, tracciamento e hashtag history con gallery swipe.js

Per il js della gallery fare riferimento alla documentazione a queso indirizzo:
https://github.com/bradbirdsall/Swipe

-----------------------
Legenda codice:

IdGallery   -> L'id identificativo della gallery
nameGallery -> il nome dell'oggetto swipe, o più semplicemente la gallery

.next .prev -> I pulsanti che permettono lo scroll della gallery.

-----------------------

In modalità touchscreen non funziona il tracciamento, da risolvere

*/

$(function(){
    i=0;
    if(location.hash !== ""){
      i = parseInt(location.hash.substring(1),10);
    }

    nameGallery = Swipe(document.getElementById('IdGallery'), {
        startSlide: i
      });

      $('.next').click(function(event){
        nameGallery.next();
        location.hash = nameGallery.getPos();
        tracciamentoURL();
      });
      $('.prev').click(function(event){
        nameGallery.prev();
        location.hash = nameGallery.getPos();
        tracciamentoURL();
      });
    
  });
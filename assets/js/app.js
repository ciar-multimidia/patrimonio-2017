jQuery(document).ready(function($) {

	$('#rodape > .container').append('<a href="#subir" class="btn-subir">subir</a>');
	$('a.btn-subir').on('click', function(){
	  $('html, body').animate({scrollTop:0},1100);
	  return false;
	});	

	var notasrodape = $('.nota-rodape');
	var btrodape = $('.numero-rodape');
	var rodapeAtual;

	btrodape.on('click', function(event) {

		var clicado = $(this).attr('data-numero');
		var posTop = $(this).position().top;
		var aSair = notasrodape.filter('.db');
		aSair.removeClass('visivel');
		setTimeout(function(){
			aSair.removeClass('db');
		},400);
		var aRevelar = notasrodape.filter('[data-numero=\''+clicado+'\']');
		console.log(aRevelar);
		aRevelar.addClass('db').css('top', posTop);
		setTimeout(function(){
			aRevelar.addClass('visivel');
		},20);
		
	});
});
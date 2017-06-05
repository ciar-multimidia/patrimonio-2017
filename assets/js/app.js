jQuery(document).ready(function($) {

	var corpo = $('body');
	var titulosVolumes = [
		"Volume 1: Identidade e Patrimônio Culturais",
		"Volume 2: Acesso e Participação à Vida cultural &bull; Informação e Comunicação &bull; Responsabilidade dos Atores Públicos",
		"Volume 3: Educação e Formação &bull; Cooperação Cultural &bull; Princípios de Administração Democrática",
		"Volume 4: Acesso e Participação 1a Vida Cultural &bull; Informação e Comunicação"
	];

	var templateHeader = $('\
		<header id="topo">\
			<div class="container">\
				<a href="../../../index.html" class="marca">\
					<span>Curso de Especialização em</span>\
					<span class="curso-nome">Patrimônio, Direitos Culturais e Cidadania</span>\
					<span class="livro"></span>\
				</a>\
				<a href="../../../sumario.html" class="sumario"><span class="menu"><span>&mdash;</span><span>&mdash;</span><span>&mdash;</span></span>Sumário</a>\
			</div>\
		</header>\
	');

	$.each(titulosVolumes, function(index, val) {
		 if (corpo.hasClass('livro'+(index+1) ) ) {
		 	clone = templateHeader.clone();
		 	clone.find('span.livro').html(val);
		 	corpo.prepend(clone);
		 }
	});
	

	$('#rodape > .container').append('<a href="#subir" class="btn-subir">subir</a>');
	$('a.btn-subir').on('click', function(){
	  $('html, body').animate({scrollTop:0},1100);
	  return false;
	});	

	var notasrodape = $('.nota-rodape');
	var btrodape = $('.numero-rodape');

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
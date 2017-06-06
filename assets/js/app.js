jQuery(document).ready(function($) {

	$('#rodape > .container').append('<a href="#subir" class="btn-subir">subir</a>');
	$('a.btn-subir').on('click', function(){
	  $('html, body').animate({scrollTop:0},1100);
	  return false;
	});	

	var notasrodape = $('.nota-rodape');
	var btrodape = $('.numero-rodape');

	// função que define as posições das notas de rodapé.
	var attPosRodape = function(){
		notasrodape.each(function(index, el) {
			var datanumero = $(el).attr('data-numero');
			var btEquivalente = btrodape.filter('[data-numero=\''+datanumero+'\']');

			var novoTop = (function(){
				var topCalculado = btEquivalente.position().top - $(el).outerHeight()/2;
				if (topCalculado < 0) {
					return 1;
				} else if(topCalculado > ( $(el).closest('article').height() + $(el).height() ) ){
					return ($(el).closest('article').height() + $(el).height() - 1);
				} else{
					return topCalculado;
				}
				
			})();
			$(el).css('top', novoTop);

		});	
	}
	attPosRodape();



	// Atualizar posições sempre que o usuário redimensionar a janela do navegador.
	$(window).on('resize', function(event) {
		attPosRodape();
	});



	var rodapeAtual = 0;

	notasrodape.each(function(index, el) {
		$(el).children().wrapAll('<div class="posrel"><div class="texto"></div></div>');
		$(el).find('.posrel').prepend('<p class="numero-equivalente"></p><button class="fechar"></button>');
		$(el).find('.numero-equivalente').text($(el).attr('data-numero'));
		$(el).find('button.fechar').on('click', function(event) {
			$(this).closest('.nota-rodape').removeClass('visivel');
			setTimeout(function(){
				$(this).closest('.nota-rodape').removeClass('db');
				rodapeAtual = 0;
				
			},400);
		});

	});	

	btrodape.on('click', function(event) {

		var numeroClicado = parseInt( $(this).attr('data-numero') );

		if (rodapeAtual !== 0) {

			var rodapeAFechar = notasrodape.filter('[data-numero=\''+rodapeAtual+'\']');
			rodapeAFechar.removeClass('visivel');
			setTimeout(function(){
				rodapeAFechar.removeClass('db');
				rodapeAFechar = aRevelar;

			},400);
		}

		var aRevelar = notasrodape.filter('[data-numero=\''+numeroClicado+'\']');

		if (numeroClicado !== rodapeAtual) {
			aRevelar.addClass('db');
			setTimeout(function(){
				aRevelar.addClass('visivel');
			},20);

			rodapeAtual = parseInt( $(this).attr('data-numero') );
		} else{
			rodapeAtual = 0;
		}
	});


	var conjAnexos = $('div.anexos');
	var nMaxAnexos = 8;

	conjAnexos.each(function(index, el) {
		var anexos = $(el).children('figure');
		if (anexos.length > nMaxAnexos) {
			var excessosAnexos = anexos.length - nMaxAnexos;
			anexos.eq(nMaxAnexos-1).append('<p class="maisanexos">+'+excessosAnexos+'</p>')
		}

		var fancyboxArgs = [];
		anexos.each(function(index2, el2) {
			fancyboxArgs.push({
				src: $(el2).children('img').attr('src'),
				opts: {caption: $(el2).children('figcaption').text()}
			});
		});

		$(el).on('click', function(event) {
			$.fancybox.open(fancyboxArgs, {loop : false});
			/* Act on the event */
		});
	});

	



});
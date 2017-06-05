jQuery(document).ready(function($) {
	$('body.livro1').prepend('\
		<header id="topo">\
			<div class="container">\
				<a href="../../../index.html" class="marca">\
					<span>Curso de Especialização em</span>\
					<span class="curso-nome">Patrimônio, Direitos Culturais e Cidadania</span>\
					<span class="livro">Volume 1: Identidade e Patrimônio Culturais</span>\
				</a>\
				<a href="../../../sumario.html" class="sumario"><span class="menu"><span>&mdash;</span><span>&mdash;</span><span>&mdash;</span></span>Sumário</a>\
			</div>\
		</header>\
	');
	$('body.livro2').prepend('\
		<header id="topo">\
			<div class="container">\
				<a href="../../../index.html" class="marca">\
					<span>Curso de Especialização em</span>\
					<span class="curso-nome">Patrimônio, Direitos Culturais e Cidadania</span>\
					<span class="livro">Volume 2: Acesso e Participação à Vida cultural &bull; Informação e Comunicação &bull; Responsabilidade dos Atores Públicos</span>\
				</a>\
				<a href="../../../sumario.html" class="sumario"><span class="menu"><span>&mdash;</span><span>&mdash;</span><span>&mdash;</span></span>Sumário</a>\
			</div>\
		</header>\
	');
	$('body.livro3').prepend('\
		<header id="topo">\
			<div class="container">\
				<a href="../../../index.html" class="marca">\
					<span>Curso de Especialização em</span>\
					<span class="curso-nome">Patrimônio, Direitos Culturais e Cidadania</span>\
					<span class="livro">Volume 3: Educação e Formação &bull; Cooperação Cultural &bull; Princípios de Administração Democrática</span>\
				</a>\
				<a href="../../../sumario.html" class="sumario"><span class="menu"><span>&mdash;</span><span>&mdash;</span><span>&mdash;</span></span>Sumário</a>\
			</div>\
		</header>\
	');
	$('body.livro4').prepend('\
		<header id="topo">\
			<div class="container">\
				<a href="../../../index.html" class="marca">\
					<span>Curso de Especialização em</span>\
					<span class="curso-nome">Patrimônio, Direitos Culturais e Cidadania</span>\
					<span class="livro">Volume 4: Acesso e Participação 1a Vida Cultural &bull; Informação e Comunicação</span>\
				</a>\
				<a href="../../../sumario.html" class="sumario"><span class="menu"><span>&mdash;</span><span>&mdash;</span><span>&mdash;</span></span>Sumário</a>\
			</div>\
		</header>\
	');

	$('#rodape > .container').append('<a href="#subir" class="btn-subir">subir</a>');
	$('a.btn-subir').on('click', function(){
	  $('html, body').animate({scrollTop:0},1100);
	  return false;
	});	
});
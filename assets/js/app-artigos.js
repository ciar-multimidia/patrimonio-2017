jQuery(document).ready(function($) {
	var corpo = $('body');
	var titulosVolumes = [
		"Volume 1: Identidade e Patrimônio Culturais",
		"Volume 2: Acesso e Participação à Vida cultural &bull; Informação e Comunicação &bull; Responsabilidade dos Atores Públicos",
		"Volume 3: Educação e Formação &bull; Cooperação Cultural &bull; Princípios de Administração Democrática",
		"Volume 4: Acesso e Participação à Vida Cultural &bull; Informação e Comunicação"
	];

	var templateHeader = $('\
		<header id="topo">\
			<div class="container">\
				<a href="../../../index.html" class="marca">\
					<span>Resultados e Contribuições para o Curso de Especialização Interdisciplinar em</span>\
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
});
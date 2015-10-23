var linkProgramacao = $("#programacao div ul li");

$(document).on( "pagecreate", "#programacao", 
	function( event, ui ) { 

		linkProgramacao.find("a").attr("href", "#programacaoDetalhe");
	}
);

linkProgramacao.on("click", "a", this, function(){ 

	//localStorage.tituloProgramacaoSelecionado = $(this).find("h2").html();
	//localStorage.detalheProgramacaoSelecionado = $(this).find("p").html();

	$("#programacaoDetalhe div h3").html($(this).find("h2").html());
	$("#programacaoDetalhe div p").html($(this).find("p").html());
	$("#programacaoDetalhe div p").last().html($(this).find("p").last().html());
} );
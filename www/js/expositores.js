var expositoresLista = [
{ id:1, nome:"Prefeitura de Ibiaçá", estande:"1", responsavel:"Prefeito Ulisses Cecchin", telefone:"(54) 3374-1177", 
	email:"prefeitura@ibiaca.rs.gov.br", pavilhao:"Interno Superior" }, 
{ id:2, nome:"Aqua Dance" , estande:"2 a 6", responsavel:"Roberto Nazaré Cavalli", telefone:"(54) 3374-1254 / (54) 9981-1254", 
	email:"nazarecavalli@gmail.com", pavilhao:"Interno Superior" },
{ id:3, nome:"Keilor Basso Decorações e Eventos" , estande:"2 a 6", responsavel:"Keilor Basso", telefone:"(54) 9903-1541", 
	email:"keilorbasso@yahoo.com.br", pavilhao:"Interno Superior" },
{ id:4, nome:"Lucia Golin" , estande:"2 a 6", responsavel:"Lucia Golin", telefone:"(54) 9957-1026", 
	email:"lucia.golin@hotmail.com", pavilhao:"Interno Superior" },	
{ id:5, nome:"Santuário Nossa Senhora Consoladora", estande:"8", responsavel:"Pe. Edson Priamo", telefone:"(54) 3374-1280", 
	email:"romariaconsoladora@hotmail.com", pavilhao:"Interno Superior" },
{ id:6, nome:"Wizard Idiomas", estande:"9", responsavel:"Nelmar Maso", telefone:"(54) 3374-1383", 
	email:"masosananduva@hotmail.com", pavilhao:"Interno Superior" },
{ id:7, nome:"Bluephotos", estande:"14", responsavel:"Daiana Viegas", telefone:"(51) 3051-8804 / (51) 9634-9439", 
	email:"bluephotos_daianaviegas@hotmail.com", pavilhao:"Interno Superior" },
{ id:8, nome:"Livraria e Bazar Meu Brinquedo", estande:"17", responsavel:"Eduardo Federle", telefone:"(54) 3374-1380", 
	email:"meubrinquedo@bol.com.br", pavilhao:"Interno Superior" },
{ id:9, nome:"Pó de Pimenta", estande:"18", responsavel:"Juliana Bardos", telefone:"(54) 3374-1360", 
	email:"podepimentaboutique@gmail.com", pavilhao:"Interno Superior" },
{ id:10, nome:"Proteyger", estande:"19", responsavel:"Fernando Domingo", telefone:"(54) 3374-1442 / (54) 9919-1179", 
	email:"proteygermonitoramento@yahoo.com.br", pavilhao:"Interno Superior" },
{ id:11, nome:"Creral Telecom", estande:"20", responsavel:"Edilson Carlos Guzzo", telefone:"(54) 3321-2599 / (54) 9939-2053", 
	email:"guzzo@creral.com.br", pavilhao:"Interno Superior" },
{ id:12, nome:"Tchê Motos", estande:"21 e 22", responsavel:"Elias Panisson", telefone:"(54) 9641-6079", 
	email:"tche.motos@hotmail.com", pavilhao:"Interno Superior" },
{ id:13, nome:"Casa das Plantas", estande:"24 e 25", responsavel:"Luciano Girardi", telefone:"(54) 3344-2770", 
	email:"contato@casadasplantas.net.br", pavilhao:"Interno Superior" },
{ id:14, nome:"Copatti Tintas", estande:"28", responsavel:"Estêvão Copatti", telefone:"(54) 9641-6084", 
	email:"estevaocopatti@hotmail.com", pavilhao:"Interno Superior" },
{ id:15, nome:"Panisson Calçados", estande:"29", responsavel:"Iliane Panisson", telefone:"(54) 3374-1507", 
	email:"panissoncalcados@hotmail.com", pavilhao:"Interno Superior" },
{ id:16, nome:"Pellin e Hübler", estande:"32", responsavel:"Itamira Pellin", telefone:"(54) 3374-1273", 
	email:"itaip26@hotmail.com", pavilhao:"Interno Superior" },
{ id:17, nome:"Sicredi", estande:"33 e 34", responsavel:"Luci Ana Pagnosati", telefone:"(54) 3374-1333", 
	email:"luci_camara@sicredi.com.br", pavilhao:"Interno Superior" },
{ id:18, nome:"Trentin Informática", estande:"35", responsavel:"Ronaldo Trentin", telefone:"(54) 3374-1043", 
	email:"suporte@trentininformatica.com.br", pavilhao:"Interno Superior" },
{ id:19, nome:"La Novità - Design e Fotografia" , estande:"37", responsavel:"Alessandra Copelli e Michael Boff", 
	telefone:"(54) 9986-2372 / (54) 9633-6600", email:"lanovita@live.com", pavilhao:"Interno Superior" },
{ id:20, nome:"Sorvtchê" , estande:"7", responsavel:"Vanderlei Paulo Bonfante", 
	telefone:"(54) 3374-1268", email:"sorvtche@hotmail.com", pavilhao:"Interno Superior" },
{ id:21, nome:"CJA Informática" , estande:"26", responsavel:"Márcia Debastiani", 
	telefone:"(54) 3374-1037", email:"cjainf@brturbo.com.br", pavilhao:"Interno Superior" },
{ id:22, nome:"Decorart" , estande:"27", responsavel:"Fabiola Bólico", 
	telefone:"(54) 9978-4217", email:"", pavilhao:"Interno Superior" },
{ id:23, nome:"PROSEG Segurança do Trabalho" , estande:"30", responsavel:"Fernanda Bee", 
	telefone:"(54) 9943-6610", email:"prosegatendimento@gmail.com", pavilhao:"Interno Superior" },
{ id:24, nome:"Brusso Materiais Elétrticos e Automação" , estande:"41", responsavel:"Carlos Alberto Brusso", 
	telefone:"(54) 3344-1020 / (54) 9939-0684", email:"carlos_brusso@hotmail.com", pavilhao:"Interno Inferior" },
{ id:25, nome:"MBX Cubas" , estande:"41", responsavel:"Marcos Roberto Brusso", 
	telefone:"(54) 3344-2685", email:"mbx@netvisual.com.br", pavilhao:"Interno Inferior" },
{ id:26, nome:"Jola Materiais de Construção" , estande:"52", responsavel:"Mailor Rampazzo", 
	telefone:"(54) 9985-4045", email:"rampazzo.mailor@ibest.com.br", pavilhao:"Interno Inferior" },
{ id:27, nome:"Exclusiva Agropecuária" , estande:"63 e 64", responsavel:"Guilherme Zago Cecchin", 
	telefone:"(54) 9945-4505", email:"guilhermececchin@hotmail.com", pavilhao:"Interno Inferior" },
{ id:28, nome:"Panosul" , estande:"67", responsavel:"Rodrigo Giacomin", 
	telefone:"(54) 3374-1820", email:"comercial@panosul.com.br", pavilhao:"Interno Inferior" },
{ id:29, nome:"Scariot Construtora" , estande:"72", responsavel:"Paulo Scariot", 
	telefone:"(54) 9184-2739", email:"scariotconstrutora@gmail.com", pavilhao:"Interno Inferior" },
{ id:30, nome:"Alternativa Motors" , estande:"98", responsavel:"Rogério Rovani", 
	telefone:"(54) 3344-1338", email:"vendas@alternativamotors.net.br", pavilhao:"Externo" },
{ id:31, nome:"Lavoro John Geehre" , estande:"108", responsavel:"Ademir Calderan", 
	telefone:"(54) 3344-0053", email:"calderan.a@lavoro.agr.br / rodio.n@lavoro.agr.br", pavilhao:"Externo" },
{ id:32, nome:"Aral" , estande:"109", responsavel:"Altemir Santini / Maicon Balansin", 
	telefone:"(54) 3344-1007 - (54) 3344-0022", email:"vendas@aralcabinas.com.br", pavilhao:"Externo" },
{ id:33, nome:"Clínica Reabilitha" , estande:"10", responsavel:"Grazieli Bof", 
	telefone:"(54) 3374-1760", email:"-", pavilhao:"Interno Superior" },
{ id:34, nome:"Museu Histórico de Ibiaçá" , estande:"11 a 13", responsavel:"Ainda Teston", 
	telefone:"(54) 3374-1400 / (54) 9611-6392", email:"educacaoibiaca@hotmail.com", pavilhao:"Interno Superior" },
{ id:35, nome:"Restaurante Araucária" , estande:"23", responsavel:"Taciane Três", 
	telefone:"(54) 3374-1344", email:"hotelaraucaria@ibest.com.br", pavilhao:"Interno Superior" },
{ id:36, nome:"Turismo Fonte Cristalina" , estande:"31", responsavel:"João Rodrigues", 
	telefone:"(54) 3374-1201 / (54) 9981-9291", email:"tur.fontecristalina@yahoo.com.br", pavilhao:"Interno Superior" },
{ id:37, nome:"Muse Party House" , estande:"36", responsavel:"Patrick Zanchetta", 
	telefone:"(54) 9623-1095", email:"patrickg.marchi@gmail.com", pavilhao:"Interno Superior" },
{ id:38, nome:"ELM Móveis" , estande:"38 a 40", responsavel:"Maximino dos Santos", 
	telefone:"(54) 3352-1511", email:"elmmarcia@hotmail.com", pavilhao:"Interno Inferior" },
{ id:39, nome:"Andreetta e Nervo" , estande:"53", responsavel:"Jonas Rafael Mello", 
	telefone:"(54) 3344-1281", email:"jonas.mello@andreetta.com.br", pavilhao:"Interno Inferior" },	
{ id:40, nome:"Pedro Pasqual Colchões" , estande:"58 e 59", responsavel:"Pedro Pasqual", 
	telefone:"(54) 9902-6656", email:"ppasqual@gmail.com", pavilhao:"Interno Inferior" },
{ id:41, nome:"Cleci Semi Jóias" , estande:"60", responsavel:"Cleci Terezinha Homrich", 
	telefone:"(54) 9615-3490", email:"prh37@ibest.com.br", pavilhao:"Interno Inferior" },
{ id:42, nome:"Colchões Ortobon" , estande:"65 e 66", responsavel:"Rodrigo Gunther", 
	telefone:"(54) 3344-2720 / (54) 9117-8427", email:"rodrigogunther@hotmail.com", pavilhao:"Interno Inferior" },
{ id:43, nome:"Coisas de Mulher" , estande:"69", responsavel:"Daiana Gutierres", 
	telefone:"(54) 8134-8888", email:"gutierres.dai.dg@gmail.com", pavilhao:"Interno Inferior" },
{ id:44, nome:"Maquiagro" , estande:"82", responsavel:"Rodrigo Benetti", 
	telefone:"(54) 9977-3121", email:"vendas@maquiagro.com.br", pavilhao:"Externo" },
{ id:45, nome:"Giaretta Implementos Agrícolas" , estande:"96 e 97", responsavel:"Guilherme Prigol", 
	telefone:"(54) 9959-3421", email:"giarettatapejara@gmail.com", pavilhao:"Externo" },
{ id:46, nome:"Kesoja - Charuto Representações" , estande:"107", responsavel:"Gonçalino Antônio P. da Silva", 
	telefone:"(54) 9629-9115", email:"goncalino@kesoja.com.br", pavilhao:"Externo" }
]

function compareStrings(a, b) {
  // Assuming you want case-insensitive comparison
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function compareObjects(a, b) {

	if (a.pavilhao == b.pavilhao){

		return compareStrings(a.nome, b.nome);
	}

  	return compareStrings(a.pavilhao, b.pavilhao);
}

expositoresLista.sort(function(a, b) {
  return compareStrings(a.nome, b.nome);
})

function iterateExpositores(){

	//var list = $("#expositores .ui-content .ui-listview");
	var listContent = "";

	console.log("chamado");

	expositoresLista.sort(function(a, b) {
	  return compareStrings(a.nome, b.nome);
	});

	console.log("vetor ordenado");

	var list = $("#expositores .ui-content .ui-listview");

	console.log(list);

	for (index = 0; index < expositoresLista.length; index++){
	  	
		var expositor = expositoresLista[index];

	  	listContent += "<li><a href=\"#expositorDetalhe\" onclick=\"prepararDetalhesExpositor("+index+")\">"+expositor.nome+"</a></li>";
	}

	list.append(listContent).listview('refresh');
}

function iterateExpositoresPorPavilhao(){

	var listContent = "";

	expositoresLista.sort(function(a, b) {
	  return compareObjects(a, b);
	});

	var list = $("#expositoresPorPavilhao .ui-content .ui-listview");
	var pavilhaoCorrente = "";
//console.log("chamado");
	for (index = 0; index < expositoresLista.length; index++){
	  
		var expositor = expositoresLista[index];
//console.log(expositor);
	  	if (pavilhaoCorrente != expositor.pavilhao){

	  		pavilhaoCorrente = expositor.pavilhao;

			listContent += "<li data-role=\"list-divider\" role=\"heading\" class=\"ui-li-divider ui-bar-inherit ui-first-child\">"+pavilhaoCorrente+"</li>";
		}

	  	listContent += "<li><a href=\"#expositorDetalhe\" onclick=\"prepararDetalhesExpositor("+index+")\">"+expositor.nome+"</a></li>";
	}

	list.append(listContent).listview('refresh');
}

function iterateFavoritos(){

	var list = $("#favoritos .ui-content .ui-listview");
	var listContent = "";

	var expositoresFavoritos = localStorage["expositoresFavoritos"];

	if (expositoresFavoritos != undefined){
	
		expositoresFavoritos = JSON.parse(localStorage["expositoresFavoritos"]);
		
		for	(index = 0; index < expositoresFavoritos.length; index++) {
	 	   
			var expositor = expositoresLista[expositoresFavoritos[index]];

	  		listContent += "<li><a href=\"#expositorDetalhe\" onclick=\"prepararDetalhesExpositor('"+expositoresFavoritos[index]+"')\">"+expositor.nome+"</a></li>";
		}
	}
	
	list.append(listContent).listview('refresh');
}

function prepararDetalhesExpositor(id){

	var expositores = new Array();
	var expositor = expositoresLista[id];

	sessionStorage["expositorId"] = id;

	//popula os detalhes do expositor
	$("#expositorDetalhe div h3").html(expositor.nome);
	$("#expositorDetalhe div div p").html("Pavilhão "+expositor.pavilhao+
		"<br> Estande "+expositor.estande+"<br> Telefone: "+expositor.telefone+
		"<br> E-mail: "+expositor.email+"<br> Responsável: "+expositor.responsavel);
	$('#expositorDetalhe').trigger('create');
}

$(document).on( "pagecreate", "#expositores", function( event, ui ) { 
		
		iterateExpositores(); 
	} 
);

$(document).on( "pagecreate", "#expositoresPorPavilhao", function( event, ui ) { 
		
		iterateExpositoresPorPavilhao(); 
	} 
);

$(document).on( "pagecreate", "#favoritos", function( event, ui ) { 
		
		iterateFavoritos(); 
	} 
);

function carregarExpositoresPorOrdemAlfabetica(){

	$.mobile.navigate( "#expositores");
	iterateExpositores();
}

function carregarExpositoresPorPavilhao(){

	$.mobile.navigate( "#expositoresPorPavilhao");
	iterateExpositoresPorPavilhao();
}
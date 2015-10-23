$(function () {
   $("[data-role=header]").toolbar(); /* initialize header */
   $("[data-role=popup]").popup().enhanceWithin(); /* initialize popup */
});

function salvarFavorito() {
    
    var expositoresFavoritos = localStorage["expositoresFavoritos"];

    console.log(expositoresFavoritos);

    if (expositoresFavoritos !== undefined){

      expositoresFavoritos = JSON.parse(localStorage["expositoresFavoritos"]);
    
    } else {

      expositoresFavoritos = new Array();
    }

    if ($.inArray(sessionStorage["expositorId"], expositoresFavoritos) > -1) {
      
      removerExpositorFavorito(sessionStorage["expositorFavoritoId"]);
      $("[data-role=header] [data-role=controlgroup] .ui-icon-star").css("background-color", localStorage.defaultBgColor);

    } else {
      
      expositoresFavoritos.push(sessionStorage["expositorId"]);
      localStorage["expositoresFavoritos"] = JSON.stringify(expositoresFavoritos);

      marcarFavorito();
    }
}

function removerExpositorFavorito(favoritoId) {

    var expositores = localStorage["expositoresFavoritos"];

    if (expositores !== undefined){

        var expositores = JSON.parse(localStorage["expositoresFavoritos"]);

        if ($.inArray(sessionStorage["expositorId"], expositores) > -1) {

            expositores.splice(favoritoId, 1);
            localStorage["expositoresFavoritos"] = JSON.stringify(expositores);
        }
    }
}

function marcarFavorito(){

  var expositores = localStorage["expositoresFavoritos"];

  if (expositores !== undefined){

      expositores = JSON.parse(localStorage["expositoresFavoritos"]);
  
  } else {

      expositores = new Array();
  }

  if ($.inArray(sessionStorage["expositorId"], expositores) > -1) {

      $("[data-role=header] [data-role=controlgroup] .ui-icon-star").css("background-color", "gold");
  }  
}

function salvarNotas(){

    var notas = localStorage["expositoresNotas"];

    if (notas !== undefined){

        notas = JSON.parse(localStorage["expositoresNotas"]);
    
    } else {

        notas = new Array();
    }

    var nota = new Object();
    
    nota[sessionStorage["expositorId"]] = $("#notas").val();
    
    var i;
    for (i = 0; i < notas.length; i++) {

        //console.log(notas[i][sessionStorage["expositorId"]]);
        if (notas[i][sessionStorage["expositorId"]] != null) {

            //console.log("Objeto presente");
            notas.splice(i, 1);
        }
    }

    notas.push(nota);

    localStorage["expositoresNotas"] = JSON.stringify(notas);
}

//Remove o ícone de favorito para páginas que não contém "detalhe" no nome
$(window).on( "hashchange", function() { 

    var hash = location.hash;
    var DETAIL_KEY_WORD = "Detalhe";

    if (!(hash.indexOf(DETAIL_KEY_WORD) > -1)) {
    
      $("Div[data-role|='header']").find(".ui-icon-star").detach();

    } else if (hash.indexOf("expositor"+DETAIL_KEY_WORD) > -1) {

      var favorito = "<a onclick=\"salvarFavorito()\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-inline ui-icon-star ui-btn-icon-right ui-btn-a ui-btn-icon-notext\">Favoritar</a>";
      $("div[data-role|='header']").find("a").last().after(favorito);
      
      localStorage.defaultBgColor = $("[data-role=header] [data-role=controlgroup] .ui-icon-star").css("background-color");
      
      marcarFavorito();

      var notas = localStorage["expositoresNotas"];

      if (notas !== undefined){

          $("#notas").val("");
          notas = JSON.parse(localStorage["expositoresNotas"]);
      
      } else {

          notas = new Array();
      }
      
      var i;
      for (i = 0; i < notas.length; i++) {

          //console.log(notas[i][sessionStorage["expositorId"]]);
          if (notas[i][sessionStorage["expositorId"]] != null) {

              $("#notas").val(notas[i][sessionStorage["expositorId"]]);
          }
      }
    }

 } );

var noticias = [
  { id:1, src:"img/noticias/expomarau.png", text:"Agenda de Visitas Para Divulgação da Expomarau 2015 Já Começou." },
  { id:2, src:"img/noticias/zeze.png", text:"Os \"Dois Filhos de Francisco\" tem um convite especial a você!" } 
];

var noticiaCorrente = 0;
var DISTANCIA = "300px";
var TIMEOUT = 800;

$( document ).on( "swipeleft", ".news", function( event ) {

    $( ".swiper-slide" ).animate({ "left": "-="+DISTANCIA }, "fast" );
    
    if (noticiaCorrente < (noticias.length-1)) {
    
        noticiaCorrente++;
        window.setTimeout(changeImage("+="), TIMEOUT);

    } else {

        $( ".swiper-slide" ).animate({ "left": "+="+DISTANCIA }, "fast" );
    }
});

function changeImage(side){

    
    $( ".swiper-slide" ).animate({ "left": side+DISTANCIA }, "fast" );
    $( ".swiper-slide span img" ).attr("src", noticias[noticiaCorrente].src);
    $( ".swiper-slide p" ).html(noticias[noticiaCorrente].text);
}

$( document ).on( "swiperight", ".news", function( event ) {

    $( ".swiper-slide" ).animate({ "left": "+="+DISTANCIA }, "fast" );
    
    if (noticiaCorrente > 0) {
    
        noticiaCorrente--;
        window.setTimeout(changeImage("-="), TIMEOUT);

    } else {

        $( ".swiper-slide" ).animate({ "left": "-="+DISTANCIA }, "fast" );
    }
});
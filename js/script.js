var biografias = {};
function carregaJson() {
    fetch("./json/dados.json")
    .then(Response => Response.json())
    .then(json => {
        biografias = json;
        mostraConteudo();
    })
}

function mostraConteudo() {
    var content = document.getElementById("content")

    for(let bio in biografias) {
        content.innerHTML +=

        '<div class="card">' + 

        '<img src="' +

        biografias[bio].IMAGEM +

        '"/>' +

        "<details>" +

        "<summary>" +

        biografias[bio].NOME_DE_PAlCO +

        "</summary>" +

        "<p>" +

        biografias[bio].NOME_COMPLETO +

        "</p>" +

        "<blockquote>" +

        biografias[bio].DATA_NASCIMENTO +

        "</blockquote>" +

        "<blockquote>" +

        biografias[bio].SIGNO  +

        "<blockquote>" +
        biografias[bio].LOCAL_NASCIMENTO+

        "<blockquote>" +

        "</details></div>" 
    }
}

carregaJson();




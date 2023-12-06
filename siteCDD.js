var conta = 0;
var posicao = "inicio";
var imagens = ["dafam.jpg", "dacam.jpg", "dada.jpg", "cajmjr.jpg", "cahl.jpg", "daeg.jpg", "caeg.jpg"];
var nomes = ["DAFAM", "DACAM", "DADA", "CAJMJR",  "CAHL", "DAEG", "CAEG"]
var links = ["https://www.instagram.com/gestaodafam/", "https://www.instagram.com/dacammack/", "https://www.instagram.com/dada_ca/", "https://www.instagram.com/cajmjr/", "https://www.instagram.com/cahl.mackenzie/", "https://www.instagram.com/daegmack/", "https://www.instagram.com/caeg_mack/"]

//Essa função faz o carrossel de Diretórios Acadêmicos ir para frente, trocando todas as imagens
function rolarFrente() {
    var imgD1 = document.getElementById('imgD1');
    var imgD2 = document.getElementById('imgD2');
    var imgD3 = document.getElementById('imgD3');
    var nameD1 = document.getElementById('nameD1');
    var nameD2 = document.getElementById('nameD2');
    var nameD3 = document.getElementById('nameD3');
    var linkD1 = document.getElementById('linkD1');
    var linkD2 = document.getElementById('linkD2');
    var linkD3 = document.getElementById('linkD3');


        if (posicao == "inicio") {
            conta++;
            nameD1.textContent = nomes[conta];
            nameD2.textContent = nomes[conta+1];
            nameD3.textContent = nomes[conta+2];

            imgD1.setAttribute("src", "images/da/"+imagens[conta]);
            imgD2.setAttribute("src", "images/da/"+imagens[conta+1]);
            imgD3.setAttribute("src", "images/da/"+imagens[conta+2]);

            linkD1.setAttribute("href", links[conta]);
            linkD2.setAttribute("href", links[conta+1]);
            linkD3.setAttribute("href", links[conta+2]);

            document.getElementById("back").style.opacity = "1";
            document.getElementById("back").style.cursor = "pointer";
            posicao = "meio";
        } else if(posicao == "meio"){
                conta++;
                nameD1.textContent = nomes[conta];
                nameD2.textContent = nomes[conta+1];
                nameD3.textContent = nomes[conta+2];
                imgD1.setAttribute("src", "images/da/"+imagens[conta]);
                imgD2.setAttribute("src", "images/da/"+imagens[conta+1]);
                imgD3.setAttribute("src", "images/da/"+imagens[conta+2]);

                linkD1.setAttribute("href", links[conta]);
                linkD2.setAttribute("href", links[conta+1]);
                linkD3.setAttribute("href", links[conta+2]);

                posicao = "meio";
            if (conta == "4" ){
                posicao = "fim";
                document.getElementById("next").style.opacity = "0.3";
                document.getElementById("next").style.cursor = "auto";
            } 
        }
 
        
}

//Essa função faz o carrossel de Diretórios Acadêmicos ir para trás, trocando todas as imagens
function rolarTras() {
    var imgD1 = document.getElementById('imgD1');
    var imgD2 = document.getElementById('imgD2');
    var imgD3 = document.getElementById('imgD3');
    var nameD1 = document.getElementById('nameD1');
    var nameD2 = document.getElementById('nameD2');
    var nameD3 = document.getElementById('nameD3');
        if (posicao == "fim") {
            conta--;
            nameD1.textContent = nomes[conta];
            nameD2.textContent = nomes[conta+1];
            nameD3.textContent = nomes[conta+2];
            imgD1.setAttribute("src", "images/da/"+imagens[conta]);
            imgD2.setAttribute("src", "images/da/"+imagens[conta+1]);
            imgD3.setAttribute("src", "images/da/"+imagens[conta+2]);
            linkD1.setAttribute("href", links[conta]);
            linkD2.setAttribute("href", links[conta+1]);
            linkD3.setAttribute("href", links[conta+2]);
            posicao = "meio";
            document.getElementById("next").style.opacity = "1";
            document.getElementById("next").style.cursor = "pointer";
        } else if(posicao == "meio"){
            conta--;
            nameD1.textContent = nomes[conta];
            nameD2.textContent = nomes[conta+1];
            nameD3.textContent = nomes[conta+2];
            imgD1.setAttribute("src", "images/da/"+imagens[conta]);
            imgD2.setAttribute("src", "images/da/"+imagens[conta+1]);
            imgD3.setAttribute("src", "images/da/"+imagens[conta+2]);
            linkD1.setAttribute("href", links[conta]);
            linkD2.setAttribute("href", links[conta+1]);
            linkD3.setAttribute("href", links[conta+2]);
            posicao = "meio";
            if (conta == "0" ){
                posicao = "inicio";
                document.getElementById("back").style.opacity = "0.3";
                document.getElementById("back").style.cursor = "auto";
            } 
        }
        
}
//Essa função vai validar o input do email no final do site para ver se é um input válido de formato de email ou não. Nos dois casos vai aparecer um alerta.
function enviarEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (document.getElementById("email").value.match(validRegex)) {
        alert("Entraremos em contato em breve")
    } else {
      alert("E-Mail inválido")
    }
}
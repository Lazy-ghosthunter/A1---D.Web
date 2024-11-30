
 let isWalking = false; //*declara a váriavel

 function andar() {
     if (!isWalking) {
         const img = document.getElementById('personagem');
         img.src = "";
         img.src = "imgs/Andandinho.gif";
         isWalking = true;
     }
 }; //*faz com que se a variavel isWalking for verdadeira então a imagem é trocada

 function parada() {
     if (isWalking) {
         const img = document.getElementById("personagem");
         img.src = "";
         img.src = "imgs/Paradinha.gif";
         isWalking = false;
     }
 }; //*troca devolta a imagem quando o iswalking não é mais verdadeiro
 

 const div = document.getElementById('gatinha'); //declara a div que quero mover
 let position = parseInt(window.getComputedStyle(div).left, 10) || 0; //declara a posiçãi da div, pegando ela pelo estilo carregado na página
 const vel = 20; //declara a velocidade em que a div irá se mover

 window.addEventListener('keydown', function(event) {
    const screenWidth = window.innerWidth; //declara a largura da tela

    const img = document.getElementById('personagem'); //declara a imagem q será trocada

    if (event.key === "ArrowRight") { //se a seta direita for pressionada
        img.style.transform = "scaleX(-1)"; //espelha a imagem horizontalmente
        andar(); //ativa a função que troca a imagem
        position += vel; //adiciona o "tanto andado" a posição
        if(position > screenWidth){ //analisa se a posição ultrapassa a tela
            position = -div.offsetWidth; //envia a div para o lado esquerdo
        };
    } else if (event.key === "ArrowLeft") { //se a seta esquerda for pressionada
        img.style.transform = "scaleX(1)"; //volta a imagem a orientação não espelhada
        andar(); //ativa a troca de imagem
        position -= vel; //retira o tanto andado da posição
        if (position + div.offsetWidth < 0) { //analisa se a div ultrapassou o lado esquerdo
            position = screenWidth; //Envia a div para o lado direito
        };
    }
    div.style.left = position + "px"; //adiciona a posição ao elemento left do css da div, o px é para converter corretamente
    
    
 });
 window.addEventListener('keyup', function(event) { 
    if(event.key === "ArrowLeft" || event.key === "ArrowRight") {
        parada();
    }
 }); //!desativa a função andar voltando a imagem ao normal com a função parada quando as setas são paradas de ser pressionadas.
 
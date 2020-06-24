
let imagemCenario,imagemPersonagem,cenario,somDoJogo,personagem,imagemInimigo,inimigo;




function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta2.png'); 
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png'); 
  somDoJogo = loadSound('assets/sons/TrilhaSonora.mp3');
  imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
}

function setup() {
 
    createCanvas( windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario,5);
    personagem = new Personagem(imagemPersonagem);
    inimigo = new Inimigo(matrizInimigo,imagemInimigo,width-52,52,52,104,104);
   frameRate(26);
    somDoJogo.loop();

    
}
function draw() {
    cenario.exibe();
    
    cenario.move();  
    personagem.exibe();
    inimigo.exibe();
}

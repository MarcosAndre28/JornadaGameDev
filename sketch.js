
let imagemCenario,imagemPersonagem,cenario,somDoJogo,personagem;


function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png'); 
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png'); 
  somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas( windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario,5);
    personagem = new Personagem(imagemPersonagem);
   frameRate(35);
    somDoJogo.loop();
    
}
function draw() {
    cenario.exibe();
    cenario.move();  
   personagem.exibe();
    
}

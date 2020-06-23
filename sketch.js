
let imagemCenario;


function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png'); 
}

function setup() {
  createCanvas( windowWidth, windowHeight);
}
function draw() {
  background(imagemCenario);
}
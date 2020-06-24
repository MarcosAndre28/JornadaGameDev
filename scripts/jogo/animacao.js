const matrizInimigo = [
    [0, 0],
    [105, 0],
    [210, 0],
    [315, 0],
    [0, 104],
    [105, 104],
    [210, 104],
    [315, 104],
    [0, 208],
    [105, 208],
    [210, 208],
    [315, 208],
    [0, 312],
    [105, 312],
    [210, 312],
    [315, 312],
    [0, 409],
    [105, 409],
    [210, 409],
    [315, 409],
    [0, 503],
    [105, 503],
    [210, 503],
    [315, 503],
    [0, 609],
    [105, 609],
    [210, 609],
    [315, 609],
  ];
  
  class Animacao {
    constructor(imagem, x, largura, altura, larguraSprite, alturaSprite) {
      
      this.imagem = imagem;
      this.largura = largura; // largura do personagem
      this.altura = altura; // altura do personagem
      this.x = x;
      this.y = height - this.altura
      this.larguraSprite = larguraSprite;
      this.alturaSprite = alturaSprite;
      
      // this.matriz = this.cria_matriz(this.larguraSprite, this.alturaSprite, 4, 7);
      
      this.matriz = matrizInimigo;
      
      console.log(this.matriz.length);
      console.log(this.matriz);
      
      this.frameAtual = 0;
    }
    
    exibe() {
      image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
      
      this.anima();
    }
    
    anima() {
       this.frameAtual = (this.frameAtual + 1) % this.matriz.length;
    }
    
    cria_matriz(width, height, columns_dim, rows_dim) {
      let matriz = [] ; 
      
      for (let row = 0; row < rows_dim; row++) {
        for (let col = 0; col < columns_dim; col++) {
          let posX = width * col;
          let posY = height * row;
          
          matriz.push([posX, posY]);
        }
      }
      return matriz;
    }
  }
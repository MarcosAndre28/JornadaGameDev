class Personagem {
    constructor(imagem) {
      this.imagem = imagem;
      this.matriz = this.cria_matriz(220, 270, 4, 4);
      
      this.frameAtual = 0;
    }
    
    exibe() {
      image(this.imagem, 0, height - 135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270);
      
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
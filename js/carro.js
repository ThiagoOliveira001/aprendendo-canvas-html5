function Carro(cor, velocMaxima){
    this.cor = cor;
    this.velocMaxima = velocMaxima;
    this.velocAtual = 0;
}

Carro.prototype = {
    acelerar: () => {
        this.velocAtual += 10;
    }
}
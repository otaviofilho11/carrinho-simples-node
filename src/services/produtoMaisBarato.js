const produtos = require("../data/carrinho");

function buscaMaisBarato(){

    const produtoMenorValor = produtos.reduce((acc,prod) =>{

        if(prod.preco<acc.preco){
          return prod;
        }

        return acc;

    },produtos[0]);

    return produtoMenorValor;

}

module.exports = buscaMaisBarato;

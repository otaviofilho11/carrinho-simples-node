const produtos = require("../data/carrinho");

function buscarMaisCaro(){


const produtoMaiorValor = produtos.reduce((prod,acc) =>{

    if(prod.preco>acc.preco){
        return prod;
    }

    return acc;

},produtos[0]);


return produtoMaiorValor


}

module.exports = buscarMaisCaro;
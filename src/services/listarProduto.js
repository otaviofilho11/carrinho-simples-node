const produtos = require("../data/carrinho");


function listarProd(){
     console.table(produtos);
}

module.exports = listarProd;
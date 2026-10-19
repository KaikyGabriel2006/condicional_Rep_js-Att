function calcularDescontoCompra(valorCompra) {
    
    const compra = parseFloat(valorCompra);

    if (isNaN(compra) || compra < 0) {
        return "Por favor, insira um valor válido.";
    }

    let percentualDesconto = 0.00;

    
    if (compra > 500) {
        percentualDesconto = 0.10; 
    } else if (compra > 100) {
        percentualDesconto = 0.05; 
    }

    
    const valorDesconto = compra * percentualDesconto;
    const valorFinal = compra - valorDesconto;

    
    return {
        valorCompra: compra.toFixed(2),
        valorDesconto: valorDesconto.toFixed(2),
        valorFinal: valorFinal.toFixed(2)
    };
}

const resultado = calcularDescontoCompra(600);
console.log(`Valor da compra: R$ ${resultado.valorCompra}`);
console.log(`Valor do desconto: R$ ${resultado.valorDesconto}`);
console.log(`Valor da compra com desconto: R$ ${resultado.valorFinal}`);
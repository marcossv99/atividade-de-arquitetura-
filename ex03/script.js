// converter para  maiúsculas
function converterMaiusculas(texto) {
    return texto.toUpperCase();
}

// remover espaços
function removerEspacosExtras(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

// contar o numero de palavras
function contarPalavras(texto) {
    if (texto.trim() === "") {
        return 0;
    }
    return texto.split(/\s+/).length;
}

function processarTexto(texto) {
    let textoProcessado = converterMaiusculas(texto);

    textoProcessado = removerEspacosExtras(textoProcessado);

    const numeroDePalavras = contarPalavras(textoProcessado);

    return { textoProcessado, numeroDePalavras };
}

document.getElementById("textForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputText = document.getElementById("inputText").value;

    const resultado = processarTexto(inputText);

    document.getElementById("saidaTexto").textContent = "Texto Processado:  " + resultado.textoProcessado;
    document.getElementById("contadorDePalavras").textContent = "Numero de Palavras:  " + resultado.numeroDePalavras;
});
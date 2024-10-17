function validarIdade(idade) {
    return idade > 18;
}

function cadastrar(nome, idade) {
    if (!validarIdade(idade)) {
        alert("A idade deve ser maior que 18 anos");
        return;
    }
    salvarUsuario(nome, idade);
    exibirUsuarios();
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("name").value;
    const idade = parseInt(document.getElementById("age").value);

    cadastrarUsuario(nome, idade);
});

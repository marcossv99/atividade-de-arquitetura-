// Simulando uma camada de persistência de dados
let usuarios = [];

function salvarUsuario(nome, idade) {
    usuarios.push({ nome, idade });
}

function exibirUsuarios() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; 
    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = `Nome:  ${usuario.nome}, Idade:  ${usuario.idade}`;
        userList.appendChild(li);
    });
}

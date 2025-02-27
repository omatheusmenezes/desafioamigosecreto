let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(sorteado);
    amigos = []; // Limpa a lista após o sorteio
    atualizarLista(); // Atualiza a exibição para remover os nomes
}

function exibirResultado(sorteado) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let li = document.createElement("li");
    li.innerHTML = `<strong style='color: green;'>Amigo sorteado:</strong> <span style='color: green;'>${sorteado}</span>`;
    resultado.appendChild(li);
}
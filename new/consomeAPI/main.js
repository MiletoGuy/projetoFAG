function GETusuarios(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaLinha(usuario) {
    console.log(usuarios);
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.nome

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

function main() {
    data = GETusuarios("http://localhost:3000/usuarios");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });

}

main();

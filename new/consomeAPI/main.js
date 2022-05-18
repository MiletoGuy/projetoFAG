async function fetchUsuarios() {
    try {
        const response = await fetch('http://localhost:3000/usuarios');

    if(!response.ok) {
        throw new Error(`Erro ao executar usuarios: ${response.status}`)
    }

    return await response.json();
    } catch(e) {
        console.log(e);
    }
}

function listsUsuarios(postContainerElementId) {
    const postContainerElement = document.getElementById(postContainerElementId);

    if (!postContainerElement) {
        return;
    }

    fetchUsuarios()
    .then(usuarios => {
        if(!usuarios) {
            postContainerElement.innerHTML = 'Nenhum usuário encontrado';
            return;
        }

        for(const usuario of usuarios) {
            console.log(usuario)
            postContainerElement.appendChild(postElement(usuario));
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

function postElement(usuario) {
    const anchorElement = document.createElement('a');
    anchorElement.innerText = usuario.USUARIO_ID + ' - ' + usuario.USUARIO_SAGRES;

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);
    
    return postTitleElement;
}





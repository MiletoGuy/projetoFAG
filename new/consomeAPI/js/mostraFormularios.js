/*async function fetchUsuarios() {
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

    const postTitleElement = document.createElement('h2');
    postTitleElement.appendChild(anchorElement);
    
    return postTitleElement;
}*/


async function fetchFormularios() {
    try {
        const response = await fetch('http://localhost:3000/formularios/' + localStorage.getItem('departamento_usuario'));

    if(!response.ok) {
        throw new Error(`Erro ao executar formulários: ${response.status}`)
    }

    return await response.json();
    } catch(e) {
        console.log(e);
    }
}

function mostraFormularios() {
    fetchFormularios()
    .then(formularios => {
        formularios.forEach(element => {
            console.log(element);
        });
    })
    .catch((e) => {
        console.log(e);
    })
}

if(localStorage.getItem('departamento_usuario') != null){
    mostraFormularios();
}
else {
    alert('ERRO!, Usuário não autenticado');
    window.location.href='login.html';
}

localStorage.clear('departamento_usuario');













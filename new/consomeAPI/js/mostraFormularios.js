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

function listaMensagem(formularioContainerElementId) {
    const formularioContainerElement = document.getElementById(formularioContainerElementId);

    if (!formularioContainerElement) {
        return;
    }

    fetchFormularios()
    .then(formularios => {
        if(!formularios) {
            formularioContainerElement.innerHTML = 'Nenhum usuário encontrado';
            return;
        }

        for(const formulario of formularios) {
            formularioContainerElement.appendChild(messageElement(formulario));
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

function messageElement(formulario) {
    const anchorElement = document.createElement('p');
    let form = JSON.parse(formulario.FORM_FORMULARIO[1]);
    anchorElement.innerText = form.Mensagem + ' ' + form.Telefone;

    const formularioMessageElement = document.createElement('p');
    formularioMessageElement.appendChild(anchorElement);
    
    return formularioMessageElement;
}

function listaAutor(formularioContainerElementId) {
    const formularioContainerElement = document.getElementById(formularioContainerElementId);

    if (!formularioContainerElement) {
        return;
    }

    fetchFormularios()
    .then(formularios => {
        if(!formularios) {
            formularioContainerElement.innerHTML = 'Nenhum usuário encontrado';
            return;
        }

        for(const formulario of formularios) {
            formularioContainerElement.appendChild(autorElement(formulario));
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

function autorElement(formulario) {
    const anchorElement = document.createElement('p');
    let form = JSON.parse(formulario.FORM_FORMULARIO[1]);
    anchorElement.innerText = form.nome;

    const formularioAutorElement = document.createElement('p');
    formularioAutorElement.appendChild(anchorElement);
    
    return formularioAutorElement;
}













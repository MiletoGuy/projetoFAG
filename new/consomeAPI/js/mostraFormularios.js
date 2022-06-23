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
            let form = JSON.parse(formulario.FORM_FORMULARIO);
            formularioContainerElement.innerHTML = form.Mensagem + ' Contato: ' + form.Telefone;
            break;
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

/*function mensagemElement(formulario) {
    const anchorElement = document.createElement('p');
    let form = JSON.parse(formulario.FORM_FORMULARIO);
    anchorElement.innerText = form.Mensagem + ' ' + form.Telefone;

    const formularioMensagemElement = document.createElement('p');
    formularioMensagemElement.appendChild(anchorElement);
    
    return formularioMensagemElement;
}*/

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
            let form = JSON.parse(formulario.FORM_FORMULARIO);
            formularioContainerElement.innerHTML = form.nome;
            break;
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

f/*unction autorElement(formulario) {
    const anchorElement = document.createElement('p');
    let form = JSON.parse(formulario.FORM_FORMULARIO);
    anchorElement.innerText = form.nome;

    const formularioAutorElement = document.createElement('p');
    formularioAutorElement.appendChild(anchorElement);
    
    return formularioAutorElement;
}*/













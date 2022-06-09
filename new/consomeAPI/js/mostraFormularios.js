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

function listaFormularios(formularioContainerElementId) {
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
            formularioContainerElement.appendChild(postElement(formulario));
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

function postElement(formulario) {
    const anchorElement = document.createElement('a');
    anchorElement.innerText = formulario.DEP_DESCRICAO + ' - ' + formulario.FORM_FORMULARIO;

    const formularioTitleElement = document.createElement('h3');
    formularioTitleElement.appendChild(anchorElement);
    
    return formularioTitleElement;
}













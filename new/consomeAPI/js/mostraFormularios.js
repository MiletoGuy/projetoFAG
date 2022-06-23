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

function listaEmail(formularioContainerElementId) {
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
            formularioContainerElement.appendChild(mensagemElement(formulario))
        }
    })
    .catch((e) => {
        console.log(e);
    })
}

function mensagemElement(formulario) {
    let form = JSON.parse(formulario.FORM_FORMULARIO);
    const emailContainer = document.createElement('div');
    emailContainer.setAttribute("class", "email");
    const linha1 = document.createElement('div');
    linha1.setAttribute("class", "linha1");
    const linha = document.createElement('div');
    linha.setAttribute("id", "linha");
    const svg = document.createElement('svg');
    svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svg.setAttribute("width","14" );
    svg.setAttribute("style","color:#05683E");
    svg.setAttribute("height", "14");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "bi bi-circle-fill");
    svg.setAttribute("viewBox", "0 0 16 16");
    const circle = document.createElement('circle');
    circle.setAttribute("cx", "8");
    circle.setAttribute("cy", "8");
    circle.setAttribute("r", "8");
    const emailName = document.createElement('div');
    emailName.setAttribute("class", "d-flex emailname")
    emailName.innerText = form.nome;
    const emailDate = document.createElement('div');
    emailDate.setAttribute("class", "emaildate");
    emailDate.innerText = "25/05/2022";
    const emailMensagem = document.createElement('div');
    emailMensagem.setAttribute("class", "emailcontent");
    emailMensagem.innerText = form.Mensagem + '. Contato ' + form.Telefone 
    svg.appendChild(circle);
    linha1.appendChild(svg);
    linha1.appendChild(emailName);
    linha1.appendChild(emailDate);
    emailContainer.appendChild(linha1);
    emailContainer.appendChild(emailMensagem);
    emailContainer.appendChild(linha);

    return emailContainer;
}

/*function listaAutor(formularioContainerElementId) {
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

function autorElement(formulario) {
    const anchorElement = document.createElement('p');
    let form = JSON.parse(formulario.FORM_FORMULARIO);
    anchorElement.innerText = form.nome;

    const formularioAutorElement = document.createElement('p');
    formularioAutorElement.appendChild(anchorElement);
    
    return formularioAutorElement;
}*/













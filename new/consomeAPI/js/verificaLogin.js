let login;
let senha;

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

function verificaLogin() {
    fetchUsuarios()
    .then(usuarios => {

        usuarios.forEach(element => {
            login = document.getElementById('usuario').value;
            senha = md5(document.getElementById('senha').value);

            if (login === element.USUARIO_SAGRES && senha === element.USUARIO_SENHA) {
                localStorage.setItem('departamento_usuario', element.USUARIO_DEPARTAMENTO);
                window.location.href='home.html';
            }
            else {
                document.getElementById('mensagemErro').innerHTML = 'Usuario ou Senha inválidos!';
            }
        });
    })
    .catch((e) => {
        console.log(e);
    })
}





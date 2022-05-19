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

        for(const usuario of usuarios) {
           usuario;
      
        login = document.getElementById('usuario').value;
        senha = md5(document.getElementById('senha').value);

        if (login === usuario.USUARIO_SAGRES && senha === usuario.USUARIO_SENHA) {
            window.location.href='home.html';
            break;
        }
        else {
            document.getElementById('mensagemErro').innerHTML = 'Usuario ou Senha inválidos!';
            break;
        }
        }
        
        
    })
    .catch((e) => {
        console.log(e);
    })
}






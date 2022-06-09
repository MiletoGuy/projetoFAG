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
        if(e.toString() === 'TypeError: Failed to fetch') {
            alert('Erro ao conectar a API!');
        }
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
                localStorage.setItem('email_usuario', element.USUARIO_EMAIL);
                window.location.href='home.html';
            }
            else if (login === '' || null) document.getElementById('mensagemErro').innerHTML = 'Usuário não informado!';
            else if (senha === 'd41d8cd98f00b204e9800998ecf8427e') document.getElementById('mensagemErro').innerHTML = 'Senha não informada!';
            else {
                document.getElementById('mensagemErro').innerHTML = 'Usuário ou senha inválidos!';
            }
        });
    })
    .catch((e) => {
        console.log(e);
    })
}





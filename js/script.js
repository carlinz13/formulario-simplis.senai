
alert("Está funcionando!");

const confirmar = document.getElementById('confirmar');

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function CADASTROrodolfo() {

    const ganibalda = {
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        senha: document.querySelector("#senha").value
    };

    usuarios.push(ganibalda);
 
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Usuário cadastrado!");

    mosca();
}

function mosca() {

    let cadastros1 = document.getElementById("cadastros");

    cadastros1.innerHTML = "";

    usuarios.forEach((usuario, index) => {

        let div1 = document.createElement("div");

        let nome2 = document.createElement("p");
        nome2.innerHTML = usuario.nome;

        let email2 = document.createElement("p");
        email2.innerHTML = usuario.email;

        let editar = document.createElement("button");
        editar.innerHTML = "Editar";

        let excluir = document.createElement("button");
        excluir.innerHTML = "Excluir";

        editar.onclick = function() {
            editarUsuario(index);
        };

        excluir.onclick = function() {
            excluirUsuario(index);
        };

        div1.appendChild(nome2);
        div1.appendChild(email2);
        div1.appendChild(editar);
        div1.appendChild(excluir);

        cadastros1.appendChild(div1);

    });
}

confirmar.onclick = CADASTROrodolfo;

function editarUsuario(index) {

    document.querySelector("#nome").value = usuarios[index].nome;
    document.querySelector("#email").value = usuarios[index].email;
    document.querySelector("#senha").value = usuarios[index].senha;

    usuarios.splice(index, 1);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mosca();
}

function excluirUsuario(index) {

    usuarios.splice(index, 1);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mosca();
}

mosca();

let comparador = true;

function mostrarSenha() {
    comparador === true ? comparador = false : comparador = true;

    if (comparador === true) {
        document.getElementById("confirmarSenha").type = "text";
    } else {
        document.getElementById("confirmarSenha").type = "password";
    }
}

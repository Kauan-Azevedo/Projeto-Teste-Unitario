var usuarios = new Array();

function salvarLocal() {
    var idI = Math.floor(Math.random() * 1000001);
    var nomeI = document.getElementById("nome").value;
    var emailI = document.getElementById("email").value;

    var usuariosJSON = JSON.parse(localStorage.getItem('usuario'))
    if (usuariosJSON != null) {
        usuarios = usuariosJSON;
        usuarios.push({
            id: idI,
            nome: nomeI,
            email: emailI
        });
        localStorage.setItem("usuario", JSON.stringify(usuarios))
    } else {
        usuarios.push({
            id: idI,
            nome: nomeI,
            email: emailI
        });
        localStorage.setItem("usuario", JSON.stringify(usuarios));
    }
}

function usuCadastros() {
    var y = JSON.parse()
}
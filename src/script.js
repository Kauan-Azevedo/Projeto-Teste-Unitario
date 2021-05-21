function Cadastro() {
    var nomeCampo;
    var nomeEmail;
    var salvarUsu = {
        salvarForm: function () {

            nomeCampo = "Carlos"
            nomeEmail = "CarlosAntonio@gmail.com"

            if (localStorage.cont) {
                localStorage.cont = Number(localStorage.cont) + 1;
            } else {
                localStorage.cont = 1;
            }

            var cad = this.nomeCampo + " ; " + this.nomeEmail;
            localStorage.setItem("usuario" + localStorage.cont, cad);
        },
        pegaNome: function () {
            return nomeCampo
        },
        pegaEmail: function () {
            return nomeEmail
        }

    }
    return salvarUsu;
}

/*
function salvarForm() {

    nomeCampo = "Carlos";    //document.getElementById("nome").value;
    nomeEmail = "CarlosAntonio@gmail.com"; //document.getElementById("email").value;

   if (nomeCampo == '' || nomeEmail == '') {
        alert("Preencha todos os campos")
    } else {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.cont) {
                localStorage.cont = Number(localStorage.cont) + 1;
           } else {
                localStorage.cont = 1;
            }

            var cad = nomeCampo + " ; " + nomeEmail //document.getElementById('nome').value + " ; " + document.getElementById('email').value;
            localStorage.setItem("usuario" + localStorage.cont, cad);
        }

document.getElementById("nome").value = "";
document.getElementById("email").value = "";
    }
location.reload();
}
if (window.localStorage.length <= 0) {
    alert("Olá bem-vindo")
}
else {
    for (var cont = 1; cont <= localStorage.cont; cont++) {
        var salvos = localStorage.getItem("usuario" + cont);
        document.getElementById("cadastros-sus").innerHTML = "Nome: " + salvos.split(";")[0] + "<br> " + "Email: " + salvos.split(";")[1] + "<br><br>";
    }
}
*/
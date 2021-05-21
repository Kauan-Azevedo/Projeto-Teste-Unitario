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

            var cad = nomeCampo + " ; " + nomeEmail //document.getElementById('nome').value + " ; " + document.getElementById('email').value;
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
describe("Cadastro de usuario", function () {

    it("Deve salvar nome e email", function () {
        var cadastro = new Cadastro();
        cadastro.salvarForm("Carlos", "CarlosAntonio@gmail.com");


    expect(cadastro.pegaNome()).toEqual("Carlos");
    expect(cadastro.pegaEmail()).toEqual("CarlosAntonio@gmail.com")

    });
});
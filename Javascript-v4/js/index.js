
async function funcaoFor() {
    console.log('Teste Repetição');
    for (let index = 0; index < 10; index++) {
        console.log(index);
    }
}

function funcaoForEach() {
    let materia = {
        curso: "Engenharia de Software",
        nome: "Desenvolvimento de Software",
        aulas: [
            { nome: "Aula 1 - HTML" },
            { nome: "Aula 2 - CSS" },
            { nome: "Aula 3 - Javascript" }
        ]
    };

    console.log("Curso:", materia.curso);
    console.log("Materia:", materia.nome);

    materia.aulas.forEach((element, index) => {
        console.log("#" + index, element.nome);
    });

    for (let index = 0; index < materia.aulas.length; index++) {
        const element = materia.aulas[index];
        console.log("#" + index, element.nome);
    }
}

function SalvarFormulario() {
    let formularioValido = true;
    const camposForm = document.querySelectorAll("input");
    camposForm.forEach(campo => {
        campo.classList.remove("form-error");
        document.querySelector(`label[for='${campo.id}']`).classList.remove("label-error");

        if (campo.value.length == 0) {
            formularioValido = false;
            campo.classList.add("form-error");
            document.querySelector(`label[for='${campo.id}']`).classList.add("label-error");
            campo.focus();
        }
    });

    //Seleciona campo pelo id
    let campoNome = document.querySelector("txt_nome");

    //Seleciona label do campo pelo atributo "for"
    let labelNome = document.querySelector("label[for=txt_nome']");

    //Remove classes de erro
    campoNome.classList.remove("form-error");
    labelNome.classList.remove("label-error");

    //Se campo vazio adicionar classes de erro e mudar curso para o campo
    if (campoNome.value.length == 0) {
        formularioValido = false;
        campoNome.classList.add("form-error");
        labelNome.classList.add("label-error");
        campo.focus();
    }

    if (formularioValido == false) {
        return;
    }


    // const campoNome = document.querySelector("#txt_nome");
    // if(campoNome.value.length == 0){
    //     campoNome.classList.add("form-error");
    //     campoNome.focus();
    //     return;
    // }


    //SALVA BANCO DE DADOS
    alert("Validado com sucesso!");
}


//Controla Exibição do Menu
var menunav = document.querySelector("#menu-nav-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".conteudo-principal");
menunav.addEventListener("click", () => {
    sidebar.classList.toggle("menu-lateral-ativo");
    container.classList.toggle("conteudo-principal-ativo");
});

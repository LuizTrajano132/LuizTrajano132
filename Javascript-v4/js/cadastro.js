const cadastro = {
    limpar: () => {
        document.querySelector("#txt_nome").value = "";
        document.querySelector("#txt_email").value = "";
        document.querySelector("#txt_cep").value = "";
        document.querySelector("#txt_endereco").value = "";
        document.querySelector("#sl_uf").value = "";
        document.querySelector("#txt_cidade").value = "";
        document.querySelector("#cb_recebernoticias").checked = false;

        document.querySelector("#txt_nome").focus();
    },
    validar: () => {
        if (document.querySelector("#txt_nome").value.length == 0) {
            alert("Preencha o nome");
            return false;
        }
        if (document.querySelector("#txt_email").value.length == 0) {
            alert("Preencha o email");
            return false;
        }
        if (document.querySelector("#txt_cep").value.length == 0) {
            alert("Preencha o CEP");
            return false;
        }
        if (document.querySelector("#txt_endereco").value.length == 0) {
            alert("Preencha o endereço");
            return false;
        }
        if (document.querySelector("#sl_uf").value.length == 0) {
            alert("Selecione estado");
            return false;
        }
        if (document.querySelector("#txt_cidade").value.length == 0) {
            alert("Preencha a cidade");
            return false;
        }

        return true;
    },
    salvar: () => {
        event.preventDefault();
        if (cadastro.validar() == false) {
            return;
        }

        //TODO: ENVIAR PARA API SALVAR NO BANCO
        let tableLista = document.querySelector("#cadastro-lista-body");
        let tableRow = tableLista.insertRow();
        tableRow.innerHTML = `<tr>
        <td>${document.querySelector("#txt_nome").value}</td>
        <td>${document.querySelector("#txt_email").value}</td>
        <td>${document.querySelector("#txt_cep").value}</td>
        <td>${document.querySelector("#txt_endereco").value}</td>
        <td>${document.querySelector("#sl_uf").value}</td>
        <td>${document.querySelector("#txt_cidade").value}</td>
        </tr>`;
        /*
                let novaLinha = tableLista.insertRow(0);
                let colNome = novaLinha.insertCell(0);
                let colEmail = novaLinha.insertCell(1);
                let colCep = novaLinha.insertCell(2);
                let colEnd = novaLinha.insertCell(3);
                let colUf = novaLinha.insertCell(4);
                let colCidade = novaLinha.insertCell(5);
        
                colNome.innerHTML = document.querySelector("#txt_nome").value;
                colEmail.innerHTML = document.querySelector("#txt_email").value;
                colCep.innerHTML = document.querySelector("#txt_cep").value;
                colEnd.innerHTML = document.querySelector("#txt_endereco").value;
                colUf.innerHTML = document.querySelector("#sl_uf").value;
                colCidade.innerHTML = document.querySelector("#txt_cidade").value;
        */
        cadastro.limpar();
        alert("Salvo com sucesso");
    },
    buscaCep: (campoCep) => {
        if (campoCep.value.length < 8) {
            return;
        }

        axios.get('https://viacep.com.br/ws/' + campoCep.value + '/json/')
            .then(function (response) {
                if (response.data == null) {
                    console.log("Dados de CEP não encontrado");
                    return;
                }

                document.querySelector("#txt_endereco").value = response.data.logradouro;
                document.querySelector("#sl_uf").value = response.data.uf;
                document.querySelector("#txt_cidade").value = response.data.localidade;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    carregarJson: () => {
        axios.get('http://127.0.0.1:5500/json/relatorio.json')
            .then(function (response) {

                let tableLista = document.querySelector("#cadastro-lista-body");

                response.data.forEach(data => {
                    let tableRow = tableLista.insertRow();
                    tableRow.innerHTML = `<tr>
                    <td>${data.nome}</td>
                    <td>${data.email}</td>
                    <td>${data.cep}</td>
                    <td>${data.endereco}</td>
                    <td>${data.uf}</td>
                    <td>${data.cidade}</td>
                    </tr>`;
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

cadastro.carregarJson();
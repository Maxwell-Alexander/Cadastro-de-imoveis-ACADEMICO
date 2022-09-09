class Casa {
    constructor(cidade, bairro, numero_casa, area_casa) {
        this.cidade = cidade;
        this.bairro = bairro;
        this.numero_casa = numero_casa;
        this.area_casa = area_casa;
    }
}


function verificar_input() {


    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let numero_casa = document.getElementById('numero').value;
    let area_casa = document.getElementById('area').value;


    for (let i = 1; i < 2; i++) {
        if (cidade == "") {
            alert("Campo Cidade invalido!!!");
            document.getElementById('cidade').focus();
            break;
        }
        else if (bairro == "") {
            alert("Campo Bairro invalido!!!");
            document.getElementById('bairro').focus();
            break;
        }
        else if (numero_casa == "") {
            alert("Campo Número invalido!!!");
            document.getElementById('numero').focus();
            break;
        }
        else if (area_casa == "") {
            alert("Campo Área invalido!!!");
            document.getElementById('area').focus();
            break;
        }
        else {
            cadastrar();
        }
    }


}

function cadastrar() {

    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let numero_casa = parseInt(document.getElementById('numero').value);
    let area_casa = parseFloat(document.getElementById('area').value);


    let dados_casa = new Casa(cidade, bairro, numero_casa, area_casa);

    function reder() {

        let p = document.createElement('p');
        p.classList.add('dados_info');
        p.setAttribute('id', indice());
        p.innerHTML = `<a href="#" class="deletar" onclick="deletar(${indice()})">X</a> Cidade: ${dados_casa.cidade}<br>Bairro: ${dados_casa.bairro}<br>
        N° Casa: ${dados_casa.numero_casa}.... Área: ${dados_casa.area_casa} m²`;


        document.getElementById('box_dados').appendChild(p);
    }


    limpar();
    reder();

}

function limpar() {

    cidade = document.getElementById('cidade').value = '';
    bairro = document.getElementById('bairro').value = '';
    numero_casa = document.getElementById('numero').value = '';
    area_casa = document.getElementById('area').value = '';

}

function indice() {

    let tamanho_lista = document.getElementById('box_dados').childElementCount;
    return tamanho_lista;
}

function deletar(elemento) {


    document.getElementById(elemento).remove();


}
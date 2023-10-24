    let operador = '';

    let numero01;
    let numero02;
    let resultado;

    // DECLARAÇÃO FUNÇÃO DE LIMPAR
    function limpar() {
        
        document.querySelector('#numero01').value = '';
        document.querySelector('#numero02').value = '';
        document.querySelector('#resultado').innerHTML = '-';
    }
    
    function calculadora(){
        
        // ENTRADA DO OPERADOR SELECIONADO

        operador = document.querySelector('#slcOperador').value;

        // VERIFICAR SE É O OPERADOR SOMA
        if (operador == '+') {
            somar();
        }
        // VERIFICAR SE É O OPERADOR SUBTRAÇÃO
        if (operador == '-') {
            subtrair();
        }
        // VERIFICAR SE É O OPERADOR MULTIPLICAÇÃO
        if (operador == '*') {
            multiplicar();
        }
        // VERIFICAR SE É O OPERADOR DIVISÃO
        if (operador == '/')
        {
            dividir();
        }
        if (operador == '') {
            alert('Nenhum operador selecionado. Por favor, selecione um operador.');
        }
    }
    
    
    // DECLARAÇÃO DA FUNÇÃO DE SOMAR
    function somar(){

        // ENTRADA DE DADO DO NÚMERO 1
        numero01 = parseInt(document.querySelector('#numero01').value);
        // ENTRADA DE DADO D NÚMERO 2
        numero02 = parseInt(document.querySelector('#numero02').value);

        // PROCESSAMENTO (SOMAR)
        resultado = numero01 + numero02

        // SAÍDA (VALOR DA SOMA)
        document.querySelector('#resultado').innerHTML = resultado;
    }

    // DECLRARAÇÃO DA FUNÇÃO DE SUBTRAIR
    function subtrair(){

        // ENTRADA DE DADO DO NÚMERO 1
        numero01 = parseInt(document.querySelector('#numero01').value);
        // ENTRADA DE DADO DO NÚMERO 2
        numero02 = parseInt(document.querySelector('#numero02').value)

        // PROCESSAMENTO (SUBTRAIR)
        resultado = numero01 - numero02

        // SAÍDA (VALOR DA SUBTRAÇÃO)
        document.querySelector('#resultado').innerHTML = resultado;
    }

    // DECLARAÇÃO DA FUNÇÃO DE MULTIPLICAR
    function multiplicar(){

        // ENTRADA DE DADO DO NÚMERO 1
        numero01 = parseInt(document.querySelector('#numero01').value);
        // ENTRADA DE DADO DO NÚMERO 2
        numero02 = parseInt(document.querySelector('#numero02').value)

        // PROCESSAMENTO (MULTIPLICAR)
        resultado = numero01 * numero02

        // SAÍDA (VALOR DA MULTIPLICAÇÃO)
        document.querySelector('#resultado').innerHTML = resultado;
    }

    // DECLARAÇÃO DA FUNÇÃO DE DIVIDIR
    function dividir(){

        // ENTRADA DE DADO DO NÚMERO 1
        numero01 = parseInt(document.querySelector('#numero01').value);
        // ENTRADA DE DADO DO NÚMERO 2
        numero02 = parseInt(document.querySelector('#numero02').value)

        // PROCESSAMENTO (DIVIDIR)
        resultado = numero01 / numero02

        // SAÍDA (VALOR DA DIVISÃO)
        document.querySelector('#resultado').innerHTML = resultado;
    }




    // TRATAMENTO DAS IMAGENS DOS OPERADORES
    let select = document.querySelector('#slcOperador');

    select.addEventListener('change',function(){
        // alert('TESTE 123');

        let imgOperacao = document.querySelector('#imgOperacao');
        let op = select.options[select.selectedIndex].value;

        if(op == '+'){
            imgOperacao.setAttribute('src','./img/adicionar.png');
        }
        if (op == '-') {
            imgOperacao.setAttribute('src','./img/subtracao.png');
        }
        if (op == '*') {
            imgOperacao.setAttribute('src','./img/multiplicacao.png');
        }
        if (op == '/') {
            imgOperacao.setAttribute('src','./img/divisao.png');
        }
        if (op == '') {
            imgOperacao.setAttribute('src','')
        }
    })
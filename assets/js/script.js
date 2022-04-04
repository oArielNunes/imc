function main() { //função mãe - usar para não poluir o conteúdo global//
    const form = document.querySelector('.form'); //criando uma variável para o input "form"

    //function reset (evento){
    //  evento.preventDefault();

    // }
    form.addEventListener('submit', function (e) {  //observador 
        e.preventDefault(); //impedindo o envio//
        const inputPeso = e.target.querySelector('#peso'); //criando uma var para o input peso
        const inputAltura = e.target.querySelector('#altura'); //"" "" para o input altura

        const peso = Number(inputPeso.value); // criando uma var para o valor de peso
        const altura = Number(inputAltura.value);// "" "" para o valor de altura


        if (!peso) { //criando condição para peso (se peso for falso - não for number)
            setResultado('Peso inválido', false) //exibindo o alerta e setando como falso
            return; // return sempre para que o código não continue sendo executado caso peso não seja true;
        }
        if (!altura) {
            setResultado('Altura inválida', false)
            return;
        }
        const imc = getImc(peso, altura); //criando uma função para o calculo de imc
        const imcValue = getImcValue(imc);


        const msg =  `Seu IMC é de ${imc} (${imcValue})`;




      setResultado(msg, true);
    });
    function getImcValue (imc) {//criando a função que recebe
        const nivel = ['Abaixo do peso', 'Peso normal.', 'Sobrepeso',
            'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];//colocando os resultados dos imc

        // condição que retorna o valor da var imc com o valor de nivel
        if (imc >= 39.99) {
            return nivel[5];
        }
        if (imc >= 34.99) {
            return nivel[4];
        }
        if (imc >= 29.99) {
            return nivel[3];
        }
        if (imc >= 24.99) {
            return nivel[2];
        }
        if (imc >= 18.59) {
            return nivel[1];
        }
        if (imc < 18.59) {
            return nivel[0];
        }
    }


        function getImc (peso, altura) {//criando a função que calcula o peso e a altura;
            const imc = peso / altura ** 2; //peso divido por altura elevado a 2 
            return imc.toFixed(2);


        }
        function setP() { //função para criar um paragrafo 
            const p = document.createElement('p');
            return p; //retornando o valor de 'P'
        }

        function setResultado(msg, isValid) {// função para inserir o html na div resultado
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = '';

            const p = setP(); //criando var de valor igual ao da função
            
            
            if (isValid) {
                p.classList.add('pResultado');
            } else {
                p.classList.add('pErro');
            }
            
            p.innerHTML = msg;
            resultado.appendChild(p);
        }

    }
    main();

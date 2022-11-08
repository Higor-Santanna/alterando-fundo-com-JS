const cliqueAvancar = document.getElementById("seta-direita");
const fundoImagem = document.querySelectorAll("#imagem-fundo");
const cliqueVoltar = document.getElementById("seta-esquerda");
const quadrado = document.querySelectorAll(".quadrado-filho")

let quadradoAtual = 0;
let fundoAtual = 0;

cliqueAvancar.addEventListener("click", function(){
    if(fundoAtual === fundoImagem.length -1){
        return;
    } else if(quadradoAtual === quadrado.length -1){
        return;
    }
    fundoAtual++;
    quadradoAtual++;

    fundoImagem.forEach(fundoImagem => {
        fundoImagem.classList.remove("selecionado");
    })
    quadrado.forEach(quadrado => {
        quadrado.classList.remove("select");
    })
    
    fundoImagem[fundoAtual].classList.add("selecionado");
    quadrado[quadradoAtual].classList.add("select");

    mostrarOuEscoderSetas()
})

cliqueVoltar.addEventListener("click", function(){
    if(fundoAtual === 0){
        return;
    } else if (quadradoAtual === 0){
        return;
    }
    fundoAtual--;
    quadradoAtual--;

    fundoImagem.forEach(fundoImagem => {
        fundoImagem.classList.remove("selecionado");
    })

    quadrado.forEach(quadrado => {
        quadrado.classList.remove("select");
    })
    
    fundoImagem[fundoAtual].classList.add("selecionado");
    quadrado[quadradoAtual].classList.add("select");

    mostrarOuEscoderSetas()
})

function mostrarOuEscoderSetas(){
    const naoEhAPrimeiraImagem = fundoAtual !== 0;
    if(naoEhAPrimeiraImagem){
        cliqueVoltar.classList.remove("opacidade");
    } else {
        cliqueVoltar.classList.add("opacidade");
    }

    const ultimaImagem = fundoAtual !== 0 && fundoAtual === fundoImagem.length -1;
    if(ultimaImagem){
        cliqueAvancar.classList.add("opacidade");
    } else {
        cliqueAvancar.classList.remove("opacidade");
    }
}
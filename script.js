//evento para elemento pedra
pedra.addEventListener('mouseover', () => {
    document.getElementById("pedra").style.backgroundColor = "#58bde4";
    document.getElementById("papel").style.opacity = 0.7;
    document.getElementById("tesoura").style.opacity = 0.7;
})
pedra.addEventListener('mouseout', () => {
        document.getElementById("pedra").style.backgroundColor = "white";
        document.getElementById("papel").style.opacity = 1;
        document.getElementById("tesoura").style.opacity = 1;
})

//evento para elemento papel
papel.addEventListener('mouseover', () => {
    document.getElementById("papel").style.backgroundColor = "#e74a46";
    document.getElementById("pedra").style.opacity = 0.7;
        document.getElementById("tesoura").style.opacity = 0.7;
})
papel.addEventListener('mouseout', () => {
        document.getElementById("papel").style.backgroundColor = "white";
        document.getElementById("pedra").style.opacity = 1;
        document.getElementById("tesoura").style.opacity = 1;
})

//evento para elemento tesoura
tesoura.addEventListener('mouseover', () => {
    document.getElementById("tesoura").style.backgroundColor = "#f7b416";
    document.getElementById("pedra").style.opacity = 0.7;
    document.getElementById("papel").style.opacity = 0.7;
})
tesoura.addEventListener('mouseout', () => {
        document.getElementById("tesoura").style.backgroundColor = "white";
        document.getElementById("pedra").style.opacity = 1;
        document.getElementById("papel").style.opacity = 1;
})

const imagem = [];
        imagem[1] = "<img src='imagens/pedra.png'>";
        imagem[2] = "<img src='imagens/papel.png'>";
        imagem[3] = "<img src='imagens/tesoura.png'>";

var valor = 0;
var valorCPU = 0;
var escolhido;
var vitoriasVc = 0;
var derrotasVc = 0;
var vitoriasCPU = 0;
var derrotasCPU = 0;
var contador = 0;

var escolher = (valor) => { 
    document.getElementById("painelVoce").innerHTML = imagem[valor];
    escolhido = imagem[valor];
    contador++;
    escolhaCPU();
    resultado();
}

var escolhaCPU = () => {
    valorCPU = Math.ceil(Math.random() * 3);
    document.getElementById("painelCPU").innerHTML = imagem[valorCPU];
}

var resultado = () => {
    if(escolhido == imagem[1] && valorCPU == 2) {
        derrotasVc++;
        vitoriasCPU++;
        document.getElementById("derrotasVc").innerHTML = "Derrotas: " + derrotasVc;
        document.getElementById("vitoriasCpu").innerHTML = "Vitórias: " + vitoriasCPU;
        document.getElementById("resultado").style.backgroundColor = "#e74a46";
        document.getElementById("resultado").textContent = "Você perdeu - Papel embrulha pedra";
    }
    else if(escolhido == imagem[1] && valorCPU == 1) {
        document.getElementById("resultado").style.backgroundColor = "#f7b416";
        document.getElementById("resultado").textContent = "Empate";
    }
    else if(escolhido == imagem[1] && valorCPU == 3) {
        vitoriasVc++;
        derrotasCPU++;
        document.getElementById("vitoriasVc").innerHTML = "Vitórias: " + vitoriasVc;
        document.getElementById("derrotasCpu").innerHTML = "Derrotas: " + derrotasCPU;
        document.getElementById("resultado").style.backgroundColor = "#58bde4";
        document.getElementById("resultado").textContent = "Você ganhou - Pedra quebra tesoura";
    }
    else if(escolhido == imagem[2] && valorCPU == 2) {
        document.getElementById("resultado").style.backgroundColor = "#f7b416";
        document.getElementById("resultado").textContent = "Empate";
    }
    else if(escolhido == imagem[2] && valorCPU == 1) {
        vitoriasVc++;
        derrotasCPU++;
        document.getElementById("vitoriasVc").innerHTML = "Vitórias: " + vitoriasVc;
        document.getElementById("derrotasCpu").innerHTML = "Derrotas: " + derrotasCPU;
        document.getElementById("resultado").style.backgroundColor = "#58bde4";
        document.getElementById("resultado").textContent = "Você ganhou - Papel embrulha pedra";
    }
    else if(escolhido == imagem[2] && valorCPU == 3) {
        derrotasVc++;
        vitoriasCPU++;
        document.getElementById("derrotasVc").innerHTML = "Derrotas: " + derrotasVc;
        document.getElementById("vitoriasCpu").innerHTML = "Vitórias: " + vitoriasCPU;
        document.getElementById("resultado").style.backgroundColor = "#e74a46";
        document.getElementById("resultado").textContent = "Você perdeu - Tesoura corta papel";
    }
    else if(escolhido == imagem[3] && valorCPU == 2) {
        vitoriasVc++;
        derrotasCPU++;
        document.getElementById("vitoriasVc").innerHTML = "Vitórias: " + vitoriasVc;
        document.getElementById("derrotasCpu").innerHTML = "Derrotas: " + derrotasCPU;
        document.getElementById("resultado").style.backgroundColor = "#58bde4";
        document.getElementById("resultado").textContent = "Você ganhou - Tesoura corta papel";
    }
    else if(escolhido == imagem[3] && valorCPU == 1) {
        derrotasVc++;
        vitoriasCPU++;
        document.getElementById("derrotasVc").innerHTML = "Derrotas: " + derrotasVc;
        document.getElementById("vitoriasCpu").innerHTML = "Vitórias: " + vitoriasCPU;
        document.getElementById("resultado").style.backgroundColor = "#e74a46";
        document.getElementById("resultado").textContent = "Você perdeu - Pedra quebra tesoura";
    }
    else if(escolhido == imagem[3] && valorCPU == 3) {
        document.getElementById("resultado").style.backgroundColor = "#f7b416";
        document.getElementById("resultado").textContent = "Empate";
    }
}
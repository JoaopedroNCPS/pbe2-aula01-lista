const express = require('express'); 
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.post('/desconto', (req, res) => {
    const { preco } = req.body;  

    let desconto = 0;
    if (preco > 1000) { 
        desconto = preco * 0.08;  
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});

app.post('/salarioFamilia', (req, res) => {
    const { salario, Filhos } = req.body;

    let salarioFamilia = 0;
    if (salario < 2000) {
        salarioFamilia = Filhos * 45;
    }

    let salarioFinal = salario + salarioFamilia;
    res.json({ salario, Filhos, salarioFamilia, salarioFinal });
});

app.post('/triangulo', (req, res) => {
    const { a, b, c } = req.body;
    let tipo = '';
    
    if (a === b && b === c) {
        tipo = 'EQUILÁTERO';
    } else if (a !== b && b !== c && a !== c) {
        tipo = 'ESCALENO';
    } else {
        tipo = 'ISÓSCELES';
    }
    
    res.json({ tipo });
});

app.post('/mercadoria', (req, res) => {
    const { nome, preco } = req.body;
    let aumento = preco < 1000 ? preco * 0.05 : preco * 0.07;
    let novoPreco = preco + aumento;
    res.json({ nome, novoPreco });
});

app.post('/maiorNumero', (req, res) => {
    const { numeros } = req.body;
    let maiorNumero = Math.max(...numeros);
    res.json({ maiorNumero });
});

app.post('/ordemCrescente', (req, res) => {
    const { numeros } = req.body;
    let numerosOrdenados = numeros.sort((a, b) => a - b);
    res.json({ numerosOrdenados });
});

app.post('/maiorMenor', (req, res) => {
    const { num1, num2 } = req.body;
    let maior = Math.max(num1, num2);
    let menor = Math.min(num1, num2);
    res.json({ maior, menor });
});

app.post('/reajusteSalarial', (req, res) => {
    const { salarioAtual } = req.body;
    let aumento = 0;
    
    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        aumento = salarioAtual * 0.15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        aumento = salarioAtual * 0.12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        aumento = salarioAtual * 0.09;
    } else if (salarioAtual >= 3000) {
        aumento = salarioAtual * 0.06;
    }
    
    let salarioFinal = salarioAtual + aumento;
    res.json({ salarioAtual, aumento, salarioFinal });
});

app.post('/situacaoAluno', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;
    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = '';
    
    if (media >= 6) {
        situacao = 'aprovado';
    } else if (media >= 4) {
        situacao = 'recuperação';
    } else {
        situacao = 'reprovado';
    }
    
    res.json({ media, situacao });
});

app.post('/descontoLoja', (req, res) => {
    const { produto, preco } = req.body;
    let desconto = 0;
    
    if (produto === 'camisa') {
        desconto = preco * 0.20;
    } else if (produto === 'bermuda') {
        desconto = preco * 0.10;
    } else if (produto === 'calça') {
        desconto = preco * 0.15;
    }
    
    let precoFinal = preco - desconto;
    res.json({ produto, precoFinal });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

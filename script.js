ScrollReveal().reveal('.about-conteudo', {delay: 300});
ScrollReveal().reveal('.project-conteudo', {delay: 300});
ScrollReveal().reveal('.footer-conteudo', {delay: 300});

const project = [
    {
        nome: "Monibank Forms Validation",
        url: "https://marioguiw.github.io/ValidacaoDeFormulario-JS/pages/abrir-conta-form.html",
        img: "./img/Screenshot_Monibank.jpg"
    },
    {
        nome: "Crud Bag",
        url: "https://marioguiw.github.io/Mochila-Viagem-JS/",
        img: "./img/Screenshot_Crud_Bag.jpg"
    },
    {
        nome: "Netflix Clone",
        url: "https://mario-flix-js.vercel.app/",
        img: "./img/Screenshot_Netflix-Clone.jpg"
    },
    {
        nome: "Loja Livros",
        url: "https://loja-livros-blond.vercel.app/",
        img: "./img/Screenshot_Loja_Livros.jpg"
    },
    {
        nome: "Acerta Numero",
        url: "https://acerta-numeros-js.vercel.app/",
        img: "./img/Screenshot_Acerta_Numero.jpg"
    },
    {
        nome: "Calculadora",
        url: "https://calculadora-js-peach.vercel.app/",
        img: "./img/Screenshot_Calculadora.jpeg"
    },
    {
        nome: "Cria Card",
        url: "https://cria-card-react.vercel.app/",
        img: "./img/Screenshot_CriaCard.jpg"
    }
]

const card = document.getElementById("card_project");
console.log(card)

function criaCard(array){
    card.innerHTML = '';
    project.forEach(element => {
        card.innerHTML += `
        <div class="card">
            <h1 class="card-titulo">${element.nome}</h1>
            <a target="_blank" href="${element.url}"><img class="card-imagem" src="${element.img}"></a>
        </div>
            `
    });
}

criaCard(card);
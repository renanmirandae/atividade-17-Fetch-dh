const card = document.querySelector('.card');
const buttonRandom = document.querySelector('#random');

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
function getUser()
{
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        renderizarDadosUsuario(data.results[0]);
    });
}

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');

    img.setAttribute('src', dados.picture.large)

    const text1 = document.createTextNode(`${dados.name.first + ' ' + dados.name.last}`);
    const text2 = document.createTextNode(`${dados.email}`);

    h1.appendChild(text1)
    h2.appendChild(text2)

    card.appendChild(img);
    card.appendChild(h1);
    card.appendChild(h2);


}

getUser();

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

buttonRandom.addEventListener("click", (ev) => 
{
    ev.preventDefault();
    card.innerHTML = " "
    getUser();
});
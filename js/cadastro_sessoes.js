document.addEventListener('DOMContentLoaded', function() {
    carregarFilmes();
    carregarSalas();

    document.getElementById('form-sessao').addEventListener('submit', salvarSessao);
});

function carregarFilmes() {
    const filmes = getData('filmes');
    const selectFilme = document.getElementById('filme');
    selectFilme.innerHTML = '<option value="">Selecione um filme...</option>'; 

    filmes.forEach(filme => {
        const option = document.createElement('option');
        option.value = filme.id; 
        option.textContent = filme.titulo; 
        selectFilme.appendChild(option);
    });
}

function carregarSalas() {
    const salas = getData('salas');
    const selectSala = document.getElementById('sala');
    selectSala.innerHTML = '<option value="">Selecione uma sala...</option>'; 

    salas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.id;
        option.textContent = `${sala.nome} (${sala.tipo})`; 
        selectSala.appendChild(option);
    });
}

function salvarSessao(event) {
    event.preventDefault();

    const sessao = {
        id: Date.now(),
        filmeId: document.getElementById('filme').value,
        salaId: document.getElementById('sala').value, 
        dataHora: document.getElementById('data-hora').value,
        preco: parseFloat(document.getElementById('preco').value),
        idioma: document.getElementById('idioma').value,
        formato: document.getElementById('formato').value
    };

    const sessoes = getData('sessoes');
    sessoes.push(sessao);
    saveData('sessoes', sessoes);

    alert('Sessão salva com sucesso!');
    event.target.reset();
}
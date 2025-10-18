document.getElementById('form-filme').addEventListener('submit', function(event) {
    event.preventDefault();

    const filme = {
        id: Date.now(), 
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        genero: document.getElementById('genero').value,
        classificacao: document.getElementById('classificacao').value,
        duracao: document.getElementById('duracao').value,
        estreia: document.getElementById('estreia').value
    };

    const filmes = getData('filmes'); 
    
    filmes.push(filme);
    
    saveData('filmes', filmes);

    alert('Filme salvo com sucesso!');
    event.target.reset(); 
});
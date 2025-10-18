document.getElementById('form-sala').addEventListener('submit', function(event) {
    event.preventDefault();

    const sala = {
        id: Date.now(),
        nome: document.getElementById('nome').value,
        capacidade: parseInt(document.getElementById('capacidade').value),
        tipo: document.getElementById('tipo').value
    };

    const salas = getData('salas');
    salas.push(sala);
    saveData('salas', salas);

    alert('Sala salva com sucesso!');
    event.target.reset();
});
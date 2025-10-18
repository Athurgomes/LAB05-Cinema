document.addEventListener('DOMContentLoaded', function() {
    carregarSessoes();

    document.getElementById('form-venda').addEventListener('submit', salvarVenda);
});

function carregarSessoes() {
    const sessoes = getData('sessoes');
    const filmes = getData('filmes');
    const salas = getData('salas');
    
    const selectSessao = document.getElementById('sessao');
    selectSessao.innerHTML = '<option value="">Selecione uma sessão...</option>';

    sessoes.forEach(sessao => {
        const filme = filmes.find(f => f.id == sessao.filmeId);
        const sala = salas.find(s => s.id == sessao.salaId);

        if (filme && sala) {
            const dataHora = new Date(sessao.dataHora).toLocaleString('pt-BR');
            const textoOpcao = `${filme.titulo} (${sala.nome}) - ${dataHora}`;
            
            const option = document.createElement('option');
            option.value = sessao.id;
            option.textContent = textoOpcao;
            selectSessao.appendChild(option);
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const sessaoId = urlParams.get('sessaoId');
    if (sessaoId) {
        selectSessao.value = sessaoId;
    }
}

function salvarVenda(event) {
    event.preventDefault();

    const venda = {
        id: Date.now(),
        sessaoId: document.getElementById('sessao').value,
        cliente: document.getElementById('cliente').value,
        cpf: document.getElementById('cpf').value,
        assento: document.getElementById('assento').value,
        pagamento: document.getElementById('pagamento').value
    };

    const ingressos = getData('ingressos');
    ingressos.push(venda);
    saveData('ingressos', ingressos);

    alert('Venda confirmada com sucesso!');
    event.target.reset();
}
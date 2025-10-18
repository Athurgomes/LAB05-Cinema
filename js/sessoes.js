document.addEventListener('DOMContentLoaded', function() {
    listarSessoes();
});

function listarSessoes() {
    const sessoes = getData('sessoes');
    const filmes = getData('filmes');
    const salas = getData('salas');
    
    const divLista = document.getElementById('lista-sessoes');
    divLista.innerHTML = '';

    if (sessoes.length === 0) {
        divLista.innerHTML = '<p>Nenhuma sessão cadastrada.</p>';
        return;
    }

    sessoes.forEach(sessao => {
        const filme = filmes.find(f => f.id == sessao.filmeId);
        const sala = salas.find(s => s.id == sessao.salaId);

        if (filme && sala) {
            const dataHora = new Date(sessao.dataHora).toLocaleString('pt-BR');
            
            const sessaoDiv = document.createElement('div');
            sessaoDiv.className = 'sessao';
            
            sessaoDiv.innerHTML = `
                <h3>${filme.titulo}</h3> <p><strong>Sala:</strong> ${sala.nome} (${sala.tipo})</p> <p><strong>Horário:</strong> ${dataHora}</p> <p><strong>Preço:</strong> R$ ${parseFloat(sessao.preco).toFixed(2)}</p> <p>${sessao.idioma} / ${sessao.formato}</p>
                <button onclick="comprarIngresso(${sessao.id})">Comprar Ingresso</button> `;
            
            divLista.appendChild(sessaoDiv);
        }
    });
}


function comprarIngresso(sessaoId) {
    window.location.href = `venda-ingressos.html?sessaoId=${sessaoId}`;
}
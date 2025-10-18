/**
 * Busca dados do localStorage.
 * @param {string} key - a chave para buscar 
 * @returns {Array} - um array de objetos ou um array vazio.
 */
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

/**
 * Salva dados no localStorage.
 * @param {string} key - a chave para salvar 
 * @param {Array} data - o array de dados a ser salvo.
 */
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
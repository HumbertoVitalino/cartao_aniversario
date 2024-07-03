// Função para verificar a data inserida
function verificarData(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const dataInserida = document.getElementById('data').value;
    const dataAniversarioGabi = '07/07';
    const outraDataEspecial = '09/08';

    // Verifica se a data inserida é igual à data do aniversário da Gabi
    if (dataInserida === dataAniversarioGabi) {
        // Redireciona para o cartão de aniversário
        window.location.href = 'cartao.html';
    } else if (dataInserida === outraDataEspecial) {
        // Redireciona para a página especial
        window.location.href = 'outraData.html';
    } else {
        // Redireciona para a página de erro
        window.location.href = 'erro.html';
    }
}

// Adiciona evento de submit ao formulário
document.getElementById('dateForm').addEventListener('submit', verificarData);

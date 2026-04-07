// Lógica para alternar entre universos financeiros
const universeButtons = document.querySelectorAll('nav a');
const dashboards = document.querySelectorAll('.dashboard');

universeButtons.forEach(button => {
    button.addEventListener('click', () => {
        universeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        dashboards.forEach(dashboard => dashboard.style.display = 'none');
        const selectedUniverse = document.querySelector(`#${button.getAttribute('href').substring(1)}`);
        selectedUniverse.style.display = 'block';
    });
});

// Exibir a primeira seção por padrão
document.querySelector('#rparreira').style.display = 'block';

// Exibir o formulário de transações
const addTransactionBtn = document.querySelector('#addTransactionBtn');
const transactionForm = document.querySelector('#transaction-form');

addTransactionBtn.addEventListener('click', () => {
    transactionForm.style.display = 'block';
});

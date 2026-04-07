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

// Lógica das Abas
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove a classe 'active' de todos os links e conteúdos
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Adiciona 'active' no link e conteúdo clicado
            link.classList.add('active');
            const tabId = link.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            // Carrega widgets dinamicamente (exemplo para Kommo)
            if (tabId === 'form') {
                loadKommoForm();
            } else if (tabId === 'engage') {
                loadKommoEngage();
            }
        });
    });

    // Remove o footer do Kommo após 2 segundos
    setTimeout(() => {
        document.querySelectorAll(".styles_footer__2sTqH").forEach(el => el.remove());
    }, 2000);
});

// Funções para carregar widgets (personalize com os scripts da Kommo)
function loadKommoForm() {
    console.log("Carregando formulário Kommo...");
    // Substitua pelo script real do formulário
    document.getElementById('kommo-form-container').innerHTML = `
        <p style="color: #D8BFD8;">[Aqui irá o widget de formulário da Kommo]</p>
    `;
}

function loadKommoEngage() {
    console.log("Carregando página de engajamento Kommo...");
    // Substitua pelo script real de engajamento
    document.getElementById('kommo-engage-container').innerHTML = `
        <p style="color: #D8BFD8;">[Aqui irá o widget de engajamento da Kommo]</p>
    `;
}

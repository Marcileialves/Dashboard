document.addEventListener('DOMContentLoaded', () => {
    // 1. Alterando conteúdo via DOM
    const titulo = document.getElementById('main-title');
    titulo.innerText = "Minhas Redes Sociais";

    // 2. Dados dos links
    const meusLinks = [
        { nome: 'Instagram', url: 'https://instagram.com' },
        { nome: 'GitHub', url: 'https://github.com' },
        { nome: 'LinkedIn', url: 'https://linkedin.com' },
        { nome: 'YouTube', url: 'https://youtube.com' }
    ];

    // 3. Selecionando o container
    const container = document.getElementById('links-container');

    // 4. Criando os botões dinamicamente
    meusLinks.forEach(link => {
        const btn = document.createElement('a');
        btn.href = link.url;
        btn.target = "_blank"; // Abre em nova aba
        btn.innerText = link.nome;
        btn.classList.add('link-button');
        
        // Adicionando ao DOM
        container.appendChild(btn);
    });
});

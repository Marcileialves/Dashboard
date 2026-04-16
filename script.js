// 1. Lista de projetos com seus links reais
const projetos = [
    {
        titulo: "Boletins",
        descricao: "Análise de desempenho acadêmico e notas escolares.",
        link: "https://app.powerbi.com/groups/me/reports/94064729-269d-4386-8813-bbd9c361a9b7/f8905a627a09ace32009?experience=power-bi",
        icon: "book"
    },
    {
        titulo: "Histórico Escolar",
        descricao: "Acompanhamento da evolução histórica dos estudantes.",
        link: "https://app.powerbi.com/groups/me/reports/7862ec09-939d-4d9c-95cf-cfa08b756be8/8916e931041e00fd12ad?experience=power-bi",
        icon: "clipboard-list"
    },
    {
        titulo: "Análise ENEM",
        descricao: "Insights e estatísticas detalhadas sobre o ENEM.",
        link: "https://app.powerbi.com/groups/me/reports/97907099-7f19-4942-ab2d-8d446a68648f/b4e0138c8eca0439b02e?experience=power-bi",
        icon: "file-spreadsheet"
    },
    {
        titulo: "Vendas X Clientes",
        descricao: "Relacionamento comercial entre produtos, clientes e vendas.",
        link: "https://app.powerbi.com/groups/me/reports/e1bb29f0-b1d1-4833-9392-055b67dd615f/5a3c4e787fde914ff989?experience=power-bi",
        icon: "trending-up"
    }
];

// 2. Função para construir os cards no HTML
function carregarDashboards() {
    const grid = document.getElementById('dashboard-grid');

    projetos.forEach(projeto => {
        // Criar elemento do card
        const cardHtml = `
            <div class="card" data-aos="zoom-in">
                <i data-lucide="${projeto.icon}" size="40"></i>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank" class="btn-link">Abrir Dashboard</a>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });

    // Inicializar ícones e animações
    lucide.createIcons();
    AOS.init({
        duration: 1000,
        once: true
    });
}

// 3. Executar quando a página carregar
window.onload = carregarDashboards;

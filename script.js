document.addEventListener('DOMContentLoaded', function() {
    console.log("Bem-vindo ao site Receitas da Web!");
    
    // 1. Destaque ao passar o mouse nas receitas
    const allRecipes = document.querySelectorAll('li');
    allRecipes.forEach(recipe => {
        recipe.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        recipe.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 2. Filtro de pesquisa
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Pesquisar receitas...');
    searchInput.style.width = '100%';
    searchInput.style.padding = '10px';
    searchInput.style.margin = '20px 0';
    searchInput.style.borderRadius = '4px';
    searchInput.style.border = '1px solid #ddd';
    
    document.querySelector('header').appendChild(searchInput);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        allRecipes.forEach(recipe => {
            const recipeText = recipe.textContent.toLowerCase();
            if (recipeText.includes(searchTerm)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    });

    // 3. Botão "Voltar ao topo"
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.padding = '10px 15px';
    backToTopBtn.style.backgroundColor = '#007BFF';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.borderRadius = '50%';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.display = 'none';
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Contador de receitas por seção
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const count = section.querySelectorAll('li').length;
        const title = section.querySelector('h2');
        title.innerHTML += ` <span style="font-size: 0.8em; color: #666">(${count})</span>`;
    });

    // 5. Modal para futura exibição de receitas completas
    document.querySelector('main').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            alert(`Você clicou em: "${e.target.textContent}"\n\nEsta funcionalidade pode ser expandida para exibir a receita completa!`);
            
            // Futuramente pode ser substituído por:
            // openRecipeModal(e.target.textContent);
        }
    });
})

// Função para futura expansão com modal de receita
function openRecipeModal(recipeName) {
    console.log(`Abrir receita: ${recipeName}`);
    // Implementação futura para exibir receitas completas
}
// ============================================
// BUSCADOR PRINCIPAL (Página search.html)
// ============================================
let searchCategory = 'all';
let searchQueryMain = '';

document.addEventListener('DOMContentLoaded', () => {
    setupSearchMain();
    setupFiltersMain();
    loadSearchResults();
});

function loadSearchResults() {
    const grid = document.getElementById('searchResultsGrid');
    const count = document.getElementById('resultsCount');
    
    const filtered = getFilteredArticles();
    
    count.textContent = `(${filtered.length} resultados)`;
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; grid-column: 1 / -1;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--color-text-light); margin-bottom: 20px;"></i>
                <p style="font-size: 1.2rem; color: var(--color-text-light);">
                    No se encontraron resultados para tu búsqueda
                </p>
                <p style="margin-top: 10px; color: var(--color-text-light);">
                    Prueba con otra palabra clave o cambia los filtros
                </p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map(article => `
        <article class="article-card">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <span class="article-category">${translateCategory(article.category)}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-preview">${article.preview}</p>
                <div class="article-meta">
                    <span class="article-date">
                        <i class="fas fa-calendar"></i>
                        ${formatDate(article.date)}
                    </span>
                    <a href="${article.link}" class="article-link">
                        Leer <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function setupSearchMain() {
    const searchInput = document.getElementById('searchInputMain');
    searchInput.addEventListener('input', (e) => {
        searchQueryMain = e.target.value;
        loadSearchResults();
    });
}

function setupFiltersMain() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            searchCategory = button.dataset.category;
            loadSearchResults();
        });
    });
}

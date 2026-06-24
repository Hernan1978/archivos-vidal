const API_URL = 'https://script.google.com/macros/s/AKfycbyKvO_ZwtcL9TLkPGUc-F8WVRqB4JxZtNkVmBik-O3TI0qsyteIeuQDT1Gq_fUbvJwo/exec';

async function cargarArticulos() {
  try {
    const res = await fetch(API_URL);
    const articulos = await res.json();
    return articulos;
  } catch (e) {
    console.error('Error cargando artículos:', e);
    return [];
  }
}

function renderCard(art) {
  return `
    <div class="article-card">
      ${art.imagen ? `<img src="${art.imagen}" alt="${art.titulo}" class="article-image" onerror="this.style.display='none'">` : ''}
      <div class="article-content">
        <span class="article-category">${art.categoria || ''}</span>
        <h3 class="article-title">${art.titulo}</h3>
        <p class="article-preview">${art.descripcion || ''}</p>
        <div class="article-meta">
          <span class="article-date">
            <i class="fas fa-calendar"></i> ${art.fecha || ''}
          </span>
          ${art.link ? `<a href="${art.link}" target="_blank" class="article-link">Leer <i class="fas fa-arrow-right"></i></a>` : ''}
        </div>
      </div>
    </div>
  `;
}

// Cargar en la home
const grid = document.getElementById('articlesGrid');
if (grid) {
  cargarArticulos().then(articulos => {
    const destacados = articulos.filter(a => a.destacado === 'si' || a.destacado === true);
    const mostrar = destacados.length > 0 ? destacados : articulos;
    if (mostrar.length === 0) {
      grid.innerHTML = '<p style="color:var(--texto-suave);padding:2rem;">Todavía no hay artículos publicados.</p>';
    } else {
      grid.innerHTML = mostrar.map(renderCard).join('');
    }
  });
}

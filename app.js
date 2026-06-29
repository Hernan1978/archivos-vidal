const SHEET_API = 'https://script.google.com/macros/s/AKfycbwO7TVauAJNFXsK8mAQrePvbGEeZIMjvOX81HP2LGMmO9i1TzKmyswVdhpzK3USDwk/exec';

const state = {
  items: [],
  category: 'Todas'
};

const filtersEl = document.getElementById('filters');
const gridEl = document.getElementById('notesGrid');
const featuredMeta = document.getElementById('featuredMeta');
const featuredTitle = document.getElementById('featuredTitle');
const featuredExcerpt = document.getElementById('featuredExcerpt');
const featuredLink = document.getElementById('featuredLink');

function categories(items){
  return ['Todas', ...new Set(items.map(i => i.category).filter(Boolean))];
}

function normalizeItem(item){
  return {
    title:    item.titulo    || '',
    category: item.categoria || '',
    date:     item.fecha     || '',
    excerpt:  item.resumen   || '',
    link:     `nota.html?id=${item.id}`,
    featured: String(item.destacado).toLowerCase() === 'true',
    image:    item.imagen    || '',
    slug:     item.slug      || ''
  };
}

function renderFilters(){
  filtersEl.innerHTML = categories(state.items).map(c => `
    <button type="button" data-cat="${c}">${c}</button>
  `).join('');
  filtersEl.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      state.category = btn.dataset.cat;
      render();
    });
  });
}

function renderFeatured(items){
  const featured = items.find(i => i.featured) || items[0];
  if (!featured) {
    featuredMeta.textContent = 'Sin datos';
    featuredTitle.textContent = 'Todavía no hay notas';
    featuredExcerpt.textContent = 'Cargá tus filas en Sheets y volvé a cargar.';
    featuredLink.href = '#';
    return;
  }
  featuredMeta.textContent = featured.date;
  featuredTitle.textContent = featured.title;
  featuredExcerpt.textContent = featured.excerpt;
  featuredLink.href = featured.link || '#';
}

function renderGrid(items){
  gridEl.innerHTML = items.map((item, idx) => `
    <article class="note-card reveal" style="animation-delay:${Math.min(idx * 0.04, 0.28)}s">
      <div class="meta">${item.date}</div>
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      <a href="${item.link || '#'}">Leer más</a>
    </article>
  `).join('');
}

function render(){
  const filtered = state.category === 'Todas'
    ? state.items
    : state.items.filter(i => i.category === state.category);
  renderFeatured(filtered);
  renderGrid(filtered);
}

function buildBricks(){
  const rows = 18;
  const brickW = 80;
  const brickH = 36;
  const gap = 2;
  const totalW = 700;
  const bricksPerRow = Math.ceil(totalW / (brickW + gap)) + 1;
  const colors = ['#3d2418','#3a2115','#3e2519','#3b2216','#3c2418'];
  let svg = `<svg style="position:absolute;inset:0;width:100%;height:100%;" viewBox="0 0 700 ${rows*(brickH+gap)}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">`;
  for(let r=0;r<rows;r++){
    const offset = r%2===0 ? 0 : -(brickW+gap)/2;
    for(let c=0;c<bricksPerRow;c++){
      const x = offset + c*(brickW+gap);
      const y = r*(brickH+gap);
      const col = colors[(r+c)%colors.length];
      svg += `<rect x="${x}" y="${y}" width="${brickW}" height="${brickH}" fill="${col}" rx="1" stroke="#1a120c" stroke-width="1"/>`;
    }
  }
  svg += `<rect x="0" y="0" width="700" height="${rows*(brickH+gap)}" fill="rgba(0,0,0,0.45)"/>`;
  svg += `</svg>`;
  return svg;
}

async function renderMural(){
  const mural = document.getElementById('muralContainer');
  if (!mural) return;

  try {
    const res = await fetch(`${SHEET_API}?sheet=mural`);
    const data = await res.json();
    const hitos = data.items || [];

    if (hitos.length === 0) {
      mural.innerHTML = '<p style="color:var(--muted);text-align:center;">Sin hitos cargados.</p>';
      return;
    }

    const votados = {};

    mural.innerHTML = `
      <div style="position:relative;border-radius:24px;overflow:hidden;padding:2rem;min-height:300px;">
        ${buildBricks()}
        <div style="position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,.012) 40px,rgba(255,255,255,.012) 41px);pointer-events:none;z-index:1;"></div>
        <div style="position:absolute;font-family:sans-serif;font-size:90px;font-weight:900;color:rgba(255,90,60,0.07);top:5%;right:-10px;transform:rotate(-12deg);pointer-events:none;z-index:1;white-space:nowrap;">LADO D</div>
        <div style="position:relative;z-index:2;display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;" id="muralHitos"></div>
      </div>
      <div id="expOverlay" onclick="if(event.target===this)this.style.display='none'" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:200;align-items:center;justify-content:center;padding:1rem;"></div>
    `;

    document.getElementById('muralHitos').innerHTML = hitos.map((h, i) => `
      <div onclick="abrirExp(${i})"
        style="cursor:pointer;padding:1rem;border-radius:12px;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(4px);transition:filter .2s,transform .2s;${hitos.length % 2 !== 0 && i === hitos.length-1 ? 'grid-column:1/-1;max-width:340px;margin:0 auto;' : ''}"
        onmouseover="this.style.filter='brightness(1.3)';this.style.transform='translateY(-2px)'"
        onmouseout="this.style.filter='none';this.style.transform='none'">
        <div style="font-size:10px;letter-spacing:.1em;color:${h.color||'#ff5a3c'};margin-bottom:.3rem;text-shadow:0 0 8px ${h.color||'#ff5a3c'};">${h.anio||''}</div>
        <div style="font-size:18px;font-weight:700;color:${h.color||'#ff5a3c'};margin-bottom:.4rem;line-height:1.2;text-shadow:0 0 12px ${h.color||'#ff5a3c'}44;">${h.titulo||''}</div>
        <div style="font-size:12px;color:#d4b896;line-height:1.6;">${h.descripcion||h.descrpcion||''}</div>
        <div style="font-size:11px;color:${h.color||'#ff5a3c'};margin-top:.5rem;border-bottom:1.5px solid ${h.color||'#ff5a3c'};display:inline-block;">${h.tag||''}</div>
        <div style="font-size:10px;color:#9a7a5a;margin-top:.4rem;font-style:italic;">↳ tocá para el veredicto de Carlos</div>
      </div>
    `).join('');

    window.abrirExp = function(idx) {
      const h = hitos[idx];
      const votado = votados[idx];
      document.getElementById('expOverlay').innerHTML = `
        <div style="background:#1a1410;border:1.5px solid #3a2a1a;max-width:500px;width:100%;padding:2rem;position:relative;border-radius:4px;border-top:4px solid #e84a2a;">
          <button onclick="document.getElementById('expOverlay').style.display='none'" style="position:absolute;top:.75rem;right:1rem;background:none;border:none;font-size:22px;cursor:pointer;color:#6b5a3a;">✕</button>
          <div style="text-align:center;border-bottom:1px dashed #3a2a1a;padding-bottom:1rem;margin-bottom:1.2rem;">
            <div style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6b5a3a;margin-bottom:.4rem;">Pasa y mira el mural</div>
            <div style="font-size:18px;font-weight:700;color:#e8d5a0;line-height:1.3;">${h.titulo||''}</div>
          </div>
          <div style="font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:#6b5a3a;margin-bottom:.35rem;">Hechos</div>
          <div style="font-size:12px;line-height:1.7;color:#b8a880;margin-bottom:1.1rem;">${h.hechos||'Sin hechos cargados.'}</div>
          <div style="font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:#6b5a3a;margin-bottom:.35rem;">Opinologo Carlos</div>
          <div style="border-left:3px solid #e84a2a;padding:.75rem 1rem;font-size:14px;line-height:1.6;color:#e8d5a0;margin-bottom:1.1rem;background:rgba(232,74,42,.06);">${h.sentencia||'Sin sentencia cargada.'}</div>
          <button onclick="marcarEstabas(${idx})" id="estabas-${idx}" style="display:flex;align-items:center;gap:8px;background:transparent;border:1px solid #3a2a1a;border-radius:2px;padding:6px 14px;font-size:12px;color:${votado?'#e84a2a':'#6b5a3a'};cursor:pointer;">
            📍 ${votado ? 'Estuviste ahí' : 'Yo estaba ahí'}
          </button>
          <div style="text-align:right;font-size:10px;color:#4a3a2a;border-top:1px dashed #3a2a1a;padding-top:.75rem;margin-top:1rem;">Carlos de Argentina</div>
        </div>
      `;
      document.getElementById('expOverlay').style.display = 'flex';
    };

    window.marcarEstabas = function(idx) {
      if (!votados[idx]) {
        votados[idx] = true;
        const btn = document.getElementById(`estabas-${idx}`);
        if (btn) { btn.style.color = '#e84a2a'; btn.innerHTML = '📍 Estuviste ahí'; }
      }
    };

  } catch(err) {
    mural.innerHTML = '<p style="color:var(--muted);text-align:center;">Error al cargar el mural.</p>';
  }
}

async function loadData(){
  try {
    const res = await fetch(SHEET_API);
    const data = await res.json();
    const rawItems = Array.isArray(data.items) ? data.items : data;
    state.items = (rawItems || []).map(normalizeItem);
  } catch(err) {
    state.items = [];
    featuredMeta.textContent = 'Error al cargar';
    featuredTitle.textContent = 'No se pudo conectar con Sheets';
    featuredExcerpt.textContent = 'Verificá que el Apps Script esté desplegado como público.';
  }
  renderFilters();
  render();
  renderMural();
}

loadData();

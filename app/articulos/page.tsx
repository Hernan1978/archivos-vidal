import { articulos } from '@/lib/articulos'
import FilaArticulo from '@/components/FilaArticulo'

export default function ArticulosPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--rojo-claro)' }}>
          Archivo completo
        </span>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: '42px', fontWeight: 700, color: 'var(--crema)', marginTop: '0.75rem' }}>
          Todos los artículos
        </h1>
      </div>
      <div>
        {articulos.map((art, i) => (
          <FilaArticulo key={art.id} art={art} index={i} />
        ))}
      </div>
    </div>
  )
}

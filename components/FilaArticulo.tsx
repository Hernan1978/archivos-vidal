'use client'
import Link from 'next/link'
import { Articulo } from '@/lib/articulos'

export default function FilaArticulo({ art, index }: { art: Articulo, index: number }) {
  return (
    <Link href={`/articulos/${art.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          padding: '1.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1.5rem',
          alignItems: 'center', transition: 'padding-left 0.2s', cursor: 'pointer'
        }}
        onMouseEnter={e => (e.currentTarget.style.paddingLeft = '8px')}
        onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0')}
      >
        <span style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: 'rgba(139,26,26,0.4)', fontWeight: 700 }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <span style={{ fontSize: '11px', color: 'var(--rojo-claro)', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
            {art.categoria}
          </span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 600, color: 'var(--crema)', lineHeight: 1.3, marginBottom: '4px' }}>
            {art.titulo}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--crema-oscura)', opacity: 0.55 }}>{art.bajada}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <span style={{ fontSize: '11px', color: 'var(--gris-texto)', display: 'block' }}>{art.fecha}</span>
          <span style={{ fontSize: '11px', color: 'var(--gris-texto)' }}>{art.lectura}</span>
        </div>
      </article>
    </Link>
  )
}

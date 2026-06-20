'use client'
import Link from 'next/link'
import { Articulo } from '@/lib/articulos'
import { useState } from 'react'

export default function ArticuloDestacado({ art }: { art: Articulo }) {
  const [hover, setHover] = useState(false)

  return (
    <Link href={`/articulos/${art.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem',
          padding: '2.5rem',
          border: `1px solid ${hover ? 'rgba(192,57,43,0.6)' : 'rgba(139,26,26,0.25)'}`,
          transition: 'border-color 0.3s', cursor: 'pointer'
        }}
      >
        <div>
          <span style={{
            fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
            color: 'var(--rojo-claro)', display: 'block', marginBottom: '1rem'
          }}>
            {art.categoria}
          </span>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 600,
            color: 'var(--crema)', lineHeight: 1.3, marginBottom: '1rem'
          }}>
            {art.titulo}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '15px', color: 'var(--crema-oscura)', opacity: 0.75, lineHeight: 1.7 }}>
            {art.bajada}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <span style={{ fontSize: '12px', color: 'var(--gris-texto)' }}>{art.fecha}</span>
            <span style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--rojo-claro)' }}>
              Leer →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

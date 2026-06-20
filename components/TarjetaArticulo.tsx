'use client'
import Link from 'next/link'
import { Articulo } from '@/lib/articulos'
import { useState } from 'react'

export default function TarjetaArticulo({ articulo, index }: { articulo: Articulo, index: number }) {
  const [hover, setHover] = useState(false)

  return (
    <Link href={`/articulos/${articulo.slug}`} style={{ textDecoration: 'none' }}>
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: '2rem',
          background: hover ? 'rgba(139,26,26,0.08)' : 'var(--negro)',
          transition: 'background 0.3s',
          cursor: 'pointer', height: '100%'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--rojo-claro)' }}>
            {articulo.categoria}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--gris-texto)' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 600,
          color: 'var(--crema)', lineHeight: 1.35, marginBottom: '0.75rem'
        }}>
          {articulo.titulo}
        </h3>

        <p style={{ fontSize: '13px', color: 'var(--crema-oscura)', opacity: 0.6, lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {articulo.bajada}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: 'var(--gris-texto)' }}>{articulo.fecha}</span>
          <span style={{
            fontSize: '11px', color: hover ? 'var(--rojo-claro)' : 'var(--gris-texto)',
            transition: 'color 0.2s', letterSpacing: '1px'
          }}>
            {articulo.lectura} lectura →
          </span>
        </div>
      </article>
    </Link>
  )
}

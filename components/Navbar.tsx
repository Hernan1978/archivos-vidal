'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(13,13,13,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(139,26,26,0.3)',
      padding: '0 1.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '60px'
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 600,
          color: 'var(--crema)', letterSpacing: '-0.5px'
        }}>
          Archivo <span style={{ color: 'var(--rojo-claro)' }}>Vidal</span>
        </span>
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['Artículos', 'Sobre Ernesto'].map(item => (
          <Link
            key={item}
            href={item === 'Artículos' ? '/articulos' : '/sobre'}
            style={{
              color: 'var(--crema-oscura)', fontSize: '13px',
              textDecoration: 'none', letterSpacing: '0.5px',
              opacity: 0.7, transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
          >
            {item}
          </Link>
        ))}
        <a
          href="https://instagram.com/archivovidal"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '12px', padding: '6px 14px',
            border: '1px solid var(--rojo)',
            color: 'var(--rojo-claro)', textDecoration: 'none',
            letterSpacing: '1px', textTransform: 'uppercase',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--rojo)'
            e.currentTarget.style.color = 'var(--crema)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--rojo-claro)'
          }}
        >
          Instagram
        </a>
      </div>
    </nav>
  )
}

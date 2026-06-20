'use client'
import { useEffect, useState } from 'react'

const frases = [
  'Lo que los manuales prefirieron omitir.',
  'Historia argentina sin filtros.',
  'Los pasillos, no los discursos.',
]

export default function HeroAnimado() {
  const [fraseIndex, setFraseIndex] = useState(0)
  const [texto, setTexto] = useState('')
  const [escribiendo, setEscribiendo] = useState(true)

  useEffect(() => {
    const frase = frases[fraseIndex]
    let i = 0

    if (escribiendo) {
      const intervalo = setInterval(() => {
        setTexto(frase.slice(0, i + 1))
        i++
        if (i >= frase.length) {
          clearInterval(intervalo)
          setTimeout(() => setEscribiendo(false), 2200)
        }
      }, 45)
      return () => clearInterval(intervalo)
    } else {
      let j = frase.length
      const intervalo = setInterval(() => {
        setTexto(frase.slice(0, j - 1))
        j--
        if (j <= 0) {
          clearInterval(intervalo)
          setFraseIndex(prev => (prev + 1) % frases.length)
          setTimeout(() => setEscribiendo(true), 300)
        }
      }, 25)
      return () => clearInterval(intervalo)
    }
  }, [fraseIndex, escribiendo])

  return (
    <section style={{
      minHeight: '85vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 1.5rem',
      maxWidth: '900px', margin: '0 auto',
      position: 'relative'
    }}>
      {/* Número decorativo */}
      <span style={{
        position: 'absolute', top: '3rem', right: 0,
        fontFamily: 'var(--serif)', fontSize: '120px', fontWeight: 700,
        color: 'rgba(139,26,26,0.07)', userSelect: 'none', lineHeight: 1
      }}>
        AR
      </span>

      <div className="fade-up">
        <span style={{
          fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase',
          color: 'var(--rojo-claro)', display: 'block', marginBottom: '2rem'
        }}>
          Archivo Vidal — Historia argentina
        </span>

        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 700, lineHeight: 1.1, color: 'var(--crema)',
          marginBottom: '2rem', maxWidth: '700px'
        }}>
          Los pasillos,<br />
          <span style={{ color: 'var(--rojo-claro)', fontStyle: 'italic' }}>no los discursos.</span>
        </h1>

        <div style={{ height: '32px', marginBottom: '3rem', display: 'flex', alignItems: 'center' }}>
          <p style={{
            fontSize: '18px', color: 'var(--crema-oscura)', opacity: 0.65,
            fontWeight: 300, letterSpacing: '0.3px'
          }}>
            {texto}
            <span style={{
              display: 'inline-block', width: '2px', height: '18px',
              background: 'var(--rojo-claro)', marginLeft: '2px',
              animation: 'blink 1s infinite', verticalAlign: 'middle'
            }} />
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#articulos" style={{
            padding: '12px 28px', background: 'var(--rojo)',
            color: 'var(--crema)', fontSize: '13px', letterSpacing: '1px',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'background 0.2s'
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--rojo-claro)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--rojo)')}
          >
            Leer archivo
          </a>
          <a href="https://instagram.com/archivovidal" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '12px 28px', border: '1px solid rgba(255,255,255,0.15)',
              color: 'var(--crema-oscura)', fontSize: '13px', letterSpacing: '1px',
              textTransform: 'uppercase', textDecoration: 'none', opacity: 0.7,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '1.5rem',
        display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.4
      }}>
        <div style={{ width: '24px', height: '1px', background: 'var(--crema)' }} />
        <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
      </div>
    </section>
  )
}

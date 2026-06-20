export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(139,26,26,0.3)',
      padding: '2.5rem 1.5rem',
      marginTop: '5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div>
        <span style={{ fontFamily: 'var(--serif)', fontSize: '16px', color: 'var(--crema)', opacity: 0.8 }}>
          Archivo <span style={{ color: 'var(--rojo-claro)' }}>Vidal</span>
        </span>
        <p style={{ fontSize: '12px', color: 'var(--gris-texto)', marginTop: '4px' }}>
          Historia argentina sin filtros. Lo que los manuales prefirieron omitir.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="https://instagram.com/archivovidal" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '12px', color: 'var(--gris-texto)', textDecoration: 'none', letterSpacing: '1px' }}>
          @archivovidal
        </a>
        <span style={{ fontSize: '11px', color: 'var(--gris-texto)', opacity: 0.5 }}>
          © 2026 Ernesto Vidal
        </span>
      </div>
    </footer>
  )
}

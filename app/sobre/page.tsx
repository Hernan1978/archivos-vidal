export default function SobrePage() {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
      <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--rojo-claro)' }}>
        Quién es
      </span>
      <h1 style={{
        fontFamily: 'var(--serif)', fontSize: '48px', fontWeight: 700,
        color: 'var(--crema)', marginTop: '0.75rem', marginBottom: '3rem'
      }}>
        Ernesto Vidal
      </h1>

      <div style={{ height: '1px', background: 'rgba(139,26,26,0.4)', marginBottom: '3rem' }} />

      {[
        `No soy historiador de carrera. Por suerte, porque si lo fuera tendría que hablar bien de los mismos de siempre.`,
        `Llevo 20 años leyendo lo que otros prefieren olvidar — archivos, memorias, cartas que nunca deberían haber sobrevivido. Me interesan los pasillos, no los discursos. Los discursos los escriben los asesores. En los pasillos pasan las cosas reales.`,
        `La historia argentina es una tragedia. Pero si no te reís, llorás. Y yo ya lloré bastante.`,
        `No creo en Dios ni en los próceres. En ambos casos, la evidencia no acompaña.`
      ].map((p, i) => (
        <p key={i} style={{
          fontSize: '17px', lineHeight: 1.9, color: 'var(--crema-oscura)',
          opacity: 0.8, marginBottom: '1.75rem', fontWeight: 300,
          ...(i === 3 ? { fontStyle: 'italic', color: 'var(--crema)', opacity: 0.9 } : {})
        }}>
          {p}
        </p>
      ))}

      <div style={{ marginTop: '3rem', padding: '1.5rem', borderLeft: '3px solid var(--rojo)' }}>
        <p style={{ fontSize: '13px', color: 'var(--gris-texto)', letterSpacing: '1px', marginBottom: '0.5rem' }}>
          SEGUIR A ERNESTO
        </p>
        <a href="https://instagram.com/archivovidal" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '15px', color: 'var(--rojo-claro)', textDecoration: 'none' }}>
          @archivovidal en Instagram →
        </a>
      </div>
    </div>
  )
}

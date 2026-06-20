export type Articulo = {
  id: number
  slug: string
  titulo: string
  bajada: string
  categoria: string
  fecha: string
  lectura: string
  destacado: boolean
  contenido: string
}

export const articulos: Articulo[] = [
  {
    id: 1,
    slug: "menem-rico-pais-fundido",
    titulo: "Cómo Menem convenció a medio país de que era rico mientras el país se fundía",
    bajada: "Los Ferrari, las cirugías, las fiestas. Una historia de humo, espejos y un pueblo que prefirió no mirar.",
    categoria: "Años 90",
    fecha: "12 junio 2026",
    lectura: "8 min",
    destacado: true,
    contenido: `Carlos Menem llegó a la presidencia en 1989 con las reservas del Banco Central en ruinas y el país en llamas. Lo que hizo a continuación fue un ejercicio de ilusionismo que todavía nos cuesta entender.

Mientras la convertibilidad creaba la ilusión de estabilidad, Menem construía su propia ilusión personal: la del presidente millonario, glamoroso, deseado. Los Ferrari rojos. Las cirugías estéticas. Las fotos con modelos. Todo cuidadosamente orquestado para que nadie mirara lo que estaba pasando debajo.

El problema es que funcionó. Durante años, buena parte de la clase media argentina prefirió creer que el presidente era rico porque Argentina era rica. Que si él podía comprarse un Ferrari, algo estábamos haciendo bien.

Lo que no vieron —o prefirieron no ver— es que nadie sabe con exactitud de dónde venía ese dinero. Las investigaciones judiciales nunca terminaron de aclarar el origen del patrimonio presidencial. Las causas se abrían, se cerraban, se archivaban.

Al final, la convertibilidad cayó. Los ahorros de millones de personas quedaron atrapados en el corralito. Y Menem se fue a vivir a Chile.

Los Ferrari siguen siendo rojos.`
  },
  {
    id: 2,
    slug: "iglesia-peronismo-romance-turbio",
    titulo: "La Iglesia y el peronismo: el romance más turbio de la historia argentina",
    bajada: "Alianza, ruptura, quema de iglesias. Un clásico argentino que nadie quiere recordar del todo.",
    categoria: "Peronismo",
    fecha: "5 junio 2026",
    lectura: "10 min",
    destacado: false,
    contenido: `Hubo un tiempo en que la Iglesia Católica argentina y el peronismo se miraban con ojos de amor. Era 1946 y Perón necesitaba legitimidad; la Iglesia necesitaba un Estado amigo que mantuviera la educación religiosa obligatoria en las escuelas.

El acuerdo fue tácito pero claro: apoyo institucional a cambio de política favorable. Durante años funcionó.

Después vino Eva. Y ahí empezaron los problemas.

La canonización popular de Evita incomodó profundamente a una institución que considera que los santos los elige ella. La competencia espiritual no se negocia. Cuando Perón además legalizó el divorcio y la prostitución en 1954, la ruptura fue inevitable.

Lo que siguió es uno de los episodios más violentos y menos discutidos de la historia argentina: el bombardeo de Plaza de Mayo en junio de 1955, donde murieron más de 300 civiles, seguido de la quema de iglesias por grupos peronistas en respuesta.

Cada bando tiene su versión. Ninguna es del todo honesta.`
  },
  {
    id: 3,
    slug: "golpe-1955-lo-que-omitieron",
    titulo: "1955 y lo que los libros de historia eligieron omitir",
    bajada: "La Revolución Libertadora contada sin romantizarla ni demonizarla. Solo los hechos incómodos.",
    categoria: "Golpes",
    fecha: "28 mayo 2026",
    lectura: "9 min",
    destacado: false,
    contenido: `El 16 de septiembre de 1955, un golpe de Estado derrocó a Juan Domingo Perón. Los antiperonistas lo llamaron Revolución Libertadora. Los peronistas lo llamaron la Revolución Fusiladora. Ambos nombres son propaganda.

Lo que pasó fue más complejo y más sucio que cualquiera de las dos versiones.

El nuevo gobierno provisional, liderado primero por Eduardo Lonardi y luego por Pedro Aramburu, hizo algo que pocas veces se analiza en profundidad: intentó borrar al peronismo de la historia argentina por decreto. Se prohibió mencionar el nombre de Perón. Se prohibió la letra de la marcha peronista. Se disolvió el Partido Justicialista.

¿Funcionó? No. Veintitrés años después, Perón volvía al país en un avión.

Pero lo más omitido de 1955 no es la proscripción. Es lo que pasó en junio de ese año, tres meses antes del golpe: el bombardeo de Plaza de Mayo, ordenado por militares que querían derrocar a Perón y mataron a más de 300 personas para lograrlo.

Ese episodio no aparece en muchos manuales escolares. Preguntémonos por qué.`
  },
  {
    id: 4,
    slug: "muertes-causas-naturales-politica-argentina",
    titulo: "De qué murieron realmente los que murieron de \"causas naturales\"",
    bajada: "Un repaso por las muertes convenientes de la política argentina. Con fuentes. Sin teorías de conspiración.",
    categoria: "Misterios",
    fecha: "20 mayo 2026",
    lectura: "11 min",
    destacado: false,
    contenido: `La historia argentina tiene una cantidad inusualmente alta de muertes oportunas. Personas que estaban por declarar, por publicar algo, por llegar al poder o por irse de él, y que de repente fallecieron de causas que nadie investigó demasiado.

No soy conspiracionista. Creo en la navaja de Occam: la explicación más simple suele ser la correcta. Pero hay casos donde la explicación simple es precisamente que alguien tuvo motivos, medios y oportunidad.

El caso más conocido es el de Juan Duarte, hermano de Eva Perón, que apareció muerto en 1953 con una bala en la cabeza. El gobierno de Perón dijo que fue suicidio. Muchos no lo creyeron entonces. Muchos no lo creen ahora.

Está también el caso de Ramón Falcón, jefe de la policía de Buenos Aires, asesinado en 1909. Ese no fue misterioso: lo mató un anarquista en plena calle. Pero la investigación posterior sobre sus redes de informantes nunca se completó.

La lista es larga. Lo que tienen en común estos casos no es necesariamente la conspiración. Es la impunidad. En Argentina, la muerte de un personaje poderoso rara vez se investiga hasta las últimas consecuencias.

Eso sí es un dato objetivo. El resto, cada uno que saque sus conclusiones.`
  },
  {
    id: 5,
    slug: "general-napoleón-casi-funde-pais",
    titulo: "El general que se creía Napoleón y casi funde el país",
    bajada: "El ego detrás de las decisiones que pagamos todos. Un perfil sin piedad.",
    categoria: "Militares",
    fecha: "10 mayo 2026",
    lectura: "7 min",
    destacado: false,
    contenido: `Argentina tuvo varios generales que confundieron el uniforme con una corona. Pero pocos combinaron la megalomanía con la incompetencia económica de manera tan consistente como José Félix Uriburu.

Uriburu encabezó el primer golpe de Estado de la historia argentina moderna, en 1930. Derrocó a Hipólito Yrigoyen —que a los 78 años ya no estaba en condiciones de gobernar, hay que reconocerlo— con el apoyo entusiasta de la oligarquía terrateniente y de varios diarios que hoy todavía se publican.

Lo que vino después fue un gobierno de dieciocho meses que no logró casi nada de lo que prometió y sí logró varias cosas que no prometió: torturas a opositores, fraude electoral institucionalizado y la consolidación de lo que los historiadores llaman la "Década Infame".

Uriburu murió en 1932, en París, de cáncer. No llegó a ver las consecuencias completas de lo que había puesto en marcha.

El país tardó décadas en procesar el golpe del 30. Algunos argumentan que todavía lo está procesando.`
  }
]

export const getDestacado = () => articulos.find(a => a.destacado)
export const getRecientes = () => articulos.filter(a => !a.destacado).slice(0, 4)
export const getBySlug = (slug: string) => articulos.find(a => a.slug === slug)
export const getCategorias = () => [...new Set(articulos.map(a => a.categoria))]

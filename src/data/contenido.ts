// Textos de la página — fuente: Hoja_de_Vida_Web_VAMP_V2 (23 sep 2026).
// Para cambiar un texto de la página, se edita aquí y nada más.

// Video provisional mientras llegan los videos reales (YouTube: Popayán desde el aire)
const DEMO = 'vRvxdm0PqM0';

// Botones de video y testimonios: se activan (true) cuando los videos reales estén producidos
export const videosActivos = false;

export const sitio = {
  url: 'https://victorarmandomartinez.com',
  titulo: 'Víctor Armando Martínez Perafán · Hoja de vida',
  descripcion:
    'Víctor Armando Martínez Perafán: un hijo del Macizo que hizo de Popayán su casa. Sus raíces en El Rosal, su vida en Popayán desde 1991 y 24 años al servicio de Popayán y el Cauca.',
};

export const nav = [
  { id: 'raices', texto: 'Sus raíces' },
  { id: 'popayan', texto: 'Popayán, su casa' },
  { id: 'trayectoria', texto: 'Su trayectoria' },
  { id: 'construido', texto: 'Lo que ha construido' },
  { id: 'mueve', texto: 'Lo que lo mueve' },
];

export const portada = {
  rotulo: 'Hoja de vida',
  nombre: 'Víctor Armando Martínez Perafán',
  frase: 'Un hijo del Macizo que hizo de Popayán su casa.',
  credenciales: [
    'Ingeniero Agroindustrial',
    'Especialista en Gerencia de Proyectos',
    'Especialista en Construcción de Paz',
    'Especialista (e) en Alta Gerencia',
  ],
  datos: [
    { icono: 'lugar', texto: 'Nacido en El Rosal, San Sebastián, Cauca' },
    { icono: 'casa', texto: 'En Popayán desde 1991' },
    { icono: 'maletin', texto: '24 años de trayectoria' },
  ],
};

export const raices = {
  numero: 'Uno',
  titulo: 'Sus raíces',
  frase: '«Nadie llega solo».',
  texto:
    'Es el menor de once hermanos de una familia humilde del Macizo Colombiano. Su madre murió cuando era niño y lo crio su abuela, una mujer exigente y amorosa que con su negocio de empanadas les dio sustento y estudio. Los hermanos mayores estudiaron primero y fueron ayudando a los que venían detrás. Él era el último de esa fila.',
  cierre: 'Con unión y trabajo colectivo, todos salieron adelante.',
  video: { clave: 'nadie-llega-solo', youtube: DEMO, etiqueta: 'Ver el video «Nadie llega solo»' },
};

export const popayan = {
  numero: 'Dos',
  titulo: 'Popayán, su casa',
  texto:
    'Llegó a Popayán en 1991, con quince años. La ciudad lo recibió como recibe a tantos que llegan de los municipios buscando estudio y oportunidades. Aquí terminó el bachillerato, aquí entró a la Universidad del Cauca y aquí hizo su vida y su familia: es padre de cinco hijos.',
  hitos: [
    { foto: 'hito-ulloa', texto: 'Bachiller del Colegio Francisco Antonio de Ulloa, donde se destacó por su liderazgo estudiantil.' },
    { foto: 'hito-militar', texto: 'Servicio militar: subteniente de la reserva.' },
    { foto: 'hito-unicauca', texto: 'Ingeniero Agroindustrial de la Universidad del Cauca, del primer grupo de egresados del programa.' },
  ],
  frase: '«Popayán nos recibió y nos dio con generosidad».',
};

export type Icono = 'aula' | 'campo' | 'obra' | 'alcaldia' | 'industria' | 'territorio';

export const trayectoria = {
  numero: 'Tres',
  titulo: 'Su trayectoria',
  entradilla: '24 años al servicio de Popayán y el Cauca.',
  linea: [
    { anio: '2002', cargo: 'Docente de ciencias', lugar: 'I.E. Nuestra Señora del Rosario, San Sebastián', icono: 'aula' },
    { anio: '2003', cargo: 'Coordinador de la UMATA', lugar: 'San Sebastián', icono: 'campo' },
    { anio: '2004–2006', cargo: 'Secretario de Planeación e Infraestructura', lugar: 'San Sebastián', icono: 'obra' },
    { anio: '2008–2010', cargo: 'Alcalde, elegido a los 31 años', lugar: 'San Sebastián', icono: 'alcaldia', hito: 'hito-alcalde' },
    { anio: '2010–2011', cargo: 'Gerente de la Industria Licorera del Cauca', lugar: 'Popayán', icono: 'industria', hito: 'hito-licorera' },
    { anio: '2013–2016', cargo: 'Coordinación de proyectos y dirección de obra de la pavimentación de la Calle Sexta', lugar: 'Popayán (sector privado)', icono: 'obra' },
    { anio: '2016–2018', cargo: 'Secretario de Planeación e Infraestructura', lugar: 'Bolívar, Cauca', icono: 'obra' },
    { anio: '2019', cargo: 'Candidato a la Alcaldía', lugar: 'Bolívar, Cauca', icono: 'alcaldia' },
    { anio: '2022', cargo: 'Secretario de Planeación', lugar: 'San Sebastián', icono: 'obra' },
    { anio: '2023–2025', cargo: 'Coordinador regional de la Agencia de Renovación del Territorio', lugar: 'Cauca, Nariño y Valle', icono: 'territorio', hito: 'hito-art' },
    { anio: '2025–hoy', cargo: 'Secretario de Planeación', lugar: 'Popayán', icono: 'obra' },
  ] as { anio: string; cargo: string; lugar: string; icono: Icono; hito?: string }[],
};

export const construido = {
  numero: 'Cuatro',
  titulo: 'Lo que ha construido',
  entradilla: 'Obras que siguen vivas.',
  tarjetas: [
    { clave: 'obra-cafe', youtube: DEMO, titulo: '200 parcelas cafeteras', texto: 'Con la Federación de Cafeteros, El Rosal y Paramillo se volvieron corregimientos cafeteros.' },
    { clave: 'obra-vivero', youtube: DEMO, titulo: 'El primer vivero municipal', texto: 'Sigue funcionando en San Sebastián y ha entregado miles de plantas para cuidar el agua.' },
    { clave: 'obra-terneras', youtube: DEMO, titulo: '630 terneras', texto: 'La primera vaca para familias campesinas que nunca habían tenido una.' },
    { clave: 'obra-casa-paso', youtube: DEMO, titulo: 'La casa de paso', texto: 'Un lugar digno en Popayán para los campesinos que bajaban a una cita médica.' },
    { clave: 'obra-monde', youtube: DEMO, titulo: 'Monde Selection 2011', texto: 'El primer premio internacional del aguardiente caucano, cuando gerenció la Licorera.' },
    { clave: 'obra-art', youtube: DEMO, titulo: '24 municipios', texto: 'Coordinó la regional de la ART en Cauca, Nariño y Valle: la primera del país en cumplimiento de metas.' },
  ],
};

export const mueve = {
  numero: 'Cinco',
  titulo: 'Lo que lo mueve',
  amores: [
    { clave: 'amor-gente', titulo: 'La gente', texto: 'Su vida pública ha estado dedicada a las familias más vulnerables: madres cabeza de familia, abuelos, niños y personas con discapacidad.' },
    { clave: 'amor-ciudad', titulo: 'La ciudad', texto: 'Siente orgullo por la historia de Popayán, su patrimonio, su Semana Santa, su gastronomía y su universidad.' },
    { clave: 'amor-suyos', titulo: 'Los suyos', texto: 'Agradecido con Dios, con su abuela, con sus hermanos y con sus hijos.' },
  ],
  convicciones: [
    'Que la educación y las oportunidades no sean un privilegio',
    'La dignidad no se negocia',
    'Un techo propio es el punto de partida',
    'El gobierno se debe a la gente',
    'Los recursos públicos son sagrados',
  ],
};

export const cierre = {
  frase: '«Popayán nos recibió y nos dio con generosidad. Con unión y trabajo colectivo, todos salimos adelante».',
  firma: 'Víctor Armando',
  video: { clave: 'quien-es', youtube: DEMO, etiqueta: 'Ver «¿Quién es Víctor Armando?»' },
  // Completar con los enlaces de sus redes personales. Las que queden vacías se ocultan.
  redes: [
    { red: 'facebook', url: '' },
    { red: 'instagram', url: '' },
    { red: 'tiktok', url: '' },
    { red: 'x', url: '' },
    { red: 'youtube', url: '' },
    { red: 'whatsapp', url: '' },
  ],
};

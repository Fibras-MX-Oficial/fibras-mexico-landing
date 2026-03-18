/**
 * Design Philosophy: Modernismo Mexicano Cálido
 * - Página de noticias con artículos sobre mercado de Fibras
 * - Filtros por categoría y fecha
 * - Sección destacada con noticias principales
 */

import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2,
  TrendingUp,
  Calendar,
  Filter,
  Search,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { useState, useMemo } from "react";

interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  categoria: "mercado" | "dividendos" | "regulacion" | "analisis" | "evento";
  fecha: string;
  autor: string;
  imagen: string;
  destacada: boolean;
  impacto: "positivo" | "neutral" | "negativo";
}

const noticiasData: Noticia[] = [
  {
    id: "noticia-1",
    titulo: "FUNO reporta ocupación de 96.5% en Q4 2025",
    resumen: "FIBRA UNO mantiene su posición como líder del mercado con ocupación por encima del promedio industrial.",
    contenido: `FIBRA UNO reportó resultados sólidos para el cuarto trimestre de 2025, manteniendo una ocupación del 96.5% en su portafolio de 156 propiedades. Este desempeño refleja la fortaleza del mercado inmobiliario mexicano y la calidad de los activos de la Fibra.

La empresa distribuyó dividendos consistentes a sus accionistas, reafirmando su compromiso con la generación de ingresos recurrentes. Los analistas proyectan que FUNO continuará siendo un referente en el sector durante 2026.

Recomendación: FUNO sigue siendo una opción sólida para inversores que buscan estabilidad y dividendos consistentes.`,
    categoria: "dividendos",
    fecha: "2026-02-15",
    autor: "Análisis de Mercado",
    imagen: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
    destacada: true,
    impacto: "positivo"
  },
  {
    id: "noticia-2",
    titulo: "Reforma tributaria podría impactar rendimientos de Fibras en 2026",
    resumen: "Propuesta de cambios fiscales genera incertidumbre en el mercado de inversión inmobiliaria.",
    contenido: `El gobierno federal ha presentado una propuesta de reforma tributaria que podría afectar los rendimientos de las Fibras en 2026. Aunque los detalles aún están siendo debatidos en el Congreso, los analistas advierten sobre posibles cambios en la tributación de dividendos.

Sin embargo, expertos señalan que las Fibras seguirían siendo atractivas incluso con cambios tributarios moderados, dada su estructura de distribución obligatoria de ganancias.

Recomendación: Mantenerse atento a los desarrollos legislativos y considerar el impacto fiscal en la estrategia de inversión.`,
    categoria: "regulacion",
    fecha: "2026-02-12",
    autor: "Noticias Financieras",
    imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    destacada: true,
    impacto: "neutral"
  },
  {
    id: "noticia-3",
    titulo: "Sector industrial de Fibras crece 8.2% en 2025",
    resumen: "Las Fibras enfocadas en logística y almacenamiento lideran el crecimiento del mercado.",
    contenido: `El sector industrial de Fibras experimentó un crecimiento del 8.2% durante 2025, impulsado por la demanda de espacios de almacenamiento y logística. Fibras como FSTO y FMCN reportaron expansión significativa en sus portafolios.

Este crecimiento refleja la tendencia global hacia el e-commerce y la necesidad de infraestructura logística moderna en México. Se espera que esta tendencia continúe durante 2026.

Recomendación: Las Fibras industriales presentan oportunidades atractivas para inversores que buscan crecimiento.`,
    categoria: "mercado",
    fecha: "2026-02-10",
    autor: "AMEFIBRA",
    imagen: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
    destacada: true,
    impacto: "positivo"
  },
  {
    id: "noticia-4",
    titulo: "Análisis: Comparativa de Yields entre Fibras y otros activos",
    resumen: "Las Fibras mantienen ventaja competitiva en rendimiento versus bonos y acciones.",
    contenido: `Un análisis comparativo reciente muestra que las Fibras mexicanas ofrecen yields superiores a los bonos del gobierno y competitivos con acciones de empresas de utilidades.

Con rendimientos promedio del 7-8% anual, las Fibras se posicionan como una opción atractiva para inversores que buscan ingresos recurrentes con menor volatilidad que el mercado accionario.

Recomendación: Considerar las Fibras como componente de un portafolio diversificado.`,
    categoria: "analisis",
    fecha: "2026-02-08",
    autor: "Análisis de Mercado",
    imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    destacada: false,
    impacto: "positivo"
  },
  {
    id: "noticia-5",
    titulo: "FMTY anuncia expansión a nuevas ciudades en 2026",
    resumen: "FIBRA MULTY planea abrir 12 nuevas propiedades comerciales en el norte del país.",
    contenido: `FIBRA MULTY anunció un ambicioso plan de expansión para 2026, con la apertura de 12 nuevas propiedades comerciales en ciudades de la región norte de México. Esta estrategia busca diversificar geográficamente su portafolio.

El plan incluye centros comerciales, tiendas departamentales y espacios de retail de alto tráfico. Se espera que estas nuevas propiedades contribuyan significativamente a los ingresos de la Fibra en los próximos años.

Recomendación: Seguir de cerca el desempeño de estas nuevas propiedades como indicador de crecimiento futuro.`,
    categoria: "evento",
    fecha: "2026-02-05",
    autor: "Comunicados Corporativos",
    imagen: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
    destacada: false,
    impacto: "positivo"
  },
  {
    id: "noticia-6",
    titulo: "Ocupación en oficinas comerciales desciende a 89.8%",
    resumen: "Tendencia de trabajo remoto continúa afectando demanda de espacios de oficina.",
    contenido: `La ocupación en espacios de oficina comercial descendió a 89.8% en Q4 2025, reflejando la tendencia continua hacia modelos de trabajo híbrido y remoto. Esta tendencia afecta principalmente a Fibras como FIADM y FCR.

Sin embargo, se espera que la demanda se estabilice en niveles superiores al 90% durante 2026, con renovación de contratos y adaptación de espacios a nuevas necesidades.

Recomendación: Monitorear las Fibras de oficinas, pero mantener confianza en su recuperación gradual.`,
    categoria: "mercado",
    fecha: "2026-02-03",
    autor: "Análisis de Mercado",
    imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    destacada: false,
    impacto: "negativo"
  },
  {
    id: "noticia-7",
    titulo: "Seminario: Estrategias de inversión en Fibras para 2026",
    resumen: "AMEFIBRA organiza evento educativo sobre cómo construir portafolios de Fibras.",
    contenido: `AMEFIBRA organizará un seminario virtual gratuito el próximo 20 de febrero sobre estrategias de inversión en Fibras para 2026. El evento contará con la participación de analistas de mercado y gestores de portafolios.

Los temas a tratar incluyen: diversificación sectorial, análisis de indicadores financieros, estrategias de reinversión de dividendos y gestión de riesgos.

Recomendación: Inscribirse en el seminario para obtener insights valiosos sobre el mercado.`,
    categoria: "evento",
    fecha: "2026-02-01",
    autor: "AMEFIBRA",
    imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    destacada: false,
    impacto: "neutral"
  },
  {
    id: "noticia-8",
    titulo: "Deuda promedio de Fibras se mantiene en niveles conservadores",
    resumen: "Ratio Deuda/EBITDA promedio del sector en 2.9x, dentro de parámetros saludables.",
    contenido: `Un análisis del sector muestra que el ratio promedio de Deuda/EBITDA de las Fibras se mantiene en 2.9x, reflejando una gestión prudente del apalancamiento. Este nivel es considerado conservador y saludable para el sector.

Las Fibras continúan priorizando la estabilidad financiera y la distribución de dividendos sobre el crecimiento agresivo mediante endeudamiento.

Recomendación: La salud financiera del sector sigue siendo robusta.`,
    categoria: "analisis",
    fecha: "2026-01-30",
    autor: "Análisis de Mercado",
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    destacada: false,
    impacto: "positivo"
  }
];

const categorias = [
  { value: "todos", label: "Todas las Noticias" },
  { value: "mercado", label: "Mercado" },
  { value: "dividendos", label: "Dividendos" },
  { value: "regulacion", label: "Regulación" },
  { value: "analisis", label: "Análisis" },
  { value: "evento", label: "Eventos" }
];

export default function Noticias() {
  const [filtroCategoria, setFiltroCategoria] = useState<string>("todos");
  const [busqueda, setBusqueda] = useState<string>("");
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<Noticia | null>(null);

  const noticiasFiltradas = useMemo(() => {
    let resultado = noticiasData;

    if (filtroCategoria !== "todos") {
      resultado = resultado.filter(n => n.categoria === filtroCategoria);
    }

    if (busqueda) {
      resultado = resultado.filter(n =>
        n.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        n.resumen.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return resultado.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
  }, [filtroCategoria, busqueda]);

  const noticiasDestacadas = noticiasData.filter(n => n.destacada).slice(0, 3);

  const formatearFecha = (fecha: string) => {
    const date = new Date(fecha);
    return date.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getImpactoColor = (impacto: string) => {
    switch (impacto) {
      case "positivo":
        return "text-green-600";
      case "negativo":
        return "text-red-600";
      default:
        return "text-yellow-600";
    }
  };

  const getImpactoBg = (impacto: string) => {
    switch (impacto) {
      case "positivo":
        return "bg-green-50";
      case "negativo":
        return "bg-red-50";
      default:
        return "bg-yellow-50";
    }
  };

  if (noticiaSeleccionada) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
          <nav className="container flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-display font-bold text-foreground">Fibras México</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-foreground/80 hover:text-primary transition-colors duration-300">Inicio</a>
              <a href="/blog" className="text-foreground/80 hover:text-primary transition-colors duration-300">Blog</a>
              <a href="/comparativa" className="text-foreground/80 hover:text-primary transition-colors duration-300">Comparativa</a>
              <a href="/noticias" className="text-foreground/80 hover:text-primary transition-colors duration-300">Noticias</a>
            </div>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer">
                Comunidad
              </a>
            </Button>
          </nav>
        </header>
      <MobileMenu />

        {/* Artículo Completo */}
        <section className="pt-32 pb-16">
          <div className="container max-w-3xl">
            <button
              onClick={() => setNoticiaSeleccionada(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Volver a Noticias
            </button>

            <article className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactoBg(noticiaSeleccionada.impacto)} ${getImpactoColor(noticiaSeleccionada.impacto)}`}>
                    {noticiaSeleccionada.impacto === "positivo" ? "✓ Positivo" : noticiaSeleccionada.impacto === "negativo" ? "✗ Negativo" : "○ Neutral"}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {categorias.find(c => c.value === noticiaSeleccionada.categoria)?.label}
                  </span>
                </div>
                <h1 className="text-foreground">{noticiaSeleccionada.titulo}</h1>
                <div className="flex items-center gap-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatearFecha(noticiaSeleccionada.fecha)}
                  </div>
                  <span>Por {noticiaSeleccionada.autor}</span>
                </div>
              </div>

              <img
                src={noticiaSeleccionada.imagen}
                alt={noticiaSeleccionada.titulo}
                className="w-full h-96 object-cover rounded-2xl"
              />

              <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                {noticiaSeleccionada.contenido.split('\n\n').map((parrafo, idx) => (
                  <p key={idx} className="text-lg leading-relaxed">
                    {parrafo}
                  </p>
                ))}
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Impacto en tu inversión:</p>
                <p className="text-foreground/70">
                  Esta noticia podría afectar tu estrategia de inversión. Te recomendamos revisar tu portafolio de Fibras 
                  y considerar los cambios en el mercado al tomar decisiones de inversión.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="container text-center">
            <p className="text-foreground/60">
              © 2026 Fibras México. Información basada en datos de AMEFIBRA.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-display font-bold text-foreground">Fibras México</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground/80 hover:text-primary transition-colors duration-300">Inicio</a>
            <a href="/blog" className="text-foreground/80 hover:text-primary transition-colors duration-300">Blog</a>
            <a href="/comparativa" className="text-foreground/80 hover:text-primary transition-colors duration-300">Comparativa</a>
            <a href="/noticias" className="text-foreground/80 hover:text-primary transition-colors duration-300">Noticias</a>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer">
              Comunidad
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-foreground">Noticias del Mercado de Fibras</h1>
            <p className="text-xl text-foreground/70">
              Mantente actualizado con las últimas noticias, análisis y eventos del mercado inmobiliario mexicano.
            </p>
          </div>
        </div>
      </section>

      {/* Noticias Destacadas */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <h2 className="text-foreground mb-8">Destacadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {noticiasDestacadas.map(noticia => (
              <Card
                key={noticia.id}
                className="bg-background border-border hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
                onClick={() => setNoticiaSeleccionada(noticia)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactoBg(noticia.impacto)} ${getImpactoColor(noticia.impacto)}`}>
                      {noticia.impacto === "positivo" ? "✓" : noticia.impacto === "negativo" ? "✗" : "○"}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      {categorias.find(c => c.value === noticia.categoria)?.label}
                    </p>
                    <h3 className="font-display font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {noticia.titulo}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/70 line-clamp-2">
                    {noticia.resumen}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {formatearFecha(noticia.fecha)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros y Búsqueda */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container space-y-6">
          {/* Búsqueda */}
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar noticias..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-12 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Filtros por Categoría */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Filter className="w-4 h-4" />
              Filtrar por Categoría
            </label>
            <div className="flex flex-wrap gap-2">
              {categorias.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setFiltroCategoria(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filtroCategoria === cat.value
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-foreground/70 hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Noticias */}
      <section className="py-12 bg-background">
        <div className="container">
          {noticiasFiltradas.length > 0 ? (
            <div className="space-y-6">
              {noticiasFiltradas.map(noticia => (
                <Card
                  key={noticia.id}
                  className="bg-card border-border hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
                  onClick={() => setNoticiaSeleccionada(noticia)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 overflow-hidden">
                      <img
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="flex-1 p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactoBg(noticia.impacto)} ${getImpactoColor(noticia.impacto)}`}>
                            {noticia.impacto === "positivo" ? "✓ Positivo" : noticia.impacto === "negativo" ? "✗ Negativo" : "○ Neutral"}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {categorias.find(c => c.value === noticia.categoria)?.label}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {noticia.titulo}
                        </h3>
                        <p className="text-foreground/70">
                          {noticia.resumen}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatearFecha(noticia.fecha)}
                          </span>
                          <span>{noticia.autor}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-foreground/70">No se encontraron noticias que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sección de Suscripción */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container max-w-2xl">
          <div className="text-center space-y-6">
            <h2 className="text-foreground">Mantente Informado</h2>
            <p className="text-lg text-foreground/70">
              Suscríbete para recibir las últimas noticias y análisis del mercado de Fibras directamente en tu correo.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Suscribir
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                <span className="text-xl font-display font-bold text-foreground">Fibras México</span>
              </div>
              <p className="text-foreground/70">
                Información educativa sobre inversiones en Fibras mexicanas.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-foreground/70 hover:text-primary transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/comparativa" className="text-foreground/70 hover:text-primary transition-colors">
                    Comparativa
                  </a>
                </li>
                <li>
                  <a href="/noticias" className="text-foreground/70 hover:text-primary transition-colors">
                    Noticias
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://amefibra.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                    AMEFIBRA
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                    Comunidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-foreground/60">
              © 2026 Fibras México. Información basada en datos de AMEFIBRA. Datos ilustrativos para propósitos educativos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Design Philosophy: Fintech Institutional Pro
 * - Glosario de términos financieros en tarjetas glassmorphism
 * - Iconos minimalistas en azul cian
 * - Efectos hover con resplandor cian
 * - Diseño accesible para inversionistas jóvenes e institucionales
 */

import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2,
  DollarSign,
  TrendingUp,
  PieChart,
  Zap,
  BarChart3,
  Activity,
  Target
} from "lucide-react";
import { useState } from "react";

interface GlosarioTerm {
  id: string;
  titulo: string;
  acronimo: string;
  descripcion: string;
  explicacion: string;
  icon: React.ReactNode;
  ejemplo?: string;
}

const glosarioTerms: GlosarioTerm[] = [
  {
    id: "cbfi",
    titulo: "CBFIs",
    acronimo: "Certificados Bursátiles Fiduciarios Inmobiliarios",
    descripcion: "Son los 'títulos' o acciones que compras de una Fibra en la bolsa.",
    explicacion: "Representan tu participación en el fideicomiso. Cuando compras un CBFI, te conviertes en propietario de una parte proporcional del portafolio inmobiliario de la Fibra. Es como comprar acciones, pero en lugar de ser dueño de una empresa, eres dueño de bienes raíces.",
    icon: <DollarSign className="w-8 h-8 text-accent" />,
    ejemplo: "Si una Fibra tiene 100 millones de CBFIs y tú compras 1,000, posees el 0.001% de todas sus propiedades."
  },
  {
    id: "noi",
    titulo: "NOI",
    acronimo: "Net Operating Income (Ingreso Operativo Neto)",
    descripcion: "Es el ingreso total que generan las propiedades menos los gastos operativos.",
    explicacion: "El NOI es la métrica fundamental que determina la rentabilidad de una Fibra. Se calcula tomando todos los ingresos por renta de las propiedades y restando todos los costos operativos (mantenimiento, seguros, impuestos prediales, administración). Un NOI creciente es señal de salud financiera.",
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    ejemplo: "Si una Fibra genera $100M en rentas y tiene $30M en gastos operativos, su NOI es $70M."
  },
  {
    id: "ffo",
    titulo: "FFO",
    acronimo: "Funds From Operations (Flujo de Operaciones)",
    descripcion: "La medida principal del flujo de efectivo de una Fibra.",
    explicacion: "El FFO es más preciso que las ganancias netas tradicionales porque excluye la depreciación (que es un gasto no en efectivo). Ayuda a entender cuánto dinero realmente genera el negocio y está disponible para pagar dividendos. Es el indicador que los inversionistas institucionales monitorean más de cerca.",
    icon: <Activity className="w-8 h-8 text-accent" />,
    ejemplo: "Una Fibra puede tener NOI de $70M, pero después de restar intereses de deuda, impuestos y otros gastos, su FFO es $50M."
  },
  {
    id: "affo",
    titulo: "AFFO",
    acronimo: "Adjusted Funds From Operations (FFO Ajustado)",
    descripcion: "Es el FFO ajustado restando el mantenimiento de las propiedades.",
    explicacion: "El AFFO es el dato más preciso para saber cuánto dinero hay disponible para pagar dividendos. Toma el FFO y resta los gastos de mantenimiento y capital necesarios para mantener las propiedades en buen estado. Si el AFFO es consistentemente mayor que los dividendos pagados, la Fibra es sostenible.",
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
    ejemplo: "Si el FFO es $50M y el mantenimiento cuesta $10M, el AFFO es $40M. Si la Fibra paga $35M en dividendos, tiene un margen de seguridad."
  },
  {
    id: "nav",
    titulo: "NAV",
    acronimo: "Net Asset Value (Valor Neto de los Activos)",
    descripcion: "El valor real de todas las propiedades de la Fibra menos sus deudas.",
    explicacion: "El NAV te ayuda a saber si un CBFI está barato o caro. Se calcula dividiendo el NAV total entre el número de CBFIs para obtener el NAV por CBFI. Si el precio del CBFI es menor que el NAV por CBFI, el CBFI está subvaluado (oportunidad). Si es mayor, está sobrevalorado.",
    icon: <PieChart className="w-8 h-8 text-accent" />,
    ejemplo: "Si una Fibra tiene propiedades por $1,000M y deuda de $400M, su NAV es $600M. Si tiene 100M CBFIs, el NAV por CBFI es $6. Si el CBFI se vende a $5, está 17% barato."
  },
  {
    id: "ltv",
    titulo: "LTV",
    acronimo: "Loan to Value (Préstamo sobre Valor)",
    descripcion: "El nivel de endeudamiento de la Fibra comparado con el valor de sus activos.",
    explicacion: "El LTV es crucial para medir el riesgo. Se calcula dividiendo la deuda total entre el valor de los activos. Un LTV bajo (< 40%) indica una Fibra conservadora. Un LTV alto (> 60%) indica más riesgo pero potencialmente más apalancamiento. En tiempos de crisis, un LTV bajo proporciona más protección.",
    icon: <Target className="w-8 h-8 text-accent" />,
    ejemplo: "Si una Fibra tiene deuda de $400M y activos de $1,000M, su LTV es 40%. Es un nivel moderado y saludable."
  },
  {
    id: "dividend-yield",
    titulo: "Dividend Yield",
    acronimo: "Rendimiento de Dividendos",
    descripcion: "El rendimiento porcentual anual que recibes en efectivo por cada peso invertido.",
    explicacion: "El Dividend Yield es la métrica más importante para inversionistas de ingresos. Se calcula dividiendo el dividendo anual entre el precio del CBFI. Un yield de 7% significa que por cada $100 invertidos, recibes $7 anuales en dividendos. Yields más altos pueden indicar oportunidad o riesgo, así que siempre investiga por qué.",
    icon: <Zap className="w-8 h-8 text-accent" />,
    ejemplo: "Si un CBFI se vende a $25 y paga $1.75 en dividendos anuales, su yield es 7% ($1.75 / $25 × 100)."
  },
  {
    id: "deuda-ebitda",
    titulo: "Deuda/EBITDA",
    acronimo: "Ratio de Apalancamiento",
    descripcion: "Mide cuántas veces el EBITDA se necesita para pagar toda la deuda.",
    explicacion: "Este ratio es fundamental para evaluar la salud financiera. Muestra cuántos años tomaría pagar la deuda si todos los ingresos operativos se dedicaran a ello. Un ratio menor a 3x es considerado conservador. Mayor a 4x indica mayor riesgo. En tiempos de incertidumbre, busca Fibras con ratios bajos.",
    icon: <Activity className="w-8 h-8 text-accent" />,
    ejemplo: "Si una Fibra tiene EBITDA de $100M y deuda de $250M, su ratio Deuda/EBITDA es 2.5x. Es saludable."
  }
];

export default function Academia() {
  const [termSeleccionado, setTermSeleccionado] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">Fibras MX</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Inicio</a>
            <a href="/blog" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Blog</a>
            <a href="/comparativa" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Comparativa</a>
            <a href="/noticias" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Noticias</a>
            <a href="/analisis" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Análisis</a>
            <a href="/academia" className="text-accent font-semibold">Academia</a>
          </div>
          <Button 
            className="bg-accent text-primary hover:bg-accent/90 font-semibold"
            asChild
          >
            <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer">
              Comunidad
            </a>
          </Button>
        </nav>
      </header>
      <MobileMenu />

      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{
        background: 'linear-gradient(135deg, oklch(0.15 0.02 260) 0%, oklch(0.18 0.03 250) 100%)'
      }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-foreground">Academia Fibras MX</h1>
            <p className="text-xl text-foreground/70">
              Glosario completo de términos financieros para inversionistas
            </p>
            <p className="text-foreground/60">
              Domina el lenguaje de las inversiones inmobiliarias. Cada término explicado de forma clara y accesible.
            </p>
          </div>
        </div>
      </section>

      {/* Glosario Grid */}
      <section className="py-16 bg-background/50">
        <div className="container">
          <div className="space-y-8">
            {/* Intro */}
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-foreground font-display">Términos Clave para Inversionistas</h2>
              <p className="text-foreground/70">
                Haz clic en cualquier tarjeta para expandir y ver la explicación completa
              </p>
            </div>

            {/* Grid de Tarjetas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {glosarioTerms.map((term) => (
                <div
                  key={term.id}
                  onClick={() => setTermSeleccionado(termSeleccionado === term.id ? null : term.id)}
                  className="cursor-pointer group"
                >
                  <Card className={`
                    bg-card/50 border transition-all duration-300 h-full
                    ${termSeleccionado === term.id
                      ? 'border-accent/50 shadow-lg'
                      : 'border-border/50 hover:border-accent/30'
                    }
                    glassmorphism overflow-hidden
                  `}
                  style={{
                    boxShadow: termSeleccionado === term.id 
                      ? '0 0 30px rgba(102, 204, 255, 0.3), inset 0 0 20px rgba(102, 204, 255, 0.1)'
                      : 'none'
                  }}
                  >
                    <CardContent className="p-6 space-y-4 h-full flex flex-col">
                      {/* Icono */}
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                          {term.icon}
                        </div>
                        <span className="text-xs font-bold text-accent/60 uppercase tracking-wider">
                          {term.id}
                        </span>
                      </div>

                      {/* Título y Acrónimo */}
                      <div className="space-y-2 flex-grow">
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          {term.titulo}
                        </h3>
                        <p className="text-xs text-foreground/60 font-medium">
                          {term.acronimo}
                        </p>
                      </div>

                      {/* Descripción Corta */}
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {term.descripcion}
                      </p>

                      {/* Indicador de Expandible */}
                      <div className="pt-2 border-t border-border/30">
                        <p className="text-xs text-accent font-semibold flex items-center gap-1">
                          {termSeleccionado === term.id ? '▼' : '▶'} 
                          {termSeleccionado === term.id ? 'Ver menos' : 'Ver más'}
                        </p>
                      </div>

                      {/* Contenido Expandido */}
                      {termSeleccionado === term.id && (
                        <div className="pt-4 border-t border-accent/30 space-y-4 animate-in fade-in duration-300">
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-accent">Explicación Completa</h4>
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              {term.explicacion}
                            </p>
                          </div>

                          {term.ejemplo && (
                            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 space-y-2">
                              <h4 className="text-sm font-semibold text-accent">Ejemplo Práctico</h4>
                              <p className="text-sm text-foreground/80">
                                {term.ejemplo}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Consejos */}
      <section className="py-16 bg-background/50 border-t border-border/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground font-display mb-8 text-center">Cómo Usar Este Glosario</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-accent">1</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Aprende los Términos</h3>
                  <p className="text-foreground/70">
                    Comienza con los términos básicos como CBFI y NOI. Son la base para entender todas las Fibras.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Aplica en Análisis</h3>
                  <p className="text-foreground/70">
                    Usa estos términos cuando analices reportes financieros. Comprenderás mejor la salud de cada Fibra.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Invierte con Confianza</h3>
                  <p className="text-foreground/70">
                    Con estos conocimientos, tomarás decisiones informadas y reducirás riesgos en tus inversiones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Recursos Adicionales */}
      <section className="py-16" style={{
        background: 'linear-gradient(135deg, rgba(102, 204, 255, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%)'
      }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground font-display">Profundiza tu Conocimiento</h2>
              <p className="text-foreground/70">
                Complementa este glosario con nuestros otros recursos educativos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Button
                className="bg-accent text-primary hover:bg-accent/90 font-semibold py-6 text-lg"
                asChild
              >
                <a href="/blog">Leer el Blog Educativo</a>
              </Button>
              <Button
                className="bg-secondary/30 text-foreground hover:bg-secondary/50 border border-secondary/50 font-semibold py-6 text-lg"
                asChild
              >
                <a href="/comparativa">Ver Comparativa de Fibras</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-12 glassmorphism">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xl font-display font-bold text-foreground">Fibras MX</span>
              </div>
              <p className="text-foreground/70">
                Educación financiera de calidad para inversionistas en Fibras mexicanas.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-foreground/70 hover:text-accent transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-foreground/70 hover:text-accent transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/academia" className="text-foreground/70 hover:text-accent transition-colors">
                    Academia
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://amefibra.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                    AMEFIBRA
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                    Comunidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-foreground/60 text-sm">
              © 2026 Fibras MX. Educación financiera para inversionistas. Consulta con un asesor antes de invertir.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

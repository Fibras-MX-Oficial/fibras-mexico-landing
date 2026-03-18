/**
 * Design Philosophy: Modernismo Mexicano Cálido
 * - Paleta: Terracota, amarillo cálido, crema, azul cobalto
 * - Layout: Grid de artículos con preview y navegación clara
 */

import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight,
  Calendar,
  Clock,
  Building2,
  BookOpen,
  Lightbulb
} from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  date: string;
  icon: React.ReactNode;
  color: "primary" | "accent" | "secondary";
}

const blogPosts: BlogPost[] = [
  {
    id: "guia-principiantes",
    title: "Guía Completa: Primeros Pasos en Fibras",
    excerpt: "Aprende desde cero qué son las Fibras, cómo funcionan y los pasos esenciales para hacer tu primera inversión.",
    content: `
# Guía Completa: Primeros Pasos en Fibras

## ¿Por qué invertir en Fibras?

Las Fibras representan una oportunidad única para acceder al mercado inmobiliario comercial sin necesidad de capital millonario. A diferencia de comprar una propiedad directamente, las Fibras te permiten diversificar tu inversión en múltiples propiedades desde el primer CBFI.

## Conceptos Fundamentales

### ¿Qué es un CBFI?

Un **Certificado Bursátil Fiduciario Inmobiliario (CBFI)** es el título que representa tu participación en una FIBRA. Es como una acción, pero en lugar de representar parte de una empresa, representa parte de un portafolio de inmuebles.

### Flujo de Ingresos

1. **Ingresos por Renta**: Las propiedades generan ingresos al ser arrendadas a empresas
2. **Gastos Operativos**: Se restan los costos de mantenimiento, administración e impuestos
3. **Intereses**: Se pagan los intereses de la deuda (si la hay)
4. **Distribución**: El remanente se distribuye como dividendos a los inversionistas

## Pasos para Comenzar

### 1. Abre una Cuenta de Inversión

Necesitas una cuenta en una casa de bolsa autorizada. Las principales opciones son:
- **GBM**: Una de las más populares, con buena plataforma digital
- **Skandia**: Enfocada en inversiones a largo plazo
- **Masari**: Plataforma moderna y accesible
- **Otros**: Santander, BBVA, Inbursa

### 2. Elige tu Estrategia

Antes de invertir, define:
- **Monto inicial**: Comienza con lo que puedas permitirte
- **Horizonte temporal**: ¿Corto, mediano o largo plazo?
- **Perfil de riesgo**: ¿Conservador, moderado o agresivo?

### 3. Selecciona las Fibras

Investiga las diferentes opciones disponibles:
- **FUNO**: Enfocada en oficinas
- **FIBRA UNO**: Portafolio diversificado
- **FMTY**: Centros comerciales
- **FMCN**: Industrial y logística

### 4. Realiza tu Primera Compra

Una vez tengas tu cuenta, puedes comprar CBFIs como si fueran acciones. El proceso es simple:
1. Ingresa a tu plataforma de inversión
2. Busca la FIBRA que deseas
3. Ingresa la cantidad de CBFIs
4. Confirma la operación

## Indicadores Clave a Considerar

### Yield (Rendimiento)

Es el porcentaje de rendimiento anual que esperas recibir. Se calcula como:
\`\`\`
Yield = (Dividendo Anual / Precio del CBFI) × 100
\`\`\`

### P/NAV (Price to Net Asset Value)

Compara el precio del CBFI con el valor neto de los activos. Un P/NAV menor a 1 puede indicar que está subvaluado.

### Deuda/EBITDA

Mide el nivel de endeudamiento. Un ratio más bajo es generalmente más seguro.

## Errores Comunes a Evitar

1. **Invertir sin investigar**: Siempre lee los reportes financieros
2. **Poner todo en una sola FIBRA**: Diversifica tu portafolio
3. **Ignorar los ciclos económicos**: Las Fibras se ven afectadas por la economía
4. **No tener paciencia**: Las Fibras son inversiones a largo plazo
5. **Confundir precio con valor**: Un precio bajo no siempre es una ganga

## Próximos Pasos

Ahora que conoces los fundamentos, te recomendamos:
- Abre una cuenta en una casa de bolsa
- Estudia los reportes de 2-3 Fibras
- Comienza con una inversión pequeña para aprender
- Aumenta gradualmente tu inversión conforme ganes experiencia
    `,
    category: "Guía Principiantes",
    readTime: 12,
    date: "2026-02-15",
    icon: <BookOpen className="w-6 h-6" />,
    color: "primary"
  },
  {
    id: "entender-dividendos",
    title: "Cómo Funcionan los Dividendos en Fibras",
    excerpt: "Entiende cómo se calculan, cuándo se pagan y cómo maximizar tus ingresos por dividendos.",
    content: `
# Cómo Funcionan los Dividendos en Fibras

## ¿Qué son los Dividendos?

Los dividendos son la distribución de ganancias que realiza una FIBRA a sus inversionistas. A diferencia de otras inversiones, las Fibras tienen la **obligación legal** de distribuir al menos el 90% de sus ganancias operativas como dividendos.

## Ciclo de Distribución

### Trimestral

La mayoría de las Fibras distribuyen dividendos cada trimestre:
- **Enero-Marzo**: Pago en abril/mayo
- **Abril-Junio**: Pago en julio/agosto
- **Julio-Septiembre**: Pago en octubre/noviembre
- **Octubre-Diciembre**: Pago en enero/febrero

### Cálculo del Dividendo

El dividendo se calcula así:

\`\`\`
Ingresos por Renta
- Gastos Operativos
- Impuestos
- Intereses de Deuda
= Ganancia Distributable
÷ Número de CBFIs
= Dividendo por CBFI
\`\`\`

## Ejemplo Práctico

Supongamos que inviertes en una FIBRA:

- **Precio de compra**: $25 por CBFI
- **Cantidad**: 100 CBFIs
- **Inversión total**: $2,500
- **Dividendo trimestral**: $0.50 por CBFI
- **Ingreso trimestral**: $50
- **Ingreso anual**: $200
- **Yield anual**: 8% ($200 / $2,500)

## Factores que Afectan los Dividendos

### 1. Ocupación de Propiedades

A mayor ocupación, mayores ingresos por renta. Una ocupación del 95% es considerada excelente.

### 2. Crecimiento de Rentas

Las rentas generalmente crecen con la inflación. Un crecimiento de 3-4% anual es típico.

### 3. Gastos Operativos

Incluyen mantenimiento, seguros, impuestos prediales y administración. Un control eficiente reduce estos costos.

### 4. Deuda

Las Fibras usan deuda para financiar expansiones. Más deuda = más intereses = menos dividendos.

### 5. Ciclos Económicos

Durante recesiones, la ocupación puede caer y afectar los dividendos.

## Reinversión de Dividendos

Una estrategia poderosa es **reinvertir los dividendos**. Esto significa usar el dinero que recibes para comprar más CBFIs, generando un efecto compuesto.

### Ejemplo de Reinversión

**Año 1:**
- Inversión inicial: $2,500 (100 CBFIs a $25)
- Dividendos: $200
- Nuevos CBFIs comprados: 8 (a $25)
- Total: 108 CBFIs

**Año 2:**
- Dividendos: $216 (108 × $2)
- Nuevos CBFIs: 8.6
- Total: 116.6 CBFIs

Después de 10 años, tu inversión se habría duplicado solo por reinversión.

## Impuestos en Dividendos

En México, los dividendos de Fibras tienen un tratamiento fiscal especial:
- No hay ISR por ganancias de capital en bolsa
- Los dividendos se consideran ingresos ordinarios
- Debes reportarlos en tu declaración anual

## Cuándo Esperar Cambios en Dividendos

Los dividendos pueden cambiar por:
- **Nuevas adquisiciones**: Aumentan ingresos
- **Venta de propiedades**: Reducen ingresos
- **Refinanciamiento**: Puede reducir intereses
- **Cambios en ocupación**: Directamente afectan ingresos
    `,
    category: "Educación Financiera",
    readTime: 10,
    date: "2026-02-14",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "accent"
  },
  {
    id: "elegir-fibra-correcta",
    title: "Cómo Elegir la Fibra Correcta para Ti",
    excerpt: "Análisis de criterios para seleccionar la FIBRA que mejor se alinee con tus objetivos de inversión.",
    content: `
# Cómo Elegir la Fibra Correcta para Ti

## Tipos de Fibras por Segmento

### Fibras de Oficinas

**Características:**
- Ingresos estables de empresas grandes
- Afectadas por cambios en demanda de oficinas
- Generalmente yield 5-7%

**Ejemplos:** FUNO

**Ideal para:** Inversionistas conservadores

### Fibras Comerciales (Retail)

**Características:**
- Dependientes del consumo
- Afectadas por e-commerce
- Yield 6-9%

**Ejemplos:** FMTY, FIBRA UNO

**Ideal para:** Inversionistas moderados

### Fibras Industriales/Logística

**Características:**
- Demanda creciente por e-commerce
- Ingresos en crecimiento
- Yield 6-8%

**Ejemplos:** FMCN, FIBRA STORAGE

**Ideal para:** Inversionistas con visión a largo plazo

### Fibras Diversificadas

**Características:**
- Portafolio mixto de segmentos
- Menor riesgo por diversificación
- Yield 6-8%

**Ejemplos:** FIBRA UNO

**Ideal para:** Principiantes

## Criterios de Selección

### 1. Yield (Rendimiento)

Compara el yield de diferentes Fibras:
- Yield alto (>8%) puede indicar oportunidad o riesgo
- Yield bajo (<5%) puede ser conservador o señal de problemas
- Busca yields consistentes año tras año

### 2. Crecimiento de Dividendos

Analiza la tendencia:
- ¿Los dividendos han crecido año tras año?
- ¿Se espera crecimiento futuro?
- Crecimiento anual de 3-5% es saludable

### 3. Ocupación

La ocupación mide qué porcentaje de propiedades están rentadas:
- Ocupación > 95%: Excelente
- Ocupación 90-95%: Buena
- Ocupación < 90%: Requiere atención

### 4. Deuda

Analiza el nivel de endeudamiento:
- Deuda/EBITDA < 3x: Conservador
- Deuda/EBITDA 3-4x: Moderado
- Deuda/EBITDA > 4x: Agresivo

### 5. Diversificación Geográfica

Verifica dónde están las propiedades:
- ¿Están concentradas en una ciudad?
- ¿Hay presencia en múltiples estados?
- Diversificación reduce riesgo

### 6. Calidad de Propiedades

Busca información sobre:
- Antigüedad de las propiedades
- Ubicación estratégica
- Tenientes de calidad (empresas grandes)

### 7. Gestión

Investiga el equipo directivo:
- ¿Tienen experiencia?
- ¿Han generado valor histórico?
- ¿Tienen una visión clara?

## Análisis Comparativo

Crea una tabla comparativa:

| Criterio | FIBRA A | FIBRA B | FIBRA C |
|----------|---------|---------|---------|
| Yield | 7.5% | 6.8% | 8.2% |
| Ocupación | 96% | 92% | 94% |
| Deuda/EBITDA | 2.8x | 3.5x | 4.1x |
| Crecimiento Div. | 4% | 2% | 5% |
| P/NAV | 0.95 | 1.05 | 0.88 |

## Banderas Rojas

Evita Fibras con:
- Ocupación decreciente
- Dividendos en caída
- Deuda muy alta
- Cambios frecuentes en gestión
- Reportes financieros confusos

## Estrategia de Diversificación

No pongas todo en una sola Fibra. Considera:

**Portafolio Conservador (bajo riesgo):**
- 40% FIBRA diversificada
- 30% FIBRA industrial
- 30% FIBRA comercial

**Portafolio Moderado:**
- 30% FIBRA diversificada
- 25% FIBRA industrial
- 25% FIBRA comercial
- 20% FIBRA especializada

**Portafolio Agresivo:**
- 20% FIBRA diversificada
- 30% FIBRA industrial
- 25% FIBRA comercial
- 25% FIBRA especializada

## Monitoreo Continuo

Una vez inviertas:
- Revisa reportes trimestrales
- Monitorea cambios en ocupación
- Sigue noticias del sector
- Reevalúa tu portafolio anualmente
    `,
    category: "Análisis & Estrategia",
    readTime: 14,
    date: "2026-02-13",
    icon: <Building2 className="w-6 h-6" />,
    color: "secondary"
  },
  {
    id: "riesgos-fibras",
    title: "Riesgos en Fibras: Qué Debes Saber",
    excerpt: "Comprende los riesgos asociados con inversiones en Fibras y cómo mitigarlos.",
    content: `
# Riesgos en Fibras: Qué Debes Saber

## Riesgo de Mercado

### Volatilidad del Precio

El precio de los CBFIs fluctúa en la bolsa:
- Pueden subir o bajar 10-20% en un año
- Factores: tasas de interés, economía, sector
- **Mitigación**: Invierte a largo plazo, no especules

### Ciclos Económicos

Las Fibras se ven afectadas por recesiones:
- Ocupación puede caer
- Rentas pueden estancarse
- Dividendos pueden reducirse
- **Mitigación**: Diversifica entre sectores y Fibras

## Riesgo de Crédito

### Inquilinos Morosos

Si los inquilinos no pagan:
- Reducen ingresos
- Afectan dividendos
- **Mitigación**: Busca Fibras con inquilinos de calidad

### Insolvencia de Inquilinos

Si un inquilino importante quiebra:
- Pérdida de ingresos significativa
- Tiempo para encontrar nuevo inquilino
- **Mitigación**: Busca portafolios diversificados

## Riesgo de Tasa de Interés

### Aumento de Tasas

Si suben las tasas de interés:
- Aumentan costos de financiamiento
- Reducen dividendos
- Precio de CBFIs puede caer
- **Mitigación**: Revisa nivel de deuda

### Disminución de Tasas

Si bajan las tasas:
- Pueden refinanciar deuda más barata
- Mejora rentabilidad
- Precio de CBFIs puede subir

## Riesgo de Liquidez

### Dificultad para Vender

En mercados deprimidos:
- Puede haber pocos compradores
- Spreads bid-ask más amplios
- **Mitigación**: Invierte solo dinero que no necesites a corto plazo

## Riesgo Operacional

### Problemas de Gestión

- Decisiones malas de inversión
- Sobreendeudamiento
- Mala administración de propiedades
- **Mitigación**: Investiga el equipo directivo

### Cambios Regulatorios

- Nuevas leyes pueden afectar rentabilidad
- Cambios fiscales
- **Mitigación**: Mantente informado

## Riesgo Inmobiliario

### Obsolescencia de Propiedades

- Propiedades pueden volverse obsoletas
- Cambios en preferencias de ubicación
- **Mitigación**: Busca Fibras con propiedades modernas

### Desastres Naturales

- Terremotos, inundaciones
- Aunque aseguradas, pueden afectar operaciones
- **Mitigación**: Diversificación geográfica

## Riesgo Inflacionario

### Pérdida de Poder Adquisitivo

- La inflación reduce el valor real de dividendos
- **Mitigación**: Busca Fibras con crecimiento de rentas

## Matriz de Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|--------|-----------|
| Caída de ocupación | Media | Alto | Diversificación |
| Aumento de tasas | Media | Medio | Revisar deuda |
| Recesión económica | Baja | Alto | Largo plazo |
| Inquilino moroso | Baja | Bajo | Calidad inquilino |
| Cambios regulatorios | Baja | Medio | Monitoreo |

## Gestión de Riesgos

### 1. Diversificación

- Múltiples Fibras
- Múltiples sectores
- Múltiples ubicaciones

### 2. Análisis Fundamental

- Estudia reportes financieros
- Entiende el negocio
- Revisa ocupación y rentas

### 3. Horizonte Largo Plazo

- Fibras son inversiones a 5-10+ años
- No intentes timing del mercado
- Reinvierte dividendos

### 4. Monitoreo Continuo

- Revisa reportes trimestrales
- Sigue noticias del sector
- Reevalúa anualmente

### 5. Posición Adecuada

- No inviertas más de lo que puedas perder
- Mantén fondo de emergencia
- Diversifica tu portafolio total
    `,
    category: "Gestión de Riesgos",
    readTime: 11,
    date: "2026-02-12",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "primary"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-display font-bold text-foreground">Fibras MX</span>
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

      {/* Hero Section del Blog */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-foreground">Centro de Aprendizaje</h1>
            <p className="text-xl text-foreground/70">
              Artículos educativos para ayudarte a entender y comenzar tu viaje en inversiones en Fibras
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 bg-background">
        <div className="container">
          {selectedPost ? (
            // Vista de Artículo Individual
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Volver al Blog
              </button>

              <article className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${selectedPost.color}/10 flex items-center justify-center`}>
                    {selectedPost.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-${selectedPost.color}`}>{selectedPost.category}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(selectedPost.date).toLocaleDateString('es-MX')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedPost.readTime} min de lectura
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="text-foreground mb-8">{selectedPost.title}</h1>

                <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('#')) {
                      const level = paragraph.match(/^#+/)?.[0].length || 2;
                      const text = paragraph.replace(/^#+\s/, '');
                      const className = level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl';
                      return (
                        <h2 key={index} className={`font-display font-semibold text-foreground ${className} mt-8 mb-4`}>
                          {text}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('|')) {
                      return (
                        <div key={index} className="overflow-x-auto">
                          <table className="w-full border-collapse border border-border">
                            <tbody>
                              {paragraph.split('\n').map((row, rowIndex) => (
                                <tr key={rowIndex} className={rowIndex === 0 ? 'bg-primary/10' : ''}>
                                  {row.split('|').filter(cell => cell.trim()).map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border border-border px-4 py-2 text-sm">
                                      {cell.trim()}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    if (paragraph.startsWith('```')) {
                      const code = paragraph.replace(/```/g, '').trim();
                      return (
                        <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{code}</code>
                        </pre>
                      );
                    }
                    return (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <Button
                    onClick={() => setSelectedPost(null)}
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/10"
                  >
                    Ver más artículos
                  </Button>
                </div>
              </article>
            </div>
          ) : (
            // Vista de Lista de Artículos
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden"
                    onClick={() => setSelectedPost(post)}
                  >
                    <CardContent className="p-8 space-y-4 h-full flex flex-col">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-xl bg-${post.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          {post.icon}
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-${post.color}/10 text-${post.color}`}>
                          {post.category}
                        </span>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('es-MX')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sección de Recursos Adicionales */}
              <div className="mt-16 pt-16 border-t border-border">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                  <div>
                    <h2 className="text-foreground mb-4">¿Necesitas Más Ayuda?</h2>
                    <p className="text-lg text-foreground/70 mb-8">
                      Únete a nuestra comunidad para hacer preguntas, compartir experiencias y aprender de otros inversionistas.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-none shadow-md">
                      <CardContent className="p-8 text-center space-y-4">
                        <h3 className="text-xl font-display font-semibold text-foreground">Comunidad Facebook</h3>
                        <p className="text-foreground/70">
                          Conecta con miles de inversionistas mexicanos en Fibras
                        </p>
                        <Button
                          className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                          asChild
                        >
                          <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer">
                            Únete Ahora
                          </a>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-none shadow-md">
                      <CardContent className="p-8 text-center space-y-4">
                        <h3 className="text-xl font-display font-semibold text-foreground">AMEFIBRA</h3>
                        <p className="text-foreground/70">
                          Información oficial y reportes del mercado de Fibras
                        </p>
                        <Button
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full"
                          asChild
                        >
                          <a href="https://amefibra.com" target="_blank" rel="noopener noreferrer">
                            Visitar AMEFIBRA
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                <span className="text-xl font-display font-bold text-foreground">Fibras MX</span>
              </div>
              <p className="text-foreground/70">
                Centro educativo sobre inversiones en Fibras mexicanas.
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
                  <a href="/#blog" className="text-foreground/70 hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Aviso Legal</h4>
              <p className="text-sm text-foreground/70">
                Contenido educativo. No es asesoría financiera. Consulta profesionales antes de invertir.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-foreground/60">
              © 2026 Fibras MX. Información basada en datos de AMEFIBRA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

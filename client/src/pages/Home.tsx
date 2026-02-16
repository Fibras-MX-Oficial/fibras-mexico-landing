/**
 * Design Philosophy: Modernismo Mexicano Cálido
 * - Paleta: Terracota, amarillo cálido, crema, azul cobalto
 * - Tipografía: Fraunces (display) + Work Sans (body)
 * - Layout: Asimétrico con tarjetas flotantes y overlapping
 * - Elementos: Formas orgánicas, texturas sutiles, animaciones fluidas
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  TrendingUp, 
  Shield, 
  Users, 
  Wallet,
  BarChart3,
  Home as HomeIcon,
  Building,
  ShoppingBag,
  Factory
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-display font-bold text-foreground">Fibras México</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#que-son" className="text-foreground/80 hover:text-primary transition-colors duration-300">¿Qué son?</a>
            <a href="#ventajas" className="text-foreground/80 hover:text-primary transition-colors duration-300">Ventajas</a>
            <a href="#tipos" className="text-foreground/80 hover:text-primary transition-colors duration-300">Tipos</a>
            <a href="#comunidad" className="text-foreground/80 hover:text-primary transition-colors duration-300">Comunidad</a>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer">
              Únete a la Comunidad
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section - Asimétrico con imagen de fondo */}
      <section 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden paper-texture"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.95 0.02 75) 0%, oklch(0.92 0.03 65) 100%)`
        }}
      >
        {/* Forma orgánica decorativa */}
        <div 
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/20 organic-blob animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-primary/10 organic-blob animate-float"
          style={{ animationDelay: '2s' }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido del hero - Lado izquierdo */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-block px-4 py-2 bg-accent/30 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">Inversión Inmobiliaria Inteligente</span>
              </div>
              <h1 className="text-foreground leading-tight">
                Invierte en <span className="text-primary">Bienes Raíces</span> desde tu primer peso
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-xl">
                Las Fibras (Fideicomisos de Inversión en Bienes Raíces) te permiten ser dueño de propiedades comerciales 
                sin necesitar millones. Recibe dividendos cada trimestre y diversifica tu portafolio.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="#que-son">Descubre cómo funcionan</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href="https://amefibra.com" target="_blank" rel="noopener noreferrer">
                    Más información
                  </a>
                </Button>
              </div>
            </div>

            {/* Imagen hero - Lado derecho */}
            <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/0UWONc2QDoO1nM9LBadP90/sandbox/2fX8SbGmOhBXJJX2Jueg4D-img-1_1771248715000_na1fn_aGVyby1idWlsZGluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMFVXT05jMlFEb08xbk05TEJhZFA5MC9zYW5kYm94LzJmWDhTYkdtT2hCWEpKWDJKdWVnNEQtaW1nLTFfMTc3MTI0ODcxNTAwMF9uYTFmbl9hR1Z5YnkxaWRXbHNaR2x1WncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NuGeSybYv-ePD0Teb63MUlw13kG-GWHMlxWYxFvFr4nrSq2QuXTw3CmkapeAvz7ZJKM78CebnbBbGYEX1blJb8BF0lRmUJCWrsDo64o58wMZwoo2~ehA5LNzuq0hbD-u42NJLieKqxFcRSORy8kqX71Eb-gPS2hoAl2p6BxibQ2u5sxIj-VWUjJ8UZj~WqDAt17SJRDeOobmdNG68MrmkrBK~7n8FyCkKLrk6g~pEzoYwRbDweSuBRUaKroLnioEtiAHyWOkMeiDxM2yljtjVgPL-txY6N2je8fVNGjBg9~1s~60eOyJ~zE6rU9HJpl4YmJ58R275AGcfC9d8Bxvog__"
                  alt="Arquitectura mexicana moderna"
                  className="w-full h-auto"
                />
              </div>
              {/* Tarjeta flotante con estadística */}
              <Card className="absolute -bottom-6 -left-6 bg-card shadow-xl border-none animate-float" style={{ animationDelay: '1s' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-display font-bold text-primary">8-12%</p>
                      <p className="text-sm text-muted-foreground">Rendimiento anual promedio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: ¿Qué son las Fibras? */}
      <section id="que-son" className="py-24 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Imagen abstracta - 2 columnas */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/0UWONc2QDoO1nM9LBadP90/sandbox/2fX8SbGmOhBXJJX2Jueg4D-img-2_1771248722000_na1fn_aW52ZXN0bWVudC1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMFVXT05jMlFEb08xbk05TEJhZFA5MC9zYW5kYm94LzJmWDhTYkdtT2hCWEpKWDJKdWVnNEQtaW1nLTJfMTc3MTI0ODcyMjAwMF9uYTFmbl9hVzUyWlhOMGJXVnVkQzFoWW5OMGNtRmpkQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rW4TN83CjpIruVdQDnz7TLfDi-oxU~xMj7JLGppkMyboe04guBE6qYNdeH~uarBDTJ~i1V-6BIFplvMv3JSltILFAc-N6llEXYW5YPqcKKrLxhhYorPe5b4TA8Eh2icBQ1voSfKIMb0y2HOX6BGm2OE5MonvVn05F8BiE9GUJXO4g7cmuPMGFaDgZoOiBTvJ9fFOufdFQ~397hvB1NC7LMRwPRPnFGux8HuLFr-63WI-tU2JoktxK4VD6oVCbK8L2fj0GXsbR1kw8r7S6bo-dsSBiMTPSj48M49QTMkJhyT5uczZMcmAUTEQ860EgESob-MT1opCguZvbUjxSc2~XQ__"
                  alt="Inversión en bienes raíces"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Contenido - 3 columnas */}
            <div className="lg:col-span-3 space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Fundamentos</span>
              </div>
              <h2 className="text-foreground">¿Qué son las Fibras?</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Los <strong>Fideicomisos de Inversión en Bienes Raíces (FIBRAs)</strong> son vehículos de inversión 
                que te permiten participar en el mercado inmobiliario comercial sin necesidad de comprar propiedades completas. 
                Funcionan como un portafolio de inmuebles que genera ingresos por renta.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Su objetivo es recaudar recursos en la bolsa de valores para conformar grandes portafolios de propiedades 
                inmobiliarias en diferentes segmentos como oficinas, industrial y comercial. Los ingresos generados por las 
                rentas se distribuyen como <strong>dividendos cada trimestre</strong> entre los inversionistas.
              </p>

              {/* Proceso simplificado */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-xl font-display font-bold text-primary">1</span>
                    </div>
                    <h4 className="font-display font-semibold text-foreground">Ingresos</h4>
                    <p className="text-sm text-muted-foreground">De contratos de arrendamiento</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center mx-auto">
                      <span className="text-xl font-display font-bold text-accent-foreground">2</span>
                    </div>
                    <h4 className="font-display font-semibold text-foreground">Gastos</h4>
                    <p className="text-sm text-muted-foreground">Operación y mantenimiento</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                      <span className="text-xl font-display font-bold text-secondary-foreground">3</span>
                    </div>
                    <h4 className="font-display font-semibold text-foreground">Dividendos</h4>
                    <p className="text-sm text-muted-foreground">Distribución trimestral</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Ventajas */}
      <section id="ventajas" className="py-24 bg-background relative overflow-hidden">
        {/* Forma decorativa */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 organic-blob" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-accent/30 rounded-full mb-6">
              <span className="text-sm font-medium text-accent-foreground">Beneficios</span>
            </div>
            <h2 className="text-foreground mb-6">¿Por qué invertir en Fibras?</h2>
            <p className="text-xl text-foreground/70">
              Las Fibras ofrecen múltiples ventajas que las convierten en una opción atractiva para 
              diversificar tu portafolio de inversión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: "Accesibilidad",
                description: "Invierte desde tu primer CBFI. No necesitas millones para ser dueño de propiedades comerciales.",
                color: "primary"
              },
              {
                icon: TrendingUp,
                title: "Flujo Constante",
                description: "Recibe dividendos cada trimestre. Ingresos predecibles y seguros sin fecha de caducidad.",
                color: "accent"
              },
              {
                icon: Shield,
                title: "Diversificación",
                description: "Accede a un amplio portafolio de propiedades, reduciendo considerablemente el riesgo.",
                color: "secondary"
              },
              {
                icon: BarChart3,
                title: "Altas Tasas",
                description: "Rendimientos basados en plusvalía que exceden el índice inflacionario.",
                color: "primary"
              },
              {
                icon: Building2,
                title: "Gestión Profesional",
                description: "Inmuebles administrados por expertos que aseguran la calidad y rentabilidad.",
                color: "accent"
              },
              {
                icon: Users,
                title: "Beneficios Fiscales",
                description: "No hay ISR por ganancias de capital en la enajenación de acciones en bolsa.",
                color: "secondary"
              }
            ].map((ventaja, index) => (
              <Card 
                key={index}
                className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-${ventaja.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <ventaja.icon className={`w-7 h-7 text-${ventaja.color}`} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">{ventaja.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{ventaja.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Tipos de Fibras */}
      <section id="tipos" className="py-24 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-sm font-medium text-primary">Diversidad</span>
                </div>
                <h2 className="text-foreground mb-6">Tipos de Fibras Inmobiliarias</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Las Fibras invierten en diversos sectores del mercado inmobiliario, permitiéndote elegir 
                  según tu perfil de riesgo y objetivos de inversión.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Building, name: "Oficinas", color: "primary" },
                  { icon: Factory, name: "Industrial", color: "accent" },
                  { icon: ShoppingBag, name: "Comercial", color: "secondary" },
                  { icon: HomeIcon, name: "Hoteles", color: "primary" },
                  { icon: Building2, name: "Usos Mixtos", color: "accent" },
                  { icon: Building, name: "Agroalimentación", color: "secondary" }
                ].map((tipo, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-background hover:bg-muted transition-colors duration-300 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${tipo.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <tipo.icon className={`w-6 h-6 text-${tipo.color}`} />
                    </div>
                    <span className="font-medium text-foreground">{tipo.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen ilustrativa */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/0UWONc2QDoO1nM9LBadP90/sandbox/2fX8SbGmOhBXJJX2Jueg4D-img-3_1771248714000_na1fn_cG9ydGZvbGlvLWRpdmVyc2l0eQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMFVXT05jMlFEb08xbk05TEJhZFA5MC9zYW5kYm94LzJmWDhTYkdtT2hCWEpKWDJKdWVnNEQtaW1nLTNfMTc3MTI0ODcxNDAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMV1JwZG1WeWMybDBlUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IgxPH--lwyrwxsDGi--asfVBKWCYLDtCzQ-Az5VPGEcxJKyia~kmNtftX6w9vafWFe6L0n4jBc8RqLDITzx-tVmvhCWdlJsLU5NEl0IdVUGPTDp34wyZu4fk4vokPImzupTi7zBnGAOHW3Iio4dlM4j4lBrTKVb3BVXt~f9QoG7WoEFbRXHTZkc6qq4L4xbPgPjVPSXR4R-QFFYokc-fmbeDaGpHdfoFYUjzJm5KOZIe2dzJPcC5RYrLoPgU4mnJOgtCCfc5VvO3F7ZqzgByAyVTOc8UyFV4qpmt2REv8uQHJ6u4TyqLwrQ9Y1wmYoJK5ZeVALrO32qEtZdSqZaJag__"
                  alt="Diversidad de propiedades"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Comunidad */}
      <section id="comunidad" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 organic-blob" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagen de comunidad */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/0UWONc2QDoO1nM9LBadP90/sandbox/2fX8SbGmOhBXJJX2Jueg4D-img-4_1771248728000_na1fn_Y29tbXVuaXR5LWNvbm5lY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMFVXT05jMlFEb08xbk05TEJhZFA5MC9zYW5kYm94LzJmWDhTYkdtT2hCWEpKWDJKdWVnNEQtaW1nLTRfMTc3MTI0ODcyODAwMF9uYTFmbl9ZMjl0YlhWdWFYUjVMV052Ym01bFkzUnBiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DDiFaSgBMfIk0F8v6LbYq9~8IJd4xJF4mxfUmfK7crBt2rmInzs1APP1GMu8ACyZ~Rajg5s44pU98uzW0DMRxKXfV8L65hVrqaFrrTgjPRDBmjjO~-uEOCDYw64J3NKqyf8DYzESWYqtvCzikfgVHWqa4BR27aa4ScdErTtJ1aYSEXIlhozX9JKkPhZ648hsClvZk6YUntOYXsp3ZapKw86ulCNFbmNSZExYUQaG044~8iIri3koB2L11gFuS-RTLNNrOI-wRTgE8mAs5tDhPyGq5C1MeNA2Rr~Q2FMhZeg94uls7xmaVqTk~S~a-r1KeqfxpjnAUbqCTa-zhZWg2A__"
                  alt="Comunidad Fibras México"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
                <span className="text-sm font-medium text-secondary-foreground">Conecta</span>
              </div>
              <h2 className="text-foreground">Únete a la comunidad</h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Forma parte de una comunidad activa de inversionistas que comparten conocimientos, 
                experiencias y análisis sobre el mercado de Fibras en México.
              </p>
              <ul className="space-y-4">
                {[
                  "Aprende de inversionistas experimentados",
                  "Accede a análisis y modelos financieros",
                  "Mantente actualizado sobre el mercado",
                  "Comparte tus experiencias y estrategias"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-lg text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer">
                    Únete en Facebook
                  </a>
                </Button>
              </div>
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
                Información educativa sobre Fideicomisos de Inversión en Bienes Raíces en México.
              </p>
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
                    Comunidad Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Aviso</h4>
              <p className="text-sm text-foreground/70">
                Este sitio es informativo y educativo. No constituye asesoría financiera. 
                Consulta con un profesional antes de invertir.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-foreground/60">
              © 2026 Fibras México. Información basada en datos de AMEFIBRA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Design Philosophy: Fintech Institutional Pro
 * - Paleta: Azul Marino Profundo + Cian Eléctrico
 * - Tipografía: Montserrat (display) + Inter (body)
 * - Estilo: Glassmorphism, terminal financiera moderna
 * - Elementos: Bordes 8-12px, gradientes azul-cian, efectos glow
 */

import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
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
  Factory,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation - Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">Fibras MX</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#que-son" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">¿Qué son?</a>
            <a href="#ventajas" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Ventajas</a>
            <a href="#tipos" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Tipos</a>
            <a href="/blog" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Blog</a>
            <a href="/comparativa" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Comparativa</a>
            <a href="/noticias" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Noticias</a>
            <a href="/analisis" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Análisis</a>
            <a href="/academia" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Academia</a>
            <a href="#comunidad" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Comunidad</a>
          </div>
          <Button 
            className="bg-accent text-primary hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            asChild
          >
            <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer">
              Únete a la Comunidad
            </a>
          </Button>
        </nav>
      </header>
      <MobileMenu />

      {/* Hero Section - Terminal Financiera Moderna */}
      <section 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, oklch(0.15 0.02 260) 0%, oklch(0.18 0.03 250) 100%)`
        }}
      >
        {/* Efectos de fondo - Glow circles */}
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, oklch(0.65 0.25 200) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, oklch(0.25 0.08 260) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido del hero - Lado izquierdo */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Inversión Inteligente</span>
              </div>
              <h1 className="text-foreground leading-tight font-display">
                Invierte en <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Bienes Raíces</span> desde tu primer peso
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl font-light">
                Las Fibras (Fideicomisos de Inversión en Bienes Raíces) te permiten ser dueño de propiedades comerciales 
                sin necesitar millones. Recibe dividendos cada trimestre y diversifica tu portafolio.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-primary hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  asChild
                >
                  <a href="/blog">Aprende en el Blog</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-semibold"
                  asChild
                >
                  <a href="/comparativa">Ver Comparativa</a>
                </Button>
              </div>
            </div>

            {/* Tarjeta flotante con estadística - Lado derecho */}
            <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div 
                className="relative rounded-2xl overflow-hidden p-8 border border-accent/30 glassmorphism shadow-2xl"
              >
                <div className="absolute inset-0 opacity-50" style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(102, 204, 255, 0.1) 100%)'
                }} />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm font-medium">Rendimiento Anual Promedio</p>
                      <p className="text-3xl font-display font-bold text-accent">8-12%</p>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-accent/20">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70 text-sm">Ocupación Promedio</span>
                      <span className="text-accent font-semibold">94.2%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary/30 overflow-hidden">
                      <div 
                        className="h-full gradient-health rounded-full"
                        style={{ width: '94.2%' }}
                      />
                    </div>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-accent/20">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70 text-sm">Deuda/EBITDA Promedio</span>
                      <span className="text-accent font-semibold">2.9x</span>
                    </div>
                    <p className="text-xs text-foreground/50">Nivel conservador y saludable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Qué son las Fibras? */}
      <section id="que-son" className="py-20 bg-background border-t border-border/50">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-foreground font-display">¿Qué son las Fibras?</h2>
              <p className="text-lg text-foreground/70">
                Fideicomisos de Inversión en Bienes Raíces que cotizan en bolsa y distribuyen dividendos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Building,
                  title: "Propiedad Inmobiliaria",
                  desc: "Inviertes en edificios, centros comerciales, almacenes y hoteles de alto rendimiento"
                },
                {
                  icon: Wallet,
                  title: "Dividendos Trimestrales",
                  desc: "Recibe distribuciones de ganancias cada trimestre directamente en tu cuenta"
                },
                {
                  icon: TrendingUp,
                  title: "Rentabilidad Consistente",
                  desc: "Rendimientos promedio de 8-12% anual con menor volatilidad que acciones"
                }
              ].map((item, idx) => (
                <Card key={idx} className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 glassmorphism">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 space-y-4">
              <h4 className="font-display font-semibold text-foreground">Proceso Simplificado</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { num: "1", text: "Abre una cuenta en tu casa de bolsa" },
                  { num: "2", text: "Compra acciones de Fibras como cualquier acción" },
                  { num: "3", text: "Recibe dividendos cada trimestre" }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-display font-bold">{step.num}</span>
                    </div>
                    <p className="text-foreground/70 text-sm pt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Ventajas */}
      <section id="ventajas" className="py-20 bg-background/50 border-t border-border/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-foreground font-display mb-6">¿Por qué invertir en Fibras?</h2>
            <p className="text-xl text-foreground/70 mb-4">
              Las Fibras ofrecen múltiples ventajas que las convierten en una opción atractiva para 
              diversificar tu portafolio de inversión.
            </p>
            <Button
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent/10 transition-all font-semibold"
              asChild
            >
              <a href="/blog">Leer artículos educativos</a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wallet,
                title: "Accesibilidad",
                desc: "Invierte desde montos pequeños sin necesitar millones de pesos"
              },
              {
                icon: TrendingUp,
                title: "Flujo Constante",
                desc: "Recibe dividendos cada trimestre de forma predecible y consistente"
              },
              {
                icon: Shield,
                title: "Diversificación",
                desc: "Distribuye tu riesgo entre múltiples propiedades y sectores"
              },
              {
                icon: BarChart3,
                title: "Transparencia",
                desc: "Información financiera pública y regulada por la CNBV"
              },
              {
                icon: Users,
                title: "Gestión Profesional",
                desc: "Expertos manejan la selección y administración de propiedades"
              },
              {
                icon: Building,
                title: "Activos Tangibles",
                desc: "Tu inversión está respaldada por bienes raíces reales"
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 glassmorphism group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center group-hover:from-accent/50 group-hover:to-accent/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Tipos de Fibras */}
      <section id="tipos" className="py-20 bg-background border-t border-border/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-foreground font-display">Tipos de Fibras por Sector</h2>
            <p className="text-lg text-foreground/70 mt-4">
              Cada Fibra se especializa en un sector inmobiliario diferente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, title: "Oficinas", desc: "Espacios de trabajo profesionales" },
              { icon: ShoppingBag, title: "Comercial", desc: "Centros comerciales y retail" },
              { icon: Factory, title: "Industrial", desc: "Almacenes y logística" },
              { icon: HomeIcon, title: "Residencial", desc: "Departamentos y vivienda" }
            ].map((tipo, idx) => (
              <Card key={idx} className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 glassmorphism text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center mx-auto">
                    <tipo.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{tipo.title}</h3>
                  <p className="text-foreground/70 text-sm">{tipo.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Comunidad */}
      <section id="comunidad" className="py-20 bg-background/50 border-t border-border/50">
        <div className="container max-w-3xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground font-display">Únete a Nuestra Comunidad</h2>
              <p className="text-lg text-foreground/70">
                Conecta con otros inversores en Fibras, comparte experiencias y aprende juntos
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 space-y-6 glassmorphism">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-foreground">Comunidad de Facebook</p>
                  <p className="text-foreground/70 text-sm">Grupo activo de inversores en Fibras mexicanas</p>
                </div>
              </div>
              <Button 
                size="lg"
                className="w-full bg-accent text-primary hover:bg-accent/90 font-semibold"
                asChild
              >
                <a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer">
                  Ir a la Comunidad
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-12 glassmorphism">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-display font-bold text-foreground">Fibras MX</span>
              </div>
              <p className="text-foreground/70 text-sm">
                Información educativa sobre inversiones en Fibras mexicanas.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-foreground/70 hover:text-accent transition-colors text-sm">Inicio</a></li>
                <li><a href="/blog" className="text-foreground/70 hover:text-accent transition-colors text-sm">Blog</a></li>
                <li><a href="/comparativa" className="text-foreground/70 hover:text-accent transition-colors text-sm">Comparativa</a></li>
                <li><a href="/noticias" className="text-foreground/70 hover:text-accent transition-colors text-sm">Noticias</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="https://amefibra.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors text-sm">AMEFIBRA</a></li>
                <li><a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors text-sm">Comunidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-foreground/60 text-sm">
              © 2026 Fibras MX. Información basada en datos de AMEFIBRA. Datos ilustrativos para propósitos educativos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

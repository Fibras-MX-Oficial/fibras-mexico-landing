/**
 * Design Philosophy: Fintech Institutional Pro
 * - Tabla terminal financiera moderna con glassmorphism
 * - Heatmap de Market Cap vs Dividend Yield
 * - Datos exclusivos de Fibras autorizadas por AMEFIBRA
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Filter,
  Zap
} from "lucide-react";
import { useState, useMemo } from "react";

interface FibraData {
  id: string;
  nombre: string;
  ticker: string;
  sector: string;
  precioActual: number;
  yieldAnual: number;
  ocupacion: number;
  deudaEBITDA: number;
  crecimientoDividendos: number;
  pNAV: number;
  propiedades: number;
  estado: "saludable" | "moderado" | "riesgo";
  marketCap: number; // en millones de USD
}

// Datos exclusivos de Fibras autorizadas por AMEFIBRA
const fibrasData: FibraData[] = [
  {
    id: "funo",
    nombre: "Fibra Uno",
    ticker: "FUNO",
    sector: "Diversificado",
    precioActual: 28.45,
    yieldAnual: 7.2,
    ocupacion: 96.5,
    deudaEBITDA: 2.8,
    crecimientoDividendos: 3.5,
    pNAV: 0.98,
    propiedades: 156,
    estado: "saludable",
    marketCap: 8500
  },
  {
    id: "fibramq",
    nombre: "Fibra Macquarie",
    ticker: "FIBRAMQ",
    sector: "Industrial",
    precioActual: 25.67,
    yieldAnual: 7.8,
    ocupacion: 97.3,
    deudaEBITDA: 2.5,
    crecimientoDividendos: 5.1,
    pNAV: 1.05,
    propiedades: 112,
    estado: "saludable",
    marketCap: 6200
  },
  {
    id: "fpi",
    nombre: "Fibra Prologis",
    ticker: "FPI",
    sector: "Industrial",
    precioActual: 32.10,
    yieldAnual: 6.9,
    ocupacion: 98.1,
    deudaEBITDA: 2.3,
    crecimientoDividendos: 4.8,
    pNAV: 1.12,
    propiedades: 89,
    estado: "saludable",
    marketCap: 7800
  },
  {
    id: "danhos",
    nombre: "Fibra Danhos",
    ticker: "DANHOS",
    sector: "Comercial",
    precioActual: 19.85,
    yieldAnual: 8.3,
    ocupacion: 93.2,
    deudaEBITDA: 3.1,
    crecimientoDividendos: 4.2,
    pNAV: 0.96,
    propiedades: 67,
    estado: "saludable",
    marketCap: 3400
  },
  {
    id: "fmty",
    nombre: "Fibra Monterrey",
    ticker: "FMTY",
    sector: "Oficinas",
    precioActual: 22.50,
    yieldAnual: 7.5,
    ocupacion: 91.8,
    deudaEBITDA: 3.2,
    crecimientoDividendos: 3.9,
    pNAV: 0.99,
    propiedades: 78,
    estado: "saludable",
    marketCap: 4100
  },
  {
    id: "fshop",
    nombre: "Fibra Shop",
    ticker: "FSHOP",
    sector: "Comercial",
    precioActual: 18.92,
    yieldAnual: 8.5,
    ocupacion: 92.1,
    deudaEBITDA: 3.5,
    crecimientoDividendos: 4.2,
    pNAV: 0.95,
    propiedades: 45,
    estado: "moderado",
    marketCap: 2800
  },
  {
    id: "finn",
    nombre: "Fibra Inn",
    ticker: "FINN",
    sector: "Hotelero",
    precioActual: 15.30,
    yieldAnual: 9.2,
    ocupacion: 85.5,
    deudaEBITDA: 4.1,
    crecimientoDividendos: 2.3,
    pNAV: 0.88,
    propiedades: 52,
    estado: "moderado",
    marketCap: 1900
  },
  {
    id: "fiho",
    nombre: "Fibra Hotel",
    ticker: "FIHO",
    sector: "Hotelero",
    precioActual: 17.65,
    yieldAnual: 8.8,
    ocupacion: 87.2,
    deudaEBITDA: 3.9,
    crecimientoDividendos: 2.8,
    pNAV: 0.91,
    propiedades: 38,
    estado: "moderado",
    marketCap: 2100
  },
  {
    id: "storage",
    nombre: "Fibra Storage",
    ticker: "STORAGE",
    sector: "Industrial",
    precioActual: 19.56,
    yieldAnual: 8.2,
    ocupacion: 95.6,
    deudaEBITDA: 2.9,
    crecimientoDividendos: 6.3,
    pNAV: 1.08,
    propiedades: 67,
    estado: "saludable",
    marketCap: 3600
  },
  {
    id: "fnova",
    nombre: "Fibra Nova",
    ticker: "FNOVA",
    sector: "Diversificado",
    precioActual: 24.20,
    yieldAnual: 7.4,
    ocupacion: 94.3,
    deudaEBITDA: 3.0,
    crecimientoDividendos: 3.6,
    pNAV: 1.01,
    propiedades: 95,
    estado: "saludable",
    marketCap: 5200
  },
  {
    id: "upsite",
    nombre: "Fibra Upsite",
    ticker: "UPSITE",
    sector: "Industrial",
    precioActual: 21.80,
    yieldAnual: 7.6,
    ocupacion: 96.9,
    deudaEBITDA: 2.7,
    crecimientoDividendos: 5.2,
    pNAV: 1.06,
    propiedades: 72,
    estado: "saludable",
    marketCap: 4500
  },
  {
    id: "edu",
    nombre: "Fibra Edu",
    ticker: "EDU",
    sector: "Educativo",
    precioActual: 14.50,
    yieldAnual: 6.8,
    ocupacion: 89.1,
    deudaEBITDA: 3.3,
    crecimientoDividendos: 2.1,
    pNAV: 0.93,
    propiedades: 28,
    estado: "moderado",
    marketCap: 1600
  },
  {
    id: "fhipo",
    nombre: "Fibra Hipotecaria",
    ticker: "FHIPO",
    sector: "Residencial",
    precioActual: 16.75,
    yieldAnual: 7.1,
    ocupacion: 90.5,
    deudaEBITDA: 3.6,
    crecimientoDividendos: 2.4,
    pNAV: 0.94,
    propiedades: 41,
    estado: "moderado",
    marketCap: 2200
  }
];

const sectores = ["Todos", "Industrial", "Comercial", "Oficinas", "Hotelero", "Educativo", "Residencial", "Diversificado"];

export default function Comparativa() {
  const [filtroSector, setFiltroSector] = useState("Todos");
  const [ordenarPor, setOrdenarPor] = useState<"yield" | "ocupacion" | "deuda">("yield");

  const fibrasFiltradas = useMemo(() => {
    let filtered = fibrasData;
    
    if (filtroSector !== "Todos") {
      filtered = filtered.filter(f => f.sector === filtroSector);
    }

    return filtered.sort((a, b) => {
      if (ordenarPor === "yield") return b.yieldAnual - a.yieldAnual;
      if (ordenarPor === "ocupacion") return b.ocupacion - a.ocupacion;
      return a.deudaEBITDA - b.deudaEBITDA;
    });
  }, [filtroSector, ordenarPor]);

  // Calcular rango de Market Cap y Yield para el heatmap
  const marketCapMin = Math.min(...fibrasData.map(f => f.marketCap));
  const marketCapMax = Math.max(...fibrasData.map(f => f.marketCap));
  const yieldMin = Math.min(...fibrasData.map(f => f.yieldAnual));
  const yieldMax = Math.max(...fibrasData.map(f => f.yieldAnual));

  // Función para obtener color basado en yield
  const getYieldColor = (yield_: number) => {
    const normalized = (yield_ - yieldMin) / (yieldMax - yieldMin);
    if (normalized > 0.7) return "oklch(0.65 0.25 200)"; // Verde cian intenso
    if (normalized > 0.4) return "oklch(0.55 0.15 210)"; // Cian moderado
    return "oklch(0.35 0.08 260)"; // Azul oscuro
  };

  // Función para obtener tamaño basado en market cap
  const getSize = (marketCap: number) => {
    const normalized = (marketCap - marketCapMin) / (marketCapMax - marketCapMin);
    return 80 + normalized * 120; // 80px a 200px
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">Fibras México</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Inicio</a>
            <a href="/blog" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Blog</a>
            <a href="/comparativa" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Comparativa</a>
            <a href="/noticias" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Noticias</a>
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

      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{
        background: 'linear-gradient(135deg, oklch(0.15 0.02 260) 0%, oklch(0.18 0.03 250) 100%)'
      }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-foreground">Comparativa de Fibras AMEFIBRA</h1>
            <p className="text-xl text-foreground/70">
              Análisis completo de las Fibras autorizadas. Datos actualizados de Market Cap, Rendimiento y Ocupación.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Filtros */}
      <section className="py-8 glassmorphism border-b border-border sticky top-20 z-40">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Filtro de Sector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Filter className="w-4 h-4 text-accent" />
                Filtrar por Sector
              </label>
              <div className="flex flex-wrap gap-2">
                {sectores.map(sector => (
                  <button
                    key={sector}
                    onClick={() => setFiltroSector(sector)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    filtroSector === sector
                      ? "bg-accent text-primary shadow-lg hover:shadow-xl"
                      : "bg-secondary/30 text-foreground/70 hover:bg-secondary/50 border border-secondary/50"
                  }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Ordenar por */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                Ordenar por
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Mayor Yield", value: "yield" },
                  { label: "Mayor Ocupación", value: "ocupacion" },
                  { label: "Menor Deuda", value: "deuda" }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setOrdenarPor(option.value as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    ordenarPor === option.value
                      ? "bg-accent text-primary shadow-lg hover:shadow-xl"
                      : "bg-secondary/30 text-foreground/70 hover:bg-secondary/50 border border-secondary/50"
                  }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Resultados
              </label>
              <div className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-foreground font-semibold">
                {fibrasFiltradas.length} Fibra{fibrasFiltradas.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Calor (Heatmap) */}
      <section className="py-16 bg-background/50 border-b border-border/50">
        <div className="container">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-foreground font-display">Mapa de Calor: Market Cap vs Dividend Yield</h2>
              <p className="text-foreground/70">Tamaño = Market Cap | Color = Rendimiento Anual</p>
            </div>

            {/* Heatmap Grid */}
            <div className="bg-card/50 border border-border/50 glassmorphism rounded-xl p-12">
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {fibrasData.map((fibra) => {
                  const size = getSize(fibra.marketCap);
                  const color = getYieldColor(fibra.yieldAnual);
                  
                  return (
                    <div
                      key={fibra.id}
                      className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                      <div
                        className="rounded-lg flex items-center justify-center font-display font-bold text-primary transition-all duration-300 hover:shadow-2xl border border-accent/30"
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          backgroundColor: color,
                          boxShadow: `0 0 20px ${color}40`
                        }}
                      >
                        <div className="text-center">
                          <p className="text-sm font-bold">{fibra.ticker}</p>
                          <p className="text-xs">{fibra.yieldAnual}%</p>
                        </div>
                      </div>
                      <p className="text-xs text-foreground/70 text-center max-w-16">${fibra.marketCap}M</p>
                    </div>
                  );
                })}
              </div>

              {/* Leyenda del Heatmap */}
              <div className="mt-12 pt-8 border-t border-border/50 space-y-4">
                <p className="text-sm font-semibold text-foreground">Escala de Rendimiento:</p>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-lg border border-accent/30"
                      style={{ backgroundColor: "oklch(0.65 0.25 200)" }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Alto Rendimiento</p>
                      <p className="text-xs text-foreground/70">{yieldMax.toFixed(1)}% - {(yieldMax - (yieldMax - yieldMin) * 0.3).toFixed(1)}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-lg border border-accent/30"
                      style={{ backgroundColor: "oklch(0.55 0.15 210)" }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Rendimiento Moderado</p>
                      <p className="text-xs text-foreground/70">{(yieldMax - (yieldMax - yieldMin) * 0.3).toFixed(1)}% - {(yieldMin + (yieldMax - yieldMin) * 0.4).toFixed(1)}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-lg border border-accent/30"
                      style={{ backgroundColor: "oklch(0.35 0.08 260)" }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Rendimiento Bajo</p>
                      <p className="text-xs text-foreground/70">{yieldMin.toFixed(1)}% - {(yieldMin + (yieldMax - yieldMin) * 0.4).toFixed(1)}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla Comparativa */}
      <section className="py-12 bg-background/50">
        <div className="container">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Fibra</th>
                  <th className="text-right py-4 px-4 font-display font-semibold text-foreground">Sector</th>
                  <th className="text-right py-4 px-4 font-display font-semibold text-foreground">Yield</th>
                  <th className="text-right py-4 px-4 font-display font-semibold text-foreground">Ocupación</th>
                  <th className="text-right py-4 px-4 font-display font-semibold text-foreground">Deuda/EBITDA</th>
                  <th className="text-right py-4 px-4 font-display font-semibold text-foreground">P/NAV</th>
                  <th className="text-right py-4 px-4 font-display font-semibold text-foreground">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {fibrasFiltradas.map((fibra) => (
                  <tr 
                    key={fibra.id}
                    className="border-b border-border/50 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
                  >
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">{fibra.nombre}</p>
                        <p className="text-sm text-muted-foreground">{fibra.ticker}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/30">
                        {fibra.sector}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="font-semibold text-accent">{fibra.yieldAnual.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">{fibra.ocupacion.toFixed(1)}%</p>
                        <div className="w-24 h-2 rounded-full bg-secondary/30 overflow-hidden">
                          <div 
                            className="h-full gradient-health rounded-full"
                            style={{ width: `${fibra.ocupacion}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className={`font-semibold ${
                        fibra.deudaEBITDA < 3 ? 'text-accent' : fibra.deudaEBITDA < 3.5 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {fibra.deudaEBITDA.toFixed(1)}x
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className={`font-semibold ${
                        fibra.pNAV < 1 ? 'text-accent' : 'text-foreground/70'
                      }`}>
                        {fibra.pNAV.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-semibold text-foreground">${fibra.marketCap}M</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Leyenda de indicadores */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display font-semibold text-foreground">Yield Anual</h4>
                <p className="text-sm text-foreground/70">
                  Porcentaje de rendimiento anual esperado. Mayor yield = mayor ingreso por dividendos.
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-foreground/60">Rango: {yieldMin.toFixed(1)}% - {yieldMax.toFixed(1)}%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display font-semibold text-foreground">Ocupación</h4>
                <p className="text-sm text-foreground/70">
                  Porcentaje de propiedades rentadas. Mayor ocupación = ingresos más estables.
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-foreground/60">Ideal: 90%+</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display font-semibold text-foreground">Deuda/EBITDA</h4>
                <p className="text-sm text-foreground/70">
                  Nivel de endeudamiento. Menor ratio = menor riesgo financiero.
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-foreground/60">Saludable: &lt;3.0x</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display font-semibold text-foreground">P/NAV</h4>
                <p className="text-sm text-foreground/70">
                  Precio vs Valor de Activos. Menor a 1 = subvaluado.
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-foreground/60">Oportunidad: &lt;1.0</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Recomendaciones */}
      <section className="py-16" style={{
        background: 'linear-gradient(135deg, rgba(102, 204, 255, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%)'
      }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-8 text-center">Cómo Usar Esta Comparativa</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-accent">1</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Filtra por Sector</h3>
                  <p className="text-foreground/70">
                    Comienza filtrando por el sector que te interesa: Industrial, Comercial, Oficinas, Hotelero, Educativo o Residencial.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Analiza el Heatmap</h3>
                  <p className="text-foreground/70">
                    Visualiza el tamaño (Market Cap) y color (Rendimiento) de cada Fibra para identificar oportunidades.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Diversifica</h3>
                  <p className="text-foreground/70">
                    No inviertas todo en una sola Fibra. Combina varias para reducir riesgo y maximizar retornos.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-card/50 rounded-xl border-2 border-accent/30 glassmorphism">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Aviso Importante</h4>
                  <p className="text-foreground/70">
                    Los datos mostrados son ilustrativos y basados en información histórica. Los rendimientos pasados no garantizan resultados futuros. 
                    Consulta con un asesor financiero antes de invertir.
                  </p>
                </div>
              </div>
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
                <span className="text-xl font-display font-bold text-foreground">Fibras México</span>
              </div>
              <p className="text-foreground/70">
                Información educativa sobre inversiones en Fibras mexicanas autorizadas por AMEFIBRA.
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
                  <a href="/comparativa" className="text-foreground/70 hover:text-accent transition-colors">
                    Comparativa
                  </a>
                </li>
                <li>
                  <a href="/noticias" className="text-foreground/70 hover:text-accent transition-colors">
                    Noticias
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
              © 2026 Fibras México. Datos basados en Fibras autorizadas por AMEFIBRA. Información ilustrativa para propósitos educativos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

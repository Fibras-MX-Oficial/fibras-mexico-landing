/**
 * Design Philosophy: Fintech Institutional Pro
 * - Tabla terminal financiera moderna con glassmorphism
 * - Filtros interactivos con efectos cian eléctrico
 * - Gradientes azul-cian para indicadores de salud
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
  Download
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
}

const fibrasData: FibraData[] = [
  {
    id: "funo",
    nombre: "FIBRA UNO",
    ticker: "FUNO",
    sector: "Diversificado",
    precioActual: 28.45,
    yieldAnual: 7.2,
    ocupacion: 96.5,
    deudaEBITDA: 2.8,
    crecimientoDividendos: 3.5,
    pNAV: 0.98,
    propiedades: 156,
    estado: "saludable"
  },
  {
    id: "fibra-uno",
    nombre: "FIBRA UNO Administración",
    ticker: "FIADM",
    sector: "Oficinas",
    precioActual: 32.15,
    yieldAnual: 6.8,
    ocupacion: 94.2,
    deudaEBITDA: 3.2,
    crecimientoDividendos: 2.1,
    pNAV: 1.02,
    propiedades: 89,
    estado: "saludable"
  },
  {
    id: "fmty",
    nombre: "FIBRA MULTY",
    ticker: "FMTY",
    sector: "Comercial",
    precioActual: 18.92,
    yieldAnual: 8.5,
    ocupacion: 92.1,
    deudaEBITDA: 3.5,
    crecimientoDividendos: 4.2,
    pNAV: 0.95,
    propiedades: 78,
    estado: "moderado"
  },
  {
    id: "fmcn",
    nombre: "FIBRA MACQUARIE",
    ticker: "FMCN",
    sector: "Industrial",
    precioActual: 25.67,
    yieldAnual: 7.8,
    ocupacion: 97.3,
    deudaEBITDA: 2.5,
    crecimientoDividendos: 5.1,
    pNAV: 1.05,
    propiedades: 112,
    estado: "saludable"
  },
  {
    id: "fcr",
    nombre: "FIBRA CORPORATIVO",
    ticker: "FCR",
    sector: "Oficinas",
    precioActual: 21.34,
    yieldAnual: 6.5,
    ocupacion: 89.8,
    deudaEBITDA: 3.8,
    crecimientoDividendos: 1.8,
    pNAV: 0.92,
    propiedades: 45,
    estado: "moderado"
  },
  {
    id: "fsto",
    nombre: "FIBRA STORAGE",
    ticker: "FSTO",
    sector: "Industrial",
    precioActual: 19.56,
    yieldAnual: 8.2,
    ocupacion: 95.6,
    deudaEBITDA: 2.9,
    crecimientoDividendos: 6.3,
    pNAV: 1.08,
    propiedades: 67,
    estado: "saludable"
  },
  {
    id: "fvpo",
    nombre: "FIBRA VALMEX",
    ticker: "FVPO",
    sector: "Industrial",
    precioActual: 23.78,
    yieldAnual: 7.5,
    ocupacion: 96.8,
    deudaEBITDA: 2.6,
    crecimientoDividendos: 4.7,
    pNAV: 1.03,
    propiedades: 94,
    estado: "saludable"
  },
  {
    id: "fmun",
    nombre: "FIBRA MUNICIPAL",
    ticker: "FMUN",
    sector: "Comercial",
    precioActual: 16.45,
    yieldAnual: 9.1,
    ocupacion: 88.5,
    deudaEBITDA: 4.2,
    crecimientoDividendos: 2.5,
    pNAV: 0.88,
    propiedades: 52,
    estado: "riesgo"
  }
];

const sectorColors: Record<string, "primary" | "accent" | "secondary"> = {
  "Diversificado": "primary",
  "Oficinas": "accent",
  "Comercial": "secondary",
  "Industrial": "primary"
};

export default function Comparativa() {
  const [filtroSector, setFiltroSector] = useState<string>("Todos");
  const [ordenarPor, setOrdenarPor] = useState<"yield" | "ocupacion" | "deuda">("yield");

  const sectores = ["Todos", ...Array.from(new Set(fibrasData.map(f => f.sector)))];

  const fibrasFiltradas = useMemo(() => {
    let resultado = fibrasData;

    if (filtroSector !== "Todos") {
      resultado = resultado.filter(f => f.sector === filtroSector);
    }

    resultado.sort((a, b) => {
      switch (ordenarPor) {
        case "yield":
          return b.yieldAnual - a.yieldAnual;
        case "ocupacion":
          return b.ocupacion - a.ocupacion;
        case "deuda":
          return a.deudaEBITDA - b.deudaEBITDA;
        default:
          return 0;
      }
    });

    return resultado;
  }, [filtroSector, ordenarPor]);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "saludable":
        return "text-green-600";
      case "moderado":
        return "text-yellow-600";
      case "riesgo":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case "saludable":
        return <CheckCircle className="w-5 h-5" />;
      case "moderado":
        return <AlertCircle className="w-5 h-5" />;
      case "riesgo":
        return <TrendingDown className="w-5 h-5" />;
      default:
        return null;
    }
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
            <h1 className="text-foreground">Comparativa de Fibras</h1>
            <p className="text-xl text-foreground/70">
              Analiza y compara las principales Fibras mexicanas con datos actualizados de rendimiento, 
              ocupación, deuda y otros indicadores clave.
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
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Filter className="w-4 h-4" />
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
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <TrendingUp className="w-4 h-4" />
                Ordenar por
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "yield", label: "Yield" },
                  { value: "ocupacion", label: "Ocupación" },
                  { value: "deuda", label: "Menor Deuda" }
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

            {/* Estadísticas */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Resultados</label>
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-2xl font-display font-bold text-primary">{fibrasFiltradas.length}</p>
                <p className="text-sm text-foreground/70">Fibras encontradas</p>
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
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Fibra</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Sector</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Precio</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Yield Anual</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Ocupación</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Deuda/EBITDA</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Crec. Div.</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">P/NAV</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Estado</th>
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
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {fibra.sector}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <p className="font-semibold text-foreground">${fibra.precioActual.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-foreground">{fibra.yieldAnual.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">{fibra.ocupacion.toFixed(1)}%</p>
                        <div className="w-16 h-2 bg-muted rounded-full mx-auto overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent"
                            style={{ width: `${fibra.ocupacion}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className={`font-semibold ${fibra.deudaEBITDA > 3.5 ? 'text-red-600' : fibra.deudaEBITDA > 3 ? 'text-yellow-600' : 'text-green-600'}`}>
                        {fibra.deudaEBITDA.toFixed(1)}x
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-foreground">{fibra.crecimientoDividendos.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className={`font-semibold ${fibra.pNAV > 1.05 ? 'text-red-600' : fibra.pNAV < 0.95 ? 'text-green-600' : 'text-yellow-600'}`}>
                        {fibra.pNAV.toFixed(2)}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className={`flex items-center justify-center gap-2 ${getEstadoColor(fibra.estado)}`}>
                        {getEstadoIcon(fibra.estado)}
                        <span className="text-xs font-semibold capitalize">{fibra.estado}</span>
                      </div>
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
                  <p className="text-xs text-muted-foreground">Rango típico: 6-9%</p>
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
                  <p className="text-xs text-muted-foreground">Saludable: mayor a 95%</p>
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
                  <p className="text-xs text-muted-foreground">Conservador: menor a 3x</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display font-semibold text-foreground">P/NAV</h4>
                <p className="text-sm text-foreground/70">
                  Precio vs Valor de Activos. Menor a 1 = subvaluado, Mayor a 1 = sobrevalorado.
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">Neutral: 0.95-1.05</p>
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
                    Comienza filtrando por el sector que te interesa: oficinas, comercial, industrial o diversificado.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border/50 glassmorphism shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Analiza Indicadores</h3>
                  <p className="text-foreground/70">
                    Revisa yield, ocupación y deuda. Busca Fibras con buen balance entre rendimiento y seguridad.
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
                    Consulta siempre reportes financieros oficiales y asesores profesionales antes de tomar decisiones de inversión.
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
                Información educativa sobre inversiones en Fibras mexicanas.
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

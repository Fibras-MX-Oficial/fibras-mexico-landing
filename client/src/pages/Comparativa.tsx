/**
 * Design Philosophy: Fintech Institutional Pro
 * - Tabla terminal financiera moderna con glassmorphism
 * - Heatmap de Market Cap vs Dividend Yield
 * - Filtros avanzados, búsqueda y exportación CSV
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
  Zap,
  Download,
  Search,
  ArrowUpDown,
  X
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
  marketCap: number;
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

type SortKey = "yield" | "ocupacion" | "deuda" | "marketCap" | "pNav" | "crecimiento" | "precio" | "nombre";
type SortOrder = "asc" | "desc";

// Componente para header de tabla con ordenamiento
function SortableHeader({ 
  label, 
  sortKey: key, 
  currentSort, 
  currentOrder,
  onSort 
}: { 
  label: string; 
  sortKey: SortKey; 
  currentSort: SortKey; 
  currentOrder: SortOrder;
  onSort: (key: SortKey) => void;
}) {
  const isActive = currentSort === key;
  return (
    <button
      onClick={() => onSort(key)}
      className="flex items-center gap-1 hover:text-accent transition-colors cursor-pointer group"
    >
      <span className="font-semibold text-foreground">{label}</span>
      <ArrowUpDown 
        className={`w-4 h-4 transition-all ${
          isActive 
            ? 'text-accent' 
            : 'text-foreground/30 group-hover:text-foreground/60'
        } ${isActive && currentOrder === 'asc' ? 'rotate-180' : ''}`}
      />
    </button>
  );
}

export default function Comparativa() {
  const [filtroSector, setFiltroSector] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("yield");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("desc");
    }
  };

  // Función para exportar a CSV
  const exportToCSV = () => {
    const headers = ["Nombre", "Ticker", "Sector", "Yield (%)", "Ocupación (%)", "Deuda/EBITDA", "P/NAV", "Market Cap (M)", "Precio", "Crecimiento Dividendos (%)"];
    const rows = fibrasFiltradas.map(f => [
      f.nombre,
      f.ticker,
      f.sector,
      f.yieldAnual.toFixed(2),
      f.ocupacion.toFixed(2),
      f.deudaEBITDA.toFixed(2),
      f.pNAV.toFixed(2),
      f.marketCap,
      f.precioActual.toFixed(2),
      f.crecimientoDividendos.toFixed(2)
    ]);

    const csv = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `fibras-comparativa-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fibrasFiltradas = useMemo(() => {
    let filtered = fibrasData;
    
    // Filtrar por sector
    if (filtroSector !== "Todos") {
      filtered = filtered.filter(f => f.sector === filtroSector);
    }

    // Filtrar por búsqueda (nombre o ticker)
    if (busqueda.trim()) {
      const searchLower = busqueda.toLowerCase();
      filtered = filtered.filter(f => 
        f.nombre.toLowerCase().includes(searchLower) || 
        f.ticker.toLowerCase().includes(searchLower)
      );
    }

    // Ordenamiento multi-criterio
    return filtered.sort((a, b) => {
      let aVal: number | string = 0;
      let bVal: number | string = 0;

      switch (sortKey) {
        case "yield":
          aVal = a.yieldAnual;
          bVal = b.yieldAnual;
          break;
        case "ocupacion":
          aVal = a.ocupacion;
          bVal = b.ocupacion;
          break;
        case "deuda":
          aVal = a.deudaEBITDA;
          bVal = b.deudaEBITDA;
          break;
        case "marketCap":
          aVal = a.marketCap;
          bVal = b.marketCap;
          break;
        case "pNav":
          aVal = a.pNAV;
          bVal = b.pNAV;
          break;
        case "crecimiento":
          aVal = a.crecimientoDividendos;
          bVal = b.crecimientoDividendos;
          break;
        case "precio":
          aVal = a.precioActual;
          bVal = b.precioActual;
          break;
        case "nombre":
          aVal = a.nombre;
          bVal = b.nombre;
          break;
        default:
          return 0;
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        if (sortOrder === "asc") {
          return aVal.localeCompare(bVal);
        } else {
          return bVal.localeCompare(aVal);
        }
      }

      if (sortOrder === "asc") {
        return (aVal as number) - (bVal as number);
      } else {
        return (bVal as number) - (aVal as number);
      }
    });
  }, [filtroSector, busqueda, sortKey, sortOrder]);

  // Calcular rango de Market Cap y Yield para el heatmap
  const marketCapMin = Math.min(...fibrasData.map(f => f.marketCap));
  const marketCapMax = Math.max(...fibrasData.map(f => f.marketCap));
  const yieldMin = Math.min(...fibrasData.map(f => f.yieldAnual));
  const yieldMax = Math.max(...fibrasData.map(f => f.yieldAnual));

  // Función para obtener color basado en yield
  const getYieldColor = (yield_: number) => {
    const normalized = (yield_ - yieldMin) / (yieldMax - yieldMin);
    if (normalized > 0.7) return "oklch(0.65 0.25 200)";
    if (normalized > 0.4) return "oklch(0.55 0.15 210)";
    return "oklch(0.35 0.08 260)";
  };

  // Función para obtener tamaño basado en market cap
  const getSize = (marketCap: number) => {
    const normalized = (marketCap - marketCapMin) / (marketCapMax - marketCapMin);
    return 80 + normalized * 120;
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
            <a href="/analisis" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Análisis</a>
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
              Análisis completo con búsqueda avanzada, filtros y exportación de datos
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Filtros Avanzados */}
      <section className="py-8 glassmorphism border-b border-border sticky top-20 z-40">
        <div className="container">
          <div className="space-y-6">
            {/* Búsqueda */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Search className="w-4 h-4 text-accent" />
                Buscar por Nombre o Ticker
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ej: FUNO, Fibra Uno, Industrial..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/30 border border-secondary/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition-colors"
                />
                {busqueda && (
                  <button
                    onClick={() => setBusqueda("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-accent transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filtro de Sector y Exportar */}
            <div className="grid md:grid-cols-2 gap-6">
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

              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Download className="w-4 h-4 text-accent" />
                  Exportar Datos
                </label>
                <Button
                  onClick={exportToCSV}
                  className="w-full bg-accent text-primary hover:bg-accent/90 font-semibold flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Descargar CSV ({fibrasFiltradas.length})
                </Button>
              </div>
            </div>

            {/* Info de resultados */}
            <div className="flex items-center justify-between text-sm">
              <p className="text-foreground/70">
                Mostrando <span className="font-semibold text-accent">{fibrasFiltradas.length}</span> de <span className="font-semibold text-accent">{fibrasData.length}</span> Fibras
              </p>
              {(busqueda || filtroSector !== "Todos") && (
                <button
                  onClick={() => {
                    setBusqueda("");
                    setFiltroSector("Todos");
                  }}
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  Limpiar filtros
                </button>
              )}
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
                {fibrasFiltradas.map((fibra) => {
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
                  <th className="text-left py-4 px-4">
                    <SortableHeader 
                      label="Fibra" 
                      sortKey="nombre" 
                      currentSort={sortKey} 
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                  </th>
                  <th className="text-right py-4 px-4">
                    <SortableHeader 
                      label="Sector" 
                      sortKey="nombre" 
                      currentSort={sortKey} 
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                  </th>
                  <th className="text-right py-4 px-4">
                    <SortableHeader 
                      label="Yield" 
                      sortKey="yield" 
                      currentSort={sortKey} 
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                  </th>
                  <th className="text-right py-4 px-4">
                    <SortableHeader 
                      label="Ocupación" 
                      sortKey="ocupacion" 
                      currentSort={sortKey} 
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                  </th>
                  <th className="text-right py-4 px-4">
                    <SortableHeader 
                      label="Deuda" 
                      sortKey="deuda" 
                      currentSort={sortKey} 
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                  </th>
                  <th className="text-right py-4 px-4">
                    <SortableHeader 
                      label="P/NAV" 
                      sortKey="pNav" 
                      currentSort={sortKey} 
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                  </th>
                  <th className="text-right py-4 px-4">
                    <SortableHeader 
                      label="Market Cap" 
                      sortKey="marketCap" 
                      currentSort={sortKey} 
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                  </th>
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

          {fibrasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/70 text-lg">No se encontraron Fibras que coincidan con los filtros</p>
              <button
                onClick={() => {
                  setBusqueda("");
                  setFiltroSector("Todos");
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-accent text-primary hover:bg-accent/90 font-semibold transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
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

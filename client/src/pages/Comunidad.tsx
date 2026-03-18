/**
 * Página Comunidad - Foro de Discusión
 * Estilo: Fintech Institutional Pro
 * Sección para que usuarios discutan estrategias de inversión y compartan ideas
 */

import { useState, useMemo } from "react";
import { MessageCircle, Heart, Share2, Filter, Search, Plus, Building2, TrendingUp, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";

interface ForumPost {
  id: string;
  author: string;
  avatar: string;
  title: string;
  category: "estrategia" | "analisis" | "principiantes" | "noticias" | "general";
  content: string;
  timestamp: string;
  replies: number;
  likes: number;
  views: number;
  tags: string[];
}

const forumPosts: ForumPost[] = [
  {
    id: "1",
    author: "Carlos Mendoza",
    avatar: "CM",
    title: "Estrategia de Reinversión de Dividendos en FUNO",
    category: "estrategia",
    content: "He estado reinvirtiendo mis dividendos de FUNO durante 2 años. ¿Alguien más usa esta estrategia? ¿Cuáles son sus resultados?",
    timestamp: "Hace 2 horas",
    replies: 12,
    likes: 45,
    views: 234,
    tags: ["FUNO", "reinversión", "largo plazo"]
  },
  {
    id: "2",
    author: "Ana García",
    avatar: "AG",
    title: "Comparación: FIBRAMQ vs FPI para Industrial",
    category: "analisis",
    content: "Estoy analizando estas dos Fibras de sector industrial. ¿Cuál creen que tiene mejor potencial en 2026?",
    timestamp: "Hace 4 horas",
    replies: 8,
    likes: 32,
    views: 156,
    tags: ["FIBRAMQ", "FPI", "industrial", "comparativa"]
  },
  {
    id: "3",
    author: "Roberto López",
    avatar: "RL",
    title: "Soy principiante, ¿por dónde empiezo?",
    category: "principiantes",
    content: "Acabo de abrir mi cuenta de inversión. Tengo $50,000 para invertir en Fibras. ¿Qué recomiendan para un principiante?",
    timestamp: "Hace 6 horas",
    replies: 18,
    likes: 67,
    views: 412,
    tags: ["principiante", "portafolio", "recomendaciones"]
  },
  {
    id: "4",
    author: "Sofía Ramírez",
    avatar: "SR",
    title: "Análisis Técnico: Tendencia Alcista en FMTY",
    category: "analisis",
    content: "Observo una tendencia alcista clara en FMTY. Los soportes están bien definidos. ¿Qué ven ustedes en los gráficos?",
    timestamp: "Hace 8 horas",
    replies: 6,
    likes: 28,
    views: 124,
    tags: ["FMTY", "análisis técnico", "tendencia"]
  },
  {
    id: "5",
    author: "Miguel Torres",
    avatar: "MT",
    title: "Actualización: Cambios en Dividendos de FSHOP",
    category: "noticias",
    content: "FSHOP acaba de anunciar un aumento del 15% en su dividendo trimestral. ¿Cómo afecta esto el precio de la Fibra?",
    timestamp: "Hace 10 horas",
    replies: 14,
    likes: 56,
    views: 289,
    tags: ["FSHOP", "dividendos", "noticias"]
  },
  {
    id: "6",
    author: "Elena Sánchez",
    avatar: "ES",
    title: "Diversificación de Portafolio: Mi Estrategia",
    category: "estrategia",
    content: "Tengo un portafolio diversificado con 6 Fibras diferentes. Aquí está mi asignación y por qué la elegí...",
    timestamp: "Hace 12 horas",
    replies: 11,
    likes: 43,
    views: 198,
    tags: ["diversificación", "portafolio", "estrategia"]
  }
];

const categories = [
  { id: "todos", label: "Todos", color: "bg-secondary/30" },
  { id: "estrategia", label: "Estrategias", color: "bg-accent/20" },
  { id: "analisis", label: "Análisis", color: "bg-blue-500/20" },
  { id: "principiantes", label: "Principiantes", color: "bg-green-500/20" },
  { id: "noticias", label: "Noticias", color: "bg-orange-500/20" },
  { id: "general", label: "General", color: "bg-purple-500/20" }
];

export default function Comunidad() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"reciente" | "popular" | "comentarios">("reciente");

  const filteredPosts = useMemo(() => {
    let filtered = forumPosts;

    // Filtrar por categoría
    if (selectedCategory !== "todos") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(search) ||
        post.content.toLowerCase().includes(search) ||
        post.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }

    // Ordenar
    if (sortBy === "popular") {
      filtered.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === "comentarios") {
      filtered.sort((a, b) => b.replies - a.replies);
    }

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

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
            <a href="/academia" className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium">Academia</a>
            <a href="/comunidad" className="text-accent font-bold transition-colors duration-300">Comunidad</a>
            <a href="https://www.facebook.com/FibrasMexico?locale=es_LA" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-accent text-primary font-semibold hover:bg-accent/90 transition-all duration-300">Únete a la Comunidad</a>
          </div>
        </nav>
      </header>
      <MobileMenu />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/50 to-background border-b border-border">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-semibold text-accent">COMUNIDAD FIBRAS MX</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Foro de Inversores
              </h1>
              <p className="text-lg text-foreground/70 mb-8">
                Conecta con otros inversores, comparte estrategias, analiza Fibras y crece tu conocimiento financiero en comunidad.
              </p>
              <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Crear Nueva Discusión
              </Button>
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: Users, label: "Miembros Activos", value: "2,847" },
                { icon: MessageCircle, label: "Discusiones", value: "1,234" },
                { icon: TrendingUp, label: "Respuestas", value: "8,956" },
                { icon: Eye, label: "Vistas Totales", value: "125K+" }
              ].map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl glassmorphism border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filtros y Búsqueda */}
        <section className="py-8 border-b border-border sticky top-20 z-40 bg-background/80 backdrop-blur-md">
          <div className="container">
            {/* Búsqueda */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Buscar discusiones, Fibras, estrategias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Categorías */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-accent text-primary shadow-lg"
                      : `${cat.color} text-foreground hover:bg-accent/30`
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Ordenamiento */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-foreground/60" />
              <span className="text-sm text-foreground/60">Ordenar por:</span>
              {["reciente", "popular", "comentarios"].map(option => (
                <button
                  key={option}
                  onClick={() => setSortBy(option as any)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                    sortBy === option
                      ? "bg-accent text-primary"
                      : "bg-secondary/30 text-foreground/70 hover:bg-secondary/50"
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts del Foro */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <div
                    key={post.id}
                    className="p-6 rounded-xl glassmorphism border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                  >
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-primary font-bold text-sm">
                          {post.avatar}
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <p className="text-sm font-semibold text-foreground/60">{post.author}</p>
                            <p className="text-xs text-foreground/40">{post.timestamp}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                            post.category === "estrategia" ? "bg-accent/20 text-accent" :
                            post.category === "analisis" ? "bg-blue-500/20 text-blue-400" :
                            post.category === "principiantes" ? "bg-green-500/20 text-green-400" :
                            post.category === "noticias" ? "bg-orange-500/20 text-orange-400" :
                            "bg-purple-500/20 text-purple-400"
                          }`}>
                            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-foreground/70 mb-3 line-clamp-2">
                          {post.content}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 rounded-lg bg-secondary/30 text-xs text-foreground/60 hover:bg-secondary/50 transition-colors">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6 text-sm text-foreground/60">
                          <div className="flex items-center gap-2 hover:text-accent transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.replies} respuestas</span>
                          </div>
                          <div className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes} likes</span>
                          </div>
                          <div className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} vistas</span>
                          </div>
                          <div className="flex items-center gap-2 hover:text-accent transition-colors ml-auto">
                            <Share2 className="w-4 h-4" />
                            <span>Compartir</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <MessageCircle className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
                  <p className="text-foreground/60">No se encontraron discusiones que coincidan con tu búsqueda.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary/50 to-primary/30 border-t border-border">
          <div className="container text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              ¿Listo para Unirte a la Comunidad?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Conecta con miles de inversores, comparte tus estrategias y aprende de otros miembros de la comunidad Fibras México.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold">
                Crear Cuenta
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 font-semibold">
                Ver Facebook
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-foreground mb-4">Fibras México</h4>
                <p className="text-sm text-foreground/60">Plataforma educativa y de análisis para inversión en Fibras.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Secciones</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
                  <li><a href="/comparativa" className="hover:text-accent transition-colors">Comparativa</a></li>
                  <li><a href="/analisis" className="hover:text-accent transition-colors">Análisis</a></li>
                  <li><a href="/academia" className="hover:text-accent transition-colors">Academia</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Comunidad</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#" className="hover:text-accent transition-colors">Foro</a></li>
                  <li><a href="https://www.facebook.com/FibrasMexico?locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Reglas de Comunidad</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#" className="hover:text-accent transition-colors">Términos de Uso</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Privacidad</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Aviso Legal</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-foreground/60">© 2026 Fibras México. Todos los derechos reservados.</p>
              <p className="text-xs text-foreground/40 mt-4 md:mt-0">
                Descargo: Esta plataforma es educativa. No es asesoramiento financiero. Consulta a un asesor profesional antes de invertir.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Building2, DollarSign, BarChart3, Zap } from "lucide-react";

/**
 * Landing Page - Academia Fibras MX
 * Design System: Minimalismo Corporativo Moderno
 * Paleta: Azul marino (#1a3a52) + Dorado (#d4a574) + Blanco + Grises
 * Tipografía: Playfair Display (títulos) + Inter (cuerpo) + IBM Plex Mono (datos)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navegación */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-[#1a3a52] to-[#d4a574] flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-[#1a3a52]">Fibras México</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#ventajas" className="text-gray-700 hover:text-[#1a3a52] transition">Ventajas</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-[#1a3a52] transition">Cómo Funciona</a>
            <a href="#fibras" className="text-gray-700 hover:text-[#1a3a52] transition">Fibras</a>
            <Button className="bg-[#1a3a52] hover:bg-[#0f2438] text-white">Descargar Ebook</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#1a3a52] leading-tight">
                  El arte de ser dueño de edificios
                </h1>
                <p className="text-xl text-gray-600">
                  Sin ser millonario. Descubre cómo invertir en los activos inmobiliarios más rentables de México con solo lo que cuesta un café.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#1a3a52] hover:bg-[#0f2438] text-white text-base px-8">
                  Descargar Ebook Gratis
                </Button>
                <Button size="lg" variant="outline" className="border-[#1a3a52] text-[#1a3a52] hover:bg-gray-50 text-base px-8">
                  Saber Más
                </Button>
              </div>
              <div className="pt-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                  <span>Acceso inmediato al ebook</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                  <span>Sin compromisos ni datos personales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                  <span>Únete a la comunidad @fibrasmx</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/manus-storage/midtown-jalisco_1a3e092a.jpg" 
                alt="Midtown Jalisco - Fibra Uno" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border-l-4 border-[#d4a574]">
                <p className="text-sm font-semibold text-[#1a3a52]">Midtown Jalisco</p>
                <p className="text-xs text-gray-600">Fibra Uno - Guadalajara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gold"></div>

      {/* Ventajas Section */}
      <section id="ventajas" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a3a52] mb-4">
              Ventajas de invertir en FIBRAs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combina la seguridad tangible de los bienes raíces con la liquidez y facilidad del mercado de valores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ventaja 1 */}
            <Card className="card-gold-border p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <DollarSign className="w-12 h-12 text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-3">Flujo de Efectivo</h3>
              <p className="text-gray-600 mb-4">
                Recibe distribuciones periódicas (rentas) directamente en tu cuenta. Conviértete en un "arrendador digital" sin gestión operativa.
              </p>
              <div className="text-sm text-[#d4a574] font-semibold">Rendimientos recurrentes</div>
            </Card>

            {/* Ventaja 2 */}
            <Card className="card-gold-border p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <TrendingUp className="w-12 h-12 text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-3">Ventajas Fiscales</h3>
              <p className="text-gray-600 mb-4">
                Beneficios de exención de impuestos. Las FIBRAs distribuyen el 90% de sus ganancias, optimizando tu carga fiscal.
              </p>
              <div className="text-sm text-[#d4a574] font-semibold">Eficiencia tributaria</div>
            </Card>

            {/* Ventaja 3 */}
            <Card className="card-gold-border p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Building2 className="w-12 h-12 text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-3">Activos Tangibles</h3>
              <p className="text-gray-600 mb-4">
                Inviertes en edificios reales: oficinas, centros comerciales, naves industriales, hoteles. Tu dinero se puede ver y tocar.
              </p>
              <div className="text-sm text-[#d4a574] font-semibold">Inversión real</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gold"></div>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a3a52] mb-16 text-center">
            ¿Cómo funcionan las FIBRAs?
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="number-icon">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">Compra Certificados</h3>
                    <p className="text-gray-600">
                      Adquiere Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIs) en la Bolsa Mexicana de Valores con el monto que desees.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="number-icon">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">Eres Propietario</h3>
                    <p className="text-gray-600">
                      Te conviertes en propietario de una fracción de inmuebles premium: oficinas, centros comerciales, naves industriales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="number-icon">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">Recibe Rentas</h3>
                    <p className="text-gray-600">
                      El fideicomiso administra los inmuebles y distribuye las rentas entre los inversionistas de forma periódica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/manus-storage/torre-mitikah_dd127ffd.jpg" 
                alt="Torre Mitikah - Ciudad de México" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border-r-4 border-[#d4a574]">
                <p className="text-sm font-semibold text-[#1a3a52]">Torre Mitikah</p>
                <p className="text-xs text-gray-600">Fibra Uno - CDMX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gold"></div>

      {/* Tipos de Fibras */}
      <section id="fibras" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a3a52] mb-16 text-center">
            Diversificación de Sectores
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Tipo 1 */}
            <Card className="card-gold-border p-8">
              <div className="flex items-start gap-4 mb-4">
                <BarChart3 className="w-8 h-8 text-[#d4a574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">Activos Estabilizados</h3>
                  <p className="text-gray-600">
                    Fibras que adquieren propiedades terminadas y rentables. Distribuyen dividendos inmediatamente.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-700"><strong>Ejemplos:</strong> Fibra Uno, Fibra Danhos, Fibra Prologis</p>
                    <p className="text-sm text-[#d4a574] font-semibold">Ideal para: Flujo de efectivo inmediato</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tipo 2 */}
            <Card className="card-gold-border p-8">
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-8 h-8 text-[#d4a574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">Fibras de Desarrollo</h3>
                  <p className="text-gray-600">
                    Construyen desde cero y generan plusvalía (25-30% adicional). Distribuyen después de estabilización.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-700"><strong>Ejemplos:</strong> Fibra Storage, Fibra Upsite, Fibra Plus</p>
                    <p className="text-sm text-[#d4a574] font-semibold">Ideal para: Crecimiento de capital</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-6">Sectores Disponibles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-[#1a3a52] mb-2">Industrial</p>
                <p className="text-sm text-gray-600">Parques industriales, centros logísticos y de distribución</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a3a52] mb-2">Comercial</p>
                <p className="text-sm text-gray-600">Centros comerciales, retail y usos mixtos premium</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a3a52] mb-2">Corporativo</p>
                <p className="text-sm text-gray-600">Edificios de oficinas de clase A y B</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a3a52] mb-2">Hotelero</p>
                <p className="text-sm text-gray-600">Hoteles de lujo y resorts turísticos</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a3a52] mb-2">Especializado</p>
                <p className="text-sm text-gray-600">Auto-almacenamiento, educativo, salud</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a3a52] mb-2">15+ Fibras</p>
                <p className="text-sm text-gray-600">Listadas en la Bolsa Mexicana de Valores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gold"></div>

      {/* Reforma 180 Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/manus-storage/reforma-180_947bc4d4.jpg" 
                alt="Reforma 180 - Ciudad de México" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border-r-4 border-[#d4a574]">
                <p className="text-sm font-semibold text-[#1a3a52]">Reforma 180</p>
                <p className="text-xs text-gray-600">Fibra Danhos - CDMX</p>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1a3a52] leading-tight">
                  Invierte en activos de clase mundial
                </h2>
                <p className="text-lg text-gray-600">
                  Las FIBRAs mexicanas administran algunos de los edificios más icónicos de América Latina. Tu inversión está respaldada por activos reales, profesionalmente gestionados.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1a3a52]">Gestión profesional</p>
                    <p className="text-sm text-gray-600">Administradores especializados maximizan rentabilidad</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1a3a52]">Diversificación geográfica</p>
                    <p className="text-sm text-gray-600">Propiedades en principales ciudades de México</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1a3a52]">Regulación y transparencia</p>
                    <p className="text-sm text-gray-600">Listadas en la Bolsa Mexicana de Valores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gold"></div>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#1a3a52] to-[#2c3e50] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            De cero a inversionista patrimonial
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Descarga el ebook completo y aprende todo lo que necesitas saber sobre FIBRAs: ventajas fiscales, métricas financieras, y cómo comenzar a invertir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#d4a574] hover:bg-[#c49563] text-[#1a3a52] text-base px-8 font-semibold">
              Descargar Ebook Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8">
              Únete a @fibrasmx
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-8">
            Acceso inmediato • Sin compromisos • Información educativa
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2438] text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Academia Fibras MX</h4>
              <p className="text-sm">Educación financiera para inversionistas retail en FIBRAs.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Ebook</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Comunidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Descargo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Síguenos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.facebook.com/FibrasMexico" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p className="mb-4">
              <strong>Descargo de Responsabilidad:</strong> Este contenido es educativo. No constituye asesoría financiera. Consulta con profesionales autorizados antes de invertir.
            </p>
            <p>&copy; 2026 Academia Fibras MX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

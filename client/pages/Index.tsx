import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Star, Users, Music, Camera, Mail, Instagram, Twitter, Facebook, ChevronRight, Check, Play } from "lucide-react";

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  const upcomingEvents = [
    {
      id: 1,
      title: "Festival de Música Electrónica 2024",
      date: "15 marzo 2024",
      time: "20:00",
      location: "Centro de Convenciones",
      image: "https://images.pexels.com/photos/9005448/pexels-photo-9005448.jpeg",
      price: "$45.000",
      category: "Música"
    },
    {
      id: 2,
      title: "Conferencia Tech Innovation",
      date: "22 marzo 2024", 
      time: "09:00",
      location: "Hotel Grand Plaza",
      image: "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
      price: "$85.000",
      category: "Tecnología"
    },
    {
      id: 3,
      title: "Noche de Stand Up Comedy",
      date: "30 marzo 2024",
      time: "21:30",
      location: "Teatro Metropolitan",
      image: "https://images.pexels.com/photos/10012375/pexels-photo-10012375.jpeg",
      price: "$25.000",
      category: "Entretenimiento"
    }
  ];

  const featuredEvents = [
    {
      id: 1,
      title: "Mega Concierto Internacional",
      subtitle: "Los artistas más esperados del año",
      date: "05 abril 2024",
      location: "Estadio Nacional",
      image: "https://images.pexels.com/photos/26575467/pexels-photo-26575467.jpeg",
      badge: "Destacado",
      price: "$120.000"
    },
    {
      id: 2,
      title: "Festival Gastronómico",
      subtitle: "Una experiencia culinaria única",
      date: "12 abril 2024",
      location: "Parque Central",
      image: "https://images.pexels.com/photos/12381102/pexels-photo-12381102.jpeg",
      badge: "Nuevo",
      price: "$35.000"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "María González",
      image: "https://images.pexels.com/photos/27603433/pexels-photo-27603433.jpeg",
      text: "¡Increíble experiencia! La organización fue perfecta y el ambiente estuvo espectacular. Definitivamente volveré.",
      event: "Festival de Música 2023"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      image: "https://images.pexels.com/photos/31422830/pexels-photo-31422830.png",
      text: "Excelente plataforma para descubrir eventos. La compra de boletos fue súper fácil y rápida.",
      event: "Conferencia Tech 2023"
    },
    {
      id: 3,
      name: "Ana Martínez",
      image: "https://images.pexels.com/photos/19833710/pexels-photo-19833710.jpeg",
      text: "Los eventos que he asistido han superado mis expectativas. ¡Recomiendo totalmente esta plataforma!",
      event: "Stand Up Night 2023"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg",
    "https://images.pexels.com/photos/2479946/pexels-photo-2479946.jpeg",
    "https://images.pexels.com/photos/12925428/pexels-photo-12925428.jpeg",
    "https://images.pexels.com/photos/29755921/pexels-photo-29755921.jpeg",
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    "https://images.pexels.com/photos/9005448/pexels-photo-9005448.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por suscribirte! Te notificaremos sobre próximos eventos.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ViveEventos</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#eventos" className="text-gray-700 hover:text-purple-600 transition-colors">Eventos</a>
              <a href="#galeria" className="text-gray-700 hover:text-purple-600 transition-colors">Galería</a>
              <a href="#organizadores" className="text-gray-700 hover:text-purple-600 transition-colors">Organizadores</a>
              <a href="#contacto" className="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            ¡Vive la <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">experiencia</span>!
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Descubre los eventos más emocionantes y crea recuerdos inolvidables
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400">
            Ver próximos eventos
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="eventos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
            <p className="text-xl text-gray-600">No te pierdas las experiencias más increíbles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">{event.price}</span>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all">
                      Más información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eventos Destacados</h2>
            <p className="text-xl text-gray-600">Experiencias únicas que no puedes perderte</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group">
                <div className="relative">
                  <img src={event.image} alt={event.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      event.badge === 'Destacado' ? 'bg-yellow-400 text-black' : 'bg-green-500 text-white'
                    }`}>
                      {event.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{event.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{event.price}</div>
                        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors mt-2">
                          Comprar ahora
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Así se viven nuestros eventos</h2>
            <p className="text-xl text-gray-600">Momentos increíbles capturados en cada experiencia</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                onClick={() => setCurrentGalleryImage(index)}
              >
                <img 
                  src={image} 
                  alt={`Evento ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Suscríbete para no perderte ningún evento</h2>
          <p className="text-xl text-purple-100 mb-8">Recibe notificaciones exclusivas sobre próximos eventos y ofertas especiales</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              required
            />
            <button 
              type="submit"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizadores" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Organiza tu evento con nosotros</h2>
              <p className="text-xl text-gray-600 mb-8">
                Te ofrecemos la plataforma más completa para gestionar tu evento desde la creación hasta 
                la venta de boletos. Con herramientas profesionales y soporte especializado.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Gestión completa de boletos</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Promoción en nuestras redes</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Soporte técnico 24/7</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Reportes y analytics en tiempo real</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                Cotiza tu evento
              </button>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Organizadores" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Lo que dicen nuestros asistentes</h2>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].event}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Logistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ubicación y logística</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Cómo llegar?</h3>
                  <p className="text-gray-600">
                    Nuestros eventos se realizan en las mejores ubicaciones de la ciudad, 
                    con fácil acceso en transporte público y privado.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Estacionamiento</h3>
                  <p className="text-gray-600">
                    Contamos con amplias zonas de estacionamiento gratuito para todos nuestros asistentes.
                    También disponemos de valet parking en eventos especiales.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Accesibilidad</h3>
                  <p className="text-gray-600">
                    Todos nuestros venues cuentan con acceso para personas con movilidad reducida 
                    y facilidades especiales.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Mapa interactivo</p>
                <p className="text-sm">Ubicaciones de eventos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Feed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Síguenos en redes sociales</h2>
            <p className="text-xl text-gray-600">#ViveElEvento - Comparte tu experiencia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={`/api/placeholder/400/300`} 
                  alt={`Post ${post}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Instagram className="w-5 h-5 text-pink-500 mr-2" />
                    <span className="font-semibold text-gray-900">@viveeventos</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    ¡Qué noche tan increíble en el Festival de Música! 
                    Gracias a todos los que nos acompañaron. #ViveElEvento
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-4">❤️ 234</span>
                    <span>💬 18</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ViveEventos</span>
              </div>
              <p className="text-gray-400">
                La plataforma líder en eventos que conecta experiencias únicas con personas apasionadas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Eventos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Próximos eventos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Eventos pasados</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Categorías</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ubicaciones</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Organizadores</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Crear evento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 ViveEventos. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

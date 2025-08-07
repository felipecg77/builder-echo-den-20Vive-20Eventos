import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Star, Users, Music, Camera, Mail, Instagram, Twitter, Facebook, ChevronRight, Check, Play, ChevronDown, Globe } from "lucide-react";

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("bogota");
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);

  const regions = [
    { id: "bogota", name: "Bogotá", country: "Colombia" },
    { id: "medellin", name: "Medellín", country: "Colombia" },
    { id: "cali", name: "Cali", country: "Colombia" },
    { id: "cartagena", name: "Cartagena", country: "Colombia" },
    { id: "madrid", name: "Madrid", country: "España" },
    { id: "barcelona", name: "Barcelona", country: "España" },
    { id: "mexico", name: "Ciudad de México", country: "México" },
    { id: "lima", name: "Lima", country: "Perú" }
  ];

  const regionalContent = {
    bogota: {
      currency: "$",
      events: [
        {
          id: 1,
          title: "Festival de Música Electrónica Bogotá",
          date: "15 marzo 2024",
          time: "20:00",
          location: "Centro de Convenciones Gonzalo Jiménez de Quesada",
          image: "https://images.pexels.com/photos/9005448/pexels-photo-9005448.jpeg",
          price: "45.000",
          category: "Música"
        },
        {
          id: 2,
          title: "Conferencia Tech Innovation",
          date: "22 marzo 2024", 
          time: "09:00",
          location: "Hotel Grand Plaza Chapinero",
          image: "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
          price: "85.000",
          category: "Tecnología"
        },
        {
          id: 3,
          title: "Noche de Stand Up Comedy",
          date: "30 marzo 2024",
          time: "21:30",
          location: "Teatro Jorge Eliécer Gaitán",
          image: "https://images.pexels.com/photos/10012375/pexels-photo-10012375.jpeg",
          price: "25.000",
          category: "Entretenimiento"
        }
      ],
      featured: [
        {
          id: 1,
          title: "Rock al Parque 2024",
          subtitle: "El festival de rock más grande de Colombia",
          date: "05 abril 2024",
          location: "Parque Simón Bolívar",
          price: "Gratis"
        },
        {
          id: 2,
          title: "Festival Gastronómico Bogotá",
          subtitle: "Sabores únicos de la capital",
          date: "12 abril 2024",
          location: "Parque de la 93",
          price: "35.000"
        }
      ]
    },
    medellin: {
      currency: "$",
      events: [
        {
          id: 1,
          title: "Festival de las Flores Musical",
          date: "20 marzo 2024",
          time: "19:00",
          location: "Teatro Metropolitano",
          image: "https://images.pexels.com/photos/9005448/pexels-photo-9005448.jpeg",
          price: "50.000",
          category: "Música"
        },
        {
          id: 2,
          title: "Medellín Innovation Week",
          date: "25 marzo 2024", 
          time: "08:30",
          location: "Plaza Mayor Medellín",
          image: "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
          price: "75.000",
          category: "Tecnología"
        },
        {
          id: 3,
          title: "Humor Paisa Night",
          date: "02 abril 2024",
          time: "21:00",
          location: "Teatro Pablo Tobón Uribe",
          image: "https://images.pexels.com/photos/10012375/pexels-photo-10012375.jpeg",
          price: "30.000",
          category: "Entretenimiento"
        }
      ],
      featured: [
        {
          id: 1,
          title: "Festival de las Flores",
          subtitle: "La tradición más bella de Medellín",
          date: "08 agosto 2024",
          location: "Estadio Atanasio Girardot",
          price: "80.000"
        },
        {
          id: 2,
          title: "Feria de Comidas Antioqueñas",
          subtitle: "Tradición culinaria paisa",
          date: "15 abril 2024",
          location: "Parque de los Deseos",
          price: "25.000"
        }
      ]
    },
    madrid: {
      currency: "€",
      events: [
        {
          id: 1,
          title: "Madrid Electronic Festival",
          date: "18 marzo 2024",
          time: "22:00",
          location: "WiZink Center",
          image: "https://images.pexels.com/photos/9005448/pexels-photo-9005448.jpeg",
          price: "65",
          category: "Música"
        },
        {
          id: 2,
          title: "South Summit Madrid",
          date: "28 marzo 2024", 
          time: "09:00",
          location: "La Nave Madrid",
          image: "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
          price: "120",
          category: "Tecnología"
        },
        {
          id: 3,
          title: "Comedy Club Madrid",
          date: "05 abril 2024",
          time: "21:30",
          location: "Teatro Kapital",
          image: "https://images.pexels.com/photos/10012375/pexels-photo-10012375.jpeg",
          price: "35",
          category: "Entretenimiento"
        }
      ],
      featured: [
        {
          id: 1,
          title: "Mad Cool Festival",
          subtitle: "Los mejores artistas internacionales",
          date: "12 julio 2024",
          location: "Valdebebas",
          price: "189"
        },
        {
          id: 2,
          title: "Gastrofestival Madrid",
          subtitle: "La capital gastronómica de España",
          date: "20 abril 2024",
          location: "Mercado de San Miguel",
          price: "45"
        }
      ]
    }
  };

  const currentContent = regionalContent[selectedRegion] || regionalContent.bogota;

  const testimonials = [
    {
      id: 1,
      name: "María González",
      image: "https://images.pexels.com/photos/27603433/pexels-photo-27603433.jpeg",
      text: "¡Increíble experiencia! La organización fue perfecta y el ambiente estuvo espectacular. Definitivamente volveré.",
      event: "Festival de Música 2023",
      region: "Bogotá"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      image: "https://images.pexels.com/photos/31422830/pexels-photo-31422830.png", 
      text: "Excelente plataforma para descubrir eventos. La compra de boletos fue súper fácil y rápida.",
      event: "Conferencia Tech 2023",
      region: "Medellín"
    },
    {
      id: 3,
      name: "Ana Martínez",
      image: "https://images.pexels.com/photos/19833710/pexels-photo-19833710.jpeg",
      text: "Los eventos que he asistido han superado mis expectativas. ¡Recomiendo totalmente esta plataforma!",
      event: "Stand Up Night 2023",
      region: "Madrid"
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

  const currentRegion = regions.find(r => r.id === selectedRegion);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ViveEventos</span>
            </div>
            
            {/* Region Selector */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={() => setShowRegionDropdown(!showRegionDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors bg-gray-50 rounded-full border border-gray-200"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">{currentRegion?.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showRegionDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                    {regions.map((region) => (
                      <button
                        key={region.id}
                        onClick={() => {
                          setSelectedRegion(region.id);
                          setShowRegionDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                          selectedRegion === region.id ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                        }`}
                      >
                        <div className="font-medium">{region.name}</div>
                        <div className="text-sm text-gray-500">{region.country}</div>
                      </button>
                    ))}
                  </div>
                )}
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
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up delay-200">
            Descubre los eventos más emocionantes en {currentRegion?.name}
          </p>
          <p className="text-lg mb-8 opacity-80 animate-fade-in-up delay-300">
            Crea recuerdos inolvidables en tu ciudad
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400">
            Ver próximos eventos en {currentRegion?.name}
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1"></div>

      {/* Upcoming Events Section */}
      <section id="eventos" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              {currentRegion?.name}, {currentRegion?.country}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
            <p className="text-xl text-gray-600">No te pierdas las experiencias más increíbles en tu ciudad</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
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
                    <span className="text-2xl font-bold text-purple-600">
                      {currentContent.currency}{event.price}
                    </span>
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

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 h-1"></div>

      {/* Featured Events Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 mr-2" />
              Destacados en {currentRegion?.name}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eventos Destacados</h2>
            <p className="text-xl text-gray-600">Experiencias únicas que no puedes perderte</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {currentContent.featured.map((event, index) => (
              <div key={event.id} className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group border border-gray-100">
                <div className="relative">
                  <img 
                    src={index === 0 ? "https://images.pexels.com/photos/26575467/pexels-photo-26575467.jpeg" : "https://images.pexels.com/photos/12381102/pexels-photo-12381102.jpeg"} 
                    alt={event.title} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      index === 0 ? 'bg-yellow-400 text-black' : 'bg-green-500 text-white'
                    }`}>
                      {index === 0 ? 'Destacado' : 'Nuevo'}
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
                        <div className="text-2xl font-bold">
                          {currentContent.currency}{event.price}
                        </div>
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

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1"></div>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 text-gray-700 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              <Camera className="w-4 h-4 mr-2" />
              Galería de Momentos
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Así se viven nuestros eventos</h2>
            <p className="text-xl text-gray-600">Momentos increíbles capturados en cada experiencia</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer border-2 border-white shadow-lg"
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

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 h-1"></div>

      {/* Subscription Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
            <Mail className="w-4 h-4 mr-2" />
            Mantente informado
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Suscríbete para no perderte ningún evento</h2>
          <p className="text-xl text-purple-100 mb-8">Recibe notificaciones exclusivas sobre próximos eventos en {currentRegion?.name} y ofertas especiales</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 border-2 border-white/20"
              required
            />
            <button 
              type="submit"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1"></div>

      {/* Organizers Section */}
      <section id="organizadores" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4 mr-2" />
                Para Organizadores
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Organiza tu evento con nosotros</h2>
              <p className="text-xl text-gray-600 mb-8">
                Te ofrecemos la plataforma más completa para gestionar tu evento en {currentRegion?.name} desde la creación hasta 
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
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
                Cotiza tu evento
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8761304/pexels-photo-8761304.jpeg" 
                alt="Organizadores" 
                className="rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 h-1"></div>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Testimonios
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Lo que dicen nuestros asistentes</h2>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
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
                  className="w-16 h-16 rounded-full mr-4 border-2 border-purple-200"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].event}</div>
                  <div className="text-sm text-purple-600">{testimonials[currentTestimonial].region}</div>
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

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1"></div>

      {/* Location & Logistics Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Información de {currentRegion?.name}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ubicación y logística</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Cómo llegar?</h3>
                <p className="text-gray-600">
                  Nuestros eventos en {currentRegion?.name} se realizan en las mejores ubicaciones de la ciudad, 
                  con fácil acceso en transporte público y privado.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Estacionamiento</h3>
                <p className="text-gray-600">
                  Contamos con amplias zonas de estacionamiento gratuito para todos nuestros asistentes.
                  También disponemos de valet parking en eventos especiales.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accesibilidad</h3>
                <p className="text-gray-600">
                  Todos nuestros venues cuentan con acceso para personas con movilidad reducida 
                  y facilidades especiales.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl h-96 flex items-center justify-center border-2 border-white shadow-lg">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <p className="text-lg font-semibold text-gray-700">Mapa interactivo</p>
                <p className="text-sm">Ubicaciones de eventos en {currentRegion?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 h-1"></div>

      {/* Social Media Feed Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
              <Instagram className="w-4 h-4 mr-2" />
              Redes Sociales
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Síguenos en redes sociales</h2>
            <p className="text-xl text-gray-600">#ViveElEvento - Comparte tu experiencia desde {currentRegion?.name}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <img 
                  src={post === 1 ? "https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg" : post === 2 ? "https://images.pexels.com/photos/2479946/pexels-photo-2479946.jpeg" : "https://images.pexels.com/photos/12925428/pexels-photo-12925428.jpeg"} 
                  alt={`Post ${post}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Instagram className="w-5 h-5 text-pink-500 mr-2" />
                    <span className="font-semibold text-gray-900">@viveeventos</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    ¡Qué noche tan increíble en {currentRegion?.name}! 
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

      {/* Final Section Divider */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2"></div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-600 to-pink-600"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ViveEventos</span>
              </div>
              <p className="text-gray-400 mb-4">
                La plataforma líder en eventos que conecta experiencias únicas con personas apasionadas.
              </p>
              <div className="text-sm text-gray-500">
                Actualmente en: <span className="text-purple-400 font-semibold">{currentRegion?.name}</span>
              </div>
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

      {/* Click outside to close dropdown */}
      {showRegionDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowRegionDropdown(false)}
        />
      )}
    </div>
  );
}

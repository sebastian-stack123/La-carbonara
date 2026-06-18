import { motion } from 'motion/react';

export default function Menu() {
  const menuItems = [
    {
      title: "Risotto Funghi",
      price: "$15.00",
      description: "Setas, portobellos, champiñón y hongos shiitake.",
      image: "https://images.unsplash.com/photo-1510693240723-66d4f9bfd237?q=80&w=2671&auto=format&fit=crop"
    },
    {
      title: "Risotto Frutti di Mare",
      price: "$17.00",
      description: "Calamar, camarón, mejillón y pulpo. Contiene mariscos.",
      image: "https://images.unsplash.com/photo-1627042633145-b780d842bacb?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Risotto Frank Sinatra",
      price: "$15.99",
      description: "Lomo fino, camarón, salsa Napoli y Mamamia. Contiene mariscos.",
      image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2680&auto=format&fit=crop"
    },
    {
      title: "Pizza Prosciutto Crudo",
      price: "$21.99",
      description: "Mozzarella y auténtico prosciutto crudo importado.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2681&auto=format&fit=crop"
    },
    {
      title: "Pizza Hawaiana",
      price: "$16.50",
      description: "Salsa roja, mozzarella, jamón, tocino y piña.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-carbonara-gold font-cursive text-5xl mb-2">Il nostro</h4>
          <h2 className="font-sans font-light tracking-widest uppercase text-2xl md:text-3xl text-carbonara-ivory mb-4">Menú Destacado</h2>
          <div className="w-24 h-px bg-carbonara-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="glass rounded-none overflow-hidden group hover:shadow-2xl hover:shadow-carbonara-gold/10 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="p-6 menu-card mx-4 -mt-6 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-sans font-bold text-lg text-carbonara-ivory text-left">{item.title}</h3>
                  <span className="font-sans text-carbonara-gold">{item.price}</span>
                </div>
                <p className="text-carbonara-ivory opacity-50 text-xs text-left leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="p-4 pt-0"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#" className="pill text-xs uppercase tracking-widest text-carbonara-ivory hover:bg-carbonara-gold hover:text-black inline-block">
            Ver Menú Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

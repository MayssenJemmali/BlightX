import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';

interface CropsProps {
  content: Content['crops'];
}

const Crops: FC<CropsProps> = ({ content }) => {

  // Mapping based on expected strings.
  // Using high quality unspash image for Vine since local file is not in explorer
  const images = [
    "https://images.unsplash.com/photo-1631160299919-6a175aa6d189?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Pear
    "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Apple
    "https://images.unsplash.com/photo-1698942316196-f095ca7181c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // سفرجل
  ];

  return (
    <section id="crops" className="py-24 bg-white dark:bg-mildexia-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-16 dark:text-white">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((crop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/5] cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${images[index] || images[0]})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="w-12 h-1 bg-mildexia-primary mb-4 rounded-full origin-left group-hover:w-20 transition-all duration-300" />
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {crop}
                </h3>
                <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  BlightX Protection
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crops;
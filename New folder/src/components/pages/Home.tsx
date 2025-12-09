import { motion } from 'motion/react';
import { Download, BookOpen, Zap, Shield, BookText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TeamCarousel } from '../TeamCarousel';

export function Home() {
  const features = [
    {
      title: 'Fast',
      description: 'Optimized for performance on Windows x64.',
      icon: Zap,
    },
    {
      title: 'Secure',
      description: 'We use zero-trust policy.',
      icon: Shield,
    },
    {
      title: 'Docs & Tutorials',
      description: 'Step-by-step setup and examples in the docs section.',
      icon: BookText,
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00cf66]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#28e19a]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#00cf66]/10 border border-[#00cf66]/20"
          >
            <Sparkles className="w-4 h-4 text-[#00cf66]" />
            <span className="text-[#00cf66]">Next-Gen Security</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl mb-4 tracking-wide"
          >
            FireBarrier
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#98b5b8] text-xl mb-8"
          >
            Your safety is our commitment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/download">
              <motion.button
                className="px-8 py-4 bg-[#00cf66] text-[#071428] rounded-full flex items-center gap-2 shadow-lg shadow-[#00cf66]/30 font-semibold"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 207, 102, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Download className="w-5 h-5" />
                Download for Windows (x64)
              </motion.button>
            </Link>

            <motion.a
              href="#tutorial"
              className="px-8 py-4 border-2 border-[#00cf66] text-[#00cf66] bg-transparent rounded-full flex items-center gap-2 font-semibold"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(0, 207, 102, 0.05)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <BookOpen className="w-5 h-5" />
              Read the Tutorial
            </motion.a>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[980px] mx-auto"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={0.8 + index * 0.15}
            />
          ))}
        </motion.div>
      </div>

      {/* Team Carousel Section */}
      <TeamCarousel />
    </main>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

function FeatureCard({ title, description, icon: Icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="relative group"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00cf66]/20 to-[#28e19a]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative bg-gradient-to-br from-[#0b2a33]/80 to-[#062a32]/80 backdrop-blur-sm border border-[#00cf66]/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#00cf66]/40 flex flex-col justify-center min-h-[140px]">
        {/* Icon */}
        <motion.div
          className="mb-6 inline-flex p-4 bg-gradient-to-br from-[#00cf66]/20 to-[#28e19a]/20 rounded-xl w-fit"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-[#00cf66]" />
        </motion.div>

        {/* Title */}
        <h3 className="text-white mb-4">{title}</h3>

        {/* Description */}
        <p className="text-[#98b5b8]">{description}</p>

        {/* Decorative corner */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-[#00cf66] rounded-full opacity-0 group-hover:opacity-100"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
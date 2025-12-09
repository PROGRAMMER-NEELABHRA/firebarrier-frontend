import { motion } from 'motion/react';
import { FeatureCard } from './FeatureCard';
import { Zap, Shield, BookText } from 'lucide-react';

export function Features() {
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
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={0.9 + index * 0.15}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

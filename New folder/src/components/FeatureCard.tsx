import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

export function FeatureCard({ title, description, icon: Icon, delay }: FeatureCardProps) {
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
        className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-teal-500/40">
        {/* Icon */}
        <motion.div
          className="mb-6 inline-flex p-4 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-xl"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-emerald-400" />
        </motion.div>

        {/* Title */}
        <h3 className="text-white mb-4">{title}</h3>

        {/* Description */}
        <p className="text-teal-100/80">{description}</p>

        {/* Decorative corner */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

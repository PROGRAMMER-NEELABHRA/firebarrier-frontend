import { motion } from 'motion/react';
import { Download, BookOpen, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"
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
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">Next-Gen Security</span>
          </motion.div>

          <h1 className="text-white mb-6">
            FireBarrier
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-teal-100 text-xl mb-12 max-w-2xl mx-auto"
        >
          Your safety is our commitment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            className="px-8 py-4 bg-emerald-400 text-slate-900 rounded-full flex items-center gap-2 shadow-lg shadow-emerald-500/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(52, 211, 153, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Download className="w-5 h-5" />
            Download for Windows x64
          </motion.button>

          <motion.button
            className="px-8 py-4 bg-emerald-400 text-slate-900 rounded-full flex items-center gap-2 shadow-lg shadow-emerald-500/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(52, 211, 153, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <BookOpen className="w-5 h-5" />
            Read the Tutorial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

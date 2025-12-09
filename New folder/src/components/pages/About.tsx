import { motion } from 'motion/react';
import { Target, Eye, BookOpen, CheckCircle } from 'lucide-react';

export function About() {
  const features = [
    'AI-driven protection for zero-day threats.',
    'Secure encrypted traffic with intelligent inspection.',
    'Zero Trust security built into every layer.',
    'Instant automated response to cyberattacks.',
    'Continuous learning through federated intelligence.',
    'High-speed performance with ultra-low latency.',
    'Seamless deployment across any infrastructure.',
  ];

  return (
    <main className="max-w-[900px] mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl mb-4">About Our App</h1>
        <p className="text-[#98b5b8] text-lg leading-relaxed mb-10">
          We are creating an AI-Driven Next-Generation Firewall for Dynamic Threat Detection and Zero Trust Implementation which consists of Advanced Traffic Analysis, Zero Trust Integration, Federated AI for Threat Intelligence, Automated Incident Response, Unified Visibility and Analytics.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10 bg-[#0b2a33] p-6 rounded-2xl border border-[#00cf66]/10 hover:border-[#00cf66]/30 transition-all duration-300"
      >
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-3 bg-[#00cf66]/10 rounded-xl"
          >
            <Target className="w-6 h-6 text-[#00cf66]" />
          </motion.div>
          <div>
            <h2 className="text-2xl mb-3">Our Mission</h2>
            <p className="text-[#98b5b8] leading-relaxed">
              To deliver an intelligent, adaptive AI-powered security platform that protects modern digital environments with real-time threat detection, seamless Zero Trust enforcement, and uncompromised performance.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-10 bg-[#0b2a33] p-6 rounded-2xl border border-[#00cf66]/10 hover:border-[#00cf66]/30 transition-all duration-300"
      >
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-3 bg-[#00cf66]/10 rounded-xl"
          >
            <Eye className="w-6 h-6 text-[#00cf66]" />
          </motion.div>
          <div>
            <h2 className="text-2xl mb-3">Our Vision</h2>
            <p className="text-[#98b5b8] leading-relaxed">
              To build a unified, context-aware security ecosystem that leverages advanced AI, behavioural analytics, and Zero Trust principles to provide proactive, intelligent defence across cloud, on-premise, and edge environments.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-10 bg-[#0b2a33] p-6 rounded-2xl border border-[#00cf66]/10 hover:border-[#00cf66]/30 transition-all duration-300"
      >
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-3 bg-[#00cf66]/10 rounded-xl"
          >
            <BookOpen className="w-6 h-6 text-[#00cf66]" />
          </motion.div>
          <div>
            <h2 className="text-2xl mb-3">Our Story</h2>
            <p className="text-[#98b5b8] leading-relaxed mb-4">
              YourApp started as a small idea between a team of passionate developers who wanted to solve a simple problem: making everyday digital tasks more efficient. Over time, this idea matured into a full-fledged application backed by research, design, innovation, and continuous improvement.
            </p>
            <p className="text-[#98b5b8] leading-relaxed">
              Today, we are committed to delivering updates, improving features, and ensuring our users get the best experience possible.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-br from-[#0b2a33] to-[#062a32] p-6 rounded-2xl border border-[#00cf66]/20"
      >
        <h2 className="text-2xl mb-6">Why Choose Us?</h2>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-3 text-[#e6fbff] leading-relaxed"
              whileHover={{ x: 10 }}
            >
              <CheckCircle className="w-5 h-5 text-[#00cf66] flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}

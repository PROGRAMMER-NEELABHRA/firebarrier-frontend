import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import janviAvatar from '../assets/avatars/janvi.jpg';
import neelabhraAvatar from '../assets/avatars/neelabhra.jpg';
import snehasisAvatar from '../assets/avatars/snehasis.jpg';
import subhadeepAvatar from '../assets/avatars/subhadeep.jpg';
import swapnilAvatar from '../assets/avatars/swapnil.jpg';
import zafiravatar from '../assets/avatars/zafir.jpg';


interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  isCard?: boolean;
  cardText?: string;
}

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const teamMembers: TeamMember[] = [
  {
    name: 'Janvi Sinha',
    role: 'Team Leader · Main Speaker',
    avatar: janviAvatar,
  },
  {
    name: 'MD Zafir Hasan',
    role: 'UI/UX & PPT Maker',
    avatar: zafiravatar,
  },
  {
    name: 'FireBarrier Team',
    role: 'Collaboration & Excellence',
    isCard: true,
    cardText: 'Every team member brings unique expertise...',
    avatar: '',
  },
  {
    name: 'Snehasis Das',
    role: 'C++ Backend Developer',
    avatar: snehasisAvatar,
  },
  {
    name: 'Subhodeep Mandal',
    role: 'Server Manager',
    avatar: subhadeepAvatar,
  },
  {
    name: 'Neelabhra Das',
    role: 'Website Developer',
    avatar: neelabhraAvatar,
  },
  {
    name: 'Swapnil Shaw',
    role: 'Flutter Developer',
    avatar: swapnilAvatar,
  },
];


  const cardsToShow = 4;
  const maxIndex = Math.max(0, teamMembers.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Glow Effects */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Partnered with most of the
          </h2>
          <p className="text-3xl md:text-4xl text-purple-400 italic">
            top people at each industry
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-full flex items-center justify-center transition-all border border-white/10"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-full flex items-center justify-center transition-all border border-white/10"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-16">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / cardsToShow)}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * 24 / cardsToShow}px)` }}
                >
                  {member.isCard ? (
                    <InfoCard member={member} index={index} />
                  ) : (
                    <MemberCard member={member} index={index} />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#00cf66] w-8' 
                    : 'bg-white/20 w-1.5 hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  member: TeamMember;
  index: number;
}

function MemberCard({ member, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="relative group"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative bg-gradient-to-b from-[#1a1a3e] to-[#0f0f2e] rounded-3xl overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-all duration-300">
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <motion.img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover object-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f2e] via-transparent to-transparent"></div>
        </div>

        {/* Info */}
        <div className="p-6 text-center relative z-10">
          <h3 className="text-xl mb-2">{member.name}</h3>
          <p className="text-sm text-purple-300/80">{member.role}</p>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </div>
    </motion.div>
  );
}

function InfoCard({ member, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="relative group h-full"
    >
      {/* Animated Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-3xl blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 h-full flex flex-col justify-center min-h-[448px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl mb-6 text-center">{member.name}</h3>
          <p className="text-sm text-purple-200/90 leading-relaxed text-center">
            {member.cardText}
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-6 right-6 w-3 h-3 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>
    </motion.div>
  );
}

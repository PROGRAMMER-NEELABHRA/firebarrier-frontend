import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import janviAvatar from '../../assets/avatars/janvi.jpg';
import neelabhraAvatar from '../../assets/avatars/neelabhra.jpg';
import snehasisAvatar from '../../assets/avatars/snehasis.jpg';
import subhadeepAvatar from '../../assets/avatars/subhadeep.jpg';
import swapnilAvatar from '../../assets/avatars/swapnil.jpg';
import zafiravatar from '../../assets/avatars/zafir.jpg';



interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
  avatar: string;
}

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Janvi Sinha',
      role: 'Team Leader · Main Speaker',
      linkedin: 'https://www.linkedin.com/in/janvi-sinha-2a8106292?',
      avatar: janviAvatar,
    },
    {
      name: 'MD Zafir Hasan',
      role: 'UI/UX & PPT Maker',
      linkedin: 'https://www.linkedin.com/in/mdzafirhasan?',
      avatar:zafiravatar,
    },
    {
      name: 'Snehasis Das',
      role: 'C++ Backend Developer',
      linkedin: 'https://www.linkedin.com/in/snehasis-das-1790292aa?',
      avatar: snehasisAvatar,
    },
    {
      name: 'Subhodeep Mandal',
      role: 'Server Manager',
      linkedin: 'https://www.linkedin.com/in/subhadeep-mandal-a0a7b7315?',
      avatar: subhadeepAvatar,
    },
    {
      name: 'Neelabhra Das',
      role: 'Website Developer',
      linkedin: 'https://www.linkedin.com/in/neelabhra-das-337542286?',
      avatar: neelabhraAvatar,
    },
    {
      name: 'Swapnil Shaw',
      role: 'Flutter Developer',
      linkedin: 'https://www.linkedin.com/in/swapnil-shaw?',
      avatar: swapnilAvatar,
    },
  ];

  return (
    <main className="max-w-[1100px] mx-auto px-5 py-10 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl mb-2">Meet the FireBarrier Team</h1>
        <p className="text-[#98b5b8]">The people behind the project.</p>
      </motion.div>

      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} delay={0.1 + index * 0.1} />
        ))}
      </div>
    </main>
  );
}

interface TeamCardProps {
  member: TeamMember;
  delay: number;
}

function TeamCard({ member, delay }: TeamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -6,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="bg-[#0b2a33] rounded-2xl p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 border border-[#00cf66]/10 hover:border-[#00cf66]/30"
    >
      <div className="flex items-center gap-5 justify-between flex-wrap">
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <img
            src={member.avatar}
            alt={member.name}
            className="h-24 w-24 rounded-full object-cover"
            style={{ width: '72px', height: '72px' }}
          />
        </motion.div>

        {/* Info */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-xl mb-1.5">{member.name}</h2>
          <p className="text-[#98b5b8]">{member.role}</p>
        </div>

        {/* LinkedIn Button */}
        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-[#00cf66] text-[#071428] rounded-full font-semibold inline-flex items-center gap-2 hover:bg-[#28e19a] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}

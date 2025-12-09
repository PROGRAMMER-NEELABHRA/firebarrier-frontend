import { motion } from 'motion/react';
import { Flame } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';


export function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Download', path: '/download' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-[#062a32] border-b border-white/5 backdrop-blur-lg"
    >
      <div className="max-w-[1120px] mx-auto px-10 py-4">
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer pl-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              <Flame className="w-9 h-9 text-[#00cf66] fill-[#00cf66]" />
            </motion.div>
            <span className="text-[#00cf66] font-bold text-xl">FireBarrier</span>
          </motion.div>

          {/* Navigation */}
          <nav className="flex items-center gap-4 flex-1 justify-center">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `relative px-6 py-2 rounded-full transition-all font-semibold ${
                    isActive 
                      ? 'text-[#071428] bg-[#00cf66] shadow-lg shadow-[#00cf66]/20' 
                      : 'text-[#98b5b8] hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: isActive ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block"
                  >
                    {item.name}
                  </motion.span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Spacer for layout balance */}
          <div className="w-[160px]"></div>
        </div>
      </div>
    </motion.header>
  );
}

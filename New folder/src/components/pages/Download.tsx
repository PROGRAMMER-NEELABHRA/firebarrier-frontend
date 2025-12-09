import { motion } from 'motion/react';
import { Download as DownloadIcon, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { useState } from 'react';

export function Download() {
  const [copied, setCopied] = useState(false);
  const checksumCommand = 'Get-FileHash .\\app-x64.exe -Algorithm SHA256';

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(checksumCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="max-w-[1100px] mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl mb-4">Download</h1>
        <p className="text-[#98b5b8] mb-8">
          Choose the installer for your platform. For now we provide a Windows x64 build.
        </p>
      </motion.div>

      {/* Status Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 bg-[#28e19a]/10 border border-[#28e19a]/30 text-[#28e19a] p-4 rounded-xl flex items-center gap-3"
      >
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <span className="font-semibold">CLICK THE BUTTON BELOW TO DOWNLOAD.</span>
      </motion.div>

      {/* Download Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-[#0b2a33] to-[#062a32] rounded-2xl p-8 border border-[#00cf66]/20 shadow-xl mb-10"
      >
        <div className="flex items-start justify-between flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-2xl mb-3">Windows (x64)</h3>
            <p className="text-[#98b5b8] mb-6">
              Version: <strong className="text-[#00cf66]">v0.1.0</strong>
            </p>

            <motion.a
              href="#download"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00cf66] text-[#071428] rounded-full font-semibold shadow-lg shadow-[#00cf66]/30"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 207, 102, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <DownloadIcon className="w-5 h-5" />
              Download app-x64.exe
            </motion.a>

            <div className="mt-6 p-4 bg-[#00cf66]/5 rounded-xl border border-[#00cf66]/10">
              <p className="text-sm">
                <strong className="text-[#00cf66]">Minimum Requirement:</strong>
                <span className="text-[#98b5b8] ml-2">Windows 10 / Windows 11</span>
              </p>
            </div>
          </div>

          {/* Decorative Element */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="hidden md:block p-8 bg-[#00cf66]/5 rounded-full"
          >
            <DownloadIcon className="w-16 h-16 text-[#00cf66]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Checksum Verification Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#0b2a33] rounded-2xl p-6 border border-[#00cf66]/10"
      >
        <h2 className="text-2xl mb-4">Verify checksum (optional)</h2>
        <p className="text-[#98b5b8] mb-4">Windows PowerShell:</p>
        
        <div className="relative">
          <pre className="bg-[#061e26] p-4 rounded-xl overflow-x-auto border border-[#00cf66]/20">
            <code className="text-[#00cf66] text-sm">{checksumCommand}</code>
          </pre>
          
          <motion.button
            onClick={handleCopyChecksum}
            className="absolute top-2 right-2 p-2 bg-[#00cf66]/10 hover:bg-[#00cf66]/20 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Copy to clipboard"
          >
            {copied ? (
              <CheckCircle className="w-5 h-5 text-[#00cf66]" />
            ) : (
              <Copy className="w-5 h-5 text-[#00cf66]" />
            )}
          </motion.button>
        </div>

        {copied && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[#00cf66] text-sm mt-2"
          >
            Copied to clipboard!
          </motion.p>
        )}
      </motion.section>

      {/* Info Alert */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 bg-blue-500/10 border border-blue-500/30 text-blue-300 p-4 rounded-xl flex items-start gap-3"
      >
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold mb-1">Important Note</p>
          <p className="text-sm text-blue-200/80">
            This is a demo application. In production, ensure the download file exists at the specified path and implement proper file verification and security measures.
          </p>
        </div>
      </motion.div>
    </main>
  );
}

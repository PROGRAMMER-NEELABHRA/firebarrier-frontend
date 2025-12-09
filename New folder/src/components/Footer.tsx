export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062a32] border-t border-white/5 mt-10 py-4 text-center text-[#98b5b8]">
      <div className="max-w-[1100px] mx-auto px-6">
        <p>© {currentYear} FireBarrier</p>
      </div>
    </footer>
  );
}

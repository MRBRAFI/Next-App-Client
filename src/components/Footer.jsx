export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">My App</h2>
          <p className="text-sm text-gray-400 mt-1">
            Building modern web experiences.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
          <a href="#" className="hover:text-white transition">
            Support
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-white transition">
            🐦
          </a>
          <a href="#" className="hover:text-white transition">
            📘
          </a>
          <a href="#" className="hover:text-white transition">
            📸
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} My App — All Rights Reserved.
      </div>
    </footer>
  );
}

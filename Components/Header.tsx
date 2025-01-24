import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Link href="/" aria-label="Go to Homepage">
          <Image
            src="/assets/Nike-Logo.png"
            alt="Nike Logo"
            width={100}
            height={80}
            className="object-contain"
            priority // Ensures logo loads quickly
          />
        </Link>
      </div>

      {/* Right Side - Links */}
      <nav
        className="flex items-center space-x-3 text-sm text-gray-700"
        aria-label="Header Navigation"
      >
        <Link href="/" className="hover:underline" aria-label="Find a Store">
          Find a Store
        </Link>
        <span>|</span>
        <Link href="/contact" className="hover:underline" aria-label="Help Page">
          Help
        </Link>
        <span>|</span>
        <Link href="/joinUs" className="hover:underline" aria-label="Join Us">
          Join Us
        </Link>
        <span>|</span>
        <Link href="/login" className="hover:underline" aria-label="Sign In">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Header;

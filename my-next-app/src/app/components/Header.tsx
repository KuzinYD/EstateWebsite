import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-4 flex items-center justify-between bg-transparent z-20">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold text-white">Estate</span>
      </div>
      <nav className="flex gap-4">
        <a href="#home" className="hover:underline text-white">
          Home
        </a>
        <a href="#about" className="hover:underline text-white">
          About
        </a>
        <a href="#contact" className="hover:underline text-white">
          Contact
        </a>
      </nav>
    </header>
  );
}

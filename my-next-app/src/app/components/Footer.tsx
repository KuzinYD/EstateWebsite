export default function Footer() {
  return (
    <footer className="w-full p-4 bg-gray-900 text-gray-300 flex flex-col items-center">
      <div className="flex gap-4 mb-2">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Listings
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Insider club
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Services
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          About us
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Tools
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Estate. All rights reserved.
      </p>
    </footer>
  );
}

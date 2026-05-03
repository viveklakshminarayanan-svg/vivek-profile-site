import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight text-gray-900">
          Vivek Lakshminarayanan
        </Link>

        <nav className="flex gap-6 text-sm text-gray-700">
          <Link href="/about" className="hover:text-gray-900">About</Link>
          <Link href="/experience" className="hover:text-gray-900">Experience</Link>
          <Link href="/cv" className="hover:text-gray-900">CV</Link>
          <Link href="/blog" className="hover:text-gray-900">Blog</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-600 flex justify-between">
        <p>© {new Date().getFullYear()} Vivek Lakshminarayanan</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
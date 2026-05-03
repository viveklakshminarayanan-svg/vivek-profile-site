import Container from "@/components/Container";

export default function CVPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">CV</h1>

      <p className="mt-4 text-gray-700 max-w-2xl">
        You can download my latest CV below. This CV highlights my work across enterprise data
        platforms, analytics, governance, and AI enablement.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/cv/Vivek_Lakshminarayanan_CV.pdf"
          className="rounded-xl px-5 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
          target="_blank"
          rel="noreferrer"
        >
          Download CV (PDF)
        </a>

        <a
          href="/contact"
          className="rounded-xl px-5 py-2.5 border border-gray-300 text-sm font-medium hover:border-gray-500"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-12 rounded-2xl border border-gray-200 p-6 bg-gray-50">
        <h2 className="font-semibold text-lg">Note</h2>
        <p className="mt-2 text-sm text-gray-700">
          To enable download, place your PDF file in:
          <span className="font-mono bg-white border px-2 py-1 rounded ml-2">
            /public/cv/
          </span>
        </p>
      </div>
    </Container>
  );
}
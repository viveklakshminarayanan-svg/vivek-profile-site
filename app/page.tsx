import Link from "next/link";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <Container>
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          Vivek Lakshminarayanan
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl">
          Digital Product Leader with deep experience shaping and scaling enterprise
          data and analytics platforms within global organisations. Focused on turning
          complex business needs into governed, reusable data products enabling
          better decisions, advanced analytics, and AI at scale.
        </p>

        <div className="flex gap-4">
          <Link
            href="/experience"
            className="rounded-xl px-5 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
          >
            View Experience
          </Link>

          <Link
            href="/cv"
            className="rounded-xl px-5 py-2.5 border border-gray-300 text-sm font-medium hover:border-gray-500"
          >
            Download CV
          </Link>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-lg">Enterprise Data Platforms</h2>
          <p className="mt-2 text-sm text-gray-700">
            Azure-based analytics platforms, Databricks, SQL, Power BI and reusable data products.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-lg">Governance & Trust</h2>
          <p className="mt-2 text-sm text-gray-700">
            Data quality, metadata, lineage and scalable governance that drives adoption.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-lg">AI/ML Enablement</h2>
          <p className="mt-2 text-sm text-gray-700">
            Supporting production-ready AI use cases through strong platform and MLOps practices.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-2xl bg-gray-50 border border-gray-200 p-8">
        <h2 className="text-xl font-semibold">Quick Contact</h2>
        <p className="mt-2 text-sm text-gray-700">
          Älmhult, Sweden ·{" "}
          <a className="underline" href="mailto:lvivek@hotmail.com">
            lvivek@hotmail.com
          </a>{" "}
          ·{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/vivek-lakshminarayanan/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </Container>
  );
}
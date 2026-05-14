import Link from "next/link";
import Container from "@/components/Container";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  return (
    <Container>
         <section className="space-y-8 py-12 fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Vivek Lakshminarayanan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Digital Product Leader specializing in enterprise data platforms, analytics, governance, and AI enablement at scale.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/experience"
            className="rounded-xl px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Experience →
          </Link>

          <Link
            href="/cv"
            className="rounded-xl px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            Download CV
          </Link>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="group rounded-2xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-200 hover-lift">
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
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Latest Writing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {getAllPosts().slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Read more →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            View all posts →
          </Link>
        </div>
      </section>
      
      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="group rounded-2xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="font-semibold text-lg">Enterprise Data Platforms</h2>
          <p className="mt-2 text-sm text-gray-700">
            Azure-based analytics platforms, Databricks, SQL, Power BI and reusable data products.
          </p>
        </div>

        <div className="group rounded-2xl border border-gray-200 p-6 hover:border-green-200 hover:shadow-lg transition-all duration-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-semibold text-lg">Governance & Trust</h2>
          <p className="mt-2 text-sm text-gray-700">
            Data quality, metadata, lineage and scalable governance that drives adoption.
          </p>
        </div>

        <div className="group rounded-2xl border border-gray-200 p-6 hover:border-purple-200 hover:shadow-lg transition-all duration-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="font-semibold text-lg">AI/ML Enablement</h2>
          <p className="mt-2 text-sm text-gray-700">
            Supporting production-ready AI use cases through strong platform and MLOps practices.
          </p>
        </div>
      </section>


      <section className="mt-16 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-700 mb-3">
              📍 Älmhult, Sweden
            </p>
            <p className="text-sm text-gray-700 mb-3">
              ✉️ <a className="underline hover:text-blue-600" href="mailto:lvivek@hotmail.com">
                lvivek@hotmail.com
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/vivek-lakshminarayanan/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </section>


    </Container>
  );
}
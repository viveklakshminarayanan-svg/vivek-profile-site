import Link from 'next/link'
import Nav from '@/components/Nav'
import styles from './page.module.css'

const skills = [
  'Databricks', 'Power BI', 'Data Governance',
  'SQL', 'MLOps', 'Data Products', 'Azure', 'Metadata',
]

const expertise = [
  {
    num: '01',
    icon: '◈',
    title: 'Enterprise Data Platforms',
    desc: 'Azure-based analytics architecture, Databricks pipelines, SQL at scale, Power BI and reusable data products built for longevity and adoption.',
  },
  {
    num: '02',
    icon: '◎',
    title: 'Governance & Trust',
    desc: 'Data quality frameworks, metadata management, lineage tracking, and scalable governance that drives actual adoption — not just compliance.',
  },
  {
    num: '03',
    icon: '◇',
    title: 'AI/ML Enablement',
    desc: 'Production-ready AI use cases through disciplined MLOps practice. Bridging the gap between model development and reliable, scaled deployment.',
  },
]

const articles = [
  {
    slug: 'scaling-ai-mlops',
    title: 'Scaling AI in Enterprises: Why MLOps is Non-Negotiable',
    excerpt:
      'Many organisations can build machine learning models, but few can run them reliably in production. Scaling AI requires the same discipline as scaling software.',
  },
  {
    slug: 'why-data-products-fail',
    title: 'Why Data Products Fail Without Adoption',
    excerpt:
      'Most enterprise data initiatives do not fail due to technology. They fail because adoption is not treated as part of the product.',
  },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={styles.eyebrowTag}>Digital Product Leader</span>
          <h1 className={styles.heroTitle}>
            Vivek<br />
            Lakshmina-<br />
            rayanan
          </h1>
          <p className={styles.heroDesc}>
            Specializing in enterprise data platforms, analytics governance,
            and AI enablement at scale — turning complex data strategy into
            products people actually use.
          </p>
          <div className={styles.btnRow}>
            <Link href="/experience" className={styles.btnPrimary}>
              View Experience
            </Link>
            <Link href="/cv" className={styles.btnSecondary}>
              Download CV
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.statGrid}>
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Years in data leadership</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>Azure</span>
              <span className={styles.statLabel}>Primary cloud platform</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>AI/ML</span>
              <span className={styles.statLabel}>MLOps &amp; enablement</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>SE</span>
              <span className={styles.statLabel}>Based in Älmhult, Sweden</span>
            </div>
          </div>

          <div className={styles.skillPills}>
            {skills.map((s) => (
              <span key={s} className={styles.pill}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionEyebrow}>Areas of expertise</div>
        <h2 className={styles.sectionTitle}>
          What I bring<br />to the table
        </h2>
        <div className={styles.expertiseGrid}>
          {expertise.map((e) => (
            <div key={e.num} className={styles.expCard}>
              <span className={styles.expNum}>{e.num}</span>
              <span className={styles.expIcon}>{e.icon}</span>
              <h3 className={styles.expCardTitle}>{e.title}</h3>
              <p className={styles.expCardDesc}>{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WRITING ───────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionEyebrow}>Latest writing</div>
        <h2 className={styles.sectionTitle}>Thinking out loud</h2>
        <div className={styles.writingGrid}>
          {articles.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className={styles.articleCard}>
              <h3 className={styles.articleTitle}>{a.title}</h3>
              <p className={styles.articleExcerpt}>{a.excerpt}</p>
              <span className={styles.readMore}>Read article →</span>
            </Link>
          ))}
        </div>
        <div className={styles.viewAllWrap}>
          <Link href="/blog" className={styles.viewAll}>View all posts →</Link>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionEyebrow}>Get in touch</div>
        <div className={styles.contactRow}>
          <div>
            <h2 className={styles.sectionTitle}>
              Let&apos;s work<br />together
            </h2>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Location</span>
                <span>Älmhult, Sweden</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:lvivek@hotmail.com" className={styles.contactLink}>
                  lvivek@hotmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/vivek-lakshminarayanan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  vivek-lakshminarayanan
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactCta}>
            <h3 className={styles.ctaTitle}>Open to new opportunities</h3>
            <p className={styles.ctaDesc}>
              Interested in data leadership roles, advisory work, or
              collaborating on enterprise data strategy.
            </p>
            <a href="mailto:lvivek@hotmail.com" className={styles.btnWhite}>
              Send a message
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <p>© 2026 Vivek Lakshminarayanan</p>
        <p>Built with Next.js · Deployed on Vercel</p>
      </footer>
    </>
  )
}


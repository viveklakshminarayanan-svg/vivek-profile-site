import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Image
            src="/logo.png"
            alt="Vivek Lakshminarayanan"
            width={180}
            height={60}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className={styles.navCta}>Let&apos;s talk</a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.heroOuter} id="home">
        <svg className={styles.heroBg} viewBox="0 0 960 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#1a2744" strokeWidth="0.3" opacity="0.07" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="860" cy="100" r="240" fill="none" stroke="#b8973a" strokeWidth="0.6" opacity="0.1" />
          <circle cx="860" cy="100" r="160" fill="none" stroke="#b8973a" strokeWidth="0.5" opacity="0.08" />
          <circle cx="860" cy="100" r="80"  fill="none" stroke="#b8973a" strokeWidth="0.5" opacity="0.06" />
        </svg>
        <div className={styles.heroInner}>
          <h1 className={styles.heroHeadline}>
            Building analytics-driven<br />
            digital products that create<br />
            <em>real business impact.</em>
          </h1>
          <p className={styles.heroBody}>
            I&apos;m Vivek — a digital product leader with long experience building
            analytics-driven digital products and leading teams through complex changes
            across multiple domains and industries.
          </p>
          <p className={styles.heroBodyQuote}>
            What defines me as a leader is the value I bring by providing clarity in
            complex situations with a pragmatic mindset — and creating space where people
            feel safe to explore, challenge, and develop.
          </p>
          <p className={styles.heroTagline}>Analytical Mind · Strategic Thinker · Purpose Driven</p>
          <div className={styles.heroActions}>
            <a href="#work"    className={styles.btnNavy}>See my work</a>
            <a href="#writing" className={styles.btnOutline}>Read my writing</a>
          </div>
          <div className={styles.heroStats}>
            <div>
              <div className={styles.statNum}>20+</div>
              <div className={styles.statLabel}>Years leading data &amp; product across global organisations</div>
            </div>
            <div>
              <div className={styles.statNum}>10+</div>
              <div className={styles.statLabel}>Years building enterprise data &amp; analytics platforms at IKEA</div>
              <div className={styles.statNote}>across supply chain, range &amp; commercial domains</div>
            </div>
            <div>
              <div className={styles.statNum}>4</div>
              <div className={styles.statLabel}>Major platform transformations led — from ERP to cloud-native AI</div>
              <div className={styles.statNote}>supply chain · logistics · analytics · AI enablement</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className={styles.outer} id="about">
        <div className={styles.section}>
          <div className={styles.secLabel}>About me</div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>I believe that the best digital products are built at the intersection of strategy and execution — where direction is clear, teams are empowered, and data is trusted.</p>
              <blockquote className={styles.aboutPull}>
                &ldquo;Creating space where people feel safe to explore, challenge and develop — so they can make better decisions and deliver real business impact.&rdquo;
              </blockquote>
              <p>My career spans supply chain optimisation, logistics, retail analytics, and enterprise AI enablement. At IKEA I&apos;ve built platforms, led domain teams, and shaped how data products are conceived, governed, and adopted across the business.</p>
              <p>I&apos;m now looking for my next challenge — where data strategy and business outcomes are closely connected.</p>
              <div className={styles.skillCloud}>
                {['Azure','Databricks','Power BI','MLOps','Data Governance','TOGAF','Agile','Digital Twins','ERP'].map(s => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className={styles.pillars}>
                {[
                  { title:'Developing people',         desc:'Growing the next generation of product leaders — empowered teams with clarity, confidence, and autonomy to make strong decisions even in ambiguity.' },
                  { title:'Delivering digital products', desc:'Building products that make a true business impact — not just features, but outcomes that teams and organisations can rely on.' },
                  { title:'Bringing clarity in direction', desc:'Strategy connected to execution — helping product areas find focus and move with confidence across a complex landscape.' },
                  { title:'Shaping digital capabilities', desc:"Ensuring digital capabilities support both today's business and what's coming next — fit for the future, not just the present." },
                ].map(p => (
                  <div key={p.title} className={styles.pillar}>
                    <div>
                      <div className={styles.pillarTitle}>{p.title}</div>
                      <div className={styles.pillarDesc}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ────────────────────────────────────── */}
      <section className={styles.outer} id="work">
        <div className={styles.section}>
          <div className={styles.secLabel}>Expertise</div>
          <h2 className={styles.secTitle}>What I do best</h2>
          <div className={styles.expCards}>
            {[
              { num:'01 — Platform',   title:'Enterprise Data Platforms',  desc:'Azure-based analytics architecture, Databricks pipelines, Power BI, and SQL at scale — reusable data products built for longevity and adoption.' },
              { num:'02 — Governance', title:'Data Governance & Trust',     desc:'Quality frameworks, metadata management, and lineage tracking that create genuinely trusted data assets — not just checkbox compliance.' },
              { num:'03 — AI/ML',      title:'AI Enablement at Scale',      desc:'Taking AI from prototype to production through disciplined MLOps — bridging the gap between model development and reliable business impact.' },
              { num:'04 — Leadership', title:'Product & Team Leadership',   desc:'Roadmap ownership, backlog prioritisation, agile delivery, and coaching cross-functional teams to build lasting digital capability.' },
            ].map(c => (
              <div key={c.num} className={styles.expCard}>
                <div className={styles.expNum}>{c.num}</div>
                <div className={styles.expTitle}>{c.title}</div>
                <div className={styles.expDesc}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER ───────────────────────────────────────── */}
      <section className={styles.outer} id="experience">
        <div className={styles.section}>
          <div className={styles.secLabel}>Career</div>
          <h2 className={styles.secTitle}>Where I&apos;ve worked</h2>
          <div className={styles.timeline}>
            {[
              { date:'Jun 2023 – Present',  company:'IKEA of Sweden',   role:'Digital Product Leader · Range Commercial',            desc:'Leading product strategy and delivery for data-driven solutions supporting commercial teams. Driving standardisation of data assets across domains, enabling advanced analytics, geospatial insights, and production-ready AI/ML use cases on Azure.',                                            pills:['Azure','MLOps','Data Products','Geospatial'] },
              { date:'May 2022 – Jun 2023', company:'IKEA of Sweden',   role:'Digital Product Leader · Data & Analytics',           desc:'Owned a portfolio of analytics products for range planning and lifecycle decisions. Established governance, quality metrics, and metadata standards using Databricks, SQL, and Power BI.',                                                                                                 pills:['Databricks','Power BI','Governance','Metadata'] },
              { date:'Jan 2017 – Apr 2022', company:'IKEA of Sweden',   role:'Product Owner · Modelling & Optimisation Platform',   desc:"Led a hybrid-cloud platform for digital twin and optimisation across IKEA's global supply network. Introduced Agile & DevOps practices, significantly improving delivery speed and platform stability.",                                                                              pills:['Digital Twin','Agile','DevOps','Supply Chain'] },
              { date:'Mar 2009 – Jan 2017', company:'IKEA IT, Sweden',  role:'Project Leader & Solution Architect',                 desc:'Delivered enterprise analytics and logistics planning solutions grounded in TOGAF principles and ITIL practices. Standardised data flows to improve interoperability and reporting trust.',                                                                                          pills:['TOGAF','ITIL','Enterprise Architecture'] },
              { date:'Jan 2008 – Jan 2013', company:'Blue Yonder',      role:'Solution Architect · Supply Chain Planning',          desc:'Designed global supply balancing and forecasting solutions. Improved inventory performance and planning accuracy through data-driven optimisation.',                                                                                                                              pills:['Supply Chain','Forecasting','Architecture'] },
            ].map(t => (
              <div key={t.date} className={styles.tlItem}>
                <div>
                  <div className={styles.tlDate}>{t.date}</div>
                  <div className={styles.tlCompany}>{t.company}</div>
                </div>
                <div>
                  <div className={styles.tlRole}>{t.role}</div>
                  <div className={styles.tlDesc}>{t.desc}</div>
                  <div className={styles.tlPills}>
                    {t.pills.map(p => <span key={p} className={styles.tlPill}>{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITING ──────────────────────────────────────── */}
      <section className={styles.outer} id="writing">
        <div className={styles.section}>
          <div className={styles.secLabel}>Writing</div>
          <h2 className={styles.secTitle}>Thinking out loud</h2>
          <div className={styles.blogGrid}>

            {/* Featured — full article */}
            <div className={`${styles.blogCard} ${styles.blogFeatured}`}>
              <div className={styles.blogMeta}>
                <span className={styles.blogTag}>Leadership</span>
                <span className={styles.blogDate}>May 2026</span>
              </div>
              <h3 className={`${styles.blogTitle} ${styles.blogTitleLg}`}>
                Leadership style in the modern era of digital product management
              </h3>
              <p className={styles.blogIntro}>
                Leading with clarity, togetherness and empowerment to unlock extraordinary results.
                What I&apos;ve learned about what it truly takes to lead high-performing product teams in complex organisations.
              </p>
              <div className={styles.articleBody}>
                <div>
                  <div className={styles.articleSub}>Three leadership principles I live by</div>
                  <div className={styles.lpGrid}>
                    {[
                      { title:'Clarity & Focus',  desc:"I cut through complexity and bring simplicity to priorities. Creating clarity around what problem we're solving, who we're solving it for, and what 'good' looks like — so the team can move with confidence and deliver real value." },
                      { title:'Togetherness',      desc:'I naturally connect people across functions and perspectives. When we put our hearts and minds together, we produce far better digital products than any individual could alone.' },
                      { title:'Empowerment',       desc:"I don't lead by giving answers — I lead by giving intent, context, and trust. I create spaces where people feel safe to think, experiment, challenge, and contribute." },
                    ].map(c => (
                      <div key={c.title} className={styles.lpCard}>
                        <div className={styles.lpTitle}>{c.title}</div>
                        <div className={styles.lpDesc}>{c.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className={styles.articleSub}>What matters most to me as a leader</div>
                  <div className={styles.keyFactors}>
                    {[
                      { title:'Authenticity & Trust',       desc:'I show up as my genuine self and build trust quickly with team members at all levels. People perform best when they feel psychologically safe and seen.' },
                      { title:'Commitment to Growth',       desc:"I'm deeply committed to developing people and helping them unlock their full potential. The best investment any leader can make is in the people around them." },
                      { title:'Comfortable with Ambiguity', desc:"I step confidently into the unknown, learning new things, challenging old patterns, and encouraging my teams to do the same. In a fast-moving digital world, this isn't optional — it's essential." },
                    ].map(k => (
                      <div key={k.title} className={styles.kfRow}>
                        <div className={styles.kfTitle}>{k.title}</div>
                        <div className={styles.kfDesc}>{k.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className={styles.articleClosing}>
                  &ldquo;The best product leaders I&apos;ve seen don&apos;t have all the answers.
                  They create the conditions where the right answers emerge — through great people,
                  clear thinking, and a shared sense of purpose.&rdquo;
                </p>
              </div>
            </div>

            {/* Regular articles */}
            {[
              { tag:'AI & MLOps', date:'Apr 2026', title:'Why most enterprise AI projects fail before they start',         excerpt:"The bottleneck isn't the model — it's the data. After years building data platforms at IKEA, I've seen how organisations invest heavily in ML while neglecting the data foundation that makes those models trustworthy in production." },
              { tag:'Governance', date:'Mar 2026', title:'Governance that people actually follow',                          excerpt:"Most data governance initiatives fail not because the framework is wrong, but because adoption was never designed in. Rules without context and standards without champions don't stick." },
              { tag:'Product',    date:'Jan 2026', title:'From reports to reusable assets: the data product mindset',      excerpt:'Shifting from delivering reports to owning data products is a fundamental change. It means caring about downstream consumers, versioning, quality SLAs, and the full lifecycle — not just the dashboard.' },
              { tag:'Strategy',   date:'Nov 2025', title:'Clarity in complexity: how I lead product teams through ambiguity', excerpt:"The hardest part of product leadership isn't the strategy — it's keeping a team moving with confidence when the path isn't clear. Here's how I approach it." },
            ].map(a => (
              <div key={a.title} className={styles.blogCard}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogTag}>{a.tag}</span>
                  <span className={styles.blogDate}>{a.date}</span>
                </div>
                <h3 className={styles.blogTitle}>{a.title}</h3>
                <p className={styles.blogExcerpt}>{a.excerpt}</p>
                <span className={styles.blogRead}>Read article →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section className={styles.outer} id="contact">
        <div className={styles.section}>
          <div className={styles.secLabel}>Get in touch</div>
          <div className={styles.contactGrid}>
            <div>
              <h2 className={styles.contactHeading}>Let&apos;s work<br />together.</h2>
              <p className={styles.contactSub}>Whether you&apos;re hiring for a senior data or product leadership role, exploring advisory work, or want to exchange ideas — I&apos;d love to hear from you.</p>
              <div className={styles.contactRows}>
                <div className={styles.cr}><span className={styles.crLabel}>Email</span><a href="mailto:lvivek@hotmail.com" className={styles.crVal}>lvivek@hotmail.com</a></div>
                <div className={styles.cr}><span className={styles.crLabel}>LinkedIn</span><a href="https://linkedin.com/in/vivek-lakshminarayanan" target="_blank" rel="noopener noreferrer" className={styles.crVal}>vivek-lakshminarayanan</a></div>
                <div className={styles.cr}><span className={styles.crLabel}>Location</span><span className={styles.crVal}>Älmhult, Sweden</span></div>
              </div>
            </div>
            <div className={styles.contactBox}>
              <h3 className={styles.contactBoxTitle}>Ready for the next challenge</h3>
              <p className={styles.contactBoxDesc}>Senior data product leadership and advisory roles — ideally in organisations where data strategy and business outcomes are closely connected.</p>
              <a href="mailto:lvivek@hotmail.com" className={styles.btnGold}>Send a message</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className={styles.footer}>
        <p>© 2026 Vivek Lakshminarayanan</p>
        <div className={styles.footerLinks}>
          <a href="https://linkedin.com/in/vivek-lakshminarayanan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  )
}


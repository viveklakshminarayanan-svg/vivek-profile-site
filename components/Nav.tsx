import Link from 'next/link'
import Image from 'next/image'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoWrap}>
        <Image
          src="/logo.png"
          alt="Vivek Lakshminarayanan"
          width={160}
          height={60}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/experience">Work</Link>
        <Link href="/blog">Writing</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/contact" className={styles.cta}>Let's talk</Link>
      </div>
    </nav>
  )
}


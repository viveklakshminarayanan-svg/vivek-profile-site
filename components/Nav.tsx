import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>VL</Link>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/cv">CV</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}


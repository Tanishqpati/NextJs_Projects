import Image from 'next/image'
import styles from './page.module.css'

export default async function HomePage() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home Page</h1>
        <p>Content</p>
      </div>
    </main>
  )
}

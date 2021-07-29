import '../styles/globals.css';
import Link from 'next/link';
import styles from '../styles/myApp.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <nav className={styles.navbar}>
      <ul className={styles.navbarContactBox}>
        <Link href="/">
          <a>
            <div className={styles.brandPizza}>
              <img src="/assets/images/pizza.svg" alt="brand" />
              <p>Pizza Shop</p>
            </div>
          </a>
        </Link>
        <Link href="/"><li className={styles.navbarContact}><a>Home</a></li></Link>
        <Link href="/about"><li className={styles.navbarContact}><a>About</a></li></Link>
      </ul>
    </nav>
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp

import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quia?
        Nesciunt voluptatibus eveniet dignissimos labore deleniti a tempore
        dolorum atque officiis similique, iure quidem vel ducimus tempora,
        corporis maxime quam.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ex
        excepturi voluptatem autem dolorem enim aperiam omnis ipsa facere
        quibusdam saepe repellat! Laborum cupiditate fugit vero perspiciatis
        odio. Ipsum, esse.
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>All ninjas</a>
      </Link>
    </div>
  )
}

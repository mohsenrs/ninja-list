import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div>
        <h3>Ninja Logo</h3>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  )
}

export default Navbar
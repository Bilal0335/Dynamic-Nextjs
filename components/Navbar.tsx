import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link href="/">
            <span style={{ color: 'white', textDecoration: 'none' }}>Home</span>
          </Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link href="/about">
            <span style={{ color: 'white', textDecoration: 'none' }}>About</span>
          </Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link href="/products">
            <span style={{ color: 'white', textDecoration: 'none' }}>Products</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

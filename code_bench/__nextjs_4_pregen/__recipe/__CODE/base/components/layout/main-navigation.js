import Link from 'next/link';

import Logo from './logo.js';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
          <Logo />
      </Link>
      <nav>
        <ul>

          <li>
            <Link href='/shopping'>Shopping</Link>
          </li>

          <li>
            <Link href='/attractions'>Attractions</Link>
          </li>

          <li>
            <Link href='/restaurants'>Restaurants</Link>
          </li>


          <li>
            <Link href='/about'>About</Link>
          </li>

          <li>
            <Link href='/contact'>Contact</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
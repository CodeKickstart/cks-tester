import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Ashwini.jpg'
          alt='An image showing Ashwini'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm  Ashwini</h1>
      <p>
My friend, Basab, and I are building a website for developers to create software projects that can be crafted from various software components needing integration across technologies and languages.
Here the developer can opt for basic features to get a head start on their project.      </p>
    </section>
  );
}

export default Hero;
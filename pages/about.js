import Link from 'next/link';

const About = () => (
  <div>
    <h1>About</h1>
    <p>Dixit Vora</p>
    <Link href='/'>
      <a>Go to Home </a>
    </Link>
  </div>
);
export default About;

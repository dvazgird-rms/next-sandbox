import fetch from 'node-fetch';
import Link from 'next/link';

function About({stars}) {
  return (
    <div>
      <p>Next stars: {stars}</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
/**
 * - getInitialProps will asynchronously fetch anything that resolves to a JavaScript plain Object, which populates props.
 * - Data returned from getInitialProps is serialized when server rendering, similar to a JSON.stringify. Must only return a plain Object.
 * - For the initial page load, getInitialProps will execute on the server only.
 * - getInitialProps will only be executed on the client when navigating to a different route via the Link component or using the routing APIs.
 * - getInitialProps can not be used in children components. Only in pages.
 */
About.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();

  return { stars: json.stargazers_count };
};

export default About;

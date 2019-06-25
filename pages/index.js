import Head from 'next/head';
import Link from 'next/link';

// Can import stylesheets directly as long as next.config.js is setup.
import theme from "../theme/scss/global.scss";

function Home() {

  return (
    <div>
      <Head>
        <title>NextJS Sandbox</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      {/**
        Can add multiple Head components as long as key is provided.
        - in this case only the second meta tag will render (since key is the same).
      */}
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <h1 className={theme.heading}>This font size is from scss</h1>
      {/**
        This style will be scoped to this page.
      */}
      <p>scoped styles, but the body background is global.</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      {/**
        This style is global
        - would probably be best to create a layout component to hold the global styles.
        - may also be possible to load data into a template component this way - provided server routing with express is done (something like this: https://github.com/fridays/next-routes)
      */}
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
      {/**
        Routes created from files in ./pages
        dynamic routes can also be made with express
        would then use a page template to render a dynamic page
      */}
      <ul>
        <li>
          <Link href="/about" as="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/b' as='/a'>
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href='/a' as='/b'>
            <a>b</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/posts', query: { id: '2' } }} as='/posts/2'>
            <a>post #2</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

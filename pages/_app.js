import React from 'react';
import App, { Container } from 'next/app';

/**
 * Next.js uses the App component to initialize pages. You can override it and control the page initialization. 
 * 
 * - Persisting layout between page changes
 * - Keeping state when navigating pages
 * - Custom error handling using componentDidCatch
 * - Inject additional data into pages (for example by processing GraphQL queries)
 */

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  /**
   * 
   * - Can add a global header (menu) and footer (toolbar) here
   * - Component will render all the pages and pass down props
   */
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;

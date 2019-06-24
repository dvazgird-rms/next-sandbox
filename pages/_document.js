// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };

    /**
     * The ctx object is equivalent to the one received in all getInitialProps hooks
     * 
     * the only reason you should be customizing renderPage is for usage with css-in-js libraries 
     * that need to wrap the application to properly work with server-rendering.
     * i.e. https://github.com/zeit/next.js/tree/master/examples/with-styled-components
     * 

      const originalRenderPage = ctx.renderPage;

      ctx.renderPage = () =>
        originalRenderPage({
          // useful for wrapping the whole react tree
          enhanceApp: App => App,
          // useful for wrapping in a per-page basis
          enhanceComponent: Component => Component
        });

      // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;

     */
  }

  /**
   * - All of <Head />, <Main /> and <NextScript /> are required for page to be properly rendered.
   */

  render() {
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
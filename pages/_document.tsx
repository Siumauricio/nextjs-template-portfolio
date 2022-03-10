import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);

      return {...initialProps};
   }

   render() {
      return (
         <Html lang="es" data-theme="dark">
            <Head>
               <meta name="theme-color" content="#ffffff" />
               <meta name="theme-color" content="#3d4451" />
               {/* Set icon when you share link */}

               {/* <link rel="og:image" href="favicon.ico" /> */}
               {/* <meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)"> */}
               {/* <link rel="apple-touch-icon" href="Img.png" /> */}
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/> */}
               {/* <link rel="shortcut icon" href="../assets/favicon.ico" /> */}
               {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" /> */}
               <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
               {/* <meta name="theme-color" data-theme="THEME_NAME" media="(prefers-color-scheme: light)" content="white" /> */}
               {/* <link rel="canonical" href="/web/tweet-button" /> */}
               {/* <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.min.css" /> */}
               {/* <link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css" /> */}
               {/* <link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css" /> */}
               {/* <link href="https://cdn.jsdelivr.net/npm/daisyui@1.25.4/dist/themes.css" rel="stylesheet" type="text/css" /> */}
               {/* <link href="https://cdn.jsdelivr.net/npm/daisyui@1.25.4/dist/themes.css" rel="stylesheet" type="text/css" /> */}
            </Head>

            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;

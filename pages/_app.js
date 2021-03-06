import React from "react";
function GlobalStyle() {
  // reset CSS
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style> // * = TUDO/ALL
  );
}

export default function MyApp({ Component, pageProps }) {
  //const [username, setUsername] = React.useState("");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

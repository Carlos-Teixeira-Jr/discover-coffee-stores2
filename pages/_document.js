//Este arquivo é capaz de modificar as configurações de cabeçalho de todas as páginas da aplicação;

import Document, {Head, Html, Main, NextScript} from "next/document";

//Aqui estamos criando um Document customizado que se extende ao Document default;
class MyDocument extends Document {
  render(){
    return (
      <Html lang="en">
        <Head>
          <link 
            rel="preload" 
            href="/fonts/IBMPlexSans-Bold.ttf"
            as="font" 
            crossOrigin="anonymous"
          ></link>
          <link 
            rel="preload" 
            href="/fonts/IBMPlexSans-Regular.ttf"
            as="font" 
            crossOrigin="anonymous"
          ></link>
          <link 
            rel="preload" 
            href="/fonts/IBMPlexSans-SemiBold.ttf"
            as="font" 
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
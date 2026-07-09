import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <script
                    id="google-fonts-loader"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(){
                  var l = document.createElement('link');
                  l.rel = 'preload';
                  l.as = 'style';
                  l.href = 'https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&family=Space+Grotesk:wght@500;600;700&display=swap';
                  l.onload = function(){ this.onload = null; this.rel = 'stylesheet'; };
                  document.head.appendChild(l);
              })();
            `,
                    }}
                />
                <noscript>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&family=Space+Grotesk:wght@500;600;700&display=swap"
                    />
                </noscript>
                {/* eslint-disable-next-line @next/next/next-script-for-ga */}
                <script
                    id="gtm-script"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P58MFH56');
            `,
                    }}
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-P58MFH56"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>
            </body>
        </Html>
    );
}

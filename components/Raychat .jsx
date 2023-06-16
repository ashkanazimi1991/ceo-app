import Head from "next/head";
import React from "react";

const Raychat = () => {
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.RAYCHAT_TOKEN = "7f367829-2439-40fa-8065-69119cd53240";
              (function () {
                d = document;
                s = d.createElement("script");
                s.src = "https://widget-react.raychat.io/install/widget.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </Head>
    </div>
  );
};

export default Raychat;






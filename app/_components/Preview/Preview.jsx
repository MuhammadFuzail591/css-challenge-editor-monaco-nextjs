import React from 'react'

function Preview({ code }) {
   const { html, css, js } = code

   const iframeRef = React.useRef()
   React.useEffect(() => {
      const document = iframeRef.current?.contentDocument;
      document.open();
      document.write(`
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `);
      document.close();
   }, [html, css, js]);

   return (
      <div className='w-6/12'>
         <iframe ref={iframeRef} />
      </div>
   )
}

export default Preview
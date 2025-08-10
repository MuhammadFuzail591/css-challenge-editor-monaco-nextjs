import React from 'react'

function Preview({ code, studentIframeRef }) {

  const { html, css, js } = code

  React.useEffect(() => {
    const document = studentIframeRef.current?.contentDocument;
    document.open();
    document.write(`
      <html>
        <head>
          <style>${css || ""}</style>
        </head>
        <body style = 'height:fit-content;'>
          ${html || ""}
          <script>${js || ""}<\/script>
        </body>
      </html>
    `);
    document.close();
  }, [html, css, js, studentIframeRef]);

  return (
    <iframe ref={studentIframeRef} className='w-4/12' />
  )
}

export default Preview
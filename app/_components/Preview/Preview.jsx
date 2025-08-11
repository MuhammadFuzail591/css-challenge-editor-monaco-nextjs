import React from 'react'

function Preview({ code, studentIframeRef, className }) {

  const { html, css, js } = code

  React.useEffect(() => {
    const document = studentIframeRef.current?.contentDocument;
    document.open();
    document.write(`
      <html>
        <head>
          <style>${css || ""}</style>
        </head>
        <body>
          ${html || ""}
          <script>${js || ""}<\/script>
        </body>
      </html>
    `);
    document.close();
  }, [html, css, js, studentIframeRef]);

  return (
    <div className={`${className} flex flex-col justify-start gap-1`}>
      <div className='flex items-center bg-gray-400 basis-1/12 text-start'>Preview</div>
      <iframe ref={studentIframeRef} className='w-full basis-11/12' />
    </div>
  )
}

export default Preview
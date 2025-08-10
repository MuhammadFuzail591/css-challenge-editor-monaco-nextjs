import React from 'react'

function Target({ targetIframeRef }) {

   const exercise = {

      html: `<div>
         <h1> Hi there</h1>
      </div>`,
      css: `
         div{
            background: black;
            padding:10px;
         }
         h1{
            color:white;
         }
      `,
      js: ""

   }
   React.useEffect(() => {
      const document = targetIframeRef.current?.contentDocument
      document.open();
      document.write(`
            <html>
        <head>
          <style>${exercise.css || ""}</style>
        </head>
        <body style = 'height:fit-content;'>
          ${exercise.html || ""}
          <script>${exercise.js || ""}<\/script>
        </body>
      </html>
         `)

      document.close();

   })

   return (
      <iframe ref={targetIframeRef} className='w-4/12' />
   )
}

export default Target
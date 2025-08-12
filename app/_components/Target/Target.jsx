import React from 'react'

function Target({ targetIframeRef, className }) {

   const exercise = {

      html: `<div>
         <h1> Hi there</h1>
      </div>
      `,
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
        <body>
          ${exercise.html || ""}
          <script>${exercise.js || ""}<\/script>
        </body>
      </html>
         `)

      document.close();

   })

   return (
      <div className={`${className} flex flex-col justify-start gap-1`}>
         <h1 className='p-2 font-bold border-t rounded-t bg-headingBg text-headingText'>Target</h1>
         <iframe ref={targetIframeRef} className='w-full basis-11/12' />
      </div>
   )
}

export default Target
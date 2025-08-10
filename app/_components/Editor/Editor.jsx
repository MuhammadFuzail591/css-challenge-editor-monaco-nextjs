"use client"
import { Editor } from '@monaco-editor/react'
import React from 'react'




function EditorWrapper({ setCode }) {

   const [files, setFiles] = React.useState(
      {
         'index.html': {
            name: 'index.html',
            language: 'html',
            value: "",
         },
         'style.css': {
            name: 'style.css',
            language: 'css',
            value: "",
         },
         'script.js': {
            name: 'script.js',
            language: 'javascript',
            value: "",
         },
      }
   )


   const [fileName, setFileName] = React.useState('index.html');
   const file = files[fileName];



   function handleOnChange(value) {


      const updatedFiles = {
         ...files,
         [fileName]: { ...files[fileName], value: value }
      }


      setFiles(updatedFiles)

      if (setCode) {
         setCode({
            html: updatedFiles["index.html"].value,
            css: updatedFiles["style.css"].value,
            js: updatedFiles["script.js"].value
         })
      }

   }


   return (
      <div className="flex flex-col h-full bg-gray-900 border border-gray-700 overflow-hidden w-4/12 shadow-lg">

         <div className="flex items-center bg-gray-800 border-b border-gray-700">
            {Object.keys(files).map((name) => (
               <button
                  key={name}
                  onClick={() => setFileName(name)}
                  disabled={fileName === name}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200
              ${fileName === name
                        ? "bg-gray-900 text-white border-b-2 border-blue-500"
                        : "text-gray-400 hover:text-white hover:bg-gray-700"
                     }
            `}
               >
                  {name}
               </button>
            ))}
         </div>

         <div className="flex-1">
            <Editor
               height="80vh"
               theme="vs-light"
               path={file.name}
               language={file.language}
               value={file.value}
               onChange={handleOnChange}
               options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
               }}
            />
         </div>
      </div>
   )
}

export default EditorWrapper
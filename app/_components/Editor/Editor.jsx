"use client";
import { useTheme } from "@/app/context/ThemeContext";
import { Editor } from "@monaco-editor/react";
import React from "react";

function EditorWrapper({ setCode, className }) {
   const { theme } = useTheme();

   const [files, setFiles] = React.useState({
      "index.html": { name: "index.html", language: "html", value: "" },
      "style.css": { name: "style.css", language: "css", value: "" },
      "script.js": { name: "script.js", language: "javascript", value: "" },
   });

   const [fileName, setFileName] = React.useState("index.html");
   const file = files[fileName];

   function handleOnChange(value) {
      const updatedFiles = {
         ...files,
         [fileName]: { ...files[fileName], value: value },
      };
      setFiles(updatedFiles);

      if (setCode) {
         setCode({
            html: updatedFiles["index.html"].value,
            css: updatedFiles["style.css"].value,
            js: updatedFiles["script.js"].value,
         });
      }
   }

   return (
      <div
         className={`${className} flex flex-col overflow-hidden bg-card border border-border shadow-lg`}
      >
         {/* File Tabs */}
         <div className="flex items-center border-b bg-bg border-border">
            {Object.keys(files).map((name) => (
               <button
                  key={name}
                  onClick={() => setFileName(name)}
                  disabled={fileName === name}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200
              ${fileName === name
                        ? "bg-card text-text border-b-2 border-blue-500"
                        : "text-text/70 hover:text-text hover:bg-card/80"
                     }
            `}
               >
                  {name}
               </button>
            ))}
         </div>

         {/* Monaco Editor */}
         <div className="flex-1 h-full">
            <Editor
               theme={theme === "dark" ? "vs-dark" : "vs-light"}
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
   );
}

export default EditorWrapper;
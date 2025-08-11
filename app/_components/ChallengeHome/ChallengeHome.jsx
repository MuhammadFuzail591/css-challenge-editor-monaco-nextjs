"use client";
import React from "react";
import EditorWrapper from "../Editor";
import Target from "../Target";
import Preview from "../Preview";
import Header from "../Header";
import Footer from "../Footer";

function ChallengeHome({ mdxContent, frontMatter }) {
   const [code, setCode] = React.useState("");
   const studentIframeRef = React.useRef();
   const targetIframeRef = React.useRef();

   const problems = [
      { id: "example", title: "Example Problem" },
      { id: "challenge1", title: "Challenge 1" },
   ];

   return (
      <div className="flex flex-col justify-between min-h-screen bg-bg text-text">
         <Header
            problems={problems}
            selectedProblem="example"
            onProblemChange={(id) => console.log("Change problem to", id)}
         />

         <div className="">
            <div className="grid w-full gap-6 p-4 mx-auto grid-rows-[2fr_2fr_1fr_1fr] lg:grid-cols-3 lg:grid-rows-2 lg:h-[80vh] lg:mx-0">
               <BlogComponent
                  content={mdxContent}
                  title={frontMatter.title}
                  className="p-4 overflow-hidden border rounded-md shadow-sm bg-card border-border lg:row-span-2 lg:col-span-1 h-[80vh] lg:h-full"
               />

               <EditorWrapper
                  setCode={setCode}
                  className="h-full p-4 border rounded-md shadow-sm bg-card border-border lg:h-full lg:row-span-2 lg:col-span-1"
               />

               <Preview
                  code={code}
                  studentIframeRef={studentIframeRef}
                  targetIframeRef={targetIframeRef}
                  className="h-full border rounded-md shadow-sm bg-card border-border lg:row-span-1 lg:col-span-1"
               />

               <Target
                  targetIframeRef={targetIframeRef}
                  className="h-full border rounded-md shadow-sm bg-card border-border lg:row-span-1 lg:col-span-1"
               />
            </div>
         </div>

         <Footer
            onSubmit={() => console.log("Submit")}
            onReset={() => console.log("Reset")}
            onNext={() => console.log("Next")}
         />
      </div>
   );
}

const BlogComponent = ({ title, content, className }) => {
   return (
      <div className={`${className} flex flex-col`}>
         <h1 className="p-2 text-2xl font-bold border-t rounded-t bg-headingBg text-headingText">
            {title}
         </h1>
         <section className="flex-1 overflow-auto overflow-x-hidden markdown">
            {content}
         </section>
      </div>
   );
};

export default ChallengeHome;
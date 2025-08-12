"use client";
import React, { act } from "react";
import EditorWrapper from "../Editor";
import Target from "../Target";
import Preview from "../Preview";
import Header from "../Header";
import Footer from "../Footer";
import compareIframes from "./Challenge.helpers";
import TabSwitch from "../TabSwitch";

function ChallengeHome({ mdxContent, frontMatter }) {
   const [code, setCode] = React.useState("");
   const studentIframeRef = React.useRef();
   const targetIframeRef = React.useRef();

   const [activeTab, setActiveTab] = React.useState("editor")

   const problems = [
      { id: "example", title: "Example Problem" },
      { id: "challenge1", title: "Challenge 1" },
   ];

   return (
      <div className="flex flex-col h-screen bg-bg text-text">
         <Header
            problems={problems}
            selectedProblem="example"
            onProblemChange={(id) => console.log("Change problem to", id)}
         />

         <div className="flex-1 overflow-auto">
            <div className="w-full gap-6 p-4 mx-auto lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:h-full lg:mx-0">
               <BlogComponent
                  content={mdxContent}
                  title={frontMatter.title}
                  className={`${activeTab === "blog" ? "" : "hidden"} p-4 h-[80vh]  overflow-scroll shadow-sm hrounded-md bg-card lg:row-span-2 lg:col-span-1 lg:h-full`}
               />

               <EditorWrapper
                  setCode={setCode}
                  className={`${activeTab === "editor" ? "" : "hidden"} p-4 h-[80vh] rounded-md shadow-sm bg-card lg:row-span-2 lg:col-span-1 lg:h-full`}
               />

               <Preview
                  code={code}
                  studentIframeRef={studentIframeRef}
                  targetIframeRef={targetIframeRef}
                  className={`${activeTab === "target" ? "" : "hidden"} lg:block h-[40vh] border rounded-md shadow-sm bg-card border-border lg:row-span-1 lg:col-span-1 lg:h-full`}
               />

               <Target
                  targetIframeRef={targetIframeRef}
                  className={`${activeTab === "target" ? "mt-1" : "hidden"} h-[40vh] lg:block border lg:mt-0 rounded-md shadow-sm bg-card border-border lg:row-span-1 lg:col-span-1 lg:h-full `}
               />
            </div>
         </div>
         <TabSwitch setActiveTab={setActiveTab} activeTab={activeTab} className={""} />

         <Footer
            onSubmit={() => compareIframes(studentIframeRef.current, targetIframeRef.current)}
            onReset={() => console.log("Reset")}
            onNext={() => console.log("Next")}
         />
      </div>

   );
}

const BlogComponent = ({ title, content, className }) => {
   return (
      <div className={`${className} lg:flex flex-col rounded-md`}>
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
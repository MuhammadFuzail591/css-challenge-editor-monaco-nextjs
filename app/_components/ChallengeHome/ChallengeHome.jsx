"use client"
import React from 'react'
import EditorWrapper from '../Editor'
import Target from '../Target'
import Preview from '../Preview'
import compareIframes from './Challenge.helpers'

function ChallengeHome() {

   const [code, setCode] = React.useState('')
   const studentIframeRef = React.useRef()
   const targetIframeRef = React.useRef()

   return (
      <>

         <div className='flex justify-between w-full'>
            <EditorWrapper setCode={setCode} />
            <Preview code={code} studentIframeRef={studentIframeRef} targetIframeRef={targetIframeRef} />
            <Target targetIframeRef={targetIframeRef} />

         </div>

         <button
            onClick={() => compareIframes(studentIframeRef.current, targetIframeRef.current)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
         >
            Compare
         </button>
      </>
   )
}

export default ChallengeHome
'use client'
import Image from 'next/image'
import EditorWrapper from './_components/Editor'
import React from 'react'
import Preview from './_components/Preview'

export default function Home () {
  const [code, setCode] = React.useState('')

  React.useEffect(() => {
    console.log(code)
  }, [code])

  return (
    <div className='flex justify-between w-full'>
      <EditorWrapper setCode={setCode} />
      <Preview code={code} />
    </div>
  )
}

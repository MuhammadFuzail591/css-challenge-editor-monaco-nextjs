import React from 'react'
import CodeSnippet from '../CodeSnippet'
import { MDXRemote } from 'next-mdx-remote/rsc'

function MDXRender({ source }) {
   return (
      <MDXRemote
         source={source}
         components={{
            pre: CodeSnippet
         }}
      />
   )
}

export default MDXRender
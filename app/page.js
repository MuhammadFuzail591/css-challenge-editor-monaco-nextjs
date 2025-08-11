import ChallengeHome from './_components/ChallengeHome'
import MDXRender from './_components/MDXRender'
import { loadBlog } from './helpers/file-helper'

export const metadata = {
  title: 'Codebite Forntend Exercises',
  description: 'An in browser editor and previewer for frontend technologies'
}

export default async function Home () {


  const { frontmatter, content } = await loadBlog('example')

  const renderedMdx = MDXRender({ source: content })

  return <ChallengeHome mdxContent={renderedMdx} frontMatter={frontmatter} />
}

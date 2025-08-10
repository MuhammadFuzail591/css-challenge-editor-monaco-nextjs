import html2canvas from 'html2canvas'

async function compareIframes (previewIframe, targetIframe) {
  if (!previewIframe || !targetIframe) {
    console.error('Missing iframe references')
    return
  }

  // Get iframe document bodies
  const previewDoc = previewIframe.contentDocument
  const targetDoc = targetIframe.contentDocument

  console.log('Preview', previewDoc)
  console.log('target', targetDoc)

  // Get full content size
  const width = Math.max(
    previewDoc.documentElement.scrollWidth,
    targetDoc.documentElement.scrollWidth
  )
  const height = Math.max(
    previewDoc.documentElement.scrollHeight,
    targetDoc.documentElement.scrollHeight
  )

  // Render both iframes to canvases using html2canvas
  const [previewCanvas, targetCanvas] = await Promise.all([
    html2canvas(previewDoc.body, { width, height, backgroundColor: null }),
    html2canvas(targetDoc.body, { width, height, backgroundColor: null })
  ])

  // Get pixel data
  const previewCtx = previewCanvas.getContext('2d')
  const targetCtx = targetCanvas.getContext('2d')

  const data1 = previewCtx.getImageData(0, 0, width, height).data
  const data2 = targetCtx.getImageData(0, 0, width, height).data

  // Compare pixels
  let diffCount = 0
  let isPass = false
  const tolerance = 5 // allow small differences

  for (let i = 0; i < data1.length; i += 4) {
    if (
      Math.abs(data1[i] - data2[i]) > tolerance ||
      Math.abs(data1[i + 1] - data2[i + 1]) > tolerance ||
      Math.abs(data1[i + 2] - data2[i + 2]) > tolerance ||
      Math.abs(data1[i + 3] - data2[i + 3]) > tolerance
    ) {
      diffCount++
    }
  }

  const totalPixels = data1.length / 4
  const matchPercent = ((totalPixels - diffCount) / totalPixels) * 100

  console.log(matchPercent)

  if (matchPercent >= 100) isPass = true

  console.log(isPass)

  return isPass
}

export default compareIframes

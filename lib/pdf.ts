export type PaperSize = 'a4' | 'letter'

export const PAPER_SIZES: { value: PaperSize; label: string; width: number; height: number }[] = [
  { value: 'letter', label: 'US Letter', width: 215.9, height: 279.4 },
  { value: 'a4', label: 'A4', width: 210, height: 297 },
]

export async function exportChartToPDF(
  elementId: string,
  childName: string,
  paperSize: PaperSize
): Promise<void> {
  const { default: html2canvas } = await import('html2canvas')
  const { default: jsPDF } = await import('jspdf')

  const element = document.getElementById(elementId)
  if (!element) return

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: null,
    onclone: (clonedDoc) => {
      const el = clonedDoc.getElementById(elementId)
      if (!el) return
      // Remove parent transforms so the element is captured at its true CSS size
      let parent = el.parentElement
      while (parent && parent !== clonedDoc.body) {
        parent.style.transform = 'none'
        parent.style.overflow = 'visible'
        parent.style.position = 'static'
        parent.style.width = 'auto'
        parent.style.height = 'auto'
        parent = parent.parentElement
      }
    },
  })

  const imgData = canvas.toDataURL('image/png')

  const paper = PAPER_SIZES.find(p => p.value === paperSize) ?? PAPER_SIZES[0]
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: paperSize })

  // Fill the entire page — the chart is designed to match paper dimensions exactly
  pdf.addImage(imgData, 'PNG', 0, 0, paper.width, paper.height)

  const fileName = (childName?.trim() || 'chore') + '-chart.pdf'
  pdf.save(fileName)
}

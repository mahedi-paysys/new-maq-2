import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ChevronLeft, ChevronRight } from 'lucide-react'
import HTMLFlipBook from 'react-pageflip'
import { useRef } from 'react'

const TOTAL_PAGES = 16

const Page = forwardRef<HTMLDivElement, { number: number }>((props, ref) => {
  return (
    <div
      ref={ref}
      className="overflow-hidden bg-white"
      style={{ boxShadow: 'inset -3px 0 8px rgba(0,0,0,0.1)' }}
    >
      <img
        src={`/assets/catalog/page${props.number}.jpeg`}
        alt={`Page ${props.number}`}
        style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
        draggable={false}
        onError={() => {
          // agar image na mile to debug ke liye
          console.log(`Image not found: page${props.number}.jpg`)
        }}
      />
    </div>
  )
})
Page.displayName = 'Page'

export function CatalogPage() {
  const bookRef = useRef<any>(null)

  const prevPage = () => bookRef.current?.pageFlip()?.flipPrev()
  const nextPage = () => bookRef.current?.pageFlip()?.flipNext()

  return (
    <div
      className="min-h-screen pt-24 pb-20"
      style={{ background: 'var(--color-canvas)' }}
    >
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Our Catalog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
              MAQ Builders<br />
              <span className="text-brand">Project Catalog</span>
            </h1>
            {/* <p className="mt-3 text-ink-muted text-sm max-w-md">
              Pages ke corners pe click karo ya arrows use karo flip karne ke liye.
            </p> */}
          </div>
          <a
            href="/assets/catalog.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-semibold hover:bg-brand hover:text-black transition-all duration-300 self-start"
          >
            <Download size={16} />
            Download PDF
          </a>
        </motion.div>

        {/* Flipbook */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Book wrapper */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 32px 80px -16px rgba(0,0,0,0.25)',
            }}
          >
            <HTMLFlipBook
              ref={bookRef}
              width={900}
              height={500}
              size="fixed"
              minWidth={300}
              maxWidth={900}
              minHeight={300}
              maxHeight={600}
              showCover={true}
              mobileScrollSupport={true}
              drawShadow={true}
              flippingTime={800}
              usePortrait={true}
              startZIndex={0}
              autoSize={false}
              maxShadowOpacity={0.5}
              showPageCorners={true}
              disableFlipByClick={false}
              style={{}}
              startPage={0}
              className=""
            >
              {Array.from({ length: TOTAL_PAGES }, (_, i) => (
                <Page key={i + 1} number={i + 1} />
              ))}
            </HTMLFlipBook>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevPage}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-white hover:border-brand hover:text-brand text-ink-muted text-sm font-semibold transition-all duration-200"
            >
              <ChevronLeft size={16} />
              Prev
            </button>
            <span className="text-xs text-ink-faint tracking-widest uppercase">
              Flip Pages
            </span>
            <button
              onClick={nextPage}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-white hover:border-brand hover:text-brand text-ink-muted text-sm font-semibold transition-all duration-200"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
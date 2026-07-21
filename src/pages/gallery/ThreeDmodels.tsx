import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const images = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/assets/threedmodels/${i + 1}.jpeg`,
  category: '3D Model',
}))

export function ThreeDmodels() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const open = useCallback((i: number) => setLightbox(i), [])
  const close = useCallback(() => setLightbox(null), [])
  const next = useCallback(() => {
    setLightbox(i => i !== null ? (i + 1) % images.length : 0)
  }, [])
  const prev = useCallback(() => {
    setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : 0)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden">
        <img
          src="/assets/how-we-work.jpeg"
          alt="3D Models"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(21,20,15,0.95) 0%, rgba(21,20,15,0.35) 100%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(240,180,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,180,0,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 container-main">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand" />
              <Link
                to="/gallery"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-brand hover:text-brand/70 transition-colors"
              >
                Gallery
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                3D Models
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              3D <span className="text-brand">Models</span>
            </h1>
            <p className="mt-4 text-white/50 text-base max-w-md leading-relaxed">
              Architectural 3D visualizations and renders of our projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-canvas)' }}>
        <div className="container-main">

          {/* Back + count */}
          <div className="flex items-center justify-between mb-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-brand transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Gallery
            </Link>
            <span className="text-xs text-ink-faint tracking-widest uppercase">
              {images.length} photos
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                style={{ aspectRatio: '4/3' }}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => open(i)}
              >
                <img
                  src={item.src}
                  alt={`3D Model ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                {/* Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-7 h-7">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-brand" />
                    <div className="absolute top-0 left-0 h-full w-[2px] bg-brand" />
                  </div>
                  <div className="absolute top-0 right-0 w-7 h-7">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-brand" />
                    <div className="absolute top-0 right-0 h-full w-[2px] bg-brand" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-7 h-7">
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand" />
                    <div className="absolute bottom-0 left-0 h-full w-[2px] bg-brand" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-7 h-7">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-brand" />
                    <div className="absolute bottom-0 right-0 h-full w-[2px] bg-brand" />
                  </div>

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-brand/20 backdrop-blur-sm border border-brand/40 flex items-center justify-center">
                      <Maximize2 size={15} className="text-brand" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="absolute bottom-2 right-3">
                    <span className="text-[10px] font-bold text-brand/70 tracking-widest">
                      {String(item.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[9000] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/08 transition-all"
            >
              <X size={16} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
              <span className="text-[11px] text-white/30 font-mono tracking-widest">
                {String(lightbox + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </div>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 z-10 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightbox}
                className="relative z-10 w-full max-w-5xl mx-20"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={e => e.stopPropagation()}
              >
                <div className="rounded-xl overflow-hidden ring-1 ring-white/08">
                  <img
                    src={images[lightbox].src}
                    alt={`3D Model ${images[lightbox].id}`}
                    className="w-full object-contain"
                    style={{ maxHeight: '78vh' }}
                  />
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-1.5 mt-5 flex-wrap">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      onClick={e => { e.stopPropagation(); setLightbox(i) }}
                      className="h-1 rounded-full cursor-pointer transition-all duration-300"
                      style={{
                        width: i === lightbox ? '20px' : '5px',
                        background: i === lightbox ? '#f0b400' : 'rgba(255,255,255,0.15)',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 z-10 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
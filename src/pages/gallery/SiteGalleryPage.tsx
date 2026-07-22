import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { siteGallery } from '@/data/pages'
import { Link } from 'react-router-dom'
import { ArrowLeft, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

export function SiteGalleryPage() {
  const [selected, setSelected] = useState<number | null>(null)

  const prev = () => setSelected(i => i !== null ? (i - 1 + siteGallery.length) % siteGallery.length : null)
  const next = () => setSelected(i => i !== null ? (i + 1) % siteGallery.length : null)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <img
          src="/assets/elite-warehouse-systems/elite-1.jpeg"
          alt="Site Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(21,20,15,0.85) 0%, rgba(21,20,15,0.3) 100%)' }}
        />
        <div className="relative z-10 container-main">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand" />
              <Link to="/gallery" className="text-xs font-semibold uppercase tracking-[0.22em] text-brand hover:text-brand/70 transition-colors">
                Gallery
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Site Gallery
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Site <span className="text-brand">Gallery</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-lg leading-relaxed">
              Latest photography from our construction sites and project developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <Reveal>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-brand transition-colors mb-12 group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Gallery
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteGallery.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden bg-white border border-border cursor-pointer"
                  whileHover={{ y: -4, boxShadow: '0 16px 40px -12px rgba(21,20,15,0.15)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelected(i)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      // alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-400">
                        <ZoomIn size={20} className="text-ink" />
                      </div>
                    </div>
                  </div>
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-brand rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '35%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.06 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <p className="p-4 text-sm font-semibold text-ink group-hover:text-brand transition-colors duration-300">
                    {/* {item.title} */}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-ink/90 backdrop-blur-md" />

            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-brand hover:text-black border border-white/20 flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={selected}
                src={siteGallery[selected].image}
                // alt={siteGallery[selected].title}
                className="relative z-10 max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-brand hover:text-black border border-white/20 flex items-center justify-center text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-xs text-white font-semibold tracking-widest">
                {/* {siteGallery[selected].title} · {selected + 1} / {siteGallery.length} */}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
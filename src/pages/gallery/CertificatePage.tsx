import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { certificates } from '@/data/pages'
import { ArrowLeft, X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CertificatePage() {
  const [selected, setSelected] = useState<number | null>(null)

  const prev = () => setSelected(i => i !== null ? (i - 1 + certificates.length) % certificates.length : null)
  const next = () => setSelected(i => i !== null ? (i + 1) % certificates.length : null)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <img
          src="/assets/about-us-section.jpeg"
          alt="Certificates"
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
                Certificates
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Certificates <span className="text-brand">&amp; Approvals</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-lg leading-relaxed">
              Official certifications and regulatory approvals for MAQ Builders projects.
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {certificates.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.06}>
                <motion.div
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-white border border-border"
                  style={{ boxShadow: '0 2px 12px -4px rgba(21,20,15,0.08)' }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 24px 48px -12px rgba(21,20,15,0.25), 0 0 0 1px rgba(245,184,0,0.3)',
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelected(i)}
                >
                  {/* Image */}
                  <img
                    src={cert.image}
                    alt={`Certificate ${i + 1}`}
                    className="w-full h-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Center expand icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Expand size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Corner accent line, animates in from bottom-left */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[3px] bg-brand"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '35%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.06 + 0.2 }}
                  />

                  {/* Index badge */}
                  <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-ink/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-bold text-white">{i + 1}</span>
                  </div>
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
                src={certificates[selected].image}
                alt={`Certificate ${selected + 1}`}
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
                {selected + 1} / {certificates.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
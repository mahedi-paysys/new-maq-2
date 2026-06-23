import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { galleryImages } from '@/data/pages'
import { Link } from 'react-router-dom'
import { ArrowLeft, ZoomIn } from 'lucide-react'

export function SiteGalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <img
          src="/assets/about-us-section.jpeg"
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
            {galleryImages.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden bg-white border border-border cursor-pointer"
                  whileHover={{ y: -4, boxShadow: '0 16px 40px -12px rgba(21,20,15,0.15)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
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
                    {item.title}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
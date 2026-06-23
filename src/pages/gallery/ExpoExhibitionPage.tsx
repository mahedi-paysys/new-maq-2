import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { expoItems } from '@/data/pages'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar } from 'lucide-react'

export function ExpoExhibitionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <img
          src="/assets/how-we-work.jpeg"
          alt="Expo Exhibition"
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
                Expo Exhibition
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Expo <span className="text-brand">Exhibition</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-lg leading-relaxed">
              MAQ Builders at leading construction and real estate exhibitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Items */}
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

          <div className="space-y-7">
            {expoItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <motion.div
                  className="group grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-border bg-white hover:border-brand/25 transition-colors duration-300"
                  whileHover={{ boxShadow: '0 16px 48px -12px rgba(245,184,0,0.12)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Image */}
                  <div className="relative aspect-video md:aspect-auto overflow-hidden min-h-[240px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/10" />
                    {/* Top accent */}
                    <motion.div
                      className="absolute top-0 left-0 h-[3px] bg-brand"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '50%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 md:p-10 flex flex-col justify-center overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at top right, rgba(245,184,0,0.06) 0%, transparent 65%)' }}
                    />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
                          <Calendar size={13} className="text-brand" />
                        </div>
                        <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">
                          {item.date}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-ink mb-3 group-hover:text-brand transition-colors duration-300">
                        {item.title}
                      </h2>
                      <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
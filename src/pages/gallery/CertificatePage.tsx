import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { certificates } from '@/data/pages'
import { Award, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CertificatePage() {
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

      {/* Cards */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.1}>
                <motion.div
                  className="group relative p-8 rounded-3xl bg-white border border-border overflow-hidden cursor-default text-center"
                  whileHover={{ y: -8, boxShadow: '0 20px 48px -12px rgba(245,184,0,0.15)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at top center, rgba(245,184,0,0.08) 0%, transparent 65%)' }}
                  />
                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-transparent via-brand to-transparent rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand/20 group-hover:border-brand/40 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award size={26} className="text-brand" />
                    </motion.div>

                    {/* Year badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
                      {cert.year}
                    </span>

                    <h2 className="text-lg font-bold text-ink mb-2 group-hover:text-brand transition-colors duration-300">
                      {cert.title}
                    </h2>
                    <p className="text-sm text-ink-muted">{cert.issuer}</p>
                  </div>

                  {/* Bottom shimmer */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(245,184,0,0.4), transparent)' }}
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
import { motion } from 'framer-motion'
import { Download, MapPin, ArrowRight } from 'lucide-react'
import { warehouseFeatures } from '@/data/content'
import { Reveal } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function EliteWarehousePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80&auto=format&fit=crop"
          alt="Elite Warehouse Systems"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 container-main pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Upcoming Project
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl">
              Elite Warehouse Systems
            </h1>
            <p className="mt-6 text-white/65 text-lg max-w-2xl leading-relaxed">
              Pakistan's first and finest warehouse system — SBCA & LDA approved, setting a spectacular industrial solution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="brand" icon={<Download size={16} />} iconPosition="left">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                What is Elite Warehouse Systems?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight mb-4 max-w-2xl">
              Industrial Excellence <span className="text-brand">Redefined</span>
            </h2>
            <p className="text-ink-muted text-[15px] max-w-xl leading-relaxed mb-16">
              The biggest construction in the real world — planned with distinctive and state-of-the-art industrial amenities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warehouseFeatures.map((feature, i) => (
              <Reveal key={feature.id} delay={i * 0.08}>
                <motion.div
                  className="group relative p-8 rounded-3xl bg-white border border-border overflow-hidden h-full cursor-default"
                  whileHover={{ y: -6, boxShadow: '0 16px 40px -12px rgba(245,184,0,0.15)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at top left, rgba(245,184,0,0.07) 0%, transparent 60%)' }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 h-[2px] bg-brand rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '35%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="relative">
                    <span className="block text-4xl font-bold text-brand/15 mb-4 font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-bold text-ink mb-3 group-hover:text-brand transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{feature.description}</p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(245,184,0,0.35), transparent)' }}
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  Location
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Strategically <span className="text-brand">Positioned</span>
              </h2>
              <p className="text-white/65 leading-relaxed text-[15px] mb-8">
                Situated at M-10 motorway, just 20 minutes from Karachi Port. The starting point of CPEC linking the center way towards Gawadar, Quetta & Punjab — an ideal landmark for industrial and logistics operations.
              </p>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.05] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-brand" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Address</span>
                  <span className="text-white/80 text-sm font-medium">M-10 Motorway, Karachi, Pakistan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80&auto=format&fit=crop"
                    alt="Location map"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
                <motion.div
                  className="absolute top-0 left-0 h-[3px] bg-brand"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '45%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { saleFeatures } from '@/data/pages'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function EliteWarehouseSalePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src="/assets/elite-warehouse-systems/eliteforsale.jpeg"
          alt="Elite Warehouse For Sale"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0"
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
              <Link to="/services" className="text-xs font-semibold uppercase tracking-[0.22em] text-brand hover:text-brand/70 transition-colors">
                Services
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                For Sale
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
              Elite Warehouse <span className="text-brand">For Sale</span>
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-lg leading-relaxed">
              Invest in freehold industrial units at the CPEC starting point — 28 warehouses across 8 acres of prime land.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Image */}
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/assets/elite-warehouse-systems/eliteforsale.jpeg"
                    alt="Elite Warehouse For Sale"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent pointer-events-none" />
                {/* Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                    <span className="text-sm text-white font-medium">SBCA & LDA Approved — CPEC Corridor</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Features */}
            <Reveal delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    Ownership Benefits
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-8">
                  Why <span className="text-brand">Buy</span> With Us
                </h2>

                <ul className="space-y-3 mb-10">
                  {saleFeatures.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-border hover:border-brand/25 hover:bg-brand/[0.03] transition-all duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand/20 transition-colors duration-300">
                        <Check size={13} className="text-brand" />
                      </div>
                      <span className="text-sm text-ink-muted leading-relaxed group-hover:text-ink transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Button to="/contact" variant="brand" icon={<ArrowRight size={16} />}>
                    Inquire About Purchase
                  </Button>
                  <Button to="/services" variant="outline">
                    Back to Services
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
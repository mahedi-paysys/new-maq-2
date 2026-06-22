import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { offerings } from '@/data/content'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Building2, Layers } from 'lucide-react'

const services = [
  {
    title: 'Elite Warehouse Systems For Rental',
    href: '/services/elite-warehouse-rental',
    description: 'Flexible warehousing solutions with dedicated office space, 24/7 security and smart app integration.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop',
    tag: 'Rental',
  },
  {
    title: 'Elite Warehouse Systems For Sale',
    href: '/services/elite-warehouse-sale',
    description: 'Own premium industrial units at CPEC corridor with SBCA & LDA approved freehold ownership.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
    tag: 'For Sale',
  },
]

export function ServicesPage() {
  return (
    <>
      {/* ─── HERO with image overlay ─── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/how-we-work.jpeg"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(21,20,15,0.3) 0%, rgba(21,20,15,0.7) 100%)' }}
        />
        <div className="relative z-10 container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Services
              </span>
              <div className="w-8 h-px bg-brand" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Our <span className="text-brand">Services</span>
            </h1>
            <p className="mt-5 text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
              Comprehensive warehousing and industrial development solutions by MAQ Builders & Developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE CARDS with images ─── */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-24">
            {services.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.href} delay={i * 0.12}>
                  <Link to={item.href} className="group block relative rounded-3xl overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Base gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  
                      {/* Tag badge */}
                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1.5 rounded-full bg-brand text-black text-[11px] font-bold uppercase tracking-[0.12em]">
                          {item.tag}
                        </span>
                      </div>

                      {/* Arrow icon */}
                      <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                        <ArrowUpRight size={15} className="text-white group-hover:text-black" />
                      </div>
                    </div>

                    {/* Content below image */}
                    <div className="relative p-7 bg-white border border-border border-t-0 rounded-b-3xl group-hover:border-brand/20 transition-colors duration-300">
                      {/* Hover glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-b-3xl"
                        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(245,184,0,0.06) 0%, transparent 65%)' }}
                      />
                      <div className="relative flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
                          <Icon size={19} className="text-brand" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-ink mb-2 group-hover:text-brand transition-colors duration-300">
                            {item.title}
                          </h2>
                          <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
                          <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-brand">
                            View Details
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>

          {/* ─── WHAT WE OFFER ─── */}
          <div className="mb-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  What We Offer
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink">
                Everything Under One Roof
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.07}>
                <motion.div
                  className="group relative p-7 rounded-2xl bg-white border border-border overflow-hidden cursor-default h-full"
                  whileHover={{ y: -6, boxShadow: '0 16px 40px -12px rgba(245,184,0,0.15)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at top left, rgba(245,184,0,0.07) 0%, transparent 60%)' }}
                  />
                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-0 h-[2px] bg-brand rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '35%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.07 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="relative">
                    {/* Number */}
                    <span className="text-[11px] font-bold text-brand/50 tracking-[0.2em] font-mono mb-4 block">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-bold text-ink mb-3 group-hover:text-brand transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
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
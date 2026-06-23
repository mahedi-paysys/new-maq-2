import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, Award, Presentation } from 'lucide-react'

const sections = [
  {
    title: 'Site Gallery',
    href: '/gallery/site-gallery',
    description: 'Construction progress, aerial views and on-site photography of our projects.',
    icon: Camera,
    image: '/assets/about-us-section.jpeg',
    tag: 'Photography',
    count: 'Project Photos',
  },
  {
    title: 'Expo Exhibition',
    href: '/gallery/expo-exhibition',
    description: 'MAQ Builders at industry exhibitions and real estate summits across Pakistan.',
    icon: Presentation,
    image: '/assets/how-we-work.jpeg',
    tag: 'Exhibitions',
    count: 'Industry Events',
  },
  {
    title: 'Certificates',
    href: '/gallery/certificate',
    description: 'SBCA, LDA approvals and quality certifications for all our projects.',
    icon: Award,
    image: '/assets/about-us-section.jpeg',
    tag: 'Approvals',
    count: 'Certifications',
  },
]

export function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src="/assets/how-we-work.jpeg"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(21,20,15,0.3) 0%, rgba(21,20,15,0.75) 100%)' }}
        />
        <div className="relative z-10 container-main">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Gallery
              </span>
              <div className="w-8 h-px bg-brand" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Our <span className="text-brand">Gallery</span>
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-xl leading-relaxed">
              Explore our latest projects, exhibitions and certifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {sections.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.href} delay={i * 0.12}>
                  <Link to={item.href} className="group block relative rounded-3xl overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                      {/* Tag */}
                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1.5 rounded-full bg-brand text-black text-[11px] font-bold uppercase tracking-[0.12em]">
                          {item.tag}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                        <ArrowUpRight size={15} className="text-white group-hover:text-black" />
                      </div>

                      {/* Icon bottom left */}
                      <div className="absolute bottom-5 left-5">
                        <div className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center">
                          <Icon size={18} className="text-brand" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 bg-white border border-border border-t-0 rounded-b-3xl group-hover:border-brand/20 transition-colors duration-300 overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-b-3xl"
                        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(245,184,0,0.06) 0%, transparent 65%)' }}
                      />
                      {/* Top accent line */}
                      <motion.div
                        className="absolute top-0 left-0 h-[2px] bg-brand rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '40%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                      <div className="relative">
                        <h2 className="text-lg font-bold text-ink mb-2 group-hover:text-brand transition-colors duration-300">
                          {item.title}
                        </h2>
                        <p className="text-sm text-ink-muted leading-relaxed mb-4">{item.description}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                          Explore
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
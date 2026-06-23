import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { upcomingProjectsList } from '@/data/pages'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin } from 'lucide-react'

export function UpcomingProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop"
          alt="Upcoming Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
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
              <Link to="/projects" className="text-xs font-semibold uppercase tracking-[0.22em] text-brand hover:text-brand/70 transition-colors">
                Projects
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Upcoming
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Upcoming <span className="text-brand">Projects</span>
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-lg leading-relaxed">
              Explore MAQ Builders upcoming developments across hospitality, commercial and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* List */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-brand transition-colors mb-12 group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Projects
            </Link>
          </Reveal>

          <div className="space-y-7">
            {upcomingProjectsList.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <motion.div
                  className="group grid grid-cols-1 md:grid-cols-5 rounded-3xl overflow-hidden border border-border bg-white hover:border-brand/25 transition-colors duration-300"
                  whileHover={{ boxShadow: '0 16px 48px -12px rgba(245,184,0,0.12)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Image */}
                  <div className="md:col-span-2 relative overflow-hidden min-h-[240px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/10" />
                    <motion.div
                      className="absolute top-0 left-0 h-[3px] bg-brand"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '50%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {/* Status badge on image */}
                    <div className="absolute bottom-5 left-5">
                      <span className="px-3 py-1.5 rounded-full bg-brand text-black text-[11px] font-bold uppercase tracking-[0.1em]">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 relative p-8 md:p-10 flex flex-col justify-center overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at top right, rgba(245,184,0,0.06) 0%, transparent 65%)' }}
                    />
                    <div className="relative">
                      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 group-hover:text-brand transition-colors duration-300">
                        {project.title}
                      </h2>
                      {project.location && (
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin size={13} className="text-brand shrink-0" />
                          <span className="text-sm text-ink-muted">{project.location}</span>
                        </div>
                      )}
                      <p className="text-sm text-ink-muted leading-relaxed">{project.description}</p>
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
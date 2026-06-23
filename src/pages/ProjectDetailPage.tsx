import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Building, ArrowUpRight } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/AnimatedSection'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/projects" replace />

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(21,20,15,0.92) 0%, rgba(21,20,15,0.2) 60%, transparent 100%)' }}
        />
        <div className="relative z-10 container-main pb-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-brand transition-colors mb-6 group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-brand text-black text-[11px] font-bold uppercase tracking-[0.12em] capitalize">
                {project.status.replace('-', ' ')}
              </span>
              <span className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Description */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    About Project
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-ink mb-6 leading-tight">
                  Project Overview
                </h2>
                <p className="text-ink-muted leading-relaxed text-[16px]">
                  {project.description}
                </p>
              </Reveal>
            </div>

            {/* Info card */}
            <Reveal delay={0.15}>
              <motion.div
                className="group relative p-8 rounded-3xl bg-white border border-border overflow-hidden"
                whileHover={{ boxShadow: '0 16px 48px -12px rgba(245,184,0,0.12)' }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top right, rgba(245,184,0,0.06) 0%, transparent 65%)' }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-[3px] bg-brand rounded-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '50%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="relative space-y-5 mb-8">
                  {project.location && (
                    <div className="flex gap-4 p-3 rounded-xl hover:bg-canvas transition-colors duration-200">
                      <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center shrink-0">
                        <MapPin size={15} className="text-brand" />
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-faint mb-1">Location</span>
                        <span className="text-sm font-medium text-ink">{project.location}</span>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-4 p-3 rounded-xl hover:bg-canvas transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center shrink-0">
                      <Calendar size={15} className="text-brand" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-faint mb-1">Year</span>
                      <span className="text-sm font-medium text-ink">{project.year}</span>
                    </div>
                  </div>
                  {project.architecture && (
                    <div className="flex gap-4 p-3 rounded-xl hover:bg-canvas transition-colors duration-200">
                      <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center shrink-0">
                        <Building size={15} className="text-brand" />
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-faint mb-1">Architecture</span>
                        <span className="text-sm font-medium text-ink">{project.architecture}</span>
                      </div>
                    </div>
                  )}
                </div>
                <Button to="/contact" className="w-full" variant="brand">
                  Inquire About This Project
                </Button>
              </motion.div>
            </Reveal>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-24">
              <Reveal>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    More Projects
                  </span>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {related.map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.1}>
                    <Link to={`/projects/${p.slug}`} className="group block relative rounded-3xl overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                          <ArrowUpRight size={15} className="text-white group-hover:text-black" />
                        </div>
                      </div>
                      <div className="relative p-5 bg-white border border-border border-t-0 rounded-b-3xl group-hover:border-brand/20 transition-colors duration-300">
                        <motion.div
                          className="absolute top-0 left-0 h-[2px] bg-brand rounded-full"
                          initial={{ width: '0%' }}
                          whileInView={{ width: '35%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: i * 0.1 + 0.2 }}
                        />
                        <h3 className="text-base font-bold text-ink group-hover:text-brand transition-colors duration-300">
                          {p.title}
                        </h3>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
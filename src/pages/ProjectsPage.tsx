import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects, projectCategories } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { ProjectCategory } from '@/types'

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop"
          alt="Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(21,20,15,0.3) 0%, rgba(21,20,15,0.8) 100%)' }}
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
                Portfolio
              </span>
              <div className="w-8 h-px bg-brand" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Our <span className="text-brand">Projects</span>
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-xl leading-relaxed">
              A curated collection of our latest and recent projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 md:py-28">
        <div className="container-main">

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap gap-2 mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                  activeCategory === cat.value
                    ? 'bg-ink text-white shadow-md'
                    : 'bg-white text-ink-muted hover:text-ink border border-border hover:border-ink/20'
                )}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group"
                >
                  <Link to={`/projects/${project.slug}`} className="block relative rounded-3xl overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                      {/* Status badge */}
                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-ink uppercase tracking-[0.1em] capitalize">
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                        <ArrowUpRight size={15} className="text-white group-hover:text-black" />
                      </div>

                      {/* Category bottom left */}
                      <div className="absolute bottom-5 left-5">
                        <span className="text-[10px] font-bold text-brand/80 uppercase tracking-[0.2em]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 bg-white border border-border border-t-0 rounded-b-3xl group-hover:border-brand/20 transition-colors duration-300 overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(245,184,0,0.06) 0%, transparent 65%)' }}
                      />
                      <motion.div
                        className="absolute top-0 left-0 h-[2px] bg-brand rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '40%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.06 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                      <div className="relative">
                        <h2 className="text-lg font-bold text-ink mb-2 group-hover:text-brand transition-colors duration-300">
                          {project.title}
                        </h2>
                        <p className="text-sm text-ink-muted line-clamp-2 leading-relaxed mb-4">
                          {project.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                          View Project
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}
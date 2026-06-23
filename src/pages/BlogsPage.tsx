import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { blogPosts } from '@/data/pages'
import { ArrowUpRight } from 'lucide-react'

export function BlogsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=80&auto=format&fit=crop"
          alt="Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 container-main">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Blog
              </span>
              <div className="w-8 h-px bg-brand" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Latest <span className="text-brand">News</span> &amp; Updates
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-xl leading-relaxed">
              Stay informed with MAQ Builders news, project updates and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.08} className="h-full">
                <motion.article
                  className="group relative rounded-3xl overflow-hidden flex flex-col cursor-pointer h-full"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />

                    {/* Date badge on image */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1.5 rounded-full bg-brand text-black text-[11px] font-bold uppercase tracking-[0.1em]">
                        {post.date}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                      <ArrowUpRight size={15} className="text-white group-hover:text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col flex-1 p-6 bg-white border border-border border-t-0 rounded-b-3xl group-hover:border-brand/20 transition-colors duration-300 overflow-hidden">
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at bottom left, rgba(245,184,0,0.06) 0%, transparent 65%)' }}
                    />
                    {/* Top accent line */}
                    <motion.div
                      className="absolute top-0 left-0 h-[2px] bg-brand rounded-full"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '40%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="relative flex flex-col flex-1">
                      <h2 className="text-lg font-bold text-ink mb-3 group-hover:text-brand transition-colors duration-300 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-ink-muted leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-brand">
                        Read More
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
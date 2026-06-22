import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
import { Download, ArrowRight } from 'lucide-react'
import {
  ceoMessage,
  companyProfile,
  mission,
  vision,
  principles,
  // offerings,
} from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function AboutPage() {
  return (
    <div className="pt-36 md:pt-40">
      <section className="container-main pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              About Us
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-ink max-w-3xl leading-[1.05] tracking-tight">
            Building Integrity,{' '}
            <span className="text-brand">One Project</span>{' '}
            at a Time
          </h1>
          <p className="mt-6 text-ink-muted text-lg max-w-xl leading-relaxed">
            Founded in 2019, MAQ GROUP OF COMPANIES has become Pakistan's trusted name in precision construction and sustainable development.
          </p>
        </motion.div>
      </section>

      <section className="container-main pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <motion.img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop"
                alt="MAQ Builders construction site"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 bg-black/50 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                <span className="text-sm text-white font-medium">Est. 2019 — Karachi, Pakistan</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                CEO Message
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
              Muhammad Asim Qureshi
            </h2>
            <p className="mt-2 text-sm text-ink-faint tracking-wide">Chief Executive Officer</p>
            <div className="w-12 h-px bg-brand/40 my-6" />
            <div className="mt-0 space-y-4 text-ink-muted leading-relaxed text-[15px]">
              {ceoMessage.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-border">
        <div className="container-main">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Our Foundation
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Mission */}
  <Reveal>
    <motion.div
      className="group relative p-8 rounded-3xl border border-border bg-white h-full cursor-default overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated bg glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(245,184,0,0.08) 0%, transparent 65%)',
        }}
      />
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand to-brand/30 rounded-full"
        initial={{ width: '0%' }}
        whileInView={{ width: '40%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/15 flex items-center justify-center group-hover:bg-brand/20 group-hover:border-brand/30 transition-all duration-300">
            <span className="text-brand font-bold text-base font-mono">01</span>
          </div>
          <div className="h-px flex-1 bg-border group-hover:bg-brand/20 transition-colors duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-brand transition-colors duration-300">
          Mission
        </h3>
        <p className="text-ink-muted text-sm leading-relaxed">{mission}</p>
      </div>
      {/* Bottom shadow on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,184,0,0.3), transparent)' }}
      />
    </motion.div>
  </Reveal>

  {/* Vision */}
  <Reveal delay={0.12}>
    <motion.div
      className="group relative p-8 rounded-3xl border border-border bg-white h-full cursor-default overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(245,184,0,0.08) 0%, transparent 65%)',
        }}
      />
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand to-brand/30 rounded-full"
        initial={{ width: '0%' }}
        whileInView={{ width: '40%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/15 flex items-center justify-center group-hover:bg-brand/20 group-hover:border-brand/30 transition-all duration-300">
            <span className="text-brand font-bold text-base font-mono">02</span>
          </div>
          <div className="h-px flex-1 bg-border group-hover:bg-brand/20 transition-colors duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-brand transition-colors duration-300">
          Vision
        </h3>
        <p className="text-ink-muted text-sm leading-relaxed">{vision}</p>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,184,0,0.3), transparent)' }}
      />
    </motion.div>
  </Reveal>

  {/* Principles — dark card */}
  <Reveal delay={0.24}>
    <motion.div
      className="group relative p-8 rounded-3xl bg-ink h-full cursor-default overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated corner glow */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full transition-all duration-700 group-hover:scale-150"
        style={{ background: 'radial-gradient(circle, rgba(245,184,0,0.18) 0%, transparent 65%)' }}
      />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 32px)',
        }}
      />
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand to-brand/20 rounded-full"
        initial={{ width: '0%' }}
        whileInView={{ width: '50%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-black font-bold text-base font-mono">03</span>
          </div>
          <div className="h-px flex-1 bg-white/10 group-hover:bg-brand/30 transition-colors duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Principles
        </h3>
        <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
          {principles}
        </p>
      </div>
      {/* Bottom glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,184,0,0.5), transparent)' }}
      />
    </motion.div>
  </Reveal>
</div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border">
        <div className="container-main">
          <SectionHeading
            eyebrow="Company Profile"
            title="We Construct Your Future"
            subtitle={companyProfile}
            className="mb-14 max-w-2xl"
          />
          <div className="flex flex-wrap gap-4">
            <Button icon={<Download size={18} />} iconPosition="left">
              Download Company Profile
            </Button>
            <Button to="/projects" variant="outline" icon={<ArrowRight size={18} />}>
              View Our Projects
            </Button>
          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-surface border-t border-ink/8">
        <div className="container-main">
          <SectionHeading
            eyebrow="Best Features"
            title="Why Choose MAQ Builders"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.slice(0, 3).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <div className="p-8 rounded-2xl card-dark">
                  <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 border-t border-border">
        <div className="container-main flex flex-wrap gap-4">
          <Link
            to="/about/company-profile"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Company Profile →
          </Link>
          <Link
            to="/about/leadership"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Leadership →
          </Link>
          <Link
            to="/about/mission-vision"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Mission & Vision →
          </Link>
        </div>
      </section> */}
    </div>
  )
}

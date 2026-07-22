import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '@/components/ui/AnimatedSection'
import { expoItems } from '@/data/pages'
import { Link } from 'react-router-dom'
import { ArrowLeft, X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'

export function ExpoExhibitionPage() {
  const [selected, setSelected] = useState<number | null>(null)

  // group items by location, preserving order
  const groups = useMemo(() => {
    const map = new Map<string, typeof expoItems>()
    expoItems.forEach(item => {
      const key = item.location ?? 'Expo'
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(item)
    })
    return Array.from(map.entries())
  }, [])

  const prev = () => setSelected(i => i !== null ? (i - 1 + expoItems.length) % expoItems.length : null)
  const next = () => setSelected(i => i !== null ? (i + 1) % expoItems.length : null)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden">
        <img
          src="/assets/elite-warehouse-systems/w10.jpeg"
          alt="Expo Exhibition"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
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
                Expo Exhibition
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Expo <span className="text-brand">Exhibition</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <Reveal>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-brand transition-colors mb-16 group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Gallery
            </Link>
          </Reveal>

          {groups.map(([groupName, items], groupIndex) => {
            // find the global index of each item (for lightbox nav across groups)
            const startIndex = groups
              .slice(0, groupIndex)
              .reduce((sum, [, g]) => sum + g.length, 0)

            return (
              <div key={groupName} className={groupIndex > 0 ? 'mt-20' : ''}>
                <Reveal>
                  <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
                      {groupName}
                    </h2>
                    <div className="flex-1 h-px bg-ink/10" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      {items.length} Photos
                    </span>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, i) => {
                    const globalIndex = startIndex + i
                    return (
                      <Reveal key={item.id} delay={i * 0.08}>
                        <motion.div
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500"
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => setSelected(globalIndex)}
                        >
                          <img
                            src={item.image}
                            alt={`${groupName} ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* gradient + overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                              <Expand size={18} className="text-white" />
                            </div>
                          </div>
                          {/* corner accent */}
                          <div className="absolute top-0 left-0 w-0 h-[3px] bg-brand group-hover:w-full transition-all duration-500" />
                        </motion.div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-ink/90 backdrop-blur-md" />

            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-brand hover:text-black border border-white/20 flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={selected}
                src={expoItems[selected].image}
                alt={`Expo ${selected + 1}`}
                className="relative z-10 max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-brand hover:text-black border border-white/20 flex items-center justify-center text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-xs text-white font-semibold tracking-widest">
                {expoItems[selected].location} · {selected + 1} / {expoItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
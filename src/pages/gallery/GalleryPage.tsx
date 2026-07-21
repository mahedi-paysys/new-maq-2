import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// const galleryItems = [
//   { id: 1, 
//     src: '/assets/elite-warehouse-systems/w1.jpeg', 
//     title: 'Elite Warehouse – Aerial View', 
//     category: 'Warehouse' },
//   { id: 2, src: '/assets/elite-warehouse-systems/w2.jpeg', title: 'Site Overview', category: 'Warehouse' },
//   { id: 3, src: '/assets/elite-warehouse-systems/w3.jpeg', title: 'Aerial Perspective', category: 'Warehouse' },
//   { id: 4, src: '/assets/elite-warehouse-systems/w4.jpeg', title: 'Night View – Warehouse', category: 'Warehouse' },
//   { id: 5, src: '/assets/elite-warehouse-systems/w5.jpeg', title: 'Office Tower – Night', category: 'Warehouse' },
//   { id: 6, src: '/assets/elite-warehouse-systems/w6.jpeg', title: 'Warehouse Structure', category: 'Warehouse' },
//   { id: 7, src: '/assets/elite-warehouse-systems/w7.jpeg', title: 'Elite Warehouse – Front', category: 'Warehouse' },
//   { id: 8, src: '/assets/elite-warehouse-systems/w8.jpeg', title: 'Site Overview 2', category: 'Warehouse' },
//   { id: 9, src: '/assets/elite-warehouse-systems/w9.jpeg', title: 'Aerial Perspective 2', category: 'Warehouse' },
//   { id: 10, src: '/assets/elite-warehouse-systems/w10.jpeg', title: 'Night View 2', category: 'Warehouse' },
//   { id: 11, src: '/assets/elite-warehouse-systems/w11.jpeg', title: 'Office Tower 2', category: 'Warehouse' },
//   { id: 12, src: '/assets/elite-warehouse-systems/w12.jpeg', title: 'Warehouse – Wide View', category: 'Warehouse' },
//   { id: 13, src: '/assets/elite-warehouse-systems/w13.jpeg', title: 'Site Overview 3', category: 'Warehouse' },
//   { id: 14, src: '/assets/elite-warehouse-systems/w14.jpeg', title: 'Aerial Perspective 3', category: 'Warehouse' },
//   { id: 15, src: '/assets/elite-warehouse-systems/w15.jpeg', title: 'Night View 3', category: 'Warehouse' },
//   { id: 16, src: '/assets/nightshots/n1.jpeg', title: 'Office Tower 3', category: 'Night Shots' },
//   { id: 17, src: '/assets/nightshots/n2.jpeg', title: 'Warehouse Structure 2', category: 'Night Shots' },
//   { id: 18, src: '/assets/nightshots/n3.jpeg', title: 'Elite Warehouse – Aerial View 2', category: 'Night Shots' },
//   { id: 19, src: '/assets/nightshots/n4.jpeg', title: 'Site Overview 4', category: 'Night Shots' },
//   { id: 20, src: '/assets/nightshots/n5.jpeg', title: 'Aerial Perspective 4', category: 'Night Shots' },
//   { id: 21, src: '/assets/nightshots/n6.jpeg', title: 'Night View 4', category: 'Night Shots' },
//   { id: 22, src: '/assets/nightshots/n7.jpeg', title: 'Office Tower 4', category: 'Night Shots' },
//   { id: 23, src: '/assets/nightshots/n8.jpeg', title: 'Warehouse Structure 3', category: 'Night Shots' },
//   { id: 24, src: '/assets/nightshots/n9.jpeg', title: 'Elite Warehouse – Aerial View 3', category: 'Night Shots' },
//   { id: 25, src: '/assets/nightshots/n10.jpeg', title: 'Site Overview 5', category: 'Night Shots' },
//   { id: 26, src: '/assets/nightshots/n11.jpeg', title: 'Aerial Perspective 5', category: 'Night Shots' },
//   { id: 27, src: '/assets/structure/s1.jpeg', title: 'Night View 5', category: 'Structure' },
//   { id: 28, src: '/assets/structure/s2.jpeg', title: 'Office Tower 4', category: 'Structure' },
//   { id: 29, src: '/assets/structure/s3.jpeg', title: 'Warehouse Structure 3', category: 'Structure' },
//   { id: 30, src: '/assets/structure/s4.jpeg', title: 'Elite Warehouse – Aerial View 3', category: 'Structure' },
//   { id: 31, src: '/assets/structure/s5.jpeg', title: 'Site Overview 5', category: 'Structure' },
//   { id: 32, src: '/assets/structure/s6.jpeg', title: 'Aerial Perspective 5', category: 'Structure' },

// ]


const galleryItems = [
  {
    id: 1,
    src: '/assets/elite-warehouse-systems/w1.jpeg',
    // title: 'Elite Warehouse – Aerial View',
    category: 'Warehouse',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: '/assets/elite-warehouse-systems/w2.jpeg',
    // title: 'Site Overview',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: '/assets/elite-warehouse-systems/w3.jpeg',
    // title: 'Aerial Perspective',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: '/assets/elite-warehouse-systems/w4.jpeg',
    // title: 'Night View – Warehouse',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    src: '/assets/elite-warehouse-systems/w5.jpeg',
    // title: 'Office Tower – Night',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: '/assets/elite-warehouse-systems/w6.jpeg',
    // title: 'Warehouse Structure',
    category: 'Warehouse',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 7,
    src: '/assets/elite-warehouse-systems/w7.jpeg',
    // title: 'Elite Warehouse – Aerial View',
    category: 'Warehouse',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 8,
    src: '/assets/elite-warehouse-systems/w8.jpeg',
    // title: 'Site Overview',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 9,
    src: '/assets/elite-warehouse-systems/w9.jpeg',
    // title: 'Aerial Perspective',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 10,
    src: '/assets/elite-warehouse-systems/w10.jpeg',
    // title: 'Night View – Warehouse',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 11,
    src: '/assets/elite-warehouse-systems/w11.jpeg',
    // title: 'Office Tower – Night',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 12,
    src: '/assets/elite-warehouse-systems/w12.jpeg',
    // title: 'Elite Warehouse – Aerial View',
    category: 'Warehouse',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 13,
    src: '/assets/elite-warehouse-systems/w13.jpeg',
    // title: 'Site Overview',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 14,
    src: '/assets/elite-warehouse-systems/w14.jpeg',
    // title: 'Aerial Perspective',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 15,
    src: '/assets/elite-warehouse-systems/w15.jpeg',
    // title: 'Night View – Warehouse',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 16, src: '/assets/nightshots/n1.jpeg',
    // title: 'Office Tower 3',
    category: 'Night Shots',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 17,
    src: '/assets/nightshots/n2.jpeg',
    // title: 'Warehouse Structure 2',
    category: 'Night Shots',
    span: 'col-span-1 row-span-1'
  },
  { id: 18, 
    src: '/assets/nightshots/n3.jpeg', 
    // title: 'Elite Warehouse – Aerial View 2', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 19, 
    src: '/assets/nightshots/n4.jpeg', 
    // title: 'Site Overview 4', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 20, 
    src: '/assets/nightshots/n5.jpeg', 
    // title: 'Aerial Perspective 4', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 21, 
    src: '/assets/nightshots/n6.jpeg', 
    // title: 'Night View 4', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 22, 
    src: '/assets/nightshots/n7.jpeg', 
    // title: 'Office Tower 4', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 23, 
    src: '/assets/nightshots/n8.jpeg', 
    // title: 'Warehouse Structure 3', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 24, 
    src: '/assets/nightshots/n9.jpeg', 
    // title: 'Elite Warehouse – Aerial View 3', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 25, 
    src: '/assets/nightshots/n10.jpeg', 
    // title: 'Site Overview 5', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 26, 
    src: '/assets/nightshots/n11.jpeg', 
    // title: 'Aerial Perspective 5', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 27, 
    src: '/assets/nightshots/n12.jpeg', 
    // title: 'Night View 5', 
    category: 'Night Shots', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 28, 
    src: '/assets/structure/s1.jpeg', 
    // title: 'Site Overview 6', 
    category: 'Structure', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 29, 
    src: '/assets/structure/s2.jpeg', 
    // title: 'Warehouse Structure 4', 
    category: 'Structure', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 30, 
    src: '/assets/structure/s3.jpeg', 
    // title: 'Elite Warehouse – Aerial View 4', 
    category: 'Structure', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 31, 
    src: '/assets/structure/s4.jpeg', 
    // title: 'Site Overview 7', 
    category: 'Structure', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 32, 
    src: '/assets/structure/s5.jpeg', 
    // title: 'Aerial Perspective 6', 
    category: 'Structure', 
    span: 'col-span-1 row-span-1' 
  },
  { id: 33, 
    src: '/assets/structure/s6.jpeg', 
    // title: 'Night View 6', 
    category: 'Structure', 
    span: 'col-span-1 row-span-1' 
  },

]

const categories = ['All', 'Warehouse', 'Night Shots', 'Structure']

export function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active)

  const open = useCallback((i: number) => setLightbox(i), [])
  const close = useCallback(() => setLightbox(null), [])
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % filtered.length : 0), [filtered.length])
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : 0), [filtered.length])

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src="/assets/how-we-work.jpeg"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(21,20,15,0.2) 0%, rgba(21,20,15,0.8) 100%)' }} />
        <div className="relative z-10 container-main">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Gallery</span>
              <div className="w-8 h-px bg-brand" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Our <span className="text-brand">Gallery</span>
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-xl leading-relaxed">
              Explore our projects, construction progress and site photography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-surface)' }}>
        <div className="container-main">

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                  active === cat
                    ? 'bg-brand text-black border-brand'
                    : 'border-ink/15 text-ink-muted hover:text-ink hover:border-ink/30 bg-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs text-ink-faint self-center">
              {filtered.length} photos
            </span>
          </motion.div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => open(i)}
                >
                  <img
                    src={item.src}
                    // alt={item.title}
                    className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/45 transition-all duration-400" />

                  {/* Top accent */}
                  <div className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-2/5 bg-brand transition-all duration-500 rounded-full" />

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <ZoomIn size={16} />
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="px-5 py-5 pt-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}>
                      <span className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-brand/20 border border-brand/30 text-brand mb-2">
                        {item.category}
                      </span>
                      {/* <p className="text-sm font-semibold text-white leading-snug">{item.title}</p> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[9000] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 z-10 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightbox}
                className="relative z-10 w-full max-w-5xl mx-16"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={e => e.stopPropagation()}
              >
                {/* Info bar */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-brand">{filtered[lightbox].category}</p>
                    {/* <h3 className="text-white font-semibold">{filtered[lightbox].title}</h3> */}
                  </div>
                  <span className="text-xs text-white/30 font-mono">
                    {String(lightbox + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden ring-1 ring-white/08">
                  <img
                    src={filtered[lightbox].src}
                    // alt={filtered[lightbox].title}
                    className="w-full object-contain"
                    style={{ maxHeight: '70vh' }}
                  />
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-1.5 mt-5">
                  {filtered.map((_, i) => (
                    <div
                      key={i}
                      onClick={e => { e.stopPropagation(); setLightbox(i) }}
                      className="h-1 rounded-full cursor-pointer transition-all duration-300"
                      style={{
                        width: i === lightbox ? '24px' : '6px',
                        background: i === lightbox ? '#f0b400' : 'rgba(255,255,255,0.2)',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 z-10 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
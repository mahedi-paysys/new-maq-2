import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { siteConfig } from '@/data/content'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/AnimatedSection'

const contactCards = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: siteConfig.address,
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: [siteConfig.phone, siteConfig.phoneAlt],
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=80&auto=format&fit=crop"
          alt="Contact"
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
                Contact
              </span>
              <div className="w-8 h-px bg-brand" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Get in <span className="text-brand">Touch</span>
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-xl leading-relaxed">
              Always dedicated and devoted — reach out and our team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards + Form */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Left — contact cards */}
            <div className="lg:col-span-2 space-y-5">
              {contactCards.map((card, i) => {
                const Icon = card.icon
                const inner = (
                  <motion.div
                    className="group relative p-7 rounded-3xl bg-white border border-border overflow-hidden hover:border-brand/25 transition-colors duration-300"
                    whileHover={{ y: -4, boxShadow: '0 16px 40px -12px rgba(245,184,0,0.12)' }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at top left, rgba(245,184,0,0.07) 0%, transparent 65%)' }}
                    />
                    {/* Top accent */}
                    <motion.div
                      className="absolute top-0 left-0 h-[2px] bg-brand rounded-full"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '35%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="relative flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-ink flex items-center justify-center shrink-0 group-hover:bg-brand transition-all duration-300 shadow-md">
                        <Icon size={19} className="text-brand group-hover:text-black transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-faint mb-2">
                          {card.label}
                        </p>
                        {'lines' in card && card.lines ? (
                          card.lines.map((line, j) => (
                            <p key={j} className="text-sm text-ink-muted leading-relaxed group-hover:text-ink transition-colors duration-200">
                              {line}
                            </p>
                          ))
                        ) : (
                          <p className="text-sm text-ink-muted leading-relaxed group-hover:text-ink transition-colors duration-200">
                            {card.value}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Bottom shimmer */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(245,184,0,0.3), transparent)' }}
                    />
                  </motion.div>
                )
                return card.href ? (
                  <a key={card.label} href={card.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={card.label}>{inner}</div>
                )
              })}
            </div>

            {/* Right — form */}
            <Reveal delay={0.15} className="lg:col-span-3">
              <motion.div
                className="group relative p-8 md:p-10 rounded-3xl bg-white border border-border overflow-hidden"
                whileHover={{ boxShadow: '0 20px 60px -16px rgba(245,184,0,0.1)' }}
                transition={{ duration: 0.4 }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(245,184,0,0.05) 0%, transparent 70%)' }}
                />
                {/* Top accent */}
                <motion.div
                  className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand to-brand/20 rounded-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '45%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-px bg-brand" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                      Send a Message
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-sm text-ink-muted mb-8">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-ink flex items-center justify-center mx-auto mb-5">
                        <Send size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-ink mb-2">Message Sent!</h3>
                      <p className="text-ink-muted text-sm">
                        Thank you for reaching out. We'll be in touch soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
                            Your Name
                          </label>
                          <input
                            id="name" name="name" type="text" required
                            placeholder="Enter your name"
                            className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
                            Your Email
                          </label>
                          <input
                            id="email" name="email" type="email" required
                            placeholder="Enter your email"
                            className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand/40 transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
                            Phone
                          </label>
                          <input
                            id="phone" name="phone" type="tel"
                            placeholder="Your contact number"
                            className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
                            Subject
                          </label>
                          <input
                            id="subject" name="subject" type="text"
                            placeholder="Message subject"
                            className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand/40 transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
                          Your Message
                        </label>
                        <textarea
                          id="message" name="message" rows={5} required
                          placeholder="Tell us about your project..."
                          className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand/40 transition-colors resize-none"
                        />
                      </div>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button type="submit" variant="brand" size="lg" icon={<Send size={16} />}>
                          Send Message
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
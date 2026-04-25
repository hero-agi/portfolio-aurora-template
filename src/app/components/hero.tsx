import { ArrowUpRight, Download, Briefcase, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-16">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl mb-8"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/80" style={{ fontSize: '13px' }}>
              Available for new opportunities
            </span>
          </div>

          <h1
            className="text-white"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            Hi, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 40%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Mateo Rivas
            </span>
            <br />
            Product builder &<br />growth strategist.
          </h1>

          <p
            className="mt-8 max-w-2xl text-white/60"
            style={{ fontSize: '1.125rem', lineHeight: 1.6, fontWeight: 400 }}
          >
            Senior Product Manager with 8+ years shipping zero-to-one SaaS products.
            I help early-stage startups turn messy ideas into measurable growth loops.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="group px-7 py-4 rounded-full text-white inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)',
                fontWeight: 600,
              }}
            >
              View projects
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </button>
            <button
              className="px-7 py-4 rounded-full text-white inline-flex items-center gap-2 backdrop-blur-xl transition-all hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                fontWeight: 600,
              }}
            >
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div
            className="relative rounded-3xl p-6 backdrop-blur-xl w-full max-w-sm"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 30px 60px -15px rgba(0,0,0,0.5)',
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-white/40" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>
                STATUS
              </span>
              <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)' }}
                >
                  <Briefcase size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white/50" style={{ fontSize: '12px' }}>Looking for</div>
                  <div className="text-white" style={{ fontWeight: 600 }}>Senior PM roles</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(6,182,212,0.2)', border: '1px solid rgba(6,182,212,0.4)' }}
                >
                  <Globe size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white/50" style={{ fontSize: '12px' }}>Location</div>
                  <div className="text-white" style={{ fontWeight: 600 }}>Remote · Lima, Peru</div>
                </div>
              </div>
            </div>
            <div
              className="mt-6 pt-5 grid grid-cols-3 gap-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              {[
                { v: '8+', l: 'Years' },
                { v: '24', l: 'Shipped' },
                { v: '$12M', l: 'ARR' },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div
                    style={{
                      background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 700,
                      fontSize: '18px',
                    }}
                  >
                    {s.v}
                  </div>
                  <div className="text-white/50" style={{ fontSize: '11px' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

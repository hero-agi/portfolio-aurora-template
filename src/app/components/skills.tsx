import { Layers, Server, Wrench } from 'lucide-react';

type Skill = { name: string; level: number };

const groups: { title: string; icon: typeof Layers; color: string; skills: Skill[] }[] = [
  {
    title: 'Product & Strategy',
    icon: Layers,
    color: '#8B5CF6',
    skills: [
      { name: 'Product Roadmapping', level: 95 },
      { name: 'Growth Strategy', level: 92 },
      { name: 'User Research', level: 88 },
      { name: 'Go-to-Market', level: 90 },
      { name: 'Pricing & Packaging', level: 82 },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: Server,
    color: '#EC4899',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'Mixpanel / Amplitude', level: 94 },
      { name: 'A/B Testing', level: 90 },
      { name: 'Funnel Analysis', level: 93 },
      { name: 'Looker / Tableau', level: 78 },
    ],
  },
  {
    title: 'Tools & Collaboration',
    icon: Wrench,
    color: '#06B6D4',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'Notion / Linear', level: 96 },
      { name: 'Jira', level: 85 },
      { name: 'Webflow', level: 72 },
      { name: 'Stakeholder Mgmt', level: 94 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-white/40 mb-3" style={{ fontSize: '13px', letterSpacing: '0.2em' }}>
            TOOLKIT
          </div>
          <h2
            className="text-white"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Craft, measured.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="rounded-3xl p-7 backdrop-blur-xl transition-transform hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                <div
                  className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `${g.color}22`,
                    border: `1px solid ${g.color}66`,
                    boxShadow: `0 0 30px ${g.color}33`,
                  }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-white mb-6" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {g.title}
                </h3>
                <div className="space-y-4">
                  {g.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-white/80" style={{ fontSize: '14px' }}>{s.name}</span>
                        <span className="text-white/40" style={{ fontSize: '12px' }}>{s.level}%</span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: 'rgba(255,255,255,0.08)' }}
                      >
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${s.level}%`,
                            background: 'linear-gradient(90deg, #8B5CF6, #EC4899, #06B6D4)',
                            boxShadow: '0 0 12px rgba(139,92,246,0.6)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

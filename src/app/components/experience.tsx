type Role = {
  company: string;
  logo: string;
  title: string;
  period: string;
  seniority: 'lead' | 'senior' | 'mid';
  achievements: { metric: string; label: string }[];
  summary: string;
};

const roles: Role[] = [
  {
    company: 'Nimbus Labs',
    logo: 'NL',
    title: 'Head of Product',
    period: '2023 — Present',
    seniority: 'lead',
    summary: 'Leading a team of 6 PMs across growth, core, and enterprise. Owning $8M ARR roadmap.',
    achievements: [
      { metric: '+312%', label: 'MRR growth' },
      { metric: '6 → 42', label: 'Team scale' },
      { metric: '98%', label: 'Retention' },
    ],
  },
  {
    company: 'Halo Payments',
    logo: 'HP',
    title: 'Senior Product Manager',
    period: '2020 — 2023',
    seniority: 'senior',
    summary: 'Owned checkout and onboarding funnel for 4 LATAM markets. Drove conversion experiments.',
    achievements: [
      { metric: '+38%', label: 'Checkout CVR' },
      { metric: '$4.2M', label: 'Revenue lift' },
      { metric: '14', label: 'Experiments' },
    ],
  },
  {
    company: 'Orbit CRM',
    logo: 'OC',
    title: 'Product Manager',
    period: '2018 — 2020',
    seniority: 'mid',
    summary: 'Built product-led growth motion for B2B sales tool. Shipped activation and billing v2.',
    achievements: [
      { metric: '3x', label: 'Trial→Paid' },
      { metric: '+62%', label: 'Activation' },
      { metric: '11', label: 'Features shipped' },
    ],
  },
];

const seniorityColors: Record<Role['seniority'], string> = {
  lead: 'linear-gradient(180deg, #8B5CF6, #EC4899)',
  senior: 'linear-gradient(180deg, #EC4899, #06B6D4)',
  mid: 'linear-gradient(180deg, #06B6D4, #8B5CF6)',
};

export function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="text-white/40 mb-3" style={{ fontSize: '13px', letterSpacing: '0.2em' }}>
            JOURNEY
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
            Where I've built.
          </h2>
        </div>

        <div className="relative space-y-6">
          {roles.map((r) => (
            <div
              key={r.company}
              className="relative rounded-3xl p-7 md:p-8 backdrop-blur-xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >
              <div
                className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
                style={{ background: seniorityColors[r.seniority] }}
              />

              <div className="pl-6 grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 flex items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-xl"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      fontWeight: 700,
                    }}
                  >
                    <span className="text-white">{r.logo}</span>
                  </div>
                  <div>
                    <div className="text-white" style={{ fontWeight: 700, fontSize: '18px' }}>
                      {r.company}
                    </div>
                    <div className="text-white/50" style={{ fontSize: '12px' }}>{r.period}</div>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <div className="text-white mb-2" style={{ fontWeight: 600 }}>
                    {r.title}
                  </div>
                  <p className="text-white/60 mb-5" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    {r.summary}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {r.achievements.map((a) => (
                      <div
                        key={a.label}
                        className="rounded-xl p-3"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <div
                          style={{
                            background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 700,
                            fontSize: '22px',
                            lineHeight: 1.1,
                          }}
                        >
                          {a.metric}
                        </div>
                        <div className="text-white/50 mt-1" style={{ fontSize: '11px' }}>
                          {a.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

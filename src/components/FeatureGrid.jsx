import React from 'react';
import { GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';

const features = [
  {
    title: 'Research Projects',
    desc: 'Student-led quantum research with real-world impact and open-source tools.',
    icon: <GraduationCap className="h-6 w-6 text-emerald-400" />,
    href: '#projects',
  },
  {
    title: 'Educational Resources',
    desc: 'Structured modules on qubits, algorithms, error correction, and cryptography.',
    icon: <BookOpen className="h-6 w-6 text-emerald-400" />,
    href: '#resources',
  },
  {
    title: 'Mentorship Network',
    desc: 'Guidance from graduate students, researchers, and industry mentors.',
    icon: <Users className="h-6 w-6 text-emerald-400" />,
    href: '#mentorship',
  },
  {
    title: 'Events & Fellowship',
    desc: 'Workshops, hackathons, symposiums, and the Quantum Access Fellowship.',
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    href: '#events',
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Explore Programs & Resources</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Learn, build, and publish. Everything you need to step into quantum research—designed for ambitious high school students.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <a
              key={f.title}
              href={f.href}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-5 transition hover:translate-y-[-2px] hover:bg-white/10"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-md bg-black/40 p-2 ring-1 ring-white/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-emerald-400 transition group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

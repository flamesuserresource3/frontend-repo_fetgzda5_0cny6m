import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Intro to Qiskit Workshop',
    date: 'Dec 12, 2025',
    time: '5:00 PM EST',
    location: 'Virtual',
  },
  {
    title: 'Quantum Access Fellowship Info Session',
    date: 'Jan 7, 2026',
    time: '7:00 PM EST',
    location: 'Virtual',
  },
  {
    title: 'High School Quantum Hackathon',
    date: 'Feb 21, 2026',
    time: 'All Day',
    location: 'Hybrid',
  },
];

const posts = [
  {
    title: 'Student Team Publishes Preprint on Error Mitigation',
    excerpt:
      'A group of QuantumSpark fellows released a preprint showcasing improved zero-noise extrapolation on NISQ devices.',
  },
  {
    title: 'Mentor Spotlight: Dr. Rivera on Quantum Algorithms',
    excerpt:
      'We sat down with Dr. Rivera to discuss the promise of variational approaches and how students can get involved.',
  },
];

export default function EventsAndNews() {
  return (
    <section id="events" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Events */}
          <div>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-2xl font-bold md:text-3xl">Upcoming Events</h2>
              <a href="#" className="hidden text-sm text-emerald-300 hover:text-emerald-200 md:inline" aria-label="View all events">
                View all
              </a>
            </div>
            <ul className="space-y-4">
              {events.map((e) => (
                <li
                  key={e.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{e.title}</h3>
                      <p className="mt-1 flex items-center gap-3 text-sm text-white/70">
                        <span className="inline-flex items-center gap-2"><Calendar size={16} />{e.date}</span>
                        <span className="inline-flex items-center gap-2"><Clock size={16} />{e.time}</span>
                        <span className="inline-flex items-center gap-2">📍 {e.location}</span>
                      </p>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-xs font-semibold text-black transition hover:bg-emerald-400">
                      Register <ArrowRight size={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* News */}
          <div>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-2xl font-bold md:text-3xl">Blog & News</h2>
              <a href="#" className="hidden text-sm text-emerald-300 hover:text-emerald-200 md:inline" aria-label="Read the blog">
                Read the blog
              </a>
            </div>
            <div className="space-y-4">
              {posts.map((p) => (
                <article
                  key={p.title}
                  className="rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.05] p-5 transition hover:translate-x-[2px]"
                >
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.excerpt}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
                    Learn more <ArrowRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

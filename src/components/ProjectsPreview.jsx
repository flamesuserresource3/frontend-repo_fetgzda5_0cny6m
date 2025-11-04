import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Variational Quantum Eigensolver for Molecules',
    description:
      'Optimizing ansatz circuits to estimate ground-state energies using Qiskit. Includes dataset, circuits, and benchmarking.',
    tags: ['Qiskit', 'VQE', 'Chemistry'],
    repo: 'https://github.com',
    progress: 72,
  },
  {
    title: 'Quantum Error Mitigation via Zero-Noise Extrapolation',
    description:
      'Exploring error mitigation strategies on noisy devices with PennyLane and hardware backends.',
    tags: ['PennyLane', 'Error Mitigation'],
    repo: 'https://github.com',
    progress: 45,
  },
  {
    title: 'Grover-based Search for Genomic Motifs',
    description:
      'Applying amplitude amplification to pattern search problems with Cirq simulation environments.',
    tags: ['Cirq', "Grover's", 'Bioinformatics'],
    repo: 'https://github.com',
    progress: 88,
  },
];

export default function ProjectsPreview() {
  return (
    <section id="projects" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Research Projects</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Explore active and past student-led research. Click through to view code, datasets, and preprints.
            </p>
          </div>
          <a
            href="#applications"
            className="hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:inline-block"
          >
            Join a Cohort
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-black/40 px-3 py-1 text-xs font-semibold ring-1 ring-white/10 transition hover:bg-black/60"
                  aria-label={`Open GitHub repo for ${p.title}`}
                >
                  <Github size={14} /> Repo
                </a>
              </div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300 ring-1 ring-emerald-400/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs text-white/60">
                  <span>Progress</span>
                  <span>{p.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-emerald-400"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

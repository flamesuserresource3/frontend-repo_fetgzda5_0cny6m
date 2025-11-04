import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import FeatureGrid from './components/FeatureGrid';
import ProjectsPreview from './components/ProjectsPreview';
import EventsAndNews from './components/EventsAndNews';
import { Users } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSplineCover />
      <FeatureGrid />
      <ProjectsPreview />

      {/* Mentorship & Fellowship blurb */}
      <section id="mentorship" className="w-full bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold md:text-3xl">Mentorship & Community</h2>
              <p className="mt-2 max-w-2xl text-sm text-white/70">
                Connect with graduate students, researchers, and industry professionals. Get guidance on research methods, paper writing, and presenting at symposiums.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#applications" className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400">
                  Apply to Quantum Access Fellowship
                </a>
                <a href="#" className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  View Mentor Directory
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-black/40 p-2 ring-1 ring-white/10">
                <Users className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-semibold">Quantum Access Fellowship</span>
              </div>
              <ul className="list-inside list-disc text-sm text-white/70">
                <li>Eligibility: motivated high school students worldwide</li>
                <li>Focus: research mentorship + publication pathways</li>
                <li>Outcomes: preprints, open-source code, symposium talks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EventsAndNews />

      {/* Applications anchor */}
      <section id="applications" className="w-full border-t border-white/10 bg-slate-950 py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="text-xl font-semibold">Ready to spark your quantum journey?</h3>
          <p className="mt-2 text-sm text-white/70">
            Submit a short application to join a research cohort or volunteer as a mentor. We welcome beginners and advanced students alike.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400">Student Application</a>
            <a href="#" className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Mentor Sign-Up</a>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} QuantumSpark. Student-driven quantum computing research & education.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#applications" className="hover:text-white">Apply</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

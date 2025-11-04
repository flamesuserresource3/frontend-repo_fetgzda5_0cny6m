import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Users } from 'lucide-react';

export default function HeroSplineCover() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Student-Driven Quantum Research
        </span>
        <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
          QuantumSpark
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-base text-white/80 md:text-lg">
          Bridging high school education with frontier quantum computing research. Explore projects, learn cutting-edge concepts, and join a community shaping the future of quantum science.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#applications"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            <Rocket size={18} /> Apply Now
          </a>
          <a
            href="#mentorship"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <Users size={18} /> Become a Mentor
          </a>
        </div>
      </div>
    </section>
  );
}

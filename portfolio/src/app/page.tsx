"use client";

import { AmbientField } from "@/components/ambient-field";
import { MagneticButton } from "@/components/magnetic-button";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const researchAxes = [
  {
    label: "Temporal Cognition",
    title: "Neural clocks that breathe with uncertainty",
    description:
      "Designing models where cortical microcolumns negotiate temporal prediction, encoding drift as a functional prior for perception.",
    highlights: ["Recurrent predictive coding", "Laminar mesoscale modeling", "Entropy-aware timing"],
  },
  {
    label: "Conscious States",
    title: "Metastable attractors of awareness",
    description:
      "Mapping transient neural manifolds that choreograph conscious transitions — from deep rest to lucid emergence.",
    highlights: ["Manifold topology", "Stochastic resonance", "Intralaminar thalamus"],
  },
  {
    label: "Synthetic Neurobiology",
    title: "Interfaces for dialog with living computation",
    description:
      "Building biophysically grounded simulations that let synthetic agents converse with organoid networks in real time.",
    highlights: ["Organoid co-adaptation", "Closed-loop neuromodulation", "Differentiable biophysics"],
  },
];

const chronology = [
  {
    year: "2026 — present",
    locus: "Institute for Temporal Cognition",
    role: "Principal Investigator, Resonant Dynamics Lab",
    focus: "Leading a transdisciplinary group prototyping neural time crystal architectures for adaptive sensory systems.",
  },
  {
    year: "2022 — 2026",
    locus: "École Polytechnique Fédérale de Lausanne",
    role: "Postdoctoral Fellow, Blue Brain Project",
    focus: "Modeled mesoscale cortical rhythms and invented the drift-field inference toolkit for multi-layer connectomes.",
  },
  {
    year: "2017 — 2022",
    locus: "MIT — Media Lab",
    role: "PhD, Computational Neuroscience + AI",
    focus: "Dissertation on generative neural fields governing dissociative states and non-linear attention morphologies.",
  },
];

const publications = [
  {
    title: "Metastable Chronodynamics Across Laminar Microcircuits",
    venue: "Nature Neuroscience",
    year: "2025",
  },
  {
    title: "Organoid Dialogues: Differentiable Co-Adaptation with Living Networks",
    venue: "NeurIPS",
    year: "2024",
  },
  {
    title: "Spectral Manifolds of Conscious Transition",
    venue: "Science Advances",
    year: "2023",
  },
];

const signals = ["neural exquisiteness", "temporal architectures", "cognitive resonance"];

export default function Home() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const softX = useSpring(pointerX, { stiffness: 60, damping: 14, mass: 0.4 });
  const softY = useSpring(pointerY, { stiffness: 60, damping: 14, mass: 0.4 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX - window.innerWidth / 2);
      pointerY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <span className="aurora" />
      <span className="noise-layer" />
      <AmbientField />

      <motion.div
        className="pointer-events-none fixed left-1/2 top-1/2 z-10 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:block"
        style={{
          x: softX,
          y: softY,
          background:
            "radial-gradient(circle at 30% 30%, rgba(120, 216, 255, 0.22), rgba(46, 112, 255, 0))",
        }}
      />

      <main className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col gap-28 px-6 pb-32 pt-24 md:px-12 lg:px-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid gap-12 md:grid-cols-[2.2fr_1fr] md:items-end"
        >
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="tag">Computational Neuroscience</span>
              <h1 className="max-w-3xl text-4xl leading-tight tracking-tight text-white md:text-6xl">
                Dr. Lucía Moreau designs cognitive instruments for perceiving time, consciousness,
                and living computation.
              </h1>
              <p className="max-w-xl text-balance text-base leading-relaxed text-muted md:text-lg">
                I choreograph theoretical frameworks, neural simulations, and experimental hardware
                to decode the resonance topologies that allow biological systems to experience time.
                Each project is an instrument: precise, quiet, poised at the boundary between
                perception and prediction.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="mailto:resonant.lab@lucia-moreau.com">
                INITIATE DIALOGUE
              </MagneticButton>
              <MagneticButton className="bg-white/5 hover:bg-white/12" href="#research">
                RESEARCH ATLAS
              </MagneticButton>
              <MagneticButton className="bg-white/[0.02] hover:bg-white/10" href="#contact">
                SIGNAL CONTACT
              </MagneticButton>
            </div>

            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.32em] text-white/45">
              {signals.map((signal) => (
                <motion.span
                  key={signal}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  className="rounded-full border border-white/10 px-4 py-2"
                >
                  {signal}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="glass relative overflow-hidden p-8">
            <span className="halo" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                <span>Current explorations</span>
                <span>2026 / 2027</span>
              </div>
              <p className="text-balance text-xl leading-relaxed text-white/95">
                Time crystals in cortical tissue. Lucid thresholds for synthetic minds. Interfaces
                where biological and silicon cognition co-regulate perception.
              </p>
              <div className="grid gap-5 border-t border-white/10 pt-5 text-sm text-white/70">
                <div className="flex items-start justify-between">
                  <span>Resonant Dynamics Lab</span>
                  <span>Geneva — Midnight UTC</span>
                </div>
                <div className="flex items-start justify-between">
                  <span>Collaborations</span>
                  <span>Blue Brain • MIT Media Lab • DeepMind Interpretability</span>
                </div>
                <div className="flex items-start justify-between">
                  <span>Instrumentation</span>
                  <span>Mesoscale laminar arrays • Synthetic organoid loops • Differentiable neural
                    fields
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="research"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="space-y-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="tag">Research Atlas</span>
              <h2 className="mt-4 text-3xl text-white md:text-4xl">Contours of inquiry</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Each axis is a living protocol. I architect neural instruments that combine theory,
              computation, and experiment to reveal how time and consciousness self-assemble.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {researchAxes.map((axis, index) => (
              <motion.article
                key={axis.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.9,
                  ease: [0.19, 1, 0.22, 1],
                  delay: index * 0.08,
                }}
                whileHover={{ translateY: -6 }}
                className="group glass relative overflow-hidden p-8"
              >
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-20 opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
                  animate={{ rotate: [0, 12, -8, 0] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  style={{
                    background:
                      "conic-gradient(from 120deg at 50% 50%, rgba(132, 255, 255, 0.16), rgba(230, 255, 255, 0), rgba(174, 139, 255, 0.18), rgba(132, 255, 255, 0.16))",
                  }}
                />
                <span className="tag text-[10px] tracking-[0.28em] text-white/55">{axis.label}</span>
                <h3 className="mt-6 text-2xl font-medium text-white">{axis.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{axis.description}</p>
                <ul className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.26em] text-white/35">
                  {axis.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-full border border-white/12 px-4 py-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="trajectory"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass relative overflow-hidden px-10 py-14"
        >
          <span className="halo" />
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="tag">Temporal Trajectory</span>
              <h2 className="mt-4 text-3xl text-white md:text-4xl">
                Institutions that shaped the resonance
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              A continuum of labs, each a different geometry of inquiry. Every station refined how I
              listen to networks — living or synthetic — and how I design the apparatus to speak back.
            </p>
          </div>
          <div className="relative grid gap-12 md:gap-16">
            <span className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-white/50 via-white/15 to-transparent md:block" />
            {chronology.map((entry, index) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="relative grid gap-3 md:grid-cols-[140px_1fr]"
              >
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.34em] text-white/55">
                  <span className="hidden h-px flex-1 bg-white/20 md:block" />
                  <span>{entry.year}</span>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-medium text-white">{entry.locus}</h3>
                    <span className="text-xs uppercase tracking-[0.28em] text-white/45">
                      {entry.role}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{entry.focus}</p>
                </div>
                <span className="absolute left-[10px] top-3 hidden h-3 w-3 rounded-full bg-white/70 md:block" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="signals"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="space-y-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="tag">Signals</span>
              <h2 className="mt-4 text-3xl text-white md:text-4xl">Selected publications & releases</h2>
            </div>
            <MagneticButton
              className="bg-white/[0.04] hover:bg-white/[0.1]"
              href="mailto:resonant.lab@lucia-moreau.com?subject=Request%20Dossier"
            >
              REQUEST DOSSIER
            </MagneticButton>
          </div>

          <div className="glass relative overflow-hidden divide-y divide-white/10">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.19, 1, 0.22, 1] }}
                className="flex flex-col gap-4 px-8 py-8 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-lg font-medium text-white">{publication.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.26em] text-white/45">
                    {publication.venue}
                  </p>
                </div>
                <motion.span
                  className="rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.28em] text-white/55"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                >
                  {publication.year}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="glass relative overflow-hidden px-8 py-14 md:px-14"
        >
          <span className="halo" />
          <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-start">
            <div className="space-y-8">
              <span className="tag">Signal Contact</span>
              <h2 className="text-3xl text-white md:text-4xl">
                Let&apos;s design instruments for temporal perception and lucid cognition.
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted">
                If your lab, studio, or organization senses an alignment with temporal computing,
                organoid experimentation, or consciousness-centric AI, I would love to explore a
                collaboration. Interviews, residencies, and advisory conversations are welcomed.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticButton href="mailto:resonant.lab@lucia-moreau.com">
                  SCHEDULE CONSTELLATION
                </MagneticButton>
                <MagneticButton className="bg-white/[0.05] hover:bg-white/[0.12]" href="https://cal.com">
                  RESERVE 30 MINUTES
                </MagneticButton>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-xs uppercase tracking-[0.32em] text-white/50">
              <div className="space-y-2">
                <span className="text-white/40">Primary Relay</span>
                <a className="text-sm normal-case text-white/90 hover:text-white" href="mailto:resonant.lab@lucia-moreau.com">
                  resonant.lab@lucia-moreau.com
                </a>
              </div>
              <div className="space-y-2">
                <span className="text-white/40">Waveform Channels</span>
                <div className="flex flex-col gap-2 text-sm normal-case text-white/80">
                  <a className="hover:text-white" href="https://scholar.google.com">Google Scholar</a>
                  <a className="hover:text-white" href="https://orcid.org">ORCID #0000-0002-2042</a>
                  <a className="hover:text-white" href="https://x.com">X / Neural Resonance</a>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-white/40">Current Coordinates</span>
                <p className="text-sm normal-case text-white/80">
                  Geneva • Lausanne • Remote constellations between UTC and PST
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

/** @format */

import React from "react";
import Image from "next/image";
import Circle from "./Circle";

const About = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Decorative background (keep behind content) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 opacity-20 blur-2xl z-0"
      >
        <Circle />
      </div>

      {/* Make sure ALL readable content sits above */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32 text-white">
        {/* Mobile heading */}
        <h2
          id="about-title"
          className="mb-10 block text-center font-['Comfortaa'] text-5xl font-extrabold tracking-tight md:text-6xl lg:hidden"
        >
          <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            ABOUT
          </span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Sidebar label on large screens */}
          <div className="relative hidden lg:col-span-2 lg:flex lg:flex-col lg:items-start lg:justify-start">
            <div
              aria-hidden="true"
              className="select-none font-['Comfortaa'] text-8xl leading-none"
            >
              {"ABOUT".split("").map((ch, i) => (
                <span
                  key={i}
                  className="block bg-gradient-to-b from-indigo-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent drop-shadow"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl">
              <Image
                src="/Photo.jpg"
                alt="Portrait of Vimarsh Patel"
                fill
                sizes="(max-width: 1024px) 60vw, 350px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <article className="lg:col-span-6">
            <header className="mb-6">
              <p className="mb-2 text-sm uppercase tracking-wide text-cyan-200">
                AI Engineer · Full-Stack Developer
              </p>
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Hi, I’m Vimarsh Patel.
              </h3>
            </header>

            <p className="mb-5 max-w-2xl leading-relaxed text-white/85">
              I develop intelligent full-stack systems that combine TypeScript,
              Angular, React, and Node.js for scalable web applications; FastAPI +
              LLM integrations for conversational and analytical intelligence; and
              n8n automations to connect APIs, streamline workflows, and trigger AI
              tasks dynamically.
            </p>

            <ul className="mb-8 space-y-3 text-white/90">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span>Enhanced pricing intelligence and forecasting accuracy across millions of records.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                <span>Shipped LLM-powered RAG apps (LangChain, Hugging Face, FastAPI) into production.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                <span>Automated ML workflows with Airflow, MLflow, and Kubernetes for scalable, reliable ops.</span>
              </li>
            </ul>

            <p className="mb-6 max-w-3xl leading-relaxed text-white/85">
              I combine data science, software engineering, and MLOps with Python,
              TensorFlow, PyTorch, Node.js, React, Docker, and GCP to deliver measurable results.
              I’m exploring how Generative AI and agent systems (A2A, MCP) reshape UX, accelerate decisions,
              and redefine product intelligence.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              >
                Let’s collaborate
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              >
                View projects
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Mail, Zap, BrainCircuit, Globe, BarChart3, Video, ShieldCheck, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">V</div>
            <span className="text-xl font-bold tracking-tight text-white">Valente AI</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-slate-400">
            <a href="#capabilities" className="hover:text-white transition">Capabilities</a>
            <a href="#architecture" className="hover:text-white transition">Architecture</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#footer" className="hover:text-white transition">Compliance</a>
          </div>
          <a href="mailto:nayan@valenteai.in" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition">Get in Touch</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-24 text-center px-6">
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Enterprise AI Infrastructure & Autonomous Operations
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white max-w-4xl mx-auto mb-8">
          Autonomous AI Agents, Intelligent Web & High-ROI Growth Engines
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Valente AI architects domain-specific autonomous agent workflows, high-speed web applications, and algorithmic media systems designed to eliminate operational friction and scale modern businesses.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="mailto:nayan@valenteai.in" className="bg-white hover:bg-slate-200 text-slate-950 px-8 py-3.5 rounded-full font-semibold transition">Deploy With Valente</a>
          <a href="#capabilities" className="border border-slate-700 hover:border-slate-500 text-white px-8 py-3.5 rounded-full font-semibold transition">Explore Architecture</a>
        </div>
      </header>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 px-6 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">Engineered for Real-World Production</h2>
          <p className="text-slate-400 mb-12">Full-stack AI deployments and growth infrastructure built for high-stakes commercial environments.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: BrainCircuit, title: "Custom AI Agents & Autonomous Workflows", desc: "Multi-step LLM agents, automated client research, intelligent data scraping, and end-to-end backend process orchestration using Python and n8n with near-zero latency." },
              { icon: Globe, title: "High-Performance Web & PWA Architecture", desc: "Lightning-fast web applications, progressive web apps (PWAs) with native home-screen installation, and custom interactive digital storefronts engineered for maximum conversion." },
              { icon: BarChart3, title: "AI-Driven Performance Advertising", desc: "Data-backed Meta ad campaigns, precision audience targeting, and high-converting custom promotional funnels designed to maximize quantifiable return on ad spend (ROAS)." },
              { icon: Video, title: "Media Automation & Video Pipelines", desc: "Automated YouTube production workflows, outlier content engineering, and studio-grade generative visual rendering pipelines in 9:16 and 16:9 formats." }
            ].map((cap, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500 transition">
                <cap.icon className="w-10 h-10 text-indigo-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">{cap.title}</h3>
                <p className="text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-10 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Powered by Frontier Foundation Models</h2>
          <p className="text-slate-400 mb-10">We leverage industry-leading AI models, specifically the Anthropic Claude API (Claude 3.5 Sonnet / Opus), for complex reasoning, code generation, and autonomous agent decision-making.</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {['Anthropic Claude API', 'Python', 'n8n Automation', 'Tailwind CSS', 'Progressive Web Apps', 'Meta Marketing API', 'Vercel Edge'].map(tech => (
              <span key={tech} className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full border border-slate-700">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#0b0f19]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">About Valente AI</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">Founded by Nayan Kamble, Valente AI bridges the gap between frontier artificial intelligence and practical commercial execution. We build deterministic workflows, automated media pipelines, and scalable web architectures that help businesses transition from manual operations to autonomous growth.</p>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h4 className="font-semibold text-white mb-4">Official Verification Details</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>Entity Name: Valente AI</p>
              <p>Official Domain: valenteai.in</p>
              <p>Founder & Operations Contact: <a href="mailto:nayan@valenteai.in" className="text-indigo-400 hover:underline">nayan@valenteai.in</a></p>
              <p>Location: Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal/Compliance */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <details className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <summary className="font-semibold text-white cursor-pointer flex justify-between items-center">Privacy Policy <ChevronDown /></summary>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">Valente AI is committed to maintaining the highest standards of data security. We process API data securely, ensuring that no client data is used for unauthorized third-party model training.</p>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">We strictly limit data retention to the duration necessary for providing our services. All data is handled in compliance with industry-standard B2B security practices.</p>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">For any privacy-related inquiries, please contact our team directly at <a href="mailto:nayan@valenteai.in" className="text-indigo-400">nayan@valenteai.in</a>.</p>
          </details>
          <details className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <summary className="font-semibold text-white cursor-pointer flex justify-between items-center">Terms of Service <ChevronDown /></summary>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">These Terms of Service govern the professional digital services, software development, and AI agent deployment provided by Valente AI.</p>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">Clients retain all ownership of their proprietary data and workflows. Valente AI provides infrastructure and technical expertise as a service-provider.</p>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">Liability is governed by standard commercial agreements executed upon project onboarding. By engaging with our services, you agree to these operational terms.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">Valente AI — Intelligent Systems & Operations Studio</div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="mailto:nayan@valenteai.in" className="hover:text-white">Contact</a>
          </div>
          <div className="text-sm text-slate-500">© 2026 Valente AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-teal-400">lvlltd.com</Link>
          <Link href="/" className="text-sm text-slate-400">← Home</Link>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">All Agents</h1>
        <p className="text-slate-400 mb-12">Super Aligned, fully explainable, x402-ready agents.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/agents/grant-dominator" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-600">
            <div className="text-2xl font-bold text-emerald-400 mb-2">94</div>
            <h2 className="text-xl font-semibold mb-2">GrantDominator-v2</h2>
            <p className="text-slate-400 text-sm">Grant writing & compliance specialist</p>
          </Link>
          <Link href="/agents/music-video" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-600">
            <div className="text-2xl font-bold text-emerald-400 mb-2">94</div>
            <h2 className="text-xl font-semibold mb-2">music-video-release-dominator</h2>
            <p className="text-slate-400 text-sm">Full-length music video production</p>
          </Link>
          <Link href="/agents/super-intelligence" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-600">
            <div className="text-2xl font-bold text-emerald-400 mb-2">96</div>
            <h2 className="text-xl font-semibold mb-2">SuperIntelligenceOrchestrator</h2>
            <p className="text-slate-400 text-sm">God-mode multi-agent orchestration</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

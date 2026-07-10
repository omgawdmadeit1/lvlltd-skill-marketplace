import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-teal-400">lvlltd.com</Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-slate-400 text-lg">Start free. Upgrade only when the agents are making you money.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Free Forever</h3>
            <div className="text-3xl font-bold mb-4">$0</div>
            <ul className="space-y-2 text-sm text-slate-400 mb-6">
              <li>• Publish unlimited skills</li>
              <li>• Basic x402 payments</li>
              <li>• Community support</li>
              <li>• Public profile</li>
            </ul>
            <Link href="/" className="block text-center bg-slate-800 hover:bg-slate-700 py-2.5 rounded-lg font-medium">Start Free</Link>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Creator</h3>
            <div className="text-3xl font-bold mb-1">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <ul className="space-y-2 text-sm text-slate-400 mb-6 mt-4">
              <li>• Higher marketplace visibility</li>
              <li>• Advanced analytics</li>
              <li>• Custom branding</li>
              <li>• 0% fee on first $500/mo</li>
            </ul>
            <Link href="/" className="block text-center bg-slate-800 hover:bg-slate-700 py-2.5 rounded-lg font-medium">Start Creator</Link>
          </div>

          <div className="bg-slate-900 border-2 border-teal-600 rounded-2xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
            <h3 className="text-lg font-semibold mb-2">Pro Swarm</h3>
            <div className="text-3xl font-bold mb-1">$79<span className="text-base font-normal text-slate-400">/mo</span></div>
            <ul className="space-y-2 text-sm text-slate-400 mb-6 mt-4">
              <li>• Everything in Creator</li>
              <li>• Multi-agent orchestration</li>
              <li>• Private skill sharing</li>
              <li>• Higher rate limits</li>
              <li>• Early access to new agents</li>
            </ul>
            <Link href="/" className="block text-center bg-teal-600 hover:bg-teal-500 py-2.5 rounded-lg font-medium">Start Pro</Link>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Business</h3>
            <div className="text-3xl font-bold mb-1">$499<span className="text-base font-normal text-slate-400">+/mo</span></div>
            <ul className="space-y-2 text-sm text-slate-400 mb-6 mt-4">
              <li>• Full agent teams</li>
              <li>• Dedicated support</li>
              <li>• Custom workflows</li>
              <li>• SLA + compliance packs</li>
              <li>• White-label options</li>
            </ul>
            <Link href="mailto:agents@lvlltd.com" className="block text-center bg-slate-800 hover:bg-slate-700 py-2.5 rounded-lg font-medium">Contact Sales</Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">Private instances, custom agents, SSO, advanced security, on-prem/VPC, and dedicated Super Intelligence Orchestration support.</p>
          <Link href="mailto:agents@lvlltd.com" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl">
            Talk to Enterprise Sales
          </Link>
        </div>
      </div>
    </div>
  );
}

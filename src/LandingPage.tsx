import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Rocket, BadgeCheck, Zap, Shield, MessageCircle, Users, Lock, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-200">
      <ScrollProgress />
      <NeonHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <FloatingOrbs />
        <NeonBlur deco="top" />
        <NeonBlur deco="bottom" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full border border-white/10 px-3 py-1 bg-white/5">
              <Sparkles className="h-4 w-4 text-[#00FF66]" /> Tag → Launch on Solana
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Turn <span className="text-[#00FF66]">IG/TikTok tags</span> into <span className="text-slate-100">creator coins</span>
            </h1>
            <p className="mt-4 text-slate-400 text-lg">
              Tag our account on <span className="text-slate-200">Instagram</span> or <span className="text-slate-200">TikTok</span> in a comment on the video you saw. We’ll auto-launch a coin for that creator on Bags (Solana) and route
              <span className="text-slate-100 font-semibold"> 100% of trading fees</span> to the creator. Later, the creator can connect on our site to claim.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <NeonCTA href="#how">How it works</NeonCTA>
              <OutlineCTA href="#fans">Get the comment format</OutlineCTA>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <Badge icon={<Shield className="h-4 w-4" />} text="Creator approval first" />
              <Badge icon={<Zap className="h-4 w-4" />} text="Live in seconds" />
              <Badge icon={<BadgeCheck className="h-4 w-4" />} text="Transparent on-chain" />
            </div>
          </motion.div>

          {/* Right preview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] p-6 backdrop-blur space-y-4">
              <div className="text-sm text-slate-400">Quick start</div>
              <div className="grid grid-cols-1 gap-4">
                <Card className="rounded-2xl border-white/10 bg-white/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-slate-100">Comment template</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-300 space-y-2">
                    <code className="block bg-black/40 rounded-xl p-4 border border-white/10">
{`@tag2launch #Coin Name # $Coin Ticker 
| EX: @tag2launch Creator $CREATOR`}
                    </code>
                    <p className="text-slate-400">Post this under the video you saw (or our pinned post). We’ll handle the rest.</p>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-white/10 bg-white/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-slate-100">What happens next</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-300 space-y-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>We verify the creator and prevent spam launches.</li>
                      <li>We launch on Bags (Solana) with 100% fees to the creator.</li>
                      <li>The creator can connect later on our site to claim fees.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold">
            How it works
          </motion.h2>
          <p className="mt-3 text-slate-400">A simple 4-step flow with creator safety built-in.</p>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid md:grid-cols-4 gap-6"
        >
          <motion.div variants={fadeUp}><StepCard icon={<MessageCircle className="h-5 w-5" />} title="Tag" desc="Comment on the video: tag our handle + the creator you want to support." /></motion.div>
          <motion.div variants={fadeUp}><StepCard icon={<Users className="h-5 w-5" />} title="Validate" desc="We verify the creator and run anti-abuse checks." /></motion.div>
          <motion.div variants={fadeUp}><StepCard icon={<Rocket className="h-5 w-5" />} title="Launch" desc="We launch a coin on Bags (Solana) with 100% fees to the creator." /></motion.div>
          <motion.div variants={fadeUp}><StepCard icon={<CheckCircle2 className="h-5 w-5" />} title="Claim later" desc="When ready, the creator connects on our site and claims accumulated fees." /></motion.div>
        </motion.div>
      </section>

      {/* For creators */}
      <section id="creators" className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">For creators: new earnings from social engagement</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[#00FF66] shrink-0" /> 100% of trading fees routed to you.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[#00FF66] shrink-0" /> No setup burden — we handle launches for you.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[#00FF66] shrink-0" /> Optional dashboard with volume & supporters.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[#00FF66] shrink-0" /> You control launches: approve/deny and set cooldowns.</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <NeonCTA href="#fans">Share the format</NeonCTA>
              <OutlineCTA href="#faq">See FAQ</OutlineCTA>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-slate-100">Creator quick start</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-300">
                <ol className="list-decimal ml-5 space-y-2">
                  <li>Post a story or video asking fans to tag our handle + yours.</li>
                  <li>We’ll ping you when a launch starts and is live.</li>
                  <li>Connect later to claim earnings — whenever you want.</li>
                </ol>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-slate-400">Tip: Prefer co-splits? We can support them too (total = 100%).</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* For fans */}
      <section id="fans" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="order-2 md:order-1">
            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-slate-100">Comment format</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-slate-400">Copy this under the video:</div>
                <div className="bg-black/40 rounded-2xl border border-white/10 p-4 text-sm">
                  <pre className="whitespace-pre-wrap">{`@tag2launch #Coin Name # $Coin Ticker | EX: @tag2launch Creator $CREATOR`}</pre>
                </div>
                <div className="text-xs text-slate-500">We’ll confirm with the creator on first launch to prevent spoofing.</div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">For fans: spark a launch in seconds</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[#00FF66] shrink-0" /> Tag our handle + the creator in a comment.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[#00FF66] shrink-0" /> We launch transparently on Bags (Solana).</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[#00FF66] shrink-0" /> Your favorite creator earns 100% of trading fees.</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <NeonCTA href="#how">See the steps</NeonCTA>
              <OutlineCTA href="#faq">Questions?</OutlineCTA>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety */}
      <section id="security" className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Safety & compliance</h3>
            <p className="mt-3 text-slate-400">We follow platform rules, verify creators, and prevent spam launches.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp}><SafetyCard icon={<Lock className="h-5 w-5" />} title="Creator approval" desc="Creators approve their first launch before anything goes live." /></motion.div>
            <motion.div variants={fadeUp}><SafetyCard icon={<Shield className="h-5 w-5" />} title="Anti-abuse" desc="Cooldowns, blocklists, follower thresholds, and audit logs." /></motion.div>
            <motion.div variants={fadeUp}><SafetyCard icon={<BadgeCheck className="h-5 w-5" />} title="Bags-native" desc="We launch on Bags (Solana) for transparent, on-chain fees." /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Email capture */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#001d11] via-[#071a12] to-[#0b0f14] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Get early access</h3>
              <p className="mt-2 text-slate-400">We’re onboarding creators and pilot communities now. Drop your email to join the beta.</p>
            </div>
            <form className="flex gap-3">
              <Input placeholder="you@example.com" className="h-12 bg-black/40 border-white/10 text-slate-100 placeholder:text-slate-500" />
              <NeonButton>Notify me</NeonButton>
            </form>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Frequently asked questions</h3>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp}><FAQ q="Do creators need to do anything before a launch?" a="No. Fans can trigger launches by tagging. We only ask creators to approve the very first launch to avoid spoofing." /></motion.div>
            <motion.div variants={fadeUp}><FAQ q="What royalty splits are supported?" a="Default is 100% to the creator. Co-splits are possible (totals must equal 100%)." /></motion.div>
            <motion.div variants={fadeUp}><FAQ q="Which comments are detected?" a="Tags on the original video or our pinned posts on IG/TikTok." /></motion.div>
            <motion.div variants={fadeUp}><FAQ q="How fast is a launch?" a="Usually under a minute after approval and on-chain confirmation." /></motion.div>
            <motion.div variants={fadeUp}><FAQ q="How does a creator claim?" a="They simply connect on our site later to withdraw accumulated fees." /></motion.div>
            <motion.div variants={fadeUp}><FAQ q="Are you affiliated with Bags/X/Instagram/TikTok?" a="No. We integrate with Bags for on-chain launches and support creators on IG/TikTok." /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="font-bold text-lg">tag<span className="text-[#00FF66]">.launch</span></div>
              <p className="mt-3 text-slate-400">Bridge IG/TikTok engagement to on-chain creator royalties.</p>
            </div>
            <div>
              <div className="font-semibold text-slate-200">Product</div>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li><a href="#how" className="hover:text-[#00FF66]">How it works</a></li>
                <li><a href="#creators" className="hover:text-[#00FF66]">For creators</a></li>
                <li><a href="#fans" className="hover:text-[#00FF66]">For fans</a></li>
                <li><a href="#faq" className="hover:text-[#00FF66]">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-200">Company</div>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li><a href="/about" className="hover:text-[#00FF66]">About</a></li>
                <li><a href="/contact" className="hover:text-[#00FF66]">Contact</a></li>
                <li><a href="/terms" className="hover:text-[#00FF66]">Terms</a></li>
                <li><a href="/privacy" className="hover:text-[#00FF66]">Privacy</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-200">Stay in the loop</div>
              <div className="mt-3 flex gap-3">
                <Input placeholder="you@example.com" className="bg-black/40 border-white/10 text-slate-100 placeholder:text-slate-500" />
                <NeonButton>Subscribe</NeonButton>
              </div>
            </div>
          </div>
          <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Tag2Launch — Not affiliated with Bags.fm, X, Instagram, or TikTok.</div>
        </div>
      </footer>
    </div>
  );
}

/* ----- Micro-interactions & helpers ----- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 20, restDelta: 0.001 });
  return <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#00FF66] z-[100] origin-left" style={{ scaleX }} />;
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-16 -left-16 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(60% 60% at 50% 50%, #00FF6640 0%, #00FF6600 60%)", animation: "float 6s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(60% 60% at 50% 50%, #60A5FA40 0%, #60A5FA00 60%)", animation: "drift 8s ease-in-out infinite" }}
      />
    </div>
  );
}

function NeonHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#0b0f14]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-xl tracking-tight">Tag2<span className="text-[#00FF66]">Launch</span></a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:text-[#00FF66]">How it works</a>
          <a href="#creators" className="hover:text-[#00FF66]">For creators</a>
          <a href="#fans" className="hover:text-[#00FF66]">For fans</a>
          <a href="#security" className="hover:text-[#00FF66]">Safety</a>
          <a href="#faq" className="hover:text-[#00FF66]">FAQ</a>
        </nav>

        {/* Right: Social buttons + CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://www.tiktok.com/@tag2launch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-white/15 text-xs sm:text-sm text-slate-300 hover:border-[#00FF66] hover:text-[#00FF66] transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://www.instagram.com/tag2launch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-white/15 text-xs sm:text-sm text-slate-300 hover:border-[#00FF66] hover:text-[#00FF66] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://x.com/tag2launch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-white/15 text-xs sm:text-sm text-slate-300 hover:border-[#00FF66] hover:text-[#00FF66] transition-colors"
            >
              X
            </a>
          </div>
          <NeonCTA href="#fans">Start a launch</NeonCTA>
        </div>
      </div>
    </header>
  );
}

function NeonBlur({ deco }: { deco: "top" | "bottom" }) {
  const common = "absolute -z-10 h-72 w-72 rounded-full blur-3xl";
  if (deco === "top")
    return (
      <div
        className={`${common} -top-24 right-[-10%]`}
        style={{ background: "radial-gradient(40%_40% at 50% 50%, #00FF6633 0%, #00FF6600 70%)" }}
      />
    );
  return (
    <div
      className={`${common} -bottom-24 left-[-10%]`}
      style={{ background: "radial-gradient(40%_40% at 50% 50%, #60A5FA33 0%, #60A5FA00 70%)" }}
    />
  );
}

function NeonCTA({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href ?? "/"}
      className="group relative inline-flex h-12 items-center justify-center rounded-full px-6 font-medium text-black active:scale-[0.98] transition-transform"
    >
      <span className="absolute -inset-0.5 rounded-full bg-[#00FF66]/60 blur-md group-hover:blur-lg transition-[filter]" aria-hidden />
      <span className="relative rounded-full bg-[#00FF66] px-6 py-3 flex items-center gap-2">
        {children} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

function OutlineCTA({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href ?? "/"}
      className="inline-flex h-12 items-center justify-center rounded-full px-6 font-medium border border-white/10 text-slate-200 hover:border-[#00FF66] hover:text-[#00FF66] transition-colors"
    >
      {children} <ChevronRight className="h-4 w-4 ml-2" />
    </a>
  );
}

function NeonButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative inline-flex h-12 items-center justify-center rounded-full px-6 font-medium text-black active:scale-[0.98] transition-transform">
      <span className="absolute -inset-0.5 rounded-full bg-[#00FF66]/60 blur-md" aria-hidden />
      <span className="relative rounded-full bg-[#00FF66] px-6 py-3">{children}</span>
    </button>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-slate-400">
      <motion.span
        className="text-[#00FF66]"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.span>
      {text}
    </div>
  );
}

/* Lightweight UI primitives (Card / Input) */
function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,255,102,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}
function CardHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-6 pb-3 ${className}`}>{children}</div>;
}
function CardTitle({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`font-semibold ${className}`}>{children}</div>;
}
function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      {...props}
      className={`h-10 rounded-xl border bg-white/5 px-3 outline-none focus:ring-2 focus:ring-[#00FF66]/40 ${className}`}
    />
  );
}

/* Step / Safety / FAQ cards */
function StepCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="rounded-3xl border-white/10 bg-white/5 h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-[#00FF66]">
          {icon}
          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">Step</span>
        </div>
        <CardTitle className="text-lg mt-1 text-slate-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-400">{desc}</CardContent>
    </Card>
  );
}

function SafetyCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="rounded-3xl h-full border-white/10 bg-white/5">
      <CardHeader className="pb-2">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-[#00FF66]/15 text-[#00FF66]">{icon}</div>
        <CardTitle className="text-base mt-2 text-slate-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-400">{desc}</CardContent>
    </Card>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <Card className="rounded-3xl border-white/10 bg-white/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-slate-100">{q}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-400">{a}</CardContent>
    </Card>
  );
}

/* Keyframes for FloatingOrbs */
const style = document.createElement('style');
style.innerHTML = `
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes drift { 0%{transform:translateX(0);opacity:.6} 50%{transform:translateX(10px);opacity:.9} 100%{transform:translateX(0);opacity:.6} }
`;
document.head.appendChild(style);

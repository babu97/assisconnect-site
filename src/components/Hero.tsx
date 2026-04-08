export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold tracking-wide uppercase">
            Available in UK &amp; USA
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Call Africa<br />
            <span className="text-accent-blue">for Less</span>
          </h1>
          <p className="mt-5 text-lg text-white/55 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Crystal-clear VoIP calls to 8 African countries. Stay connected with
            family and friends from just{" "}
            <span className="text-white font-semibold">$15/month</span>{" "}
            unlimited.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-green to-accent-teal hover:opacity-90 transition-opacity text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download Free
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white/80 border border-border-subtle hover:border-white/30 transition-colors text-base"
            >
              See Pricing
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start text-xs text-white/35">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2H6.477L2 6.477v11.046L6.477 22h11.046L22 17.523V6.477L17.523 2zM12 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-4.5a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1z" /></svg>
              Android &amp; iOS Coming Soon
            </span>
            <span>|</span>
            <span>{"\u{1F1EC}\u{1F1E7}"} UK</span>
            <span>{"\u{1F1FA}\u{1F1F8}"} USA</span>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex-shrink-0">
          <div className="relative w-[280px] h-[560px] rounded-[3rem] border-[3px] border-white/10 bg-bg-primary shadow-2xl shadow-accent-blue/10 overflow-hidden">
            {/* Status bar */}
            <div className="h-10 bg-bg-nav flex items-center justify-center">
              <div className="w-20 h-5 rounded-full bg-black/60" />
            </div>
            {/* App header */}
            <div className="px-5 pt-4 pb-3 flex items-center justify-between">
              <span className="text-sm font-bold text-white">Piga Home</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/50">$25.00</span>
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
            </div>
            {/* Dial pad mockup */}
            <div className="px-5 mt-2">
              <div className="bg-bg-card rounded-xl p-4 border border-border-subtle">
                <div className="text-center text-xl font-light text-white tracking-[0.2em] mb-4">
                  +254 712 345 678
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
                    (d) => (
                      <div
                        key={d}
                        className="aspect-square rounded-full bg-bg-primary/60 flex items-center justify-center text-white/80 text-sm font-medium"
                      >
                        {d}
                      </div>
                    )
                  )}
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-accent-green to-accent-teal flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-bg-nav flex items-center justify-around px-6">
              {["Keypad", "Contacts", "Recents", "Account"].map((t, i) => (
                <span
                  key={t}
                  className={`text-[10px] ${i === 0 ? "text-accent-blue" : "text-white/30"}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

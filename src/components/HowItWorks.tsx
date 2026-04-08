const steps = [
  {
    num: "1",
    title: "Download the App",
    desc: "Get Piga Home free on Android or iOS. Sign up in seconds with your email or Google account.",
  },
  {
    num: "2",
    title: "Choose a Plan",
    desc: "Pick a monthly ($20/mo) or annual ($15/mo) subscription, or go pay-as-you-go with minute bundles.",
  },
  {
    num: "3",
    title: "Start Calling",
    desc: "Dial any number in 8 African countries. Crystal-clear quality over WiFi or data.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-bg-nav/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            How It <span className="text-accent-blue">Works</span>
          </h2>
          <p className="mt-3 text-white/45">
            Get started in under 2 minutes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="flex-1 relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent-blue/40 to-transparent" />
              )}
              <div className="w-16 h-16 rounded-full bg-accent-blue/15 border-2 border-accent-blue text-accent-blue text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-white/45 max-w-xs mx-auto leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

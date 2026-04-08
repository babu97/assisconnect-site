export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Simple, <span className="text-accent-blue">Transparent</span>{" "}
            Pricing
          </h2>
          <p className="mt-3 text-white/45">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Monthly */}
          <div className="bg-bg-card rounded-2xl p-7 border border-border-subtle flex flex-col">
            <h3 className="text-lg font-semibold">Monthly</h3>
            <div className="mt-4">
              <span className="text-4xl font-extrabold">$20</span>
              <span className="text-white/40 ml-1">/month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/60 flex-1">
              <li className="flex items-center gap-2">
                <Check /> Unlimited calls to 8 countries
              </li>
              <li className="flex items-center gap-2">
                <Check /> Cancel anytime
              </li>
              <li className="flex items-center gap-2">
                <Check /> HD voice quality
              </li>
              <li className="flex items-center gap-2">
                <Check /> No contract
              </li>
            </ul>
            <a
              href="#download"
              className="mt-7 block text-center py-3 rounded-xl font-semibold border border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-colors"
            >
              Get Monthly
            </a>
          </div>

          {/* Annual */}
          <div className="bg-bg-card rounded-2xl p-7 border-2 border-accent-blue relative flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-green text-black text-xs font-bold tracking-wide uppercase">
              Best Value
            </div>
            <h3 className="text-lg font-semibold">Annual</h3>
            <div className="mt-4">
              <span className="text-4xl font-extrabold">$180</span>
              <span className="text-white/40 ml-1">/year</span>
            </div>
            <p className="text-accent-green text-sm font-medium mt-1">
              $15/month &mdash; Save $60/year
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/60 flex-1">
              <li className="flex items-center gap-2">
                <Check /> Unlimited calls to 8 countries
              </li>
              <li className="flex items-center gap-2">
                <Check /> Biggest savings
              </li>
              <li className="flex items-center gap-2">
                <Check /> HD voice quality
              </li>
              <li className="flex items-center gap-2">
                <Check /> Priority support
              </li>
            </ul>
            <a
              href="#download"
              className="mt-7 block text-center py-3 rounded-xl font-semibold bg-accent-blue hover:bg-accent-blue/90 text-white transition-colors"
            >
              Get Annual
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-white/30 mt-8">
          Or use pay-as-you-go from <span className="text-white/50">$0.04/min</span> with no subscription required.
        </p>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#43E97B"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

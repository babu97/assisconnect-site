import { COUNTRIES } from "@/lib/constants";

export default function Countries() {
  return (
    <section id="countries" className="py-20 px-6 bg-bg-nav/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Call <span className="text-accent-blue">8 African Countries</span>
          </h2>
          <p className="mt-3 text-white/45">
            Affordable rates to the countries that matter most.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {COUNTRIES.map((c) => (
            <div
              key={c.code}
              className="bg-bg-card rounded-xl p-5 border border-border-subtle text-center hover:border-accent-blue/30 transition-colors"
            >
              <div className="text-4xl mb-2">{c.flag}</div>
              <h3 className="font-semibold text-sm">{c.name}</h3>
              <p className="text-xs text-white/40 mt-0.5">{c.prefix}</p>
              <p className="text-xs text-accent-green font-medium mt-2">
                ${(c.rateCents / 100).toFixed(2)}/min
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/25 mt-6">
          Rates shown are pay-as-you-go. Subscription plans include unlimited
          minutes.
        </p>
      </div>
    </section>
  );
}

const contacts = [
  {
    country: "Kenya",
    flag: "\u{1F1F0}\u{1F1EA}",
    numbers: ["+254 719 835 499"],
  },
  {
    country: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    numbers: ["+44 799 085 7947"],
  },
  {
    country: "Nigeria",
    flag: "\u{1F1F3}\u{1F1EC}",
    numbers: ["+234 703 949 6152"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get in <span className="text-accent-blue">Touch</span>
          </h2>
          <p className="mt-3 text-white/45">
            Have questions? Reach out to our team in your region.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {contacts.map((c) => (
            <div
              key={c.country}
              className="bg-bg-card rounded-2xl p-6 border border-border-subtle text-center"
            >
              <div className="text-4xl mb-3">{c.flag}</div>
              <h3 className="font-semibold text-sm mb-3">{c.country}</h3>
              <div className="space-y-2">
                {c.numbers.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/\s/g, "")}`}
                    className="block text-sm text-accent-blue hover:text-accent-blue/80 transition-colors"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {num}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm mb-3">Or email us at</p>
          <a
            href="mailto:hello@assisconnect.net"
            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition-colors font-medium"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            hello@assisconnect.net
          </a>
        </div>
      </div>
    </section>
  );
}

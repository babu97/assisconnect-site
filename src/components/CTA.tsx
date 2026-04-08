export default function CTA() {
  return (
    <section
      id="download"
      className="py-24 px-6 bg-gradient-to-br from-indigo-deep to-indigo-mid"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Start Calling Africa Today
        </h2>
        <p className="mt-4 text-white/55 text-lg max-w-lg mx-auto leading-relaxed">
          Join the growing community of diaspora families staying connected for
          less. Download Piga Home and make your first call in minutes.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Google Play */}
          <button
            disabled
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white/10 border border-white/15 cursor-not-allowed opacity-70"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.852 13.06l2.836 1.638-3.276 3.276-2.62-2.62 3.06-2.294zM17.688 8.302l-2.836 1.638-3.06-2.294 2.62-2.62 3.276 3.276zM5.052 1.078L14.852 10.94l-1.06 1.06L4.99 3.196 5.052 1.078z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">
                Google Play
              </div>
              <div className="text-sm font-semibold text-white">
                Coming Soon
              </div>
            </div>
          </button>

          {/* App Store */}
          <button
            disabled
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white/10 border border-white/15 cursor-not-allowed opacity-70"
          >
            <svg width="24" height="28" viewBox="0 0 384 512" fill="white">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">
                App Store
              </div>
              <div className="text-sm font-semibold text-white">
                Coming Soon
              </div>
            </div>
          </button>
        </div>

        <p className="mt-6 text-xs text-white/30">
          Available on Android &amp; iOS soon. Sign up to be notified.
        </p>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-sm font-bold">
                Assis<span className="text-accent-blue">Connect</span>
              </span>
            </div>
            <p className="text-xs text-white/30 mt-2">
              Piga Home by AssisConnect
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </a>
            <a
              href="mailto:info@assisconnect.net"
              className="hover:text-white/70 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-subtle text-center">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Assis Tech Ltd &mdash; Registered
            in the United Kingdom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

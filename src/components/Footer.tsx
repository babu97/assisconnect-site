export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img src="/logo-v3-icon.svg" alt="Piga Home" className="w-8 h-8 rounded-lg" />
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

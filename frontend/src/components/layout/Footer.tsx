import { PROFILE_DATA } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-canvas py-14 px-4 sm:px-6 lg:px-8">
      {/* Decorative 3D-shaded Violet Orbs matching video */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-12 w-28 h-28 rounded-full opacity-85"
        style={{
          background:
            'radial-gradient(circle at 32% 30%, #A5A9D8 0%, #635BCA 48%, #25234C 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-28 w-24 h-24 rounded-full opacity-80"
        style={{
          background:
            'radial-gradient(circle at 32% 30%, #A5A9D8 0%, #635BCA 50%, #25234C 100%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-3 text-xs sm:text-sm">
        <p className="text-canvas/95 font-medium">
          Building thoughtful, reliable web applications.
        </p>

        <div className="flex items-center justify-center gap-2 text-lavender font-medium">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-soft-violet">&bull;</span>
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-soft-violet">&bull;</span>
          <a
            href="#home"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            &uarr; Back to top
          </a>
        </div>

        <p className="text-xs text-soft-violet pt-1">
          &copy; {new Date().getFullYear()} Jiya Sukhija
        </p>
      </div>
    </footer>
  );
}
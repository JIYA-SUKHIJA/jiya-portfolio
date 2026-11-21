export function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-canvas"
    >
      {/* Subtle Architectural Grid in Deep Indigo */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #25234C 1px, transparent 1px), linear-gradient(to bottom, #25234C 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Top-Left Muted Violet & Silver Lavender Glow */}
      <div className="absolute -top-44 -left-40 w-[540px] h-[540px] rounded-full bg-soft-violet/30 blur-[130px]" />
      {/* Center-Right Soft Primary Violet Tint */}
      <div className="absolute top-1/3 -right-44 w-[480px] h-[480px] rounded-full bg-lavender/85 blur-[120px]" />
      {/* Bottom Subtle Muted Violet Glow */}
      <div className="absolute -bottom-48 left-1/3 w-[500px] h-[500px] rounded-full bg-soft-violet/20 blur-[130px]" />
    </div>
  );
}
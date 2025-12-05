export function HeartBubble({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" fill="#ff0083" fillOpacity="0.1" />
      <path
        d="M30 42l-1.2-1.1C22.4 35.1 18 31.3 18 26.5c0-3.9 3.1-7 7-7 2.2 0 4.3 1 5.7 2.6C32.1 20.5 34.2 19.5 36.4 19.5c3.9 0 7 3.1 7 7 0 4.8-4.4 8.6-10.8 14.4L30 42z"
        fill="#ff0083"
      />
    </svg>
  );
}

export function ChatBubble({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none">
      <path
        d="M10 8h60a6 6 0 016 6v28a6 6 0 01-6 6H50l-10 12-10-12H10a6 6 0 01-6-6V14a6 6 0 016-6z"
        fill="#2AD5BD"
        fillOpacity="0.15"
      />
      <circle cx="25" cy="28" r="4" fill="#2AD5BD" />
      <circle cx="40" cy="28" r="4" fill="#2AD5BD" />
      <circle cx="55" cy="28" r="4" fill="#2AD5BD" />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FloatingHeart({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 28l-1.45-1.32C7.4 20.36 4 17.28 4 13.5 4 10.42 6.42 8 9.5 8c1.74 0 3.41.81 4.5 2.09C15.09 8.81 16.76 8 18.5 8 21.58 8 24 10.42 24 13.5c0 3.78-3.4 6.86-8.55 11.54L16 28z"
        fill="#ff0083"
        fillOpacity="0.8"
      />
    </svg>
  );
}

export function CloudShape({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none">
      <path
        d="M100 48H25c-11 0-20-9-20-20s9-20 20-20c1.5 0 3 .2 4.4.5C34.8 3.5 41.6 0 49.5 0c12.4 0 22.7 9 24.6 20.8C76.5 19.1 79.6 18 83 18c9.9 0 18 8.1 18 18 0 .7 0 1.3-.1 2h-.9c6.1 0 11 4.9 11 11s-4.9 11-11 11v-2z"
        fill="currentColor"
        fillOpacity="0.05"
      />
    </svg>
  );
}

export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
      <path
        d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Phone3D({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 400" fill="none">
      {/* Phone body */}
      <rect x="20" y="10" width="160" height="380" rx="30" fill="#1a1a1a" />
      <rect x="28" y="18" width="144" height="364" rx="24" fill="#282828" />

      {/* Screen */}
      <rect x="32" y="50" width="136" height="300" rx="4" fill="#fff" />

      {/* Notch */}
      <rect x="70" y="22" width="60" height="20" rx="10" fill="#1a1a1a" />

      {/* Screen content hints */}
      <rect x="44" y="70" width="80" height="12" rx="6" fill="#f0f0f0" />
      <rect x="44" y="92" width="112" height="8" rx="4" fill="#f0f0f0" />
      <rect x="44" y="108" width="90" height="8" rx="4" fill="#f0f0f0" />

      {/* Chat bubbles */}
      <rect x="80" y="140" width="76" height="30" rx="15" fill="#e5e5e5" />
      <rect x="44" y="180" width="90" height="36" rx="18" fill="#ff0083" />

      {/* Home indicator */}
      <rect x="75" y="360" width="50" height="4" rx="2" fill="#404040" />
    </svg>
  );
}

export function AbstractShape1({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#ff0083" fillOpacity="0.08" />
      <circle cx="50" cy="50" r="30" fill="#ff0083" fillOpacity="0.12" />
      <circle cx="50" cy="50" r="15" fill="#ff0083" fillOpacity="0.2" />
    </svg>
  );
}

export function AbstractShape2({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#2AD5BD" fillOpacity="0.08" />
      <circle cx="50" cy="50" r="30" fill="#2AD5BD" fillOpacity="0.12" />
      <circle cx="50" cy="50" r="15" fill="#2AD5BD" fillOpacity="0.2" />
    </svg>
  );
}

export function StarRating({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent-orange" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HeroIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {/* Robot Character - Left Side */}
      <div className="absolute left-[-10%] top-[20%] animate-robot-bounce">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Robot Body */}
          <rect x="75" y="80" width="100" height="120" rx="15" fill="#2A76E4" stroke="#1a5bb8" strokeWidth="3"/>

          {/* Robot Head */}
          <rect x="85" y="40" width="80" height="70" rx="12" fill="#2AD5BD" stroke="#1a9d8f" strokeWidth="3"/>

          {/* Antenna */}
          <line x1="125" y1="20" x2="125" y2="40" stroke="#FFB01C" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="125" cy="15" r="6" fill="#ff0083"/>

          {/* Eyes */}
          <circle cx="105" cy="65" r="8" fill="#1a1a1a"/>
          <circle cx="145" cy="65" r="8" fill="#1a1a1a"/>
          <circle cx="107" cy="63" r="3" fill="#fff"/>
          <circle cx="147" cy="63" r="3" fill="#fff"/>

          {/* Smile */}
          <path d="M 100 85 Q 125 95 150 85" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>

          {/* Heart Display on Chest */}
          <path d="M 115 110 L 125 120 L 135 110 Q 140 105 140 100 Q 140 95 135 95 Q 130 95 125 100 Q 120 95 115 95 Q 110 95 110 100 Q 110 105 115 110" fill="#ff0083"/>

          {/* Arms */}
          <rect x="50" y="90" width="25" height="60" rx="8" fill="#2A76E4" stroke="#1a5bb8" strokeWidth="2"/>
          <rect x="175" y="90" width="25" height="60" rx="8" fill="#2A76E4" stroke="#1a5bb8" strokeWidth="2"/>

          {/* Legs */}
          <rect x="85" y="200" width="30" height="40" rx="8" fill="#2AD5BD" stroke="#1a9d8f" strokeWidth="2"/>
          <rect x="135" y="200" width="30" height="40" rx="8" fill="#2AD5BD" stroke="#1a9d8f" strokeWidth="2"/>
        </svg>
      </div>

      {/* Cupid Character - Right Side */}
      <div className="absolute right-[-5%] top-[15%] animate-cupid-float">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wings - Left */}
          <ellipse cx="70" cy="80" rx="25" ry="35" fill="#FFB01C" opacity="0.6"/>
          <ellipse cx="75" cy="80" rx="20" ry="30" fill="#fff" opacity="0.8"/>

          {/* Wings - Right */}
          <ellipse cx="130" cy="80" rx="25" ry="35" fill="#FFB01C" opacity="0.6"/>
          <ellipse cx="125" cy="80" rx="20" ry="30" fill="#fff" opacity="0.8"/>

          {/* Body */}
          <circle cx="100" cy="90" r="30" fill="#ffc0cb"/>

          {/* Head */}
          <circle cx="100" cy="60" r="25" fill="#ffd5dc"/>

          {/* Eyes */}
          <circle cx="92" cy="58" r="3" fill="#1a1a1a"/>
          <circle cx="108" cy="58" r="3" fill="#1a1a1a"/>

          {/* Smile */}
          <path d="M 90 68 Q 100 73 110 68" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>

          {/* Bow and Arrow */}
          <path d="M 140 100 Q 145 90 150 100" stroke="#8B4513" strokeWidth="3" fill="none"/>
          <line x1="130" y1="95" x2="150" y2="95" stroke="#8B4513" strokeWidth="2"/>

          {/* Arrow */}
          <line x1="120" y1="95" x2="155" y2="95" stroke="#ff0083" strokeWidth="2"/>
          <path d="M 155 95 L 148 90 L 148 100 Z" fill="#ff0083"/>

          {/* Halo */}
          <ellipse cx="100" cy="30" rx="18" ry="5" fill="none" stroke="#FFB01C" strokeWidth="3"/>
        </svg>
      </div>

      {/* Flying Hearts */}
      <div className="absolute left-[20%] top-[10%] animate-sparkle delay-500">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path d="M 5 10 L 15 20 L 25 10 Q 30 5 30 0 Q 30 -5 25 -5 Q 20 -5 15 0 Q 10 -5 5 -5 Q 0 -5 0 0 Q 0 5 5 10" fill="#ff0083" opacity="0.6"/>
        </svg>
      </div>

      <div className="absolute right-[25%] top-[40%] animate-sparkle delay-1500">
        <svg width="25" height="25" viewBox="0 0 30 30">
          <path d="M 5 10 L 15 20 L 25 10 Q 30 5 30 0 Q 30 -5 25 -5 Q 20 -5 15 0 Q 10 -5 5 -5 Q 0 -5 0 0 Q 0 5 5 10" fill="#2AD5BD" opacity="0.5"/>
        </svg>
      </div>

      <div className="absolute left-[30%] bottom-[30%] animate-sparkle delay-2500">
        <svg width="20" height="20" viewBox="0 0 30 30">
          <path d="M 5 10 L 15 20 L 25 10 Q 30 5 30 0 Q 30 -5 25 -5 Q 20 -5 15 0 Q 10 -5 5 -5 Q 0 -5 0 0 Q 0 5 5 10" fill="#FFB01C" opacity="0.6"/>
        </svg>
      </div>

      {/* Code Symbols Floating */}
      <div className="absolute left-[15%] top-[60%] animate-particle-float delay-1000 text-4xl text-primary-pink opacity-20">
        {'</>'}
      </div>

      <div className="absolute right-[20%] top-[70%] animate-particle-float delay-2000 text-3xl text-accent-blue opacity-20">
        {'{}'}
      </div>

      {/* Decorative Circles */}
      <div className="absolute right-[10%] bottom-[20%]">
        <div className="w-32 h-32 rounded-full bg-primary-pink opacity-10 animate-pulse"></div>
      </div>

      <div className="absolute left-[5%] bottom-[10%]">
        <div className="w-24 h-24 rounded-full bg-accent-teal opacity-10 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}

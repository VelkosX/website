export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-72 md:w-80">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/20 to-accent-teal/20 rounded-[3rem] blur-2xl scale-95 opacity-60"></div>

      {/* Phone Frame */}
      <div className="relative bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Side buttons */}
        <div className="absolute -left-0.5 top-24 w-1 h-8 bg-neutral-700 rounded-l-sm"></div>
        <div className="absolute -left-0.5 top-36 w-1 h-12 bg-neutral-700 rounded-l-sm"></div>
        <div className="absolute -right-0.5 top-28 w-1 h-16 bg-neutral-700 rounded-r-sm"></div>

        {/* Screen */}
        <div className="bg-white rounded-[2.25rem] overflow-hidden">
          {/* Dynamic Island */}
          <div className="bg-neutral-900 h-8 flex items-center justify-center">
            <div className="w-24 h-6 bg-black rounded-full flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-800 ring-1 ring-neutral-600"></div>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-gradient-to-r from-primary-pink to-primary-pink-dark px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">HotBot</p>
                <p className="text-white/70 text-xs">Active now</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-4 min-h-[280px] bg-gradient-to-b from-neutral-50 to-white">
            {/* Context */}
            <div className="text-center">
              <span className="text-xs text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full">
                Today, 9:41 PM
              </span>
            </div>

            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-neutral-200 rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%] shadow-sm">
                <p className="text-sm text-neutral-800">She said she loves late night walks</p>
              </div>
            </div>

            {/* Typing indicator */}
            <div className="flex justify-start">
              <div className="bg-primary-pink/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                <div className="w-2 h-2 bg-primary-pink/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-primary-pink/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-primary-pink/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>

            {/* HotBot response */}
            <div className="flex justify-start">
              <div className="bg-gradient-to-br from-primary-pink to-primary-pink-dark rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%] shadow-lg shadow-primary-pink/20">
                <p className="text-sm text-white">lol same energy. what&apos;s your go-to late night snack though?</p>
              </div>
            </div>

            {/* Why it works card */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-accent-teal/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-accent-teal">Why this works</p>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Casual, relatable, and pivots to something fun. Shows genuine curiosity without being intense.
              </p>
            </div>
          </div>

          {/* Input area */}
          <div className="border-t border-neutral-100 p-3 bg-white">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-neutral-100 rounded-full px-4 py-2">
                <p className="text-xs text-neutral-400">Type your situation...</p>
              </div>
              <div className="w-8 h-8 bg-primary-pink rounded-full flex items-center justify-center shadow-lg shadow-primary-pink/30">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="mt-2 flex justify-center">
          <div className="w-28 h-1 bg-neutral-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

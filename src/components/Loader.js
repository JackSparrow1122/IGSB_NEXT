"use client";

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="text-center space-y-6">
        {/* Floating animation for video */}
        <div className="animate-float"> 
          <div className="w-32 h-32 bg-transparent rounded-2xl flex items-center justify-center mx-auto">
            {/* Transparent video instead of Image */}
            <video
              src="/chanakya.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-32 h-32 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Pulsing dots */}
        <div className="flex justify-center space-x-2">
          <div
            className="w-2 h-2 bg-secondary rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-secondary rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-secondary rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

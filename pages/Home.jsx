import React from 'react';

function Home() {
  const Chat = window.Chat;

  return (
    <div className="min-h-screen bg-[#141616] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#bb00ff]/20 blur-[100px]"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#90B5FF]/20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#3d107a]/20 blur-[100px]"></div>
      </div>

      {/* Floating Elements */}
      <div
        className="pointer-events-none absolute top-20 right-[10%] w-16 h-16 rounded-full border border-[#ae75fb]/30 backdrop-blur-sm bg-white/5 animate-float"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-[30%] left-[15%] w-24 h-12 rounded-lg border border-[#bb00ff]/30 backdrop-blur-sm bg-white/5 animate-float"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="relative z-10 h-screen flex flex-col">
        {/* Header */}
        <div className="p-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#bb00ff] to-[#90B5FF] bg-clip-text text-transparent mb-4 animate-pulse-glow">
            Infinity 111
          </h1>
          <p className="text-xl text-gray-300 animate-typing">
            Your intelligent conversation partner
          </p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 mx-4 md:mx-8 mb-6">
          <div className="h-full max-w-4xl mx-auto glass-morphism rounded-xl overflow-hidden animate-pulse-glow flex flex-col">
            <Chat />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-4">
          <p className="text-sm text-gray-400">
            Powered by advanced AI technology
          </p>
        </div>
      </div>
    </div>
  );
}

window.Home = Home;
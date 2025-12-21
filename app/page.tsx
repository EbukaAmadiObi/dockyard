import Image from "next/image";

export default function Home() {
  //<h1 className="text-9xl text-[#68481c] tracking-tight" style={{ filter: "url(#roughen)" }}> 
  return (
    <div className="page-overlay flex flex-col bg-[#d6cdc2] font-sans">
      <main className="flex flex-col min-h-screen items-center justify-center gap-10">
        <picture>
          <source
            media="(min-width:640px)"
            type="image/png"
            srcSet="/stripes.png"
          />

          <source
            type="image/png"
            srcSet="/stripe.png"
          />

          <img
            src="/stripes.png"
            className="absolute sm:top-1/2 left-0 -translate-y-1/2 sm:h-screen w-screen sm:w-auto object-cover pointer-events-none min-w-125 sm:min-h-[800px]"
            alt="Hero illustration"
            loading="lazy"
          />
        </picture>
        <div className="absolute top-0 left-0 h-screen w-[10%] sm:w-[20%]  bg-linear-to-r from-[#d6cdc2] to-[#d6cdc200] z-10"></div>
        <div className="absolute top-0 right-0 h-screen w-[10%] sm:w-[20%] bg-linear-to-r from-[#d6cdc200] to-[#d6cdc2] z-10"></div>
        <div className="flex flex-col items-center gap-7 z-20 mx-10">
          <svg width="0" height="0">
            <filter id="roughen">
              <feTurbulence type="turbulence" baseFrequency="5" numOctaves="1" />
              <feDisplacementMap in="SourceGraphic" scale="2" />
            </filter>
          </svg>
          <h1 className="text-[10vh] sm:text-[13vh] text-[#68481c] tracking-tight leading-[10svh]">
            Dockyard.
          </h1>
          <h2 className="text-[4vh] sm:text-[5vh] text-[#856436] italic ">
            A monthly space for the quietly obsessed.
          </h2>
          <p className="max-w-3xl text-black tracking-tight font-mono">
            Dockyard is a monthly deep-work meetup for people who are seriously engaged in their own
            projects, across disciplines. We spend most of the afternoon working quietly together, 
            with time for conversation and short demos. The goal is not just networking or starting 
            something new every month, but making steady progress on work you already care deeply 
            about, alongside people you would not normally meet.
          </p>
          <div className="font-medium font-mono mb-22">
            <a
              className="flex h-12 w-full items-center gap-2 rounded-full bg-[#7d7f48] px-5 text-foreground transition-colors hover:bg-[#55572c] "
              href="https://luma.com/5a1sost8"
              target="_blank"
              rel="noopener noreferrer"
            >
              APPLY TO JOIN
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

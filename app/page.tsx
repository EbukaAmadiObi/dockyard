import Image from "next/image";

export default function Home() {
  //<h1 className="text-9xl text-[#68481c] tracking-tight" style={{ filter: "url(#roughen)" }}> 
  return (
    <div className="page-overlay flex flex-col bg-[#d6cdc2] font-sans">
      <main className="flex flex-col min-h-screen items-center justify-center gap-10">
        <Image
          src="/stripes.png"
          alt="Description"
          width={5120}
          height={2029}
          className="absolute top-1/2 left-0 -translate-y-1/2 h-screen object-cover pointer-events-none"
        />
        <div className="absolute top-0 left-0 h-screen w-[20%] bg-linear-to-r from-[#d6cdc2] to-[#d6cdc200] z-50"></div>
        <div className="absolute top-0 right-0 h-screen w-[20%] bg-linear-to-r from-[#d6cdc200] to-[#d6cdc2] z-50"></div>
        <div className="flex flex-col items-center gap-7">
          <svg width="0" height="0">
            <filter id="roughen">
              <feTurbulence type="turbulence" baseFrequency="5" numOctaves="1" />
              <feDisplacementMap in="SourceGraphic" scale="2" />
            </filter>s
          </svg>
          <h1 className="text-[9rem] text-[#68481c] tracking-tight leading-35">
            Dockyard.
          </h1>
          <h2 className="text-5xl text-[#856436] italic ">
            A monthly space for the quietly obsessed.
          </h2>
          <p className="max-w-3xl text-lg text-black tracking-tight font-mono">
            Dockyard is a monthly deep-work meetup for people who are seriously engaged in their own
            projects, across disciplines. We spend most of the afternoon working quietly together, 
            with time for conversation, short demos, and an optional dinner afterwards. The goal is
            not just networking or starting something new every month, but making steady progress on 
            work you already care deeply about, alongside people you would not normally meet.
          </p>
          <div className="font-medium font-mono mb-28">
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

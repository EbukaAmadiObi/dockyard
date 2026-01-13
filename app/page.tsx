"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'

export default function Home() {
  //<h1 className="text-9xl text-[#68481c] tracking-tight" style={{ filter: "url(#roughen)" }}> 
  const [loading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const contentVariants = {
    hidden: { opacity: 0.2, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  } as const;

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    // If the image is already cached/loaded, hide the overlay immediately
    if (img.complete) {
      setLoading(false);
      return;
    }
    const handleLoad = () => setLoading(false);
    const handleError = () => {
      // In case of error, don't block the UI; hide overlay
      setLoading(false);
    };
    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);
    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, []);

  useEffect(() => {
    // Dynamically load the external script
    const script = document.createElement("script");
    script.src = "https://eomail5.com/form/969825da-ef08-11f0-a1ac-310705f6e9c4.js";
    script.async = true;
    script.setAttribute("data-form", "969825da-ef08-11f0-a1ac-310705f6e9c4");
    const container = document.getElementById("eomail-form-container");
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="page-overlay flex flex-col bg-[#d6cdc2] font-sans h-svh">
      {loading && (
        <div
          aria-live="polite"
          aria-busy={true}
          role="status"
          className="fixed inset-0 grid place-items-center bg-[#d6cdc2] z-[200]"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 rounded-full border-4 border-[#68481c] border-t-transparent animate-spin" />
            <span className="text-[#68481c] font-mono">Loading…</span>
          </div>
        </div>
      )}
      <picture>
        <source
          media="(min-width:640px)"
          type="image/avif"
          srcSet="/stripes.avif"
        />

        <source
          type="image/png"
          srcSet="/stripe.png"
        />

        <img
          src="/stripes.avif"
          className="absolute top-[2.5%] sm:top-1/2 left-0 sm:-translate-y-1/2 sm:h-svh w-svw sm:w-auto object-cover pointer-events-none"
          alt="Hero illustration"
          loading="lazy"
          ref={imgRef}
        />
      </picture>
      <main className="flex flex-col items-center justify-center h-svh">
        <div className="absolute top-0 left-0 h-svh w-[10%] sm:w-[20%]  bg-linear-to-r from-[#d6cdc2] to-[#d6cdc200] z-10"></div>
        <div className="absolute top-0 right-0 h-svh w-[10%] sm:w-[20%] bg-linear-to-r from-[#d6cdc200] to-[#d6cdc2] z-10"></div>
        
        <div className="absolute bottom-0 right-0 z-20 p-5 font-mono text-[10px] md:text-sm">
          <span>Made possible by</span> <a href="https://www.giveago.co/" className="text-[#501ea0] font-bold">Give(a)Go</a>
        </div>
        <motion.div
          className="flex flex-col items-center gap-5 sm:gap-7 z-20 mx-10"
          variants={contentVariants}
          initial="hidden"
          animate={loading ? "hidden" : "visible"}
        >
          <h1 className="text-[9vh] sm:text-[13vh] text-[#68481c] tracking-tight leading-[7svh] sm:leading-[10svh] mt-10">
            Dockyard.
          </h1>
          <h2 className="text-[4vh] sm:text-[5vh] text-[#856436] italic ">
            A monthly space for the quietly obsessed.
          </h2>
                    
          <p className="text-[14px] sm:text-[18px] max-w-4xl text-black tracking-tight font-mono">
            Dockyard is a monthly deep-work meetup for people who are seriously engaged in their own
            projects, across disciplines. We spend most of the afternoon working quietly together, 
            with time for conversation and short demos. The goal is not just networking or starting 
            something new every month, but making steady progress on work you already care deeply 
            about, alongside people you would not normally meet.
          </p>
          <div className="font-medium font-mono sm:mb-22 flex flex-row gap-6">
            <div id="eomail-form-container" />
            <a
              className="flex h-10 w-44 mt-3.75 text-white font-bold justify-center items-center rounded-sm bg-[#7d7f48] px-5 text-foreground transition-colors hover:bg-[#55572c] "
              href="https://mirror-ladybug-8f7.notion.site/2e78ef702b5e800e83d6d4d017cec2a5?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to Join
            </a>
            
          </div>
        </motion.div>
      </main>
    </div>
  );
}

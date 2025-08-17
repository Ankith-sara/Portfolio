import React, { createContext, useContext, useState } from "react";

// Import your sounds
import modeChangeSound from "../assets/sounds/modeChange.wav";
import mouseClickSound from "../assets/sounds/mouseClick.wav";
import navChangeSound from "../assets/sounds/navChange.wav";

const SoundContext = createContext();

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};

const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const playSound = (src) => {
    if (isMuted) return;
    const audio = new Audio(src);
    audio.volume = 0.3; // adjust volume if needed
    audio.play().catch((err) => console.error("Audio play error:", err));
  };

  const playClick = () => playSound(mouseClickSound); // for button clicks
  const playHover = () => playSound(navChangeSound); // for hover transitions
  const playTransition = () => playSound(modeChangeSound); // for page/mode changes

  return (
    <SoundContext.Provider
      value={{ isMuted, toggleMute, playClick, playHover, playTransition }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;

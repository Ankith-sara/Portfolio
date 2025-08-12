import React, { createContext, useContext, useState } from 'react';

const SoundContext = createContext();

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};

const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const createBeep = (frequency, duration, volume = 0.1) => {
    if (isMuted) return;

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      console.error('Audio not supported', error);
    }
  };

  const playClick = () => createBeep(800, 0.1, 0.05);
  const playHover = () => createBeep(1000, 0.05, 0.02);
  const playTransition = () => createBeep(600, 0.2, 0.03);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playClick, playHover, playTransition }}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
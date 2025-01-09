import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    audioElement.volume = volume;
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying, volume]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const adjustVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <>
      {/* Arka Plan Müziği */}
      <audio id="background-music" src="/background-music.mp3" loop />

      {/* Ses Kontrolü */}
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
        {/* Ses Aç/Kapa Butonu */}
        <button
          onClick={toggleMusic}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
          aria-label={isPlaying ? 'Müziği Durdur' : 'Müziği Başlat'}
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>

        {/* Ses Seviyesi Kontrolü */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={adjustVolume}
          className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          aria-label="Ses Seviyesi"
        />
      </div>

      {/* Ana İçerik */}
      <Component {...pageProps} />
    </>
  );
}

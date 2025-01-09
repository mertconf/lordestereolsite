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
      <div className="fixed bottom-4 right-4 z-50 group">
        {/* Ses Aç/Kapa Butonu */}
        <button
          onClick={toggleMusic}
          className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none shadow-2xl transition-all transform group-hover:scale-110 group-hover:rotate-12"
          aria-label={isPlaying ? 'Müziği Durdur' : 'Müziği Başlat'}
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>

        {/* Ses Çubuğu */}
        <div
          className="hidden group-hover:flex flex-col items-center mt-2 transition-transform transform scale-y-0 group-hover:scale-y-100 origin-top"
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={adjustVolume}
            className="w-24 h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none"
          />
        </div>
      </div>

      {/* Ana İçerik */}
      <Component {...pageProps} />
    </>
  );
}

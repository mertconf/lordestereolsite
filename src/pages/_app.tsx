import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const adjustVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    audioElement.volume = parseFloat(event.target.value);
  };

  return (
    <>
      <audio id="background-music" src="/background-music.mp3" loop />

      {/* Ses Kontrolü */}
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        <button
          onClick={toggleMusic}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
          }}
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="0.5"
          onChange={adjustVolume}
          style={{
            display: 'block',
            marginTop: '10px',
            width: '150px',
          }}
        />
      </div>

      {/* Eski Kodlar */}
      <Component {...pageProps} />
    </>
  );
}

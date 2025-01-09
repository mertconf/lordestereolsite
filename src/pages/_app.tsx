import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
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
      {/* Müzik Dosyası */}
      <audio id="background-music" src="/background-music.mp3" loop />

      {/* Ses Kontrol Butonu */}
      <button
        id="music-control"
        onClick={toggleMusic}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>

      {/* Ses Seviyesi Slider'ı */}
      <input
        id="volume-slider"
        type="range"
        min="0"
        max="1"
        step="0.1"
        defaultValue="0.5"
        onChange={adjustVolume}
        style={{
          position: 'fixed',
          top: '50px',
          right: '10px',
          zIndex: 1000,
          width: '150px',
        }}
      />

      {/* Ana İçerik */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

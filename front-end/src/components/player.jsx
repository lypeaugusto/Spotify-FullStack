import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentIndex = songsArray.findIndex((song) => song._id === id);
  const prevSongId = currentIndex > 0 ? songsArray[currentIndex - 1]._id : null;
  const nextSongId = currentIndex < songsArray.length - 1 ? songsArray[currentIndex + 1]._id : null;

  const audio = songsArray.find((song) => song._id === id)?.audio;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    if (nextSongId) {
      navigate(`/song/${nextSongId}`);
    }
  };

  const playPrevSong = () => {
    if (prevSongId) {
      navigate(`/song/${prevSongId}`);
    }
  };

  const handleProgressBarClick = (event) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [audio, isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const updateDuration = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener('timeupdate', updateTime);
    audioElement.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
      audioElement.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  return (
    <div className="player">
      <div className="player__controllers">
        <FontAwesomeIcon
          className={`player__icon ${prevSongId ? '' : 'player__icon--disabled'}`}
          icon={faBackwardStep}
          onClick={playPrevSong}
        />

        <audio ref={audioRef} src={audio} onEnded={playNextSong}></audio>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={togglePlayPause}
        />

        <FontAwesomeIcon
          className={`player__icon ${nextSongId ? '' : 'player__icon--disabled'}`}
          icon={faForwardStep}
          onClick={playNextSong}
        />
      </div>
      <div className="player__progress">
        <p>{formatTime(currentTime)}</p>
        <div
          className="player__bar"
          ref={progressBarRef}
          onClick={handleProgressBarClick}
        >
          <div
            className="player__bar-progress"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <p>{formatTime(duration)}</p>
      </div>
    </div>
  );
};

export default Player;
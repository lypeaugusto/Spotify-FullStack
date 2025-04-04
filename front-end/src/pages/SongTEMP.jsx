import 'react';
import Player from '../components/player';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';

const Song = () => {
  const { id } = useParams();

  const songObj = songsArray.find((currentSongObj) => currentSongObj._id === id);

  

  if (!songObj) {
    return <div>Música não encontrada</div>;
  }

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={songObj.image} alt={`imagem da música ${songObj.name}`} className='song__image' />
        </div>
      </div>
      <div className="song__bar">
        <div className='song__artist-image'>
          <Link to={`/artist/${songObj.artistId}`}>
            <img 
              width={75}
              height={75}
              src={songObj.image} 
              alt={`imagem do artista ${songObj.artist}`} 
            />
          </Link>
        </div>
        
        <Player audio={songObj.audio} />
        
        <div className='song__artist-info'>
          <p className='song__name'>{songObj.name}</p>
          <p className='song__artist'>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
}

export default Song;
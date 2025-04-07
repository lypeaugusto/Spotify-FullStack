import 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from '../../../components/SongList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Artist = () => {
  const { id } = useParams();
  const artistObj = artistArray.find((currentArtistObj) => currentArtistObj._id === id);
  const artistSongs = songsArray.filter((currentSongObj) => currentSongObj.artist === artistObj.name);
  const randomIdFromArtist = Math.floor(Math.random() * Math.min(artistSongs.length, 32));
  console.log(artistSongs[randomIdFromArtist]?.id);    

  if (!artistObj) {
    return <div>Artista não encontrado</div>;
  }

  return (
    <div>
      <div className="artist"></div>
      
      <div className="artist__header" 
        style={{
          backgroundImage: 
          `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObj.banner})`
        }}>
        <h2 className='artist__title'>{artistObj.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={artistSongs} />
      </div>

      <Link to={`/song/${artistSongs[randomIdFromArtist]?._id}`} className='single-item__play'>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>
    </div>
  );
}

export default Artist;
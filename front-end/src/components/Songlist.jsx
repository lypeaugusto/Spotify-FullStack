import { useState } from 'react';
import Songitem from './Songitem';

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  const handleSeeMore = () => {
    setItems((prevItems) => prevItems + 5); 
  };

  return (
    <div>
      <div className="song-list">
        {songsArray.slice(0, items).map((currentSongObj, index) => (
          <Songitem {...currentSongObj} index={index} key={index} />
        ))}
        {items < songsArray.length && ( 
          <p className="song-list__see-more" onClick={handleSeeMore}>
            ver mais
          </p>
        )}
      </div>
    </div>
  );
};

export default SongList;
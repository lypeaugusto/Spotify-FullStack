import 'react';
import ItemList from './itemList';
import {artistArray} from '../assets/database/artists';
import{songsArray} from '../assets/database/songs';


const Main = ({type}) => {
  return (
    <div className="main">
      
      
      {type === "artists" || type === undefined ? 
      (<ItemList title="artistas" items={10} ItemsArray={artistArray} path="/artists" idpath="/artist" />) : (<> </>)}
 
      
      
      {type === "songs" || type === undefined ? 
      (<ItemList title="musicas" items={20} ItemsArray={songsArray} path="/songs"   idpath="/song" />)
        :
      (<></>)}
      

      
     
      
      
      
    </div>
  );
};

export default Main;
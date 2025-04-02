import {artistArray} from '../../front-end/src/assets/database/artists.js';
import {songsArray} from '../../front-end/src/assets/database/songs.js';
import {db} from './connect.js';



const newArtistArray = artistArray.map((currentAtistobj) => {
    const newArtistObj = { ...currentAtistobj };
    delete newArtistObj.id;
    return newArtistObj;
});

const newSongArray  = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj };
    delete newSongObj.id;
    return newSongObj;
});

const responseArtist = await db.collection('artists').insertMany(newArtistArray);   
const responseSong = await db.collection('songs').insertMany(newSongArray);

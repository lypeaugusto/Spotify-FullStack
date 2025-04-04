import axios from 'axios';
// Remove dotenv import as it's not needed in the browser
// Use a hardcoded NODE_ENV or pass it during the build process


const URL = NODE_ENV === 'development'  ? 'http://localhost:3000/api': '/api';
;

const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;    

    console.log(responseSongs.data);
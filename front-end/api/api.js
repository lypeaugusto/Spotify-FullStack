import axios from 'axios';

const NODE_ENV = 'development'; // Replace with 'production' for production builds
const URL = NODE_ENV === 'development' 
  ? 'https://spotify-fullstack-gdhj.onrender.com/api' 
  : 'https://spotify-fullstack-gdhj.onrender.com/api'; // Replace with your production URL

const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

console.log(responseSongs.data);
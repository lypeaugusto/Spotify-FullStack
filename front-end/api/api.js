import axios from 'axios';

const NODE_ENV = 'development'; // Replace with 'production' for production builds
const URL = NODE_ENV === 'development' 
  ? 'https://spotify-fullstack-gdhj.onrender.com/api' 
  : 'https://spotify-fullstack-gdhj.onrender.com/api'; // Replace with your production URL

export let artistArray = [];
export let songsArray = [];

async function fetchData() {
  try {
    const responseArtist = await axios.get(`${URL}/artists`);
    const responseSongs = await axios.get(`${URL}/songs`);

    artistArray = responseArtist.data;
    songsArray = responseSongs.data;

    console.log(responseSongs.data);
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}

fetchData();
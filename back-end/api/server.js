import express from 'express';
import cors from 'cors';
import { db } from './connect.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.get('/', (request, response) => {
  response.json({
    message: 'Bem-vindo à API do Spotify Clone!',
    endpoints: {
      songs: '/songs',
      artists: '/artists',
    },
  });
});


app.get('/songs', async (request, response) => {
  try {
    const songs = await db.collection('songs').find({}).toArray();
    response.json(songs);
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    response.status(500).json({ error: 'Erro ao buscar músicas' });
  }
});


app.get('/artists', async (request, response) => {
  try {
    const artists = await db.collection('artists').find({}).toArray();
    response.json(artists);
  } catch (error) {
    console.error('Erro ao buscar artistas:', error);
    response.status(500).json({ error: 'Erro ao buscar artistas' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
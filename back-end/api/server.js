import express from 'express';
import cors from 'cors';
import { db } from './connect.js';
import path from "path";    
import fs from 'fs';

const __dirname = path.resolve();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/api', (request, response) => {
  response.json({
    message: 'Bem-vindo à API do Spotify Clone!',
    endpoints: {
      songs: '/api/songs',
      artists: '/api/artists',
    },
  });
});

app.get('/api/songs', async (request, response) => {
  try {
    const songs = await db.collection('songs').find({}).toArray();
    response.json(songs);
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    response.status(500).json({ error: 'Erro ao buscar músicas' });
  }
});


app.get('/api/artists', async (request, response) => {
  try {
    const artists = await db.collection('artists').find({}).toArray();
    response.json(artists);
  } catch (error) {
    console.error('Erro ao buscar artistas:', error);
    response.status(500).json({ error: 'Erro ao buscar artistas' });
  }
});

app.use(express.static(path.join(__dirname, '../../front-end/dist')));

app.get('*', async (request, response) => {
  const indexPath = path.join(__dirname, '../../front-end/dist/index.html'); // Corrigir o caminho
  if (fs.existsSync(indexPath)) {
    response.sendFile(indexPath);
  } else {
    console.error(`Arquivo não encontrado: ${indexPath}`);
    response.status(404).send('Arquivo index.html não encontrado. Certifique-se de que o front-end foi construído.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
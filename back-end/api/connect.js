import { MongoClient } from 'mongodb';

const uri ="mongodb+srv://felype:felype@users.sp3kb.mongodb.net/users?retryWrites=true&w=majority&appName=users"


const client = new MongoClient(uri);

await client.connect();   
console.log('Conexão com o MongoDB estabelecida com sucesso!');
export const db = client.db('SpotifyAula');


import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  {
    url: 'https://cdn.myanimelist.net/images/anime/1948/120625l.jpg',
    filename: 'attack-on-titan.jpg'
  },
  {
    url: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
    filename: 'demon-slayer.jpg'
  },
  {
    url: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg',
    filename: 'jujutsu-kaisen.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/anime-db/anime-posters/master/one-punch-man.jpg',
    filename: 'one-punch-man.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/anime-db/anime-posters/master/my-hero-academia.jpg',
    filename: 'my-hero-academia.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/anime-db/anime-posters/master/death-note.jpg',
    filename: 'death-note.jpg'
  },
  {
    url: 'https://cdn.myanimelist.net/images/anime/1223/96541l.jpg',
    filename: 'fullmetal-alchemist.jpg'
  },
  {
    url: 'https://cdn.myanimelist.net/images/anime/1935/127974l.jpg',
    filename: 'steins-gate.jpg'
  },
  {
    url: 'https://cdn.myanimelist.net/images/anime/1088/135089l.jpg',
    filename: 'code-geass.jpg'
  },
  {
    url: 'https://cdn.myanimelist.net/images/anime/1329/93506l.jpg',
    filename: 'violet-evergarden.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '../public/images/animes', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
    });
  });
};

async function downloadAllImages() {
  try {
    await Promise.all(images.map(img => downloadImage(img.url, img.filename)));
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages(); 
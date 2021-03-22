const fetch = require('node-fetch');
const apiKey = process.env.GOOGLE_API_KEY;
const apiBase = path =>
  `https://www.googleapis.com/youtube/v3/${path}?key=${apiKey}`;

const getPlaylist = async playlistId => {
  return await (
    await fetch(
      `${apiBase(
        'playlistItems'
      )}&part=snippet&maxResults=50&playlistId=${playlistId}`
    )
  ).json();
};

const getVideos = async videoId => {
  return await (
    await fetch(
      `${apiBase(
        'videos'
      )}&part=snippet%2Cstatistics&id=${videoId}&maxResults=50`
    )
  ).json();
};

module.exports = {
  getPlaylist,
  getVideos
};

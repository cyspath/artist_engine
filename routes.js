const path = require('path');
const Controller = require('./backend/controllers/index');

module.exports = (app) => {
  app.get('/api/fetch_artists', Controller.fetchArtists);

  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
};
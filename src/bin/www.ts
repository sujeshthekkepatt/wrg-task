import http from 'http';

import app from '../app';

(() => {

  const server = http.createServer(app);

  app.set('port', process.env.PORT);

  server.listen(app.get('port'));

  server.on('listening', app.get('onListening'));
})();

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/nexthome-front-customer'), {
  etag: true, // default
  lastModified: true, // default
  setHeaders: (res, _) => {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
  },
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/nexthome-front-customer/index.html'));
});

const port = process.env.PORT || '3001';
app.set('port', port);

// app.set('etag', false); // prevents caching

const server = http.createServer(app);
server.listen(port, () => console.log('Running on port ' + port));

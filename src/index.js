import fs from 'fs';
import https from 'https';
import app from './app';
import './database';

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/kocservices.us/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/kocservices.us/fullchain.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/kocservices.us/chain.pem')
};

https.createServer(options, app).listen(4000, () => {
  console.log('HTTPS Server is running on port 4000');
});

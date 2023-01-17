const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'there' });
});

const PORT = process.env.PORT || 3000;
/* const server = */app.listen(PORT);

// app.get('/close', (req, res) => {
//   res.send({ action: 'close' });
//   server.close(() => {
//     console.log('Http server closed.');
//   });
// });

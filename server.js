const express = require('express');

const app = express();

app.use(express.static('./dist/kutbettinCom'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/kutbettinCom/'}),
);

app.listen(process.env.PORT || 8080);

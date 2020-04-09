import express from 'express';
// import path from 'path';

const port =
  Number(process.env.PORT || 3000) + Number(process.env.NODE_APP_INSTANCE || 0);

const app = express();

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   // res.send( "Hello world!" );
//   res.sendFile(path.join(__dirname, './index.html'));
// });

app.listen(port, () => console.log(`Listening on port ${port}`));

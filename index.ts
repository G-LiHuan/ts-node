import app from './src/App';

const PORT = process.env.port || 3000;

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${PORT}`);
});
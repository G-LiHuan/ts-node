<<<<<<< HEAD
export default function helloWorld() {
  console.log('Helloworld!');
}

helloWorld();
=======
import app from './src/App';

const PORT = process.env.port || 3000;

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${PORT}`);
});
>>>>>>> 3a32214e0492ad48977e86d143e6b238162d78a1

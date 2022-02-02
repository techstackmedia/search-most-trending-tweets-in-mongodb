import app from '../app.js';
import debug from 'debug';
const log = debug('app:log');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  log(`Server up and running at port ${port}`);
});

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dbUri from './utilities/database.js';
import courses from './routes/courses.js';

dbUri;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/', courses);

export default app;

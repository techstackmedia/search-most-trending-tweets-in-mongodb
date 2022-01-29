import mongoose from 'mongoose';
import dotenv from 'dotenv';
import debug from 'debug';
const db = debug('app:db');
dotenv.config({ path: './bin/.env' });

const dbUri = async URI => {
  try {
    await mongoose.connect(URI);
    db('Database connection successfull');
  } catch (err) {
    db(`Unable to connect to database, ${err.message}`);
  }
};

dbUri(`${process.env.URI}`);

export default dbUri;

import dotenv from 'dotenv';
dotenv.config();

import { writeView, queryVideoViews } from './views/views';
import { queryVideo, writeVideo } from './videos/videos';

const pgp = require( 'pg-promise' )();

export const db = pgp( process.env.DATABASE_URL );

module.exports = {
  db,
  queryVideo,
  writeVideo,
  writeView,
  queryVideoViews
};

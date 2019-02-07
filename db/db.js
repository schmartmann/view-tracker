import config from '../config';
import { writeView } from './views/views';
import { queryVideo, writeVideo } from './videos/videos';

const pgp = require( 'pg-promise' )();
export const db  = pgp( config.databaseUrl || process.env.DATABASE_URL );

module.exports = {
  db,
  queryVideo,
  writeVideo,
  writeView
};

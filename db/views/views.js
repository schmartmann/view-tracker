import { View } from './view';
import config from '../../config';

const pgp = require( 'pg-promise' )();
const db  = pgp( config.databse_url || process.env.DATABASE_URL );

const writeView = ( req, res, next ) => {
  const { videoId } = req.body;

  const sqlCommand =
    'INSERT INTO views(video_id) VALUES($1) ' +
    'RETURNING id, video_id';

  db.one(
    sqlCommand,
    [ videoId ]
  ).
  then(
    view => {
      console.log( view );
      res.view = view;
      next();
    }
  ).
  catch(
    error => console.log( error )
  );
};

import { Video } from './video';
import config from '../../config';

const pgp = require( 'pg-promise' )();
// const db  = pgp( config.databse_url || process.env.DATABASE_URL );

export const queryVideo = ( videoId ) => {
  return { id: 1, name: "shut up", brand: "shut up", published: new Date() }
  // db.one(
  //   "SELECT * FROM videos WHERE video_id=$1",
  //   [ videoId ]
  // ).
  // then(
  //   video => {
  //     console.log( video );
  //     res.video = video;
  //     next();
  //   }
  // ).
  // catch(
  //   error => console.log( error )
  // );
};


const writeVideo = ( req, res, next ) => {
  const { name, brand, published } = req.body;

  const newVideo = new Video( name, brand, published );

  const sqlCommand =
    'INSERT INTO videos(name,brand,published) VALUES($1, $2) ' +
    'RETURNING id, name, brand, published';

  db.one(
    sqlCommand,
    [ name, brand, published ]
  ).
  then(
    video => {
      console.log( video );
      res.video = video;
      next();
    }
  ).
  catch(
    error => console.log( error )
  );
};



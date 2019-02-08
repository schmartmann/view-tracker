import express from 'express';

const router = express.Router();
import db from '../../db/db';

export const register = ( server ) => {
  server.use( '/videos', router );
};

router.post(
  '/:videoId/views',
  ( req, res ) => {
    db.
      writeView( req.params.videoId ).
      then(
        view => res.json( view )
      ).
      catch(
        error => res.status( 400 ).send( error.message )
      );
  }
);

router.get(
  '/:videoId/views',
  ( req, res ) => {
    const { params, query } = req;

    var queriedVideo;

    db.
      queryVideo( params.videoId ).
      then(
        video => {
          return queriedVideo = video;
        }
      ).
      then(
        video => db.countViews( video.id, query.from )
      ).
      then(
        count => {
          count.fromDate = query.from;
          return Object.assign( queriedVideo, count );
        }
      ).
      then(
        results => {
          res.json( results )
        }
      ).
      catch(
        error => res.status( 400 ).send( error.message )
      );
  }
);

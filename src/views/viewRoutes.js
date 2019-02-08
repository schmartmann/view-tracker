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
    const fromDate = new Date( query.from );

    if ( fromDate && validateDate( fromDate ) ) {

      db.
        queryVideoViews( params.videoId, fromDate ).
        then(
          video =>
            res.json( video )
        ).
        catch(
          error => res.status( 400 ).send( error.message )
        );
      }
      else {
        res.status( 400 ).send( "'form' param must be valid date" );
      }
  }
);

const validateDate = ( date ) => {
  return !isNaN( date.valueOf() )
};

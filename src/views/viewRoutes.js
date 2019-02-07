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
      writeView( req.params ).
      then(
        view => res.json( view )
      ).
      catch(
        error => res.status( 400 ).send( error.message )
      );
  }
);



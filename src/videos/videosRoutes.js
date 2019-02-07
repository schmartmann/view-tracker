import express from 'express';
import pry from 'pryjs'

const router = express.Router();
import db from '../../db/db';

export const register = ( app ) => {
  app.use( '/videos', router );
};

router.post(
  '/',
  ( req, res ) => {
    db.
      writeVideo( req.body ).
      then(
        video => res.json( video )
      ).
      catch(
        error => res.status( 400 ).send( error.message )
      );
  }
);

router.get(
  '/:id',
  ( req, res ) => {
    db.
      queryVideo( req.params.id ).
      then(
        video => res.json( video )
      ).
      catch(
        error => res.status( 400 ).send( error.message )
      );
  }
);

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

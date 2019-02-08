import express from 'express';

const router = express.Router();
import db from '../../db/db';

export const register = ( server ) => {
  server.use( '/videos', router );
};

router.post(
  '/',
  ( req, res ) => {
    const { name, brand, published } = req.body;

    db.
      writeVideo( name, brand, published ).
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

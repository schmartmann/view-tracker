import express from 'express';

const router = express.Router();
import db from '../../db/db';
import { validateNewVideo } from './videosValidations';

export const register = ( server ) => {
  server.use( '/videos', router );
};

router.post(
  '/',
  validateNewVideo,
  ( req, res ) => {
    const { name, brand_id, published } = req.body;

    db.
      writeVideo( name, brand_id, published ).
      then(
        video => res.json( video )
      ).
      catch(
        error => res.status( 400 ).send( error.message )
      );
  }
);

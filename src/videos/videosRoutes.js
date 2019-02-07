import express from 'express';
import { HttpError } from '../errors';

const router = express.Router();
const db     = require( '../../db/db' );

export const register = ( app ) => {
  app.use( '/videos', router );
};

router.post(
  '/',
  ( req, res ) => {
    const { body } = req;

    db.
      writeVideo( body ).
      then(
        video => res.send( video )
      ).
      catch(
        error => res.send( error )
      );
  }
);

router.get(
  '/:id',
  ( req, res ) => {
    const { id } = req.params;
    db.
      queryVideo( id ).
      then(
        video => res.send( video )
      ).
      catch(
        error => error
      )
  }
);

router.post(
  '/:id/views',
  ( req, res ) => {
    res.send( 'create a new view record, kay?' )
  }
);

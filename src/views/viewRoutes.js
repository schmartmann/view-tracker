import express from 'express';

const router = express.Router();
import db from '../../db/db';
import { validateId, validateViewsQuery } from './viewValidations';

export const register = ( server ) => {
  server.use( '/videos', router );
};

router.post(
  '/:videoId/views',
  validateId,
  ( req, res ) => {
    db.
      writeView( req.params.videoId ).
      then(
        view => res.json( view )
      ).
      catch(
        error => res.status( 400 ).send( error )
      );
  }
);

router.get(
  '/:videoId/views',
  validateViewsQuery,
  ( req, res ) => {
    db.
      queryVideoViews( req.params.videoId, req.query.from ).
      then(
        video =>
          res.json( video )
      ).
      catch(
        error => res.status( 400 ).send( error.message )
      );
  }
);

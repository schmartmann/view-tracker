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
    const video = db.writeVideo( body );

    res.send( video );
  }
);

router.get(
  '/:id',
  ( req, res ) => {
    const { id } = req.params;
    const video = db.queryVideo( id );
    res.send( video );
  }
);

router.post(
  '/:id/views',
  ( req, res ) => {
    res.send( 'create a new view record, kay?' )
  }
);

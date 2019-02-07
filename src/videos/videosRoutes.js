import express from 'express';
import { HttpError } from '../errors';

const router = express.Router();

export const register = ( app ) => {
  app.use( '/videos', router );
};

router.post(
  '/',
  ( req, res ) => {
    res.send( 'create new video')
  }
);

router.post(
  '/:id/views',
  ( req, res ) => {
    res.send( 'create a new view record' )
  }
)

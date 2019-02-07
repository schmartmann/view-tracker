import express from 'express';
import { json as parseJsonBody } from 'body-parser';
import { register as registerVideos } from './videos/videosRoutes';

import config from '../config';

const server = express();
const router = express.Router();

// all requests and responses are in JSON
server.use( parseJsonBody() );

server.get(
  '/',
  ( req, res ) => {
    res.send( 'here!' );
  }
);

registerVideos( server );

export default server;

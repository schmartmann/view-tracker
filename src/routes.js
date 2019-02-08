import express from 'express';
import { json as parseJsonBody } from 'body-parser';
import { register as registerVideos } from './videos/videosRoutes';
import { register as registerViews } from './views/viewRoutes';

const server = express();
const router = express.Router();

// all requests and responses are in JSON
server.use( parseJsonBody() );

registerVideos( server );
registerViews( server );

export default server;

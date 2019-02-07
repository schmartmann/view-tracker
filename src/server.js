import express from 'express';
import { json as parseJsonBody } from 'body-parser';

const router = express.Router();
const app    = express();

app.use( parseJsonBody() );
app.use( '/api', router );

const PORT = config.port || process.env.port || 3000;

app.listen(
  PORT,
  () => {
    console.log(
      `*frasier crane voice* Hello localhost:${ PORT }. I'm listening.`
    );
  }
);

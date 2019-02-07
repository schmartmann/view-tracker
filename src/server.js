import { createServer } from 'http';
import handler from './routes';
import config from '../config';

const PORT = config.port || process.env.port || 3000;

const server =
  createServer( handler ).
    on(
        'listening',
        () => {
          const { port } = server.address();
          console.log(
            `*frasier crane voice* Hello localhost:${ PORT }. I'm listening.`
          );
        }
      ).
      on(
        'close',
        () => console.log( 'Goodnight, Seattle' )
      )

server.listen(PORT);

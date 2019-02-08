import { createServer } from 'http';
import handler from './routes';

const PORT = process.env.port || 3000;

const server =
  createServer( handler ).
    on(
        'listening',
        () => {
          const { port } = server.address();
          console.log(
            `Hello, Seattle. I'm listening.`
          );
        }
      ).
      on(
        'close',
        () => console.log( 'Goodnight, Seattle' )
      )

server.listen(PORT);

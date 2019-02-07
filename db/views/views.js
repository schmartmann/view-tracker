import { db } from '../db';

export const writeView = ( params ) => {
  return new Promise(
    ( resolve, reject ) => {
      const sqlCommand =
        'INSERT INTO views( video_id ) VALUES( $1 ) ' +
        'RETURNING id, video_id';

      db.one(
        sqlCommand,
        [ params.videoId ]
      ).
      then(
        view => resolve( view )
      ).
      catch(
        error => reject( error )
      );
    }
  );
};

import { db } from '../db';

export const writeView = ( params ) => {
  return new Promise(
    ( resolve, reject ) => {
      videoViewCount( params.videoId ).
      then(
        viewCount => {

          viewCount.count++;

          const sqlCommand =
            'INSERT INTO views( video_id, view_count ) VALUES( $1, $2 ) ' +
            'RETURNING id, video_id, view_count';

          db.one(
            sqlCommand,
            [ params.videoId, viewCount.count ]
          ).
          then(
            view => resolve( view )
          ).
          catch(
            error => reject( error )
          );
        }
      )
    }
  );
};

const videoViewCount = ( id ) => {
  return new Promise(
    ( resolve, reject ) => {
        db.one(
          "SELECT COUNT( view_count ) FROM views WHERE video_id = $1",
          id
        ).
        then(
          count => resolve( count )
        ).
        catch(
          error => reject( error )
        );
    }
  );
};

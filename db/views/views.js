import { db } from '../db';

export const writeView = ( id ) => {
  return new Promise(
    ( resolve, reject ) => {
      videoViewCount( id ).
      then(
        viewCount => {

          viewCount.count++;

          const sqlCommand =
            'INSERT INTO views( video_id, view_count, viewed ) VALUES( $1, $2, $3 ) ' +
            'RETURNING id, video_id, view_count, viewed';

          db.one(
            sqlCommand,
            [ id, viewCount.count, new Date() ]
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


const queryViews = ( id ) => {

}

import { db } from '../db';

export const writeView = ( id ) => {
  return new Promise(
    ( resolve, reject ) => {
      const sqlString =
        'INSERT INTO views( video_id ) VALUES( $1 ) ' +
        'RETURNING id, video_id, total_view_count, viewed';

      db.one(
        sqlString,
        id
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

export const queryVideoViews = ( id, from ) => {
  return new Promise(
    ( resolve, reject ) => {
      var sqlString = [
        'SELECT ',
        'views.total_view_count, ',
        'videos.name, ',
        'videos.published, ',
        'brands.name AS brand_name ',
        'FROM views INNER JOIN videos ON video_id = views.video_id ',
        'INNER JOIN brands ON brand_id = videos.brand_id WHERE video_id = $1 ',
        'ORDER BY viewed DESC LIMIT 1'
      ];

      var sqlParams = [ id ];

      if ( from ) {

        sqlString.splice(
          1,
          1,
          '( SELECT COUNT( * ) FROM views WHERE video_id = $1 AND viewed >= $2 ) AS video_view_count, '
        );

        sqlParams.push( from );
      }

      db.one(
        sqlString.join( '' ),
        sqlParams
      ).
      then(
        view => {
          view.fromDate = from;
          resolve( view )
        }
      ).
      catch(
        error => reject( error )
      );
    }
  );
};

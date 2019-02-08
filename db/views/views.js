import { db } from '../db';

export const writeView = ( id ) => {
  return new Promise(
    ( resolve, reject ) => {
      countViews( id ).
      then(
        viewCount => {

          viewCount.count++;

          const sqlString =
            'INSERT INTO views( video_id, view_count, viewed ) VALUES( $1, $2, $3 ) ' +
            'RETURNING id, video_id, view_count, viewed';

          db.one(
            sqlString,
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

export const countViews = ( id ) => {
  return new Promise(
    ( resolve, reject ) => {
        var sqlString = "SELECT COUNT( view_count ) FROM views " +
          "WHERE video_id = $1";

        db.one(
          sqlString,
          [ id ],
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

export const queryVideoViews = ( id, from ) => {
  return new Promise(
    ( resolve, reject ) => {
      var sqlString = "SELECT views.view_count, videos.name, " +
                      "videos.published, brands.name AS brand_name " +
                      "FROM views INNER JOIN videos ON video_id = " +
                      "views.video_id INNER JOIN brands ON brand_id = " +
                      "videos.brand_id WHERE video_id = $1 " +
                      "AND viewed >= $2 ORDER BY viewed DESC LIMIT 1";

      db.one(
        sqlString,
        [ id, from ]
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

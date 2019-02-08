import { db } from '../db';

export const queryVideo = ( videoId ) => {
  return new Promise(
    ( resolve, reject ) => {
      db.one(
      'SELECT * FROM videos WHERE id = ( $1 )', videoId
      ).
      then(
        video => resolve( video )
      ).
      catch(
        error => reject( error )
      );
    }
  );
};


export const writeVideo = ( name, brand_id, published ) => {
  return new Promise(
    ( resolve, reject ) => {
      const sqlString =
        'INSERT INTO videos ( name, brand_id, published ) VALUES( $1, $2, $3 ) ' +
        'RETURNING id, name, brand_id, published';

      db.one(
        sqlString,
        [ name, brand_id, published ]
      ).
      then(
        video => resolve( video )
      ).
      catch(
        error => reject( error )
      );
    }
  );
};

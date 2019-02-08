import { db } from '../db';

export const queryVideo = ( videoId ) => {
  return new Promise(
    ( resolve, reject ) => {
      db.one(
      "SELECT * FROM videos WHERE id = ( $1 )", videoId
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


export const writeVideo = ( params ) => {
  return new Promise(
    ( resolve, reject ) => {
      const { name, brand, published } = params;

      const sqlString =
        'INSERT INTO videos(name,brand,published) VALUES($1, $2, $3) ' +
        'RETURNING id, name, brand, published';

      db.one(
        sqlString,
        [ name, brand, published ]
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



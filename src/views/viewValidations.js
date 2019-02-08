import { isValidId, isValidDate } from '../validations/datatypeValidations';

export const validateId = ( req, res, next ) => {
  if ( isValidId( req.params.videoId ) ) {
    return next();
  }
  else {
    res.status( 422 ).send( 'Bad params!' );
  }
};

export const validateViewsQuery = ( req, res, next ) => {
  if ( isValidId( req.params.videoId ) && isValidDate( req.query.from ) ){
    return next();
  }
  else {
    res.status( 422 ).send( 'Bad params or query' );
  }
}

import { isValidId, isValidDate } from '../validations/datatypeValidations';

export const validateId = ( req, res, next ) => {
  if ( !isValidId( req.params.videoId ) ) {
    res.status( 422 ).send( `Bad id: '${ req.params.videoId }'` );
  }
  else {
    return next();
  }
};

export const validateViewsQuery = ( req, res, next ) => {
  var validId = true;
  var validFromDate = true;
  var err = '';

  if ( !isValidId( req.params.videoId ) ) {
    validId = false
    err += `Bad id: '${ req.params.videoId }'\n`;
  }

  if ( req.query.from && !isValidDate( req.query.from ) ) {
    validFromDate = false
    err += `Bad from-date: '${ req.query.from }'\n`;
  }

  if ( validId && validFromDate ) {
    return next();
  }
  else {
    res.status( 422 ).send( err );
  }
};

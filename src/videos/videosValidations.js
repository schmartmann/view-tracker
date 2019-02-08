import { isValidId, isValidName, isValidDate } from '../validations/datatypeValidations';

export const validateNewVideo = ( req, res, next ) => {
  var validId = isValidId( req.body.brand_id );
  var validName = isValidName( req.body.name );
  var validPublished = isValidDate( req.body.published );
  var err = '';

  if ( !validId ) {
    err += `Bad id: '${ req.body.id }'\n`;
  }

  if ( !validName ) {
    err += `Bad name: '${ req.body.name }'\n`;
  }

  if ( !validPublished ) {
    err += `Bad date: '${ req.body.published }'\n`;
  }

  if ( validId && validName && validPublished ) {
    return next();
  }
  else {
    res.status( 422 ).send( err )
  }
};

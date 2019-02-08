import { isValidId, isValidName, isValidDate } from '../validations/datatypeValidations';

export const validateNewVideo = ( req, res, next ) => {
  const validations = [
    isValidId( req.body.brand_id ),
    isValidName( req.body.name ),
    isValidDate( req.body.published )
  ];

  if ( validations.includes( false ) ) {
    res.status( 422 ).send( 'Bad params!' );
  }
  else {
    return next();
  }
};

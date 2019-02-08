const isValidName = ( name ) => {
  var string = new String( name ).valueOf();
  return string !== 'null' &&
         string !== 'undefined' &&
         string !== '' &&
         string !=='[object Object]';
};

const isValidDate = ( date ) => {
  return !isNaN( new Date ( date ).valueOf() )
};

const isValidId = ( id ) => {
  return !isNaN( Number( id ) ) && Number ( id ) > 0;
};

module.exports = {
  isValidName,
  isValidDate,
  isValidId
};

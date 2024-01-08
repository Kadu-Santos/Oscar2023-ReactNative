
export function getAgeClasificatorByKey(key: string | undefined) {
  if (key === '2' || key === '4' || key === '7') {
    const AgeEntry = require('./images/age_clasificator/12.png');
    return AgeEntry;

  } else if (key === '1' || key === '8' || key === '10' || key === '14') {
    const AgeEntry = require('./images/age_clasificator/16.png');
    return AgeEntry;

  } else if (key === '3') {
    const AgeEntry = require('./images/age_clasificator/18.png');
    return AgeEntry;

  } else if (key === '11'){
    const AgeEntry = require('./images/age_clasificator/L.png');
    return AgeEntry;

  } else{
    const AgeEntry = require('./images/age_clasificator/14.png');
    return AgeEntry;
  }
};
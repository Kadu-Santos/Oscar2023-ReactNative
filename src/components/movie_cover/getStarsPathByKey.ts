
export function getStarsPathByKey(key: string | undefined) {
  if (key === '7' || key === '8') {
    const StarsEntry4_5 = require('./images/stars/4_5.png');
    return StarsEntry4_5;
  } else if (key === '3' || key === '11') {
    const StarsEntry3 = require('./images/stars/3.png');
    return StarsEntry3;
  } else if (key === '4' || key === '14') {
    const StarsEntry3_5 = require('./images/stars/3_5.png');
    return StarsEntry3_5;
  } else {
    const StarsEntry4 = require('./images/stars/4.png');
    return StarsEntry4;
  }
};
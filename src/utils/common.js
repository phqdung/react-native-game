import {Dimensions, PixelRatio, Platform} from 'react-native';

const baseWidth = 375;
const baseHeight = 812;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const getWidth = size => {
  return (size * screenWidth) / baseWidth;
};

const getHeight = size => {
  return (size * screenHeight) / baseHeight;
};

const normalize = size => {
  const newSize = (size * screenWidth) / baseWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const formatNumberWithDecimal = (num, decimal = 2) => {
  return (Math.round(num * 100) / 100).toFixed(decimal);
};

const shuffle = array => {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const makeid = length => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const numberPad = (number, width) => {
  width -= number.toString().length;
  if (width > 0) {
    return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
  }
  return number + ''; // always return a string
};

const convertTimeStamp = timestamp => {
  const totalTime = timestamp / 1000;
  const minute = Math.floor(totalTime / 60);
  const second = Math.floor(totalTime % 60);
  const milisecond = timestamp % 1000;

  return {minute, second, milisecond};
};

export {
  screenWidth,
  screenHeight,
  getWidth,
  getHeight,
  normalize,
  formatNumberWithDecimal,
  shuffle,
  makeid,
  numberPad,
  convertTimeStamp,
};


const chineseToNumber = (chinese) => {
  const chineseNumber = {
    零: 0,
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    十: 10,
    百: 100,
    千: 1000,
    万: 10000,
    亿: 100000000,
  };
  const chineseNumberArray = chinese.split('');
  let result = 0;
  let temp = 0;
  let section = 0;
  let number = 0;
  for (let i = 0; i < chineseNumberArray.length; i++) {
    const item = chineseNumberArray[i];
    number = chineseNumber[item];
    if (typeof number !== 'undefined') {
      temp = temp + number;
      if (i === chineseNumberArray.length - 1) {
        section += temp;
      }
    } else {
      section = (section + temp) * number;
      result += section;
      section = 0;
      temp = 0;
    }
  }
  return result + section;
}

function chineseToNumber2(chinese) {
  const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const chineseUnits = ['', '十', '百', '千', '万', '亿', '兆'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let result = '';
  let num = '';
  let lastUnit = '';
  let lastUnitIndex = 0;
  let skip = false;

  for (let i = 0; i < chinese.length; i++) {
    const ch = chinese[i];
    if (ch === '零') {
      skip = true;
      continue;
    }
    const unitIndex = chineseUnits.indexOf(ch);
    if (unitIndex !== -1) {
      if (num !== '') {
        result += numbers[chineseNumbers.indexOf(num)];
        num = '';
      }
      if (skip) {
        result += '0';
        skip = false;
      }
      if (unitIndex > lastUnitIndex) {
        result += '0'.repeat(unitIndex - lastUnitIndex);
      }
      lastUnitIndex = unitIndex;
    } else {
      num += ch;
    }
  }

  if (num !== '') {
    result += numbers[chineseNumbers.indexOf(num)];
  }

  return result;
}
console.log(chineseToNumber2('一亿四千六百零一万三百一十四'))
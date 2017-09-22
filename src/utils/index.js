export default {
  goodTime (str) {
    let now = new Date().getTime()
    let oldTime = new Date(str).getTime()
    let difference = now - oldTime
    let result = ''
    let minute = 1000 * 60
    let hour = minute * 60
    let day = hour * 24
    let month = day * 30
    let year = month * 12
    let _year = difference / year
    let _month = difference / month
    let _week = difference / (7 * day)
    let _day = difference / day
    let _hour = difference / hour
    let _min = difference / minute

    if (_year >= 1) {
      result = '发表于 ' + ~~(_year) + ' 年前'
    } else if (_month >= 1) {
      result = '发表于 ' + ~~(_month) + ' 个月前'
    } else if (_week >= 1) {
      result = '发表于 ' + ~~(_week) + ' 周前'
    } else if (_day >= 1) {
      result = '发表于 ' + ~~(_day) + ' 天前'
    } else if (_hour >= 1) {
      result = '发表于 ' + ~~(_hour) + ' 个小时前'
    } else if (_min >= 1) {
      result = '发表于 ' + ~~(_min) + ' 分钟前'
    } else {
      result = '刚刚'
    }
    return result
  },

  isMobile (value) {
    var length = value.length
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/
    return (length === 11 && mobile.test(value))
  },
  isMobile (value) {
    num = num.toUpperCase();
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
      //$.alert('身份证号码格式验证不通过：尊敬的客户，您提供的身份证号码格式有误，请重新输入，感谢配合！','提示');
      return false;
    }
    // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    // 下面分别分析出生日期和校验位
    var len, re;
    len = num.length;
    if (len == 15) {
      re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
      var arrSplit = num.match(re);

      // 检查生日日期是否正确
      var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/'
        + arrSplit[4]);
      var bGoodDay;
      bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2]))
        && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3]))
        && (dtmBirth.getDate() == Number(arrSplit[4]));
      if (!bGoodDay) {
        //$.alert('身份证号码格式验证不通过：尊敬的客户，您提供的身份证号码格式有误，请重新输入，感谢配合！','提示');
        return false;
      } else {
        // 将15位身份证转成18位
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5,
          8, 4, 2);
        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4',
          '3', '2');
        var nTemp = 0, i;
        num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
        for (i = 0; i < 17; i++) {
          nTemp += num.substr(i, 1) * arrInt[i];
        }
        num += arrCh[nTemp % 11];
        return true;
      }
    }
    if (len == 18) {
      re = new RegExp(
        /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
      var arrSplit = num.match(re);

      // 检查生日日期是否正确
      var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/"
        + arrSplit[4]);
      var bGoodDay;
      bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2]))
        && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3]))
        && (dtmBirth.getDate() == Number(arrSplit[4]));
      if (!bGoodDay) {
        //$.alert('身份证号码格式验证不通过：尊敬的客户，您提供的身份证号码格式有误，请重新输入，感谢配合！','提示');
        return false;
      } else {
        //检验18位身份证的校验码是否正确。
        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        var valnum;
        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9,
          10, 5, 8, 4, 2);
        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6',
          '5', '4', '3', '2');
        var nTemp = 0, i;
        for (i = 0; i < 17; i++) {
          nTemp += num.substr(i, 1) * arrInt[i];
        }
        valnum = arrCh[nTemp % 11];
        if (valnum != num.substr(17, 1)) {
          //$.alert('身份证号码格式验证不通过：尊敬的客户，您提供的身份证号码格式有误，请重新输入，感谢配合！','提示');
          return false;
        }
        return true;
      }
    }
    return false;
  }
}

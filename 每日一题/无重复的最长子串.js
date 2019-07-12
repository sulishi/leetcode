/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var res = 0; // 用于存放当前最长无重复子串的长度
  var str = ''; // 用于存放无重复子串
  var len = s.length;
  for (var i = 0; i < len; i++) {
    var char = s.charAt(i);
    var index = str.indexOf(char);
    if (index === -1) {
      // index===-1代表当前子串中没有同样的字符
      str += char;
      res = res < str.length ? str.length : res;
    } else {
      str = str.substr(index + 1) + char; // substr(start, length)方法在字符串中抽取从start开始的指定书目字符串，length可选
    } // index + 1 代表[i,j]中的j`和i相等时 将范围编程[和j重复的+1,j`]
  }
  return res;
};

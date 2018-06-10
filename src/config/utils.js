/**
 * 时间格式转换
 * @param {Date}
 * @param {String}
 * @return {String}
 */
export function formatTime (date, str) {
  var s = str || '/'
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join(s) + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 加零
 * @param {String}
 * @return {String}
 */
function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export default {
  formatTime
}

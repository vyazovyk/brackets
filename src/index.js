module.exports = function check(str, bracketsConfig) {
  if ( str.replace(bracketsConfig[0].join(''), '') ) {
    return false;
  } return true;
}

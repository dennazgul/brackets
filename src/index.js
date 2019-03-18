module.exports = function check(str, bracketsConfig) {
  var myMass = [];
  var myStr = [];
  var gg;
  for (i=0; i<bracketsConfig.length; i++) {
      for (j=0; j<2; j++)
    myMass.push(bracketsConfig[i][j]);
  }
  for (i=0; i<str.length; i++) {
      myStr.push(str[i]);
  }
  for (i=0; i<myStr.length; i++) {
      for (k=0; k< myMass.length;k=k+2) {
          if (myStr[i] == myMass[k] && myStr[i+1] == myMass[k+1]) {
              myStr.splice(i, 2);
              i = 0;
              k=-2;
          }
      }
  }
  if (myStr.length ==0) {
      gg = true
  } else {
    gg = false;
  }
  return gg;
}


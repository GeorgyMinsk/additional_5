module.exports = function check(str, bracketsConfig) {
<<<<<<< HEAD
var chek = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
// var brackets=["(",")","{","}","[","]",'|','|'];
var lates_open,b;
  for (let i = 0; i < str.length; i++){
 for (let j = 0; j < bracketsConfig.length; j++){

   if (str[i]==bracketsConfig[j][0]  ){
    chek[j][0]++;
    lates_open=j;
    b=1;
    } 

    if (str[i]==bracketsConfig[j][1]){
      chek[j][1]++;
      if (lates_open!=j && b==1) {
        return false;
      }
      else{
        b=2;
      }
    }
    if (chek[j][0]<chek[j][1]) {
     return false;
    }
    if (chek[j][0]<chek[j][1]) {
      return false;
     }
  }
  }
   for (let index = 0; index < chek.length-1; index++) {
     if(chek[index][0]!=chek[index][1])
        return false;
   }
  return true;
=======
  return true;
  // your solution
>>>>>>> 2983246f0710754dd22bf39caa23e66b7cbaa06b
}


//js递归方式写1到100求和
function sum(n1, n2) {
  var num = n1 + n2;
  if(n2 + 1 > 100){
    return num;
  }else{
    return sum(num, n2+1)
  }
}
var sum = sum(1,2);
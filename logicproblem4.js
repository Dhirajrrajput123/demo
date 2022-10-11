//Problem 4: Given 3 numbers (all different values), print which is greatest

let num1=43, num2=23,num3=92;

if(num1>num2&&num1>num3){
  console.log("greater is",num1);
}
else if(num2>num3&&num2>num1){
  console.log("greater is",num2);
}

else if(num3>num1&&num3>num2){
  console.log("greater is",num3);
}

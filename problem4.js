//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

//data stor in database
let database_name="dhiraj";
let database_pass="123@123";


//given the input by the user
let name="dhiraj";
let pass="123@123";



if(database_name===name){
  
  if(database_pass===pass){
    console.log("login successfully")
  }
  else{
    console.log("wrong password")
  }
}
else{
  console.log("wrong user name");
}
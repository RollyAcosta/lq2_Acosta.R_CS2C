let Username = prompt("Register your Username: ");
let Password = prompt("Register your pascode: ");
let Repassword =("Re-enter your password: ");

if(Password === Repassword){
  alert("Congratulations! You have succesfully registered,");
  let Username_login = prompt("Username: ");
  if(Username_login === Username){
    let Password_login = prompt("Password: ");
    
    (Paswword_login === Password)
    ?alert("Welcome to DSA, " + Username)
    :alert("Incorrect Paswword, Re-run the code!");
  }else {
    alert("Incorrect Username, Re-run the code!");
  }
} else {
   
   alert("Password does not Match, Re-run the code!");
}
  

  


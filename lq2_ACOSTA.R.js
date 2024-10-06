let Name = prompt("Enter name:");
let Address = prompt("Enter address:");
let Age = parseInt(prompt("Enter age:"));
let Role = prompt("Enter role:");
let Course = prompt("Enter course:")

if(Course == "BSCS"){
  if(Role == "Officer"){
    alert("You are officer of BSCS");
  }else if(Role == "Student"){
    alert("You are student of BSCS");
  }else if(Role == "Teacher"){
    alert("You are teacher of BSCS");
  }else{
    alert("Role not existent.");
  }
  
  
}else if(Course == "BSM"){
  if(Role == "Officer"){
    alert("You are officer of BSM");
  
  }else if(Role == "Student"){
    alert("You are student of BSM");
  }else if(Role == "Teacher"){
    alert("You are teacher of BSM");
    
  }else{
    alert("Role not existent.");
  }
}else if(Course == "BAEL"){
  if(Role == "Officer"){
    alert("You are officer of BAEL");
  }else if(Role == "Student"){
    alert("You are student of BAEL");
  }else if(Role == "Teacher"){
    alert("You are teacher of BAEL");
  }else{
    alert("Role not existent. ");
  } 
}else{
  alert("Course not existent. ");
}
  
  
  

  
  

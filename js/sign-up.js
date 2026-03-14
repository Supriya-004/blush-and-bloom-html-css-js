document.getElementById("signupForm").addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let pass=document.getElementById("password").value
let confirm=document.getElementById("confirm").value

if(name=="" || email=="" || pass=="" || confirm=="")
{
alert("Please fill all fields")
return
}

if(pass!=confirm)
{
alert("Password not match")
return
}

alert("Account Created Successfully")

})
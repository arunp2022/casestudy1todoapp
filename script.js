function loginValidate(checkSuccess) {
    let userName = document.getElementById("userid").value;
    let password = document.getElementById("password").value;
    checkSuccess(userName,password);
} 
function onSuccess(uname,pwd) {
        if (uname == "admin" && pwd == "12345") {
            alert("Thanks for Login. Welcome to main page of ToDoList Web Application.");
            
            document.querySelector("form").action = "./todolist.html";
        }
        else {
            alert("Invalid Username or Password");
        }
}

function onLogin() {
    loginValidate(onSuccess);
} 

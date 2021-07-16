// Constructor function to create user objects
function Meow(name, email, username, password) {
    this.name = name,
    this.email = email,
    this.username = username,
    this.password = password
}
// Getting the name of the page
var pageURL = window.location.toString();
var pageName = pageURL.slice(pageURL.lastIndexOf("/"));


function store() {
    var arrOfUserObjs=[{}];
    localStorage.setItem("arrOfUserObjs",JSON.stringify(arrOfUserObjs));
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("userName").value;
    var password = document.getElementById("psw").value;
    var user1= new Meow(name, email, username, password);
    arrOfUserObjs = JSON.parse(localStorage.getItem("arrOfUserObjs"));
    arrOfUserObjs.push(user1);
    localStorage.setItem("arrOfUserObjs", JSON.stringify(arrOfUserObjs));
    // window.location = "login.html";
}
    // localStorage.setItem('user', JSON.stringify(user))

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

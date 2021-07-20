let user = document.getElementById("user");
let password = document.getElementById("password");
let signUp = () => {
    window.location = 'signup.html'
}
let allUser = [];
let saveUsers = localStorage.getItem('allUser');
if (saveUsers) {
    allUser = JSON.parse(saveUsers);
} else {
    allUser = [];
}
let store = () => {
    let fnSignUp = document.getElementById("fnSignUp");
    let emailSignUp = document.getElementById("emailSignUp");
    let userSignUp = document.getElementById("userSignUp");
    let pswSignUp = document.getElementById("pswSignUp");
    let flag = false;
    let storeUser = {
        fullname: fnSignUp.value,
        email: emailSignUp.value,
        username: userSignUp.value,
        password: pswSignUp.value
    }
    for (var i = 0; i < allUser.length; i++) {
        if (emailSignUp.value === allUser[i].email || userSignUp.value === allUser[i].username) {
            flag = true
        }
    }
    if (flag) {
        alert("This is already exist");
    } else {
        // console.log(allUser)
        allUser.push(storeUser);
        localStorage.setItem('allUser', JSON.stringify(allUser));
        window.location = 'index.html'
    }
}

var userProfile = document.getElementById("userProfile");
let login = () => {
    let flag = true;
    for (let i = 0; i < allUser.length; i++) {
        if (user.value === allUser[i].username) {
            if (password.value === allUser[i].password) {
                alert("Login Sucess")
                window.location = 'profile.html'
                var userData = {
                    user: user.value
                }
                localStorage.setItem("userData", JSON.stringify(userData))
            }
            else {
                alert("You have enter wrong password")
            }
        }
        else {
            flag = false;
        }
    }
    if (flag) {
        alert("you have enter wrong user name or Email Address")
    }
}
let getUser = () => {
    var newUser = localStorage.getItem("userData");
    userProfile.innerHTML = JSON.parse(newUser).user.toUpperCase();
}
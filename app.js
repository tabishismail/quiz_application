
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
function store () {
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
        if (emailSignUp.value=== allUser[i].email || userSignUp.value=== allUser[i].username ){
            flag = true
        }        
    }
    if(flag){
        alert("This is already exist");
    } else {
        // console.log(allUser)
        allUser.push(storeUser);
        localStorage.setItem('allUser', JSON.stringify(allUser));
        window.location='index.html';
    }
}
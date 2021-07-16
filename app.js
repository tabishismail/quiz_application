
let signUp = () =>{
    window.location = 'signup.html'
}

let allUser=[];
let saveUsers = localStorage.getItem('allUser');
if(saveUsers){
    allUser=JSON.parse(saveUsers);
}else{
    allUser = [];
}
let auth=false;
let store =()=>{
    let fnSignUp=document.getElementById("fnSignUp");
    let emailSignUp=document.getElementById("emailSignUp");
    let userSignUp=document.getElementById("userSignUp");
    let pswSignUp=document.getElementById("pswSignUp");
    let storeUser={
        fullname:fnSignUp.value,
        email:emailSignUp.value,
        username:userSignUp.value,
        password:pswSignUp.value
    }
    for(var i=0 ;i < allUser.length; i++ ){
        if(emailSignUp.value===allUser[i].email ){
            alert("This email already exist");
                     
        }
        else if(userSignUp.value ===allUser[i].username){
            alert("This User Name already exist");
            
        }
        else{
            allUser.push(storeUser);
            localStorage.setItem('allUser',JSON.stringify(allUser));
        }
    }
    // if(auth=== true){
        // window.location="index.html"
    //  }
}
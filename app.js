// var topics = [
//     javascriptBasic:{
//         "question": "Inside which HTML element do we put the JavaScript?",
//         "Option1": "<javascript>",
//         "Option2": "<scripting>",
//         "Option3": "<js>",
//         "Option4": "<script>",
//         "answer": "4"
//     },
//     {
//         "question": "What is the correct syntax for referring to an external script called xxx.js?",
//         "Option1": "<script href ='xxx.js'>",
//         "Option2": "<script src ='xxx.js'>",
//         "Option3": "<script name ='xxx.js'>",
//         "Option4": "<script link ='xxx.js'>",
//         "answer": "2"
//     },
//     {
//         "question": "The external JavaScript file must contain the <script> tag.",
//         "Option1": "True",
//         "Option2": "False",
//         "Option3": "Both",
//         "Option4": "None Of These",
//         "answer": "2"
//     },
//     {
//         "question": "How do you write 'Hello World' in an alert box?",
//         "Option1": "alertbox('Hello World');",
//         "Option2": "alert('Hello World');",
//         "Option3": "msgbox('Hello World');",
//         "Option4": "msg('Hello World');",
//         "answer": "2"
//     },
//     {
//         "question": "How do you create a function in JavaScript?",
//         "Option1": "Function = Myfunction()",
//         "Option2": "Function === Myfunction()",
//         "Option3": "Function  Myfunction()",
//         "Option4": "Function : Myfunction()",
//         "answer": "1"
//     },
//     {
//         "question": "How do you call a function named 'myFunction'?",
//         "Option1": "myfunction()",
//         "Option2": "call myfuntion()",
//         "Option3": "call function myfunction()",
//         "Option4": "function()",
//         "answer": "1"
//     },
//     {
//         "question": "How to write an IF statement in JavaScript?",
//         "Option1": "if i = 5 then",
//         "Option2": "if (i == 5)",
//         "Option3": "if i == 5 then",
//         "Option4": "if i = 5",
//         "answer": "2"
//     },
//     {
//         "question": "How can you add a comment in a JavaScript?",
//         "Option1": "This is Comment",
//         "Option2": "*/comment",
//         "Option3": "//comment",
//         "Option4": "<!--comment-->",
//         "answer": "3"
//     },
//     {
//         "question": "How do you round the number 7.25, to the nearest integer?",
//         "Option1": "Math.round(7.25)",
//         "Option2": "math(7.25)",
//         "Option3": "Math(7.25)",
//         "Option4": "round(7.25)",
//         "answer": "1"
//     },
//     {
//         "question": "JavaScript is the same as Java.",
//         "Option1": "True",
//         "Option2": "Ofcourse",
//         "Option3": "False",
//         "Option4": "none of these",
//         "answer": "3"
//     },
// microsoft:{

// }
// ];
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

    var emailc = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var userc = /^[a-z0-9_-]{3,16}$/;
    var numc = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    // var passc=/^.*$/i;
    var passc = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$/;

    let storeUser = {
        fullname: fnSignUp.value,
        email: emailSignUp.value,
        username: userSignUp.value,
        password: pswSignUp.value
    }
    if (userc.test(userSignUp.value)) {
        if (emailc.test(emailSignUp.value)) {
            if (passc.test(pswSignUp)) {
                var flag = false;
                for (let i = 0; i < allUser.length; i++) {
                    if (allUser[i].email === emailSignUp.value) {
                        flag = true;
                    }
                }

                if (flag) {
                    alert("This Email is already registerd")
                } else {
                    allUser.push(storeUser);
                    localStorage.setItem('allUser', JSON.stringify(allUser));
                    window.location = 'index.html'
                }
            }
            else {
                alert("pass check")
            }
        } else {
            alert("check email")
        }

    }
    else {
        alert("check username")

    }














    // for (var i = 0; i < allUser.length; i++) {
    //     if (emailSignUp.value === allUser[i].email || userSignUp.value === allUser[i].username) {
    //         flag = true
    //     }
    // }
    // if (flag) {
    //     alert("This is already exist");
    // } else {
    // console.log(allUser)
    //     allUser.push(storeUser);
    //     localStorage.setItem('allUser', JSON.stringify(allUser));
    //     window.location = 'index.html'
    // }
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
let start = () => {
    window.location = 'topic.html'
}
// Topics Functions
let micro = () => window.location = 'micro.html'
let html = () => window.location = 'htmlCss.html'
let javaBasic = () => window.location = 'javaBasic.html'
let javaAdvan = () => window.location = 'javaAdvan.html'
let react = () => window.location = 'react.html'
let python = () => window.location = 'python.html'

// quiz page javascripting start

// let currentQuestion = 0;
// let score = 0;
// let totQuestions = javascriptBasic.length;
// let container = document.getElementById('quizContainer');
// let questionEl = document.getElementById('question');
// let opt1 = document.getElementById('opt1');
// let opt2 = document.getElementById('opt2');
// let opt3 = document.getElementById('opt3');
// let opt4 = document.getElementById('opt4');
// let nextButton = document.getElementById('nextButton');
// let resultCont = document.getElementById('result');
// //timer
// var remainingTime = 240; //Seconds remaining
// var minutes = Math.floor(remainingTime / 60);
// if (minutes < 10) {
//     minutes = "0" + minutes;
// }
// var seconds = remainingTime % 60;
// if (seconds < 10) {
//     seconds = "0" + seconds;
// }
// var minutesP = document.getElementById("minutes");
// minutesP.innerText = minutes;
// var secondsP = document.getElementById("seconds");
// secondsP.innerText = ":" + seconds;
// var countdownClock = setInterval(function () {
//     remainingTime -= 1;
//     minutes = Math.floor(remainingTime / 60);
//     seconds = remainingTime % 60;

//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }
//     minutesP.innerText = minutes;
//     secondsP.innerText = ":" + seconds;

//     if (remainingTime == 0) {
//         container.style.display = 'none';
//         resultCont.style.display = '';
//         resultCont.textContent = 'Your Score: ' + score;
//         clearInterval(countdownClock);
//     }
// }, 1000);

// function loadQuestionJava(questionIndex) {
//     let q = javascriptBasic[questionIndex];
//     questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
//     opt1.textContent = q.Option1;
//     opt2.textContent = q.Option2;
//     opt3.textContent = q.Option3;
//     opt4.textContent = q.Option4;
// };

// function loadNextQuestionJava() {
//     var selectedOption = document.querySelector('input[type=radio]:checked');
//     if (!selectedOption) {
//         alert("PLease select any one of them")
//         return;
//     }
//     var answer = selectedOption.value;
//     if (javascriptBasic[currentQuestion].answer == answer) {
//         score += 10;
//     }
//     selectedOption.checked = false;
//     currentQuestion++;
//     if (currentQuestion == totQuestions - 1) {
//         nextButton.textContent = 'Finish';
//     }
//     if (currentQuestion == totQuestions) {
//         container.style.display = 'none';
//         resultCont.style.display = '';
//         resultCont.textContent = 'Your Score: ' + score;
//         return;
//     }
//     loadQuestionJava(currentQuestion);
// }
// loadQuestionJava(currentQuestion);

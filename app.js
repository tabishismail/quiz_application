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
    let lnSignUp = document.getElementById("lnSignUp");
    let doB = document.getElementById("doB");
    let emailSignUp = document.getElementById("emailSignUp");
    let userSignUp = document.getElementById("userSignUp");
    let pswSignUp = document.getElementById("pswSignUp");

    var emailc = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var userc = /^[a-z0-9_-]{3,16}$/;
    var numc = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    var passc = /^.*$/i;
    // var passc = /^((?=\S*?[a-zA-Z])(?=\S*?[0-9]).{6,})\S$/;

    let storeUser = {
        firstname: fnSignUp.value,
        lastname: lnSignUp.value,
        dob: doB.value,
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
                    // alert("This Email is already registerd")
                    swal("This Email is already registerd", "", "warning");
                } else {
                    allUser.push(storeUser);
                    localStorage.setItem('allUser', JSON.stringify(allUser));
                    swal({
                        title: "Successfully Sign Up",
                        // text: "Welcome " + allUser[i].firstname,
                        icon: "success",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result) {
                            window.location = 'index.html'
                        }
                    })
                    // window.location = 'index.html'
                }
            }
            else {
                swal("Check Password", "", "warning");
            }
        } else {
            // alert("check email")
            swal("Enter Correct Email Address", "", "warning");
        }

    }
    else {
        alert("check username")

    }
}
let back = () => {
    window.location = "index.html"
}

var userProfile = document.getElementById("userProfile");
let login = () => {
    let flag = true;
    for (let i = 0; i < allUser.length; i++) {
        if (user.value === allUser[i].username || user.value === allUser[i].email) {
            if (password.value === allUser[i].password) {
                swal({
                    title: "Login Success",
                    text: "Welcome " + allUser[i].firstname,
                    icon: "success",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result) {
                        window.location = 'profile.html'
                    }
                })
                flag = false;
                var userData = {
                    fullname: allUser[i].firstname + " " + allUser[i].lastname,
                    firstName: allUser[i].firstname,
                    lastName: allUser[i].lastname,
                    email: allUser[i].email,
                    doB: allUser[i].doB,
                    username: allUser[i].username,
                    password: allUser[i].password

                }
                localStorage.setItem("userData", JSON.stringify(userData))
            }
            else {
                swal("You have enter wrong password", "", "warning");

            }
        }
    }
    if (flag) {
        swal("You have enter wrong user name or Email Address", "", "warning");

    }
}
let firstName = document.getElementById("pFirstName");
let lastName = document.getElementById("pLastName");
let doB = document.getElementById("pDoB");
let getUser = () => {
    var newUser = localStorage.getItem("userData");
    userProfile.innerHTML = JSON.parse(newUser).fullname.toUpperCase();
    firstName.innerHTML = JSON.parse(newUser).firstName;
    lastName.innerHTML = JSON.parse(newUser).lastName;
    let date = JSON.parse(newUser).doB;
    console.log(date)
    doB.innerHTML = new Date(date)

}
let start = () => {
    window.location = 'topic.html'
}
let logout = () => {
    swal({
        title: "Logout Success",
        text: "Thanks " + firstName.innerHTML,
        icon: "success",
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
    }).then((result) => {
        if (result) {
            localStorage.removeItem("userData");
            window.location = 'index.html'
        }
    })








}
// Topics Functions
let micro = () => window.location = 'micro.html'
let html = () => window.location = 'htmlCss.html'
let javaBasic = () => window.location = 'javaBasic.html'
let javaAdvan = () => window.location = 'javaAdvan.html'
let react = () => window.location = 'react.html'
let python = () => window.location = 'python.html'

// quiz page javascripting start

var questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "Option1": "<javascript>",
        "Option2": "<scripting>",
        "Option3": "<js>",
        "Option4": "<script>",
        "answer": "4"
    },
    {
        "question": "What is the correct syntax for referring to an external script called xxx.js?",
        "Option1": "<script href ='xxx.js'>",
        "Option2": "<script src ='xxx.js'>",
        "Option3": "<script name ='xxx.js'>",
        "Option4": "<script link ='xxx.js'>",
        "answer": "2"
    },
    {
        "question": "The external JavaScript file must contain the <script> tag.",
        "Option1": "True",
        "Option2": "False",
        "Option3": "Both",
        "Option4": "None Of These",
        "answer": "2"
    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "Option1": "alertbox('Hello World');",
        "Option2": "alert('Hello World');",
        "Option3": "msgbox('Hello World');",
        "Option4": "msg('Hello World');",
        "answer": "2"
    },
    {
        "question": "How do you create a function in JavaScript?",
        "Option1": "Function = Myfunction()",
        "Option2": "Function === Myfunction()",
        "Option3": "Function  Myfunction()",
        "Option4": "Function : Myfunction()",
        "answer": "1"
    },
    {
        "question": "How do you call a function named 'myFunction'?",
        "Option1": "myfunction()",
        "Option2": "call myfuntion()",
        "Option3": "call function myfunction()",
        "Option4": "function()",
        "answer": "1"
    },
    {
        "question": "How to write an IF statement in JavaScript?",
        "Option1": "if i = 5 then",
        "Option2": "if (i == 5)",
        "Option3": "if i == 5 then",
        "Option4": "if i = 5",
        "answer": "2"
    },
    {
        "question": "How can you add a comment in a JavaScript?",
        "Option1": "This is Comment",
        "Option2": "*/comment",
        "Option3": "//comment",
        "Option4": "<!--comment-->",
        "answer": "3"
    },
    {
        "question": "How do you round the number 7.25, to the nearest integer?",
        "Option1": "Math.round(7.25)",
        "Option2": "math(7.25)",
        "Option3": "Math(7.25)",
        "Option4": "round(7.25)",
        "answer": "1"
    },
    {
        "question": "JavaScript is the same as Java.",
        "Option1": "True",
        "Option2": "Ofcourse",
        "Option3": "False",
        "Option4": "none of these",
        "answer": "3"
    }
];


var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
//timer
// var remainingTime = 300; //Seconds remaining
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


// const FULL_DASH_ARRAY = 300;
// const WARNING_THRESHOLD = 10;
// const ALERT_THRESHOLD = 5;

// const COLOR_CODES = {
//   info: {
//     color: "green"
//   },
//   warning: {
//     color: "orange",
//     threshold: WARNING_THRESHOLD
//   },
//   alert: {
//     color: "red",
//     threshold: ALERT_THRESHOLD
//   }
// };

// const TIME_LIMIT = 300;
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;
// let timerInterval = null;
// let remainingPathColor = COLOR_CODES.info.color;

// document.getElementById("app").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle class="base-timer__path-elapsed" cx="10" cy="10" r="15"></circle>
//       <path
//         id="base-timer-path-remaining"
//         stroke-dasharray="300"
//         class="base-timer__path-remaining ${remainingPathColor}"
//         d="
//           M 10, 10
//           m -45, 0
//           a 10,10 0 1,0 90,0
//           a 10,10 0 1,0 -90,0
//         "
//       ></path>
//     </g>
//   </svg>
//   <span id="base-timer-label" class="base-timer__label">${formatTime(
//     timeLeft
//   )}</span>
// </div>
// `;

// startTimer();

// function onTimesUp() {
//   clearInterval(timerInterval);
// }

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timePassed = timePassed += 1;
//     timeLeft = TIME_LIMIT - timePassed;
//     document.getElementById("base-timer-label").innerHTML = formatTime(
//       timeLeft
//     );
//     setCircleDasharray();
//     setRemainingPathColor(timeLeft);

//     if (timeLeft === 0) {
//       onTimesUp();
//     }
//   }, 1000);
// }

// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   return `${minutes}:${seconds}`;
// }

// function setRemainingPathColor(timeLeft) {
//   const { alert, warning, info } = COLOR_CODES;
//   if (timeLeft <= alert.threshold) {
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.remove(warning.color);
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.add(alert.color);
//   } else if (timeLeft <= warning.threshold) {
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.remove(info.color);
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.add(warning.color);
//   }
// }

// function calculateTimeFraction() {
//   const rawTimeFraction = timeLeft / TIME_LIMIT;
//   return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
// }

// function setCircleDasharray() {
//   const circleDasharray = `${(
//     calculateTimeFraction() * FULL_DASH_ARRAY
//   ).toFixed(0)} 283`;
//   document
//     .getElementById("base-timer-path-remaining")
//     .setAttribute("stroke-dasharray", circleDasharray);
// }







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


function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.Option1;
    opt2.textContent = q.Option2;
    opt3.textContent = q.Option3;
    opt4.textContent = q.Option4;
};

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert("PLease select any one of them")
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion == totQuestions) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
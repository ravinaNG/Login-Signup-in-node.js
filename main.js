const fs = require('fs')
const readline = require('readline-sync')

function paswrdValidation(password){
    var checking = 0;
    if(password.includes("@") || password.includes("#")){
        var num = 0
        while(num<10){
            if(password.includes(num)){
                checking = 1
                break;
            }
            num +=1;
        }
        if(checking === 0){
            return false; 
        }else{
            return true;
        }
    }else{

        return false;
    }
}



let user = readline.question("Login(L or l) / Sign-up(S or s):- ");

if(user === "S" || user === "s"){
    const userName = readline.question("What will be you userName:- ");
    const passwrd1 = readline.question("Security code for you ID:- ");
    const passwrd2 = readline.question("Re enter your password:- ");
    if(passwrd1 === passwrd2){
        if(paswrdValidation(passwrd1)){
            let userDetails = {
                "user":[{
                    "userName": userName,
                    "password": passwrd1
                }]
            }
            let data = JSON.stringify(userDetails);
            fs.writeFileSync('userDetails.json', data);
        }else{
            console.log("At least password should contain one special character and one number.");
        }
    }else{
        console.log("Both password are not same.");
    }
};

const loginSignup = () => {
    
}


// const user = new Promise((resolve, reject) => {
//     let responce = readline.question("Login(L or l) / Sign-up(S or s):- ");
//     if(responce == "S" || responce == "s"){
//         resolve("signUp");
//     }else{
//         reject("logIn");
//     }
// });

// const signUp = new Promise((resolve, reject) => {
//     if(user == "S" || user == "s"){
//         let userName = readline.question("What will be you userName:- ");
//         let passwrd1 = readline.question("Security code for you ID:- ");
//         let passwrd2 = readline.question("Re enter your password:- ");
//         resolve()
//     }
// })


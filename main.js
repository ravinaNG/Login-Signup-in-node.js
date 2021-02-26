const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const readline = require('readline-sync')

const user = new Promise((resolve, reject) => {
    let responce = readline.question("Login(L or l) / Sign-up(S or s):- ");
    if(responce == "S" || responce == "s"){
        resolve("signUp");
    }else{
        reject("logIn");
    }
});

const signUp = new Promise((resolve, reject) => {
    if(user == "S" || user == "s"){
        let userName = readline.question("What will be you userName:- ");
        let passwrd1 = readline.question("Security code for you ID:- ");
        let passwrd2 = readline.question("Re enter your password:- ");
        resolve()
    }
})


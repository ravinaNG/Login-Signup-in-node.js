const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline-sync')

function paswrdValidation(password){
    return responce = new Promise((resolve, reject) => {
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
                reject(false); 
            }else{
                resolve(true);
            }
        }else{
            reject(false)
        }
    })
}

function writeJsonFile(fileName, data){
    return responce = new Promise((resolve, reject) => {
        let userData = JSON.stringify(data);
        fs.writeFileSync(fileName, userData); 
        let lengthOfUserDataArr = data["user"].length
        resolve(`congrats ${data["user"][lengthOfUserDataArr-1]["userName"]} you are Signed Up Successfully`)
    })
}

function readJsonFile(fileName){
    return responce = new Promise((resolve, reject) => {
        let jsonData = fs.readFileSync(fileName);
        let bLength = jsonData.byteLength;
        if(bLength === 0){
            resolve(1)
        }else{
            let dataInObject = JSON.parse(jsonData);
            resolve(dataInObject);
        }
    })
}

function isExist(userName, jsonData){
    let index = 0;
    while(index < jsonData['user'].length){
        if(userName === jsonData['user'][index]['userName']){
            return true;
        }
        index +=1
    }
    return false;
}

let user = readline.question("Login(L or l) / Sign-up(S or s):- ");

if(user === "S" || user === "s"){
    const userName = readline.question("What will be your userName:- ");
    const passwrd1 = readline.question("Security code for your ID:- ");
    const passwrd2 = readline.question("Re enter your password:- ");
    if(passwrd1 === passwrd2){
        paswrdValidation(passwrd1).then(()=>{
            let fileName = "userDetails.json"
            let jsonFileData = readJsonFile(fileName); 
            return jsonFileData;
            // return writeJsonFile(fileName, userDetails)
        }).then((userDetails) => {
            let oneUserDetails = {
                "user":[{
                    "userName": userName,
                    "password": passwrd1
                }]
            }
            if(userDetails === 1){
                fileName = "userDetails.json"
                console.log(writeJsonFile(fileName, oneUserDetails));
            }else{
                let exist = isExist(userName, userDetails);
                if(exist){
                    console.log("Username already exist.");
                }else{
                    fileName = "userDetails.json";
                    oneUserData = oneUserDetails["user"][0];
                    userDetails["user"].push(oneUserData);
                    writeJsonFile(fileName, userDetails).then((congo) =>{
                        console.log(congo);
                    })
                }
            }
        })
    }else{
        console.log("Both password are not same.");
    }
};


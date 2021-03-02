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
        fs.writeFileSync(fileName, userData, 'utf8'); 
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

function isThePaswrdSame(userName, password, readfileData){
    let index = 0;
    while(index < readfileData['user'].length){
        if(userName === readfileData['user'][index]['userName']){
            break
        }
        index +=1
    }
    if(password === readfileData['user'][index]['password']){
        return true;
    }else{
        return false;
    }
}

let user = readline.question("Login(L or l) / Sign-up(S or s):- ");

if(user === "S" || user === "s"){
    const userName = readline.question("What will be your userName:- ");
    fileName = "userDetails.json"
    readJsonFile(fileName).then((readData) => {
        if(readData === 1){
            const passwrd1 = readline.question("Security code for your ID:- ");
            const passwrd2 = readline.question("Re enter your password:- ");
            if(passwrd1 === passwrd2){
                paswrdValidation(passwrd1).then((strongPaswrd)=>{
                    if(strongPaswrd){
                        let oneUserDetails = {
                            "user":[{
                                "userName": userName,
                                "password": passwrd1
                            }]
                        }
                        console.log("");
                        console.log("******");
                        console.log(`Congrats ${userName} you are signed up successfully.`);
                        console.log("******");
                        console.log("");
                        const description = readline.question("Please describe yourself:- ");
                        const dob = readline.question("Date of Birth:- ");
                        const hobbies = readline.question("Your hobbies:- ");
                        const gender = readline.question("Enter you Gender:- ");
                        oneUserDetails['user'][0]["profile"] = {
                            "description": description,
                            "dob": dob,
                            "hobbies": hobbies,
                            "gender": gender
                        }
                        writeJsonFile(fileName, oneUserDetails)
                    }
                })
            }else{
                console.log("Both password are not same.");
            }
        }else{
            let exist = isExist(userName, readData);
            if(exist){
                console.log("Username already exist.");
            }else{
                const passwrd1 = readline.question("Security code for your ID:- ");
                const passwrd2 = readline.question("Re enter your password:- ");
                if(passwrd1 === passwrd2){
                    paswrdValidation(passwrd1).then((strongPaswrd) =>{
                        if(strongPaswrd){
                            let oneUserDetails = {
                                "user":[{
                                    "userName": userName,
                                    "password": passwrd1
                                }]
                            }
                            // fileName = "userDetails.json";
                            oneUserData = oneUserDetails["user"][0];
                            console.log("");
                            console.log("******");
                            console.log(`Congrats ${userName} you are signed up successfully.`);
                            console.log("******");
                            console.log("");
                            const description = readline.question("Please describe yourself:- ");
                            const dob = readline.question("Date of Birth:- ");
                            const hobbies = readline.question("Your hobbies:- ");
                            const gender = readline.question("Enter you Gender:- ");
                            oneUserData["profile"] = {
                                "description": description,
                                "dob": dob,
                                "hobbies": hobbies,
                                "gender": gender
                            }
                            readData["user"].push(oneUserData);
                            writeJsonFile(fileName, readData)
                        }
                    })
                }else{
                    console.log("Both password are not same.");
                }
            }
        }
    })
}else if(user === "L" || user === "l"){
    const userName = readline.question("Please enter your userName:- ");
    const passwrd = readline.question("Password:- ");
    let fileName = "userDetails.json";
    readJsonFile(fileName).then((userDetails) =>{
        let exist = isExist(userName, userDetails);
        if(exist){
            let matchingPaswrd = isThePaswrdSame(userName, passwrd, userDetails)
            if(matchingPaswrd){
                console.log("");
                console.log("******");
                console.log(`${userName} you are logged in successfully.`);
                console.log("******");
                console.log("");
                let index = 0;
                while(index < userDetails['user'].length){
                    if(userName === userDetails['user'][index]['userName']){
                        console.log(`Username: ${userName}`);
                        console.log(`Gender: ${userDetails['user'][index]['profile']['gender']}`);
                        console.log(`Bio: ${userDetails['user'][index]['profile']['description']}`);
                        console.log(`Hobbies: ${userDetails['user'][index]['profile']['hobbies']}`);
                        console.log(`Dob: ${userDetails['user'][index]['profile']['dob']}`);
                    }
                    index +=1
                }
            }else{
                console.log("Wrong Password");
            }
        }else{
            console.log("Invalid userName and password.");
        }
    })
}
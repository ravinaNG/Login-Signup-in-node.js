# Login/Signup node.js
#### This project I did is to basically undertand the practical concept of promisses and callback.

## What it does:-
- Sign-up:-
  - will ask for userName
  -will check if the userName is exist in our jsonFile(Database)
  - if it's exist it will tell userName is already exist
  - if it's not exist it will ask to enter password
  - first password and conformation password
  - and it'll alos check password validation
  - validation - @ or # should be there and atleast one number should be there
  - after the sign-up it'll ask about you like hobbies, bio, dob etc.

- Log-in:-
  - ask userName and password to enter
  - will check if the userName exist and if it's exist it'll check password if the password is same
  - if password is not matching it will give three chance to enter correct password and if not able to enter then will tell try after 30 min.
  - if userName exists and password also matching then it'll tell you have successfully loged in.
  - if userName is not matching it'll tell wrong userName.

## I have used:-
  - fs - File System
  - readline-sync - it's a module to take user input using question() inbuilt function.
  - Promise

## How to run:- 
  - **userDetails.json** - This is basically a database of my project, no need to do anything with this file, create and keep it as it is.
  - **main.js** - This is my first file I created as main file only but now this is not the main file, so if you want to run and check the if the project is working fine then this is not that one, don't run this one, you can understand the basic concept of the project by Dry-run.
  - **updatedMain.js** - This is my main file. So for running and checking the follow of this project you can run this file without any hasitation.
  - **package-lock.json** - This file automatically got created when I ran the main.js file, I need to search about this file. 

"use strict";
/*30. Hello Admin:
Make an array of five or more usernames, including the name 'admin'. Imagine you are writing
code that will print a greeting to each user after they log in to a website. Loop through the array, and
print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Make an array of five or more usernames, including the name 'admin'.
let usernames = ["zahid", "wahab", "admin", "zain", "ahmed"];
//print a message to each user for using loop
usernames.forEach(usernames => {
    if (usernames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames} thank you for logging in again.`);
    }
});

const name = "jokhendra";

let email = "nothing@gmail.com";

var password = "123456";

isVerified = true;

// name = "nothing"  // Not allow

/*
Prefer not to use var
because of issue in block scope and functinal scope
*/


console.table([name, email , password , isVerified][0]);
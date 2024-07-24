let users = [];

let userCount = parseInt(prompt("How many users do you have?"));

for (let i = 0; i < userCount; i++) {
    let user_name, user_lastname, user_age;

    // Regex
    const regex_space = /\s/;
    const regex_string = /^[A-Za-z]+$/;
    const regex_number = /^\d+$/;

    // Checking name
    while (true) {
        user_name = prompt("Enter name...");
        if (!regex_space.test(user_name) && regex_string.test(user_name)) {
            break;
        } else {
            alert("Invalid name! Don't use numbers or spaces. Enter name again...");
        }
    }

    // Checking last name
    while (true) {
        user_lastname = prompt("Enter last name...");
        if (!regex_space.test(user_lastname) && regex_string.test(user_lastname)) {
            break;
        } else {
            alert("Invalid last name! Don't use numbers or spaces. Enter last name again...");
        }
    }

    // Checking age
    while (true) {
        user_age = prompt("Enter age...");
        if (!regex_space.test(user_age) && regex_number.test(user_age)) {
            break;
        } else {
            alert("Invalid age! Don't use strings or spaces. Enter age again...");
        }
    }

    // Filling array
    users.push([user_name, user_lastname, user_age]);
}

console.log(users);

// Task 3

for(let i=0; i<users.length; i++){
    let j;
    for(j=0; j<users[i].length-1; j++){
    }
    console.log(`User ${i+1}
                    Name: ${users[i][j-2]}
                    Lastname: ${users[i][j-1]}
                    Age: ${users[i][j]}`); 
}

// Task 4

let max = 0;
for (let i = 0; i < users.length; i++) {
    let age = users[i][2];
    if (age > max) {
        max = age;
    }
}

console.log(max);



let min = users[0][2];
for (let i = 0; i < users.length; i++) {
    let age = users[i][2];
    if (age < min) {
        min = age;
    }
}

console.log(min);

// Task 5

for(let i=0; i<users.length; i++){
    let j;
    for(j=0; j<users[i].length-1; j++){
    }
    console.log(`User ${i+1}
                    Name: ${users[i][j-2]}
                    Lastname: ${users[i][j-1]}
                    Age: ${users[i][j]},
                    Life stages: ${(users[i][j]<18)? "Kids" : (users[i][j]<30)? "Adult" : "Old"}`); 
}

// Task 6

var name_array = [];
for(let i=0; i<users.length; i++){
    for (let j = 0; j < users[i].length-1; j++) {
    }
    name_array.push(users[i][0]);
    name_array.sort();
}
console.log(name_array);


// Task 7
for(let i=0; i<users.length; i++){
    if (users[i][1].slice(-2) == "ov" || users[i][1].slice(-3) == "ova") {
        console.log(users[i][1]);
    }
}
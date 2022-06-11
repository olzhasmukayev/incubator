// warking with array callback functions 

// forEach - for an array 
// 1) Factorial, for the index

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fact = () => {
    nums.forEach((val, idx) => { // the forEach doesn't return the array 
        let res = 1; 
        for (let i = 1; i <= nums[idx]; i++) {
            res *= i; 
        }
        nums[idx] = res; 
    })
}

fact();
console.log(nums);

// working with map for the array

// map returns a new array 

let cities = ["Almaty", "Astana", "Oskemen", "Semey", "Taldykorgan"];
let populations = [];
const fill = () => {
    return cities.map((f) => {
        return Math.floor(Math.random() * 1000000) + " - " + f; 
    })
}

populations = fill();
console.log(populations);

// working with the find callback for the array 
// finding the user with the praticular username 

let usernames = ["dread_solo2", "qwezeey", "olzhas", "yernii", "arman", "bcofc"];

const findUserName = (x) => {
    return usernames.find((it) => {
        return (it == x);
    }).toUpperCase();
}

const found = findUserName("dread_solo2");

console.log(found); // cotains the found element with all elements in upper case;

// working with the filter for the array
// filter can remove the element, whilst map cannot, it iterates through every element of the array

// deleting the username from the database and creating the new database 

const deleteUsername = (toDelete) => { // find return an array new
    return usernames.filter((userNameIteration) => {
        return toDelete !== userNameIteration;
    });
}

const newUsernames = deleteUsername("dread_solo2");
usernames = newUsernames.slice();
console.log(usernames);
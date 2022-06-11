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

// working with the some and every 
// every password should have "_"

let passwords = ["ansfid_jajsnd", "asfn_123", "kas_nfi", "ksdfn_1", "aksn_d0"];

const checkPass = () => {
    return passwords.every((val) => { // function return true or false 
        let found = val.indexOf('_');
        return (found == -1) ? false : true;
    });
}

let isUnder = checkPass();
console.log(isUnder);

// working with the some callback function 
// at least one grades for the semestr should be 3.75 > 

let marks = [2.03, 3.5, 1.0, 3.67, 3.15, 3.7];

const isDeanList = (arr) => {
    return arr.some((val) => {
      return val >= 3.75;
    });
}

const resDean = isDeanList(marks);
console.log(resDean);

// custom sortings using sort 

let numsArr = [1124, 124, 12,10,19, 15, 54, 914,9123,8888,7777,6666,5555,4444,3333,2222, 1234 , 123, "abc"];
numsArr.sort((a, b) => {
    return a - b;
})

console.log(numsArr);

// sorting with length of the number 

numsArr.sort((a, b) => {
    return a.toString().length - b.toString().length;
});

console.log(numsArr);

// working with the reduce callback, take all array elements and reduce them to one value

// basic: sum of the all values starting with the particular value

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const summa = (initial) => { 
    return numbers.reduce((total, val) => {
      total += val;
      return total;
    }, initial);
}

const resultSum = summa(1000);
console.log(resultSum);

// advanced: finding the min max value in the array  

const maxVal = () => {
    return numbers.reduce((max, val) => {
        return Math.max(max, val);
    });
}

const resultMax = maxVal();
console.log(resultMax);

// more advanced work with reduce and object 

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

// counter of the books that has rating more that 4 
// we are returning an object

const ratingRes = (booksList) => {
    return booksList.reduce((list, curr) => { // list will store the object every iteration
        if (curr.rating > 4) {
            list[curr.title] = curr.rating;
        }
        return list;
    }, {}); 
}

const resObj = ratingRes(books);
console.log(resObj);

// working with the default paramentrs in the argument 

const funWithDef = (x, y = 0) => {
    return x + y; // sum of the two numbers 
}

let resultOfSum = funWithDef(1);

console.log(resultOfSum);

// working with the spread and rest function things & dustructing objects/arrays 

// spread - is commonly used to fill the numbers of the array/object to make a new one, the copy

// spread in when passing to the function, that can take up to ...N arguments 

const numsForMax = [1, 2, 123, 24525, 12312, 1001, 1124, 1234, 1, 9, 0, -444, 1];

const findMaxSpread = (arrSpread) => {
    return Math.max(...arrSpread); // return the maximum value among the elements in the array that we pass with N elements 
};

const maxSpreadVal = findMaxSpread(numsForMax);
console.log(maxSpreadVal);

// spread when using it in the array 

const firstNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondNums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const resArr = [...firstNums, ...secondNums];
console.log(resArr);

// spread when using it in the object 

const objList = {
    'Olzhas' : 1, 
    'Sula' : 2, 
    'Anel' : 3, 
    'Yern' : 4
}

const copyObjList = {
    'admin' : 0,    
    ...objList
};

console.log(copyObjList);

// const errorTest = [...objList]; -> cannot do this 
// console.log(errorTest);

const arrInObj = {...firstNums}; // spread the values with the key by it index
console.log(arrInObj);

// rest -> makes the function take N arguments

const multiply = (initial, ...arrgs) => { // now arrgs is an array 
    return arrgs.reduce((total, val) => {
        total *= val;
        return total;
    }); 
}

let resMult = multiply(10000, 2, 3, 5, 6, 7, 8, 9, 10);
console.log(resMult);

// practicing the destructing things 

const medalist = ['Olzhas', 'Ars', 'Miko', 'Sulya'];
const [gold, silver, bronze, ...others] = medalist;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(others);

// destructings with the objects 

const ratingLeetCode = {
    onel : "Olzhas",
    twol : "Ars", 
    treel : "Moti", 
    fourl : "Sula"
}

const {onel, twol} = ratingLeetCode;
console.log(onel);
console.log(twol);

// destructing as parametrs

const info = [];

const desFun = ({firstName, secondName}) => {
    info.push(firstName);
    info.push(secondName);
}

const objInfoDef = {
    firstName : "Olzhas", 
    secondName : "Mukayev",
    rating : 100
}

desFun(objInfoDef);

console.log(info);

// nested destructors 

const nested = [
    {
        name : "olzhas"
    }, 
    {
        name : "yernar"
    }
];

const [, {name}] = nested;
console.log(name);

// forEach (doesn't return), map (returns new array), find(finds), filter (true false then add certain), sort, reduce, some, every, spread, rest, destructors


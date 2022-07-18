// ##### Exercises: Level 2

// 1. Find the person who has many skills in the users object.
// 1. Count logged in users,count users having greater than equal to 50 points from the following object.

//    ````js
//    const users = {
//      Alex: {
//        email: 'alex@alex.com',
//        skills: ['HTML', 'CSS', 'JavaScript'],
//        age: 20,
//        isLoggedIn: false,
//        points: 30
//      },
//      Asab: {
//        email: 'asab@asab.com',
//        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//        age: 25,
//        isLoggedIn: false,
//        points: 50
//      },
//      Brook: {
//        email: 'daniel@daniel.com',
//        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//        age: 30,
//        isLoggedIn: true,
//        points: 50
//      },
//      Daniel: {
//        email: 'daniel@alex.com',
//        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//        age: 20,
//        isLoggedIn: false,
//        points: 40
//      },
//      John: {
//        email: 'john@john.com',
//        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//        age: 20,
//        isLoggedIn: true,
//        points: 50
//      },
//      Thomas: {
//        email: 'thomas@thomas.com',
//        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//        age: 20,
//        isLoggedIn: false,
//        points: 40
//      },
//      Paul: {
//        email: 'paul@paul.com',
//        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//        age: 20,
//        isLoggedIn: false,
//        points: 40
//      }
//    }```

//    ````

// 1. Find people who are MERN stack developer from the users object
// 1. Set your name in the users object without modifying the original users object
// 1. Get all keys or properties of users object
// 1. Get all the values of users object
// 1. Use the countries object to print a country name, capital, populations and languages.
// // 

// 1. Find the person who has many skills in the users object.

const users = {
         Alex: {
           email: 'alex@alex.com',
           skills: ['HTML', 'CSS', 'JavaScript'],
           age: 20,
           isLoggedIn: false,
           points: 30
         },
         Asab: {
           email: 'asab@asab.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
           age: 25,
           isLoggedIn: false,
           points: 50
         },
         Brook: {
           email: 'daniel@daniel.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
           age: 30,
           isLoggedIn: true,
           points: 50
         },
         Daniel: {
           email: 'daniel@alex.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
           age: 20,
           isLoggedIn: false,
           points: 40
         },
         John: {
           email: 'john@john.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
           age: 20,
           isLoggedIn: true,
           points: 50
         },
         Thomas: {
           email: 'thomas@thomas.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'React'],
           age: 20,
           isLoggedIn: false,
           points: 40
         },
         Paul: {
           email: 'paul@paul.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
           age: 20,
           isLoggedIn: false,
           points: 40
         }
       }
       let us, i = 0;
        for (user in users) {
            
            //  console.log(user);
            //  console.log(users[user].skills.length )
            if (users[user].skills.length > i) {
                i = users[user].skills.length;
                us = user
            }
             
        }
        // console.log(users[us])

        const asArr = Object.entries(users)
            asArr.forEach(ele=>{
            const arr = Object.entries(ele[1])
            if (arr[4][1] >= 50)
                console.log(ele);
        })
        // console.log(arr[4][1])

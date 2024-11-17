/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
const isAdult =(x)=>{
if (x >= 18) {
    console.log('Adult')
}
else {
    console.log('Minor')}
return x;
};
console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
const isCharAVowel = (x)=>{
    if (x === "a"|| x ==="e"|| x ==="i"|| x ==="u" || x === "o"){
        console.log(true)
    }
    else {console.log(false)}
    return x;

};

console.log(`Exercise 3 Result:`, isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
const generateEmail = (username,domain)=>{
//   let username = (string);
//   let domain = (string);
    return (`${username}@${domain}`);

};


console.log('Exercise 4 Result:',generateEmail("AliMohammed", "Hotmail.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
const greetUser =(name,timeOfDay)=>{
// let name =(string);
// let timeOfDay =({morning ,afternoon, evenimg});
return (`Good ${timeOfDay},${name}`);

}


console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
const maxOfThree = (x,y,z)=> {
if (x > y && x > z) 
    return x ;
else if (y > x && y > z)
    return y ;
else return z ;


    
}







console.log('Exercise 6 Result:', maxOfThree(50, 10, 1));

// import { log } from "console";
// import { privateEncrypt } from "crypto";
// import { join } from "path";

import { log } from "console";
import { features } from "process";

console.log("Hello World");


//Q-2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Typescript today?

let personName: string = "Eric";
console.log(`Hello ${personName} would you like to learn some Typescript today`);



//Q-3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let nameCases: string = "Mairaj Ansari";

console.log("Lowercase:", nameCases.toLowerCase()); //Lowercase

console.log("Uppercase:", nameCases.toUpperCase()); //Uppercase

console.log("Titlecase:", nameCases.charAt(0).toUpperCase() + nameCases.slice(1).toLowerCase()); //Titlecase



//Q-4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log("Albert Einstein once said,", '"A person who never made a mistake never tried anything new."');



//Q-5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famousPerson: string = "Albert Einstein once sain,";
let message: string = '"A person who never made a mistake never tried anything new."';
console.log(famousPerson, message);



//Q-6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let whitSpace: string = "\n\t MAIRAJ ANSARI \t\n";
console.log(whitSpace);

let withoutWhitspace: string = whitSpace.trim();
console.log(withoutWhitspace);



//Q-7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);




//Q-8 You should create four lines that look like this:
// console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line

let num1: number = 5;
let num2: number = 3;
let result: number = num1 + num2;
console.log(result);




//Q-9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoritNumber: number = 12;
console.log(`My Favorite Number Is ${favoritNumber}`);




//Q-10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//famous person
//Governer sindh
//In this program print the name.
console.log("Governer sindh (KAMRAN KHAN TESSORI)");




//Q-11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friendsName: string[] = ["Yasir Hussain", "Shazaib Khan", "Rumaisa Khan", "Shumaila Shah"];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);




//Q-12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friends_Name: string[] = ["Yasir Hussain", "Shazaib Khan", "Rumaisa Khan", "Shumaila Shah"];

let message1: string = "You Are Good Person.";

console.log("Hello", friends_Name[0], message1);
console.log("Hello", friends_Name[1], message1);
console.log("Hello", friends_Name[2], message1);
console.log("Hello", friends_Name[3], message1);




//Q-13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["plan", "car", "bus", "bike",];

for (let i = 0; i < transportation.length; i++) {
    console.log("I would like to own a", transportation[i]);
}




//Q-14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ["Ubaid Ansari", "Jawad Ansari", "Hammad Ansari",];

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}\nYou are invited for a diner tomorrow.\nThank you.`);
}





//Q-15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

let notComing: string = "Hammad Ansari";
let newGuest: string = "Ukasha Ansari";
guestList[2] = newGuest;

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear, ${guestList[i]} \nYou are invited for a diner tomorrow.\nThank you.\n`);
}
console.log(`${notComing} is not coming for dinner tomorrow.`);





//Q-16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

guestList.unshift("Yasir Hussain");
guestList.splice(guestList.length / 2, 2, "Shahzaib Khan");
guestList.push("Faraz Ansari");

for (let i = 0; i < guestList.length; i++) {
    console.log("Dear", guestList[i], "\nYou are invited for a diner tomorrow.\nThank you.\n");
}
console.log("We have found a big dinner so we invited more guests");





//Q-17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log("\n\nUnfortunately we are out of space, So have space for two guests only.\n\n");
while (guestList.length > 2) {
    let removeGuest = guestList.pop()
    console.log(`Sorry ${removeGuest}  You are not invited for a dinner tomorrow`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear", guestList[i], "\n\nYou all are still invited for a diner tomorrow.\n\nThank you.\n\n");
}
guestList.splice(0, 2);
console.log(guestList);




//Q-18 Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places: string[] = ["dubai", "paris", "new york", "sydney"];

// print your array in its original order.
console.log("Original :" + places);

// print your array in alphabetical order without modifing the actule list.
console.log("Copy :" + [...places].sort());

// Show that your array is still in its original order by printing it.
console.log("Original :" + places);

// print your array in reverse alphabetical order without changing the order of the original list.
console.log("Copy :" + [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log("Copy :" + [...places].sort().reverse());

// Reverse the order of your list, print the array to show that its order has changed.
console.log("Copy :" + [...places].sort());

// Reverse the order of your list again. print the list to show it's back to its original order.
console.log("Copy :" + [...places].sort().reverse());

// Sort your array so its stored in alphabetical order. print the array to show that its order has been changed.
console.log("Copy :" + [...places].sort());



// Q-19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let invitation: string[] = ["Ubaid Ansari", "Yasir Hussain"];
let count_invitation: number = invitation.length;
console.log(`${count_invitation} people will come to the dinner`);




//Q-20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let mountain_list: string[] = ["Mount evrest", "K2", "Himalya", "Margalla hills", "Narga parbat"];
console.log("\n List Of Mountains");
for (let i = 0; i < mountain_list.length; i++) {
    console.log(mountain_list[i]);
}



//Q-21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name: string;
    price: number;
}

const fruit: item = {
    name: "Mango",
    price: 150
}
const vegetable: item = {
    name: "Tomato",
    price: 100

}
console.log(`Fruit name: ${fruit.name}, Fruit price: ${fruit.price}`);
console.log(`Vegetable name: ${vegetable.name}, Vegetable price: ${vegetable.price}`);






//Q-22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let listing1: string[] = ["Mairaj", "Ubaid", "Jawad"];
console.log(listing1[3]);

let listing2: string[] = ["Mairaj", "Ubaid", "Jawad", "Hammad"];
console.log(listing2[0]);
console.log(listing2[1]);
console.log(listing2[2]);
console.log(listing2[3]);






//Q-23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// 5 True Test //

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru'); //True


console.log("Is car === 'subru'? I predict True.")
console.log(car === 'subaru'); //True


console.log("Is car != 'honda'? I predict True.")
console.log(car != 'honda'); //True


console.log("Is car !== 'honda'? I predict True.")
console.log(car !== 'honda'); //True


console.log("Is car <= 'subaru'? I predict True.")
console.log(car <= 'subaru'); //True


// 5 False Test //


console.log("Is car == undefine? I predict False.")
console.log(car == undefined); //False


console.log("Is car == null? I predict False.")
console.log(car == null); //False


console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru'); //False


console.log("Is car == 'Toyota'? I predict False")
console.log(car == 'Toyota'); //False


console.log("Is car === 'Toyota'? I predict False")
console.log(car === 'Toyota'); //False





//Q-24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


let myName: string = "mairaj ansari";
let age: number = 23;
let numbers: number[] = [3, 6, 9, 12, 15];

//---string Tast---//

//True Tast//
console.log("Is name == 'mairaj ansari'? I predict True")
console.log(myName == 'mairaj ansari'); //True


//False Tast//
console.log("Is name != 'mairaj ansari'? I predict False")
console.log(myName != 'mairaj ansari'); //False


//--lower case function test--//

//True Test//
console.log("Is name.toUpperCase() == 'mairaj ansari'? I predict True")
console.log(myName.toLowerCase() == 'mairaj ansari'); //True

//False Test//
console.log("Is name.toUpperCase() == 'jawed ansari'? I predict False")
console.log(myName.toLowerCase() == 'jawed ansari'); //False


//---Numerical Test---//

//True Test//
console.log("Is age == 23? I predict True")
console.log(age == 23); //True

console.log("Is age !== 20? I predict True")
console.log(age !== 20); //True


//---Greater then and less then---//


//False Test//
console.log("Is age > 23? I predict False")
console.log(age > 25) //False

//True Test//
console.log("Is age < 25? I predict True")
console.log(age < 25) //True


//---Greater then or equal to and less then or equal to---//

//True Test//
console.log("Is age >= 23? I predict True")
console.log(age >= 23) //True


//False Test//
console.log("Is age <= 20? I predict False")
console.log(age <= 20) //False      



//---"and" And "or" Operators---//


//False Test//                 
console.log("Is age == 23 And myName == mairaj ansari? I predict False")
console.log(age == 23 && myName == "Mairaj ansari") //False


//True Test//
console.log("Is age == 23 And myName == mairaj ansari? I predict True")
console.log(age == 23 || myName == "mairaj ansari") //True



//---Test whether an item is in a array---//


//True test//
console.log("Is '3' in numbers? I predict True")
console.log(3 in numbers) //True



//---Test whether an item is not in a array---//


//False test//
console.log("Is '8' in numbers? I predict False")
console.log(8 in numbers) //False







//Q-25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


let alien_colors: string = "green";

//passing version
if (alien_colors === "green") {
    console.log('player just earned 5 points.')
}
else {
    console.log('no points earned')
}


alien_colors = "yellow";

//fails version
if (alien_colors === "green") {
    console.log('player just earned 5 points.')
}
else {
    console.log('{}')
}






//Q-26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// Write one version of this program that runs the if block and another that runs the else block

let alienColor: string = "green";

//if block run
if (alienColor === "green") {
    console.log('player just earned 5 points for shooting the alien!')
}
else {
    console.log('player just earned 10 points.')
}

alienColor = "yellow";

//else block run
if (alienColor === "green") {
    console.log('player just earned 5 points for shooting the alien!')
}
else {
    console.log('player just earned 10 points.')
}









//Q-27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.

// If the alien is yellow, print a message that the player earned 10 points.

// If the alien is red, print a message that the player earned 15 points.

// Write three versions of this program, making sure each message is printed for the appropriate color alien.


//Alien color is green.
let AlienColor: string = "green";

if (AlienColor === "green") {
    console.log('player earned 5 points.')
}
else if (AlienColor === "yellow") {
    console.log('player earned 10 points.')
}
else if (AlienColor === "red") {
    console.log('player earned 15 points.')
}

//Alien color is yellow.
AlienColor = "yellow";

if (AlienColor === "green") {
    console.log('player earned 5 points.')
}
else if (AlienColor === "yellow") {
    console.log('player earned 10 points.')
}
else if (AlienColor === "red") {
    console.log('player earned 15 points.')
}

//Alien color is red.
AlienColor = "red";

if (AlienColor === "green") {
    console.log('player earned 5 points.')
}
else if (AlienColor === "yellow") {
    console.log('player earned 10 points.')
}
else if (AlienColor === "red") {
    console.log('player earned 15 points.')
}







//Q-28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// If the person is less than 2 years old, print a message that the person is a baby.

// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// If the person is age 65 or older, print a message that the person is an elder 


let personAge: number = 15;

if (personAge < 2) {
    console.log("the person is a baby")
}
else if (personAge >= 2 && personAge < 4) {
    console.log("the person is a toddler")
}
else if (personAge >= 4 && personAge < 13) {
    console.log("the person is a kid")
}
else if (personAge >= 13 && personAge < 20) {
    console.log("the person is a teenager")
}
else if (personAge >= 20 && personAge < 65) {
    console.log("the person is an adult")
}
else if (personAge >= 65) {
    console.log(" the person is an elder")
}







// Q-29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// Make a array of your three favorite fruits and call it favorite_fruits.

// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favorite_fruits: string[] = ['apple', 'banana', 'grape', 'mango', 'orang'];

if (favorite_fruits[0] === 'apple') {
    console.log("I like apple")
}
else {
    console.log("I dont like fruits")
}
if (favorite_fruits[1] === 'banana') {
    console.log("I like banana")
}
else {
    console.log("I dont like fruits")
}
if (favorite_fruits[2] === 'watermelon') {
    console.log("I like watermelon")
}
else {
    console.log("I dont like fruits")
}
if (favorite_fruits[3] === 'mango') {
    console.log("I like mango")
}
else {
    console.log("I dont like fruits")
}
if (favorite_fruits[4] === 'papaya') {
    console.log("I like papaya")
}
else {
    console.log("I dont like fruits")
}








// Q-30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again

let users: string[] = ['Admin', 'Mairaj', 'Hammad', 'Ubaid', 'Yasir'];
for (let user of users)
    if (user === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?")
    }
    else {
        console.log(`Hello ${user} thank you for logging in again`)
    };










// Q-31 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

//If the list is empty, print the message We need to find some users!

//Remove all of the usernames from your array, and make sure the correct message is printed.

let users_: string[] = ['Admin', 'Mairaj', 'Hammad', 'Ubaid', 'Yasir'];

while (users_.length > 0) {
    users_.pop()
}

if (users_.length === 0) {
    console.log("We need to find some users!")
}






// Q-32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// Make a list of five or more usernames called current_users.

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["Mairaj", "Jawed", "hammad", "ubaid", "jawaad"];

let new_users: string[] = ["mairaj", "jawed", "shumaila", "haniya", "rumaisa"];

new_users.forEach((new_users) => {

    if (current_users.some((current_users) => current_users.toLowerCase() === new_users.toLowerCase())) {

        console.log(`${new_users} will need to enter a new username`)
    }
    else {
        console.log(`${new_users} is available`)
    }
})







// Q-33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.

// Loop through the array.

// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let ordinal_array: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < ordinal_array.length; i++) {

    if (ordinal_array[i] === 1) {
        console.log(`${ordinal_array[i]}st`)
    }
    else if (ordinal_array[i] === 2) {
        console.log(`${ordinal_array[i]}nd`)
    }
    else if (ordinal_array[i] === 3) {
        console.log(`${ordinal_array[i]}rd`)
    }
    else if (ordinal_array[i] === 4) {
        console.log(`${ordinal_array[i]}th`)
    }
    else if (ordinal_array[i] === 5) {
        console.log(`${ordinal_array[i]}th`)
    }
    else if (ordinal_array[i] === 6) {
        console.log(`${ordinal_array[i]}th`)
    }
    else if (ordinal_array[i] === 7) {
        console.log(`${ordinal_array[i]}th`)
    }
    else if (ordinal_array[i] === 8) {
        console.log(`${ordinal_array[i]}th`)
    }
    else if (ordinal_array[i] === 9) {
        console.log(`${ordinal_array[i]}th`)
    }
}








// Q-34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizza_array: string[] = ["B.B.Q", "fajida", "maxican"];

for (let index = 0; index < pizza_array.length; index++) {

    console.log(`I like ${pizza_array[index]} pizza`)
}
console.log("I Really Like Pizza")










// Q-35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["Cow", "Dog", "Cat"];

for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet`)
}
console.log('\nAny of these animals would make a great pet!')









// Q-36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, text: string) {

    console.log(`on ${size} size of shirt , ${text} is printed`)
}
make_shirt("Small", "Have a nice day")
make_shirt("Large", "Have a bad day")









// Q-37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size: string = "Large", text: string = "I love Typescript") {

    console.log(`on ${size} size of shirt , ${text} is printed`)
}
makeShirt();
makeShirt("medium");
makeShirt("small", "I love Python");








// Q-38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describ_city(city: string, country: string = "pakistat") {

    console.log(`${city} is in ${country}`)
}
describ_city("karachi");
describ_city("london", "England");
describ_city("lahor", "pakistan");








// Q-39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function cityName(city: string, country: string): string {

    return city + country
}

console.log(cityName("Karachi", "Pakistan"));
console.log(cityName("Lahore", "Pakistan"));
console.log(cityName("Hydrabad", "Pakistan"));








// Q-40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name: string, album_title: string, track?: number) {

    let album: { Artist_Name: string, Album_Title: string, Track?: number } = {
        Artist_Name: artist_name,
        Album_Title: album_title,
        Track: track
    }
    return album
}

console.log(make_album("atif", "kuhc is tarha"))
console.log(make_album("arijit", "doorie"))
console.log(make_album("mairaj", "albums", 5))










// Q-41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_array: string[] = ["magician_array-1", "magician_array-2", "magician_array-3"]

function show_magicians(array:string){

    for (let i = 0; i < magician_array.length; i++){
        console.log(magician_array[i])
    }
    
}

show_magicians("magician_array")











// Q-42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let MagicianArray: string[] = ["magician_array-1", "magician_array-2", "magician_array-3"]

function make_gread(arr:string[]){

    for (let i = 0; i < arr.length; i++){
        MagicianArray[i] = " The gread " + arr[i]
    }
}

make_gread(MagicianArray);

console.log(MagicianArray);







// Q-43 Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// let MagicianArray: string[] = ["magician_array-1", "magician_array-2", "magician_array-3"]

function copy_array(arr:string[]):string[]{
    return [...arr]
}

let copyArray = copy_array(MagicianArray);

function MakeGread(arr:string[]){

    for(let i = 0; i < arr.length; i++){

        copyArray[i] = `The gread ${arr[i]}`
    }

}

MakeGread(copyArray)

function show_magician(arr:string[]): string[]{

    return arr
}
console.log("Original array:",show_magician(MagicianArray));

console.log("Modified array:",show_magician(copyArray));







// Q-44  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(para:string[]) {
    console.log("\nYou order is ready included item");
    console.log(`${para[0]}`);
    console.log(`${para[1]}`);
    console.log(`${para[2]}`);
    console.log("Enjoy your meal");    
}

sandwich(['item-1', 'item-2', 'item-3']);
sandwich(['item-4', 'item-5', 'item-6']);
sandwich(['item-7', 'item-8', 'item-9']);






// Q-45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function cars(manufacturer:string, model:number ,...rest:{[key:string]:any}[]){

    let car_obj = {
        manufacturer: manufacturer,
        model: model,
        ...Object.assign({},...rest)
    }
    return car_obj

}

console.log(cars("Toyota", 2024, {color: "Black"},{features: ["power window","air bag"]}));

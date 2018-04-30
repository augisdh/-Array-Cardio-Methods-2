"use strict";

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Is at least one person 19 in people? {use some();}
const currentYear = new Date().getFullYear();
const isAdult = people.some(person => currentYear - person.year >= 19);

console.log(isAdult);

// Is every one 19? {use every();}
const allAdults = people.every(person => currentYear - person.year >= 19);

console.log(allAdults);

// Find the comment with the ID of 823423
const commentId = comments.find(item => item.id === 823423);

console.log(commentId);

// Find the comment with this ID
// delete the comment with the ID of 823423 {use findIndex();}
const index = comments.findIndex(item => item.id === 823423);
console.log(index);

comments.splice(index, 1);
console.table(comments);
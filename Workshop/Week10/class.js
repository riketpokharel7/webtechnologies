//Variables
// let age =20;
// age=35;
// //const age=30;
// console.log(age);

//Arrays
// const numbers=new Array(1,2,3,4,5)
// console.log(numbers);

// const Hello = ['hello','hi','1','2'];
// Hello[4] = 'yojana';
// Hello.push("ok");
// Hello.unshift('bye');
// console.log(Hello);
// console.log(Hello[3]);

//Loops
// for (let i=0; i<10; i++){
//     console.log(i);
// }

// //While
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

//Conditionals
// const y=12;
// const z=9;
// if (y>5 && z>10){
//     console.log('y is more than 5 and z is more than 10');
// }
// else if(y>10){
//     console.log('y is greater than 10');
// }
// else{
//     console.log('y is less than 10');
// }

//Switch cases
// const x=9;
// const color = x>10 ? 'red' : 'blue' ;
// // const color='purple';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     case 'green':
//         console.log('color is green');
//     default:
//         console.log('color is not red or blue');
// }

//Object and Object Literals
const person={
    fistName:'Yojana',
    LastName:'Ghimire',
    age:22,
    hobbies:['dancing', 'watchingmoives'],
    address:{
        street:'banasthali',
        city:'kathmandu'
    }
}
console.log(person.address.city)
console.log(person.hobbies[1])
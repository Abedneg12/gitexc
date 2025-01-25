//exercise

// no 1 Write a code to display the multiplication table of a given integer 
const num1: number = 5;
for (let i: number = 1; i <= 10; i++){
    console.log(`${num1} x ${i} = ${num1 * i}`);
}



// no 2 Write a code to check whether a string is a palindrome or not
let message: string = "quit";

let revs = message.split('').reverse().join(''); 

if (message === revs) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}



//no 3 write code to covert cm to km
const measure: number = 15;
let result2: number = 0;

if (typeof measure !== "number"){
    console.log("Anda salah memasukkan angka");
}else{
    result2 = measure / 100000;
    console.log(`${measure} cm = ${result2} km`);
}



//no 4 write code to convert number to currency idr
const money: number = 10000;
let money2: string = "";

money2 = money.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

console.log(`${money} = ${money2}`); //




//no 5 Write a code to remove the first occurrence of a given “search string” from a string
const req: string = "ell";
const wrd: string = "Hello World?";
let show = wrd.replace(req, '');

console.log(show); 


//no 6


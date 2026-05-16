let num=10;

// Reverse a string using for loop
 let name = "Sitaram";
 let rev ="";
 for(let i=name.length-1;i>=0;i--){
    rev= rev+name[i];
 }
console.log("Reversed: "+rev);

// for loop

for(let i=1;i<=num;i++){
    process.stdout.write(i + " ");
}

console.log();

// While loop

while(num>0){
  process.stdout.write(num + " ");
    num--;
} 

console.log();

// Do-While loop

do{
    process.stdout.write(num + " ");
    num++;
}while(+num<10);
console.log();


// Star pattern using for loop
for(let i = 1; i <= 5; i++) {

    for(let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    console.log();
}


// for ...of loop
let fruits = ["Apple", "Banana", "Cherry"];
for(let fruit of fruits){
  process.stdout.write(fruit + " ");
}
    console.log();

// for ...in loop
let student = {
    name: "Sitaram Kadam",
    age: 24
};
for(let key in student){
  console.log(key + ": " + student[key]);
}   

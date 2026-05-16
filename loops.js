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


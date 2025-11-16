const arguments = process.argv[2];
let integerValue = parseInt(arguments, 10);
if (isNaN(integerValue)) {
    console.log("Not a number") 
} else {
    console.log("My number: " + integerValue);
}
/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line
// Code example
/*
for(var i=1; i<=5; i++) {
 console.log(i);
}
function functionName()
{
    console.log("hello world");
}
functionName();
var myName = "NavdeepSingh";
const age = 18;
let sex = "male";
//  sex = "male"
console.log(myName,age,sex);

const myVar = 5 + 10;
console.log("myVar", "now has the value",myVar,".");

function calculationsInConst()
{
    const addition = 69+69;
    const substraction = 69-69;
    const division = 69/69;
    const remainder = 69%69;
    const quotient = Math.floor(69/68); 
    return "addition",addition;
}
// calculationsInConst();
console.log(calculationsInConst());
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);
const anotherSampleStr = 'hey bro , let\'s play , "this is what he said"';
console.log(anotherSampleStr);
const ourStr = "I come first. " + "I come second.";
console.log("concate example",ourStr);

const anAdjective = "awesome!";
let anotherOurStr = "NavdeepSingh is ";
anotherOurStr += anAdjective;
console.log(anotherOurStr);
console.log(anotherOurStr.length);

// anotherOurStr = anotherOurStr.replace("NavdeepSingh", "NavtejSehrawat");
// console.log(anotherOurStr);

anotherOurStr = anotherOurStr.substring(0, 3) + "tejSehrawat" + anotherOurStr.substring(12);

console.log(anotherOurStr);
const num = 6;
if (num > 5) {
    if (num < 10) {
      console.log(num,"smaller than 10")
    }
  }
  console.log(num,"biggerr than 10")

console.log(num);
console.log(5==5);
    console.log(5!==5);
console.log(5!=='5');

// switch (num) {
//     case 4:
//       console.log(4);
//       break;
//     case 5:
//         console.log(5);
//       break;
  
//     default:
//     console.log("yeah you!");
//       break;
//   }
  
  function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
  }
console.log(findGreater(69,96));  

const array = ["navdeep", "sexy" , "AF"];
console.log(array);
const nextedArray = [["array", "number" , 1],["array","number",2]];
console.log(nextedArray);
console.log(array[1]);
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
console.log(subarray);
console.log(arr[3]);
const nestedSubarray = arr[3][0];
console.log(nestedSubarray);
const element = arr[3][0][1];
console.log(element);

arr.push(4);
console.log(arr);
var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);

const oneDown = arr2.pop();
console.log(oneDown);
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);
console.log(arr2.unshift());

const ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.shift());
console.log(ourArray.unshift("Happy")); 
console.log(ourArray);

const pussyCat = {
  "name": "RedWine",
  "legs": 2,
  "tails": "fake",
  "love": ["3rdLeg", "Neck"]
};
console.log(pussyCat);
console.log();

const wineName = pussyCat.name;
console.log(wineName);
console.log(pussyCat["name"]);
pussyCat.tails="real";
console.log(pussyCat)

pussyCat.requiredSize = "7in"
console.log(pussyCat)
delete pussyCat.tails
console.log(pussyCat)
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
console.log(answer)

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();


const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
console.log(myFun())
console.log(someVar)

const OurArray = [];
let i = 0;

while (i < 5) {
  OurArray.push(i);
  i++;
}
console.log(OurArray)

const arrayLength = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arrayLength.length; i++) {
  for (let j = 0; j < arrayLength[i].length; j++) {
    console.log(arrayLength[i][j]);
  }
}

const a = parseInt("007");
function tryIt(numberAsString) {

  if (parseInt(numberAsString) == 123) {
    return console.log("Yay!");
  }

  console.log("Boo!");
}

tryIt("123");


*/
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const numberOfNFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_nameOfNFT,_eyeColor , _shirtType, _bling) {
const NFT = {
  "name" : _nameOfNFT,
  "eyecolor": _eyeColor,
  "shirtType": _shirtType,
  "bling": _bling
}
numberOfNFTs.push(NFT);
console.log("Minted: "+ _nameOfNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i = 0 ; i < numberOfNFTs.length;i++)
{
  console.log("\nId: \t\t\t\t\t"+(i+1))
  console.log("Name: \t\t\t\t" + numberOfNFTs[i].name);
  console.log("EyeColor: \t\t" + numberOfNFTs[i].eyecolor);
  console.log("ShirtType: \t   "+ numberOfNFTs[i].shirtType);
  console.log("Bling: \t\t\t\t"+ numberOfNFTs[i].bling);



}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nLength: "+numberOfNFTs.length)
}
mintNFT("Aoa","blue","hooodies","rockChain")
mintNFT("Bob","blue","hooodies","rockChain")
mintNFT("Coc","blue","hooodies","rockChain")
mintNFT("Dod","blue","hooodies","rockChain")
mintNFT("Eoe","blue","hooodies","rockChain")
listNFTs();
getTotalSupply();
// call your functions below this line


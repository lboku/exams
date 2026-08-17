// let number = 10;
// console.log( typeof (number));
// let string = "Hello, World!";
// console.log(typeof (string));
// let boolean = true;
// console.log( typeof (boolean));
// let undefinedValue;
// console.log(typeof (undefinedValue));
// let nullValue = null;
// console.log(typeof (nullValue));
// let notANumber = NaN;
// console.log(typeof (notANumber));
// let array = [1, 2, 3, 4, 5];
// console.log(typeof (array));
// let object = { name: "John", age: 30 };
// console.log(typeof (object));

// let prglng = ["JavaScript", "Python", "Java"]
// prglng.push("c++");
// console.log(prglng);
// prglng.shift();
// console.log(prglng);

// let smartphone = {
//    brand: "Apple",
//    model: "iPhone 13",
//    price: 999
// };
// smartphone.color = "Black";
// console.log(smartphone);
// delete(smartphone.color);
// console.log(smartphone);

// let age = 17;
// let vipTkt = false;
// console.log();
// if (age >= 18 || vipTkt) {
//         console.log("You can enter the cinema.");
// }   else {
//     console.log("You cannot enter the cinema.");
// }

// let randomNum = Math.round(Math.random()* 100);
// console.log(randomNum);

// let priceString = "45.99ლარი";
// let price = parseFloat(priceString);
// console.log(price);

// let num1 = 10;
// let stringNum = "2";
// console.log(Number.isNaN(typeof (stringNum) * typeof (num1)));

// let userEmail = "   John.Doe@Gmail.com   ";
// let space = userEmail.trim();
// console.log(userEmail);
// let lowcase = userEmail.toLowerCase()
// console.log(lowcase);
// let rplc = userEmail.replace("Gmail", "yahoo");
// console.log(rplc);

// let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
// console.log(cars.length);
// console.log(cars.at(cars.length-1));
// console.log(Array.isArray(cars));
// console.log(cars.toString());
// console.log(cars.join("-"));

// let queue = ["Luka", "Nino", "Sandro"];
// queue.push("mariam")
// console.log(queue);
//  queue.unshift("giorgi")
// console.log(queue);
//  queue.shift("giorgi")
//  console.log(queue);
//  queue.pop("mariam")
//  console.log(queue);
//  delete queue[1]
//  console.log(queue);

// let groupA = [1, 2];
// let groupB = [3, 4];
// let combined = groupA.concat(groupB)
// console.log(combined);

// let matrix = [1, 2, [3, 4, [5, 6]]];
// let flatting = matrix.flat(2)
// console.log(flatting);

// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// let favcolor = colors.slice(2, 4)
// console.log(favcolor);
// let dltcolor = colors.splice(1,1, "Orange", "Pink");
// console.log(colors);

// let months = ["Jan", "Mar", "Apr"];
// let addMonths = months.toSpliced(1,0, "feb")
// console.log(addMonths);

// let numbers = [1, 2, 3, 4, 5];
// numbers.copyWithin(0,3)
// console.log(numbers);

// for (let i = 100; i<1000; i++){
//     console.log(i,10**i )

// }
// console.log(BigInt(Number.MAX_SAFE_INTEGER**2));

// console.log(+((parseFloat("150.75GEL") * 0.85)).toFixed(1));

// let validCode = "   FrEe-ShiPping2024   ".trim().toLowerCase().replace("free","super")
// console.log(validCode);

// let userProfile = {
//   username: "Luka_Dev",
//   contact: {
//     email: "luka@test.com",
//     phone: "555-1234"
//   },
//   isActive: true
// };
// userProfile.contact.phone =  "111111";
// userProfile.role= "admin";
// delete userProfile.contact.email;
// console.log(userProfile);

// let cart = ["Laptop", "Mouse"];
// cart.unshift("Keyboard");
// cart.push("monitor", "Keyboard")
// cart.pop()

// let last = cart.at(-2)
// console.log(last);

// let newarr=cart.join(", ")
// console.log(newarr);

// let winners = ["Giorgi", "Sandro", "Nino", "Mariam", "Luka"];
//  let topThree = winners.slice(0,3)
// let change = winners.splice(1,"Dato","Tika" )
// console.log(winners);

// console.log([1, [2, 3], [[4, 5], 6]].flat(Infinity));

// console.log(["A", "B", "C", "D", "E"].copyWithin(3,0));

// let num = []
// for(let i=0; i<=20; i++){
//   num.push(Math.round(Math.random()*95)+5)
// }

// console.log(num);
// let square = num.map(x=>{return x**2}).sort((a,b)=>a-b)
// console.log(square);

// let user = {
//     name: "Nika",
//     age: 17,
//     balance: 100,
//     tickets: ["Cinema"] // უკვე ნაყიდი აქვს 1 ბილეთი
// };

// let event = {
//     title: "Tech Conference 2024",
//     ticketPrice: 40,
//     requires18Plus: false, // არ ითხოვს სრულწლოვანებას
//     ticketsAvailable: 2
// };
// if(user.balance>= event.ticketPrice && event.ticketsAvailable> 0 && (user.age>=18||!event.requires18Plus)){
//     user.balance -=event.ticketPrice
//     event.ticketsAvailable--
//     user.tickets.push(event.title)
//     console.log("გილოცავთ, ბილეთი წარმატებით შეიძინეთ");
// }else{
// console.log("ბილეთის ყიდვა ვერ მოხერხდა.");

// }
// user.tickets.unshift("Eminem Concert")
// user.tickets.splice(0,1,"Refunded")
// console.log(user,event);

// let employee = {
//     name: "Anna",
//     salary: 1500,
//     department: "HR"
// };
// let dynamicKey = "experience"; // ამ ცვლადით უნდა ჩაამატო ახალი თვისება
// employee["exp"]=dynamicKey
// delete employee.department
// console.log(employee);

// console.log(+parseFloat("15.75km/h"));
// console.log(parseInt("100points"))
// console.log( Number.isNaN("Error404"));
// console.log(Math.max(45, 89, 12));
// console.log(Math.ceil(Math.random()*50));
// console.log(+(9.8765.toFixed(2)));
// console.log( typeof !!(9.8765.toFixed(2)));

// let website = "   https://www.MySite.com/about   ";
// let categories = "Tech,Sports,Music,News";
// console.log(website.trim());
// console.log(website.includes("https"));
// console.log(website.indexOf("M"));
// console.log(website.slice(15,25));
// console.log(website.replace("about","contact"));
// console.log(categories.split(","));

// let val1 = "";
// let val2 = "0";
// let val3 = null;
// let val4 = 120;

// if (val1 || val3){console.log("right");}
// if (val2){ console.log("right 2");}
// console.log(val4 + "");

// console.log(+"250");

// let laptop = {
// brand: "MacBook",
// ram: 16
// }
// laptop.year = 2022
// let myKey = "color"
// laptop[myKey]="silver"
// delete laptop.ram
// let myWorkLaptop = laptop;
// myWorkLaptop.brand = "dell"
// console.log(laptop.brand);
// console.log(laptop);

// function sayGoodbye(){
//     console.log("ნახვამდის!");
// }
// sayGoodbye();
// let robot= {
//    sayhello(){
//         console.log("გამარჯობა, მე ვარ რობოტი");
//     }
// }
// robot.sayhello()

// let userInput1 = " "; // ცარიელი სივრცე (სფეისი)
// let userInput2 = 0;   // რიცხვი ნული
// if (userInput1){console.log("პირველი მუშაობს")}
// if (userInput2){console.log("მეორე მუშაობს")}
// console.log(!!userInput2);

// let points = 50;
// let bonus = 20;
// if (points >= 50) {
//     points = points + bonus;
// }
// console.log("ჯამური ქულები:", points);
// console.log("მიღებული ბონუსი:", bonus);

// let car1 = { brand: "BMW" };
// let car2 = { brand: "BMW" };
// console.log(car1==car2);
// let car3 = car1;
// console.log(car1 == car3);
// // ეს ამიხსენი კარგად ვერ გავიგე რატომ მივიღეთ ერთგან თრუ დამეორეგან ფოლსი
// let calculator = {
//     sayHello(){
//         console.log("კალკულატორი ჩაირთო");
//     }
// }
// calculator.turnOff = function(){
//     console.log("კალკულატორი გამოირთო");
// }
// calculator.sayHello();
// calculator.turnOff()

// let test1 = "false"; // ყურადღება მიაქციე, ბრჭყალებშია!
// let test2 = [];      // ცარიელი მასივი
// let test3 = undefined;
// if(test1){console.log(!!test1)} //true
// if(test2){console.log(!!test2)} //true
// if(test3){console.log(!!test3)} //false

// let total = 0;
//     let currentScore = 100;
// if (true) {

//     total = total + currentScore;
// }

// console.log("ჯამი:", total);
// console.log("მიმდინარე ქულა:", currentScore); // <--- აქ ერორია!

// let player1 = {
//     username: "Gamer99",
//      level: 10
// }
// let player2 = player1
// player2.level = 20
// console.log(player1.level);
// // დაიბეჭდა 20 და იმიტომ რომ ჩვენ player2 გავუტოლეთ player1  ამიტომაც რაც შეიცვლებოდა ერთგან შეიცვლებოდა მეორეგანაც

// let smartTv ={
//     brand: "samsung",
//     TurnOn(){console.log("ტელევიზორი ჩაირთო");
//     }
// }
// smartTv.changeChannel = function(){
//     console.log("არხი შეიცვალა");

// }
// smartTv.TurnOn()
// smartTv.changeChannel()
// let scores = [45, 12, 100, 8, 75, 30];
// console.log( scores.sort((a,b)=>a-b));
// console.log(scores.reverse());

// let playlist = ["Song A", "Song B", "Bad Song 1", "Bad Song 2", "Song C"];
// console.log(playlist.splice(2,2,"Hit Song 1", "Hit Song 2"));
// console.log(playlist);

// let allNews = ["News 1", "News 2", "News 3", "News 4", "News 5"];
// let topNews = allNews.slice(0,3)
// console.log(topNews);
// console.log(allNews);
// console.log(topNews.join(" | "));

// let students = ["Zura", "Nika", "Anna", "Luka", "Tato", "Mariam"];

// let studentInd = students.indexOf("Luka");
// let newArr =students.splice(studentInd,1)
// console.log(students);
// students.sort()
// let honorStudents= newStudentsArr.slice(0,2)
// console.log(honorStudents);
// console.log(honorStudents.reverse());

// let queue = ["Nino", "Sandro"];
// queue.push("luka")
// console.log(queue);
// queue.unshift("mariam")
// console.log(queue);
// queue.shift()
// console.log(`რიგში დარცენილია ${queue.length} კლიენტი`);

// let fiction = ["Harry Potter", "Dune"];
// let nonFiction = ["Sapiens", "Atomic Habits"];
// let allBooks = fiction.concat(nonFiction)
// console.log(allBooks);
// let displayBooks = allBooks.slice(1,3)
// console.log(displayBooks);
// console.log(displayBooks.join(" და "));

// let temperatures = [32, 28, 35, 22, 30, 25];
// let secondArr = temperatures.sort((a,b)=>a-b)
// secondArr.reverse()
// console.log(`კვირის მაქსიმალური ტემპერატურა იყო:${secondArr.at()}, ხოლო მინიმალური:${secondArr.at(-1)} `)

// let menu = ["Pizza", "Burger", "Salad", "Pasta", "Soup"];
// let findSalad = menu.indexOf("Salad")
// menu.splice(findSalad, 1, "Steak", "Tacos");
// console.log(menu);

// let tasks = ["მეილებზე პასუხი", "მიტინგი", "სადილი"];
// tasks.unshift("ბაგის გასწორება")
// tasks.push("კოდის განხილვა")
// tasks.shift()
// tasks.pop()
// console.log(tasks);
// console.log(`დღეს დაგრჩა შესასრულებელი ${tasks.length} დავალება`);

// let teamA = ["Gia", "Vato", "Levan"];
// let teamB = ["Saba", "Tornike", "Nika"];
// let allPlayer=teamA.concat(teamB)
// let selectedPlayers = allPlayer.slice(1,5)
// let changeArr = selectedPlayers.join(", ")
// console.log(changeArr);

// let examResults = [55, 95, 72, 88, 45, 100];
// examResults.sort((a, b) => a - b);
// examResults.reverse();
// examResults.pop();
// console.log(examResults);
// console.log(`საუკეთესო შედეგია: ${examResults.at()}`);

// let inventory = ["MacBook Air", "Lenovo ThinkPad", "Dell XPS", "HP Envy"];
// inventory.splice(inventory.indexOf( "Dell XPS"),1, "Asus ROG", "Acer Swift")
// console.log(inventory);

// let prices = [15, 30, 10, 45, 100];
// let totalSum = 0;

// for(let i=0; i<prices.length; i++){
//  totalSum+=prices[i]
// }
// console.log(`თქვენი ჯამური გადასახადია: ${totalSum} ლარი`);

// let battery = 100;
// while(battery>0){
// console.log(`ბატარეის დონე: ${battery}%`);
// battery--
// }

// let battery1 = 20;
// while(battery1>0){
// console.log(`ბატარეის დონე: ${battery1}%`);
// battery1--
// }
// console.log("ტელეფონი გამოირთო!");

// let attempt = 0;

// do{
//     attempt++
//     console.log(`ვცდილობ დაკავშირებას... ცდა ნომერი: ${attempt}`);

// }while(attempt<3)

// let myLaptop = {
//     brand: "Apple",
//     model: "MacBook Pro",
//     chip: "M1",
//     os: "macOS Tahoe"
// };
// for(obj in myLaptop){
//     console.log(`თვისება ${obj} არის: ${myLaptop[obj]}`);
// }

// let testResults = [
//     { id: 1, name: "Login Test", status: "passed", duration: 1.2 },
//     { id: 2, name: "Payment Test", status: "failed", duration: 2.5 },
//     { id: 3, name: "Search Test", status: "passed", duration: 0.8 },
//     { id: 4, name: "Checkout Test", status: "failed", duration: 3.1 }
// ];
// let passedCount = 0;
// let failedCount = 0;

// for(let i=0; i< testResults.length; i++){
//     if(testResults[i].status==="passed"){
//         passedCount++
//     }else if (testResults[i].status==="failed"){
//         failedCount++
//     }
// }

// console.log(`წარმატებულია: ${passedCount}`)
// console.log(`ჩავარდა: ${passedCount}`);

// for(let key in testResults[1]){
//    console.log(`Error details -> ${key}:${testResults[1][key]}`);
// }
// let maxRetries = 3;
// let currentTry = 1;
// while(currentTry<=maxRetries){
//    console.log(`ვუშვებ Payment Test-ს ხელახლა... ცდა ნომერი:${currentTry}`);

//     currentTry++
// }

// let transactions = [
//     { id: 101, type: "income", amount: 1500, desc: "ხელფასი" },
//     { id: 102, type: "expense", amount: 50, desc: "სუპერმარკეტი" },
//     { id: 103, type: "expense", amount: 120, desc: "კომუნალურები" },
//     { id: 104, type: "income", amount: 300, desc: "ბონუსი" }
// ];

// let totalIncome = 0;   // შემოსავლების ჯამი
// let totalExpense = 0;  // ხარჯების ჯამი
// for(let i = 0; i< transactions.length; i++){
//     if(transactions[i].type === "income"){
//         totalIncome += transactions[i].amount
//     } else if(transactions[i].type === "expense"){
//         totalExpense += transactions[i].amount
//     }
// }
// console.log(`თქვენი შემოსავალია: ${totalIncome}, ხოლო ხარჯი: ${totalExpense}`);

// for(obj in transactions[2]){
//     console.log(`ჩანაწერი: ${obj} => ${transactions[2][obj]}`);
// }
// let targetAmount = 200; // რამდენი გვინდა სულ
// let withdrawn = 0;      // რამდენი გვაქვს ამ წამს გამოტანილი

// while (withdrawn < targetAmount){
//     withdrawn += 50
//     console.log(`ადმოიცა 50 ლარი. სულ გამოტანილია: ${withdrawn} ლარი`);

// }

// const cart = [
//     { id: 1, product: "Laptop", price: 2000, inStock: true },
//     { id: 2, product: "Mouse", price: 50, inStock: false },
//     { id: 3, product: "Keyboard", price: 150, inStock: true },
//     { id: 4, product: "Monitor", price: 500, inStock: true }
// ];

// let totalToPay = 0;
// let missingItemsCount = 0;

// for (let i =0; i< cart.length; i++){
//     if(cart[i].inStock === true){
//         totalToPay+= cart[i].price
//     } else if (cart[i].inStock === false){
//         missingItemsCount ++
//     }
// }
// console.log(totalToPay);
// console.log(missingItemsCount);

// let keyboardIndex = cart.findIndex(item=>item.product==="Keyboard")

// if (keyboardIndex !== -1) {
//     let keyboard = cart[keyboardIndex];
//     for (let key in keyboard) {
//         console.log(`პროდუქტის დეტალი -> ${key}: ${keyboard[key]}`);
//     }
// } else {
//     console.log("პროდუქტი ვერ მოიძებნა");
// }

// let processingStatus = 0;
// while(processingStatus<100){
//     processingStatus += 25;
//     console.log(`შეკვეთა მუშავდება... სტატუსი: ${processingStatus}%`);

// }

// დავალება 1-ის მონაცემები
// let userProfile = {
//     username: "Lasha_QA",
//     age: 22,
//     city: "Tbilisi",
//     isStudent: true,
//     profession: "QA Automation Engineer"
// };

// for(let obj in userProfile){
//     if (typeof userProfile[obj]==="string"){
//         console.log(` ტექსტური მონაცემი -> გასაღები: ${obj}, მნიშვნელობა: ${userProfile[obj]}`);
//     }
// }
// // დავალება 2-ის მონაცემები
// let carPrices = {
//     "BMW M3": 50000,
//     "Audi RS5": 60000,
//     "Ford Mustang": 40000
// };

// for( let obj in carPrices){
//     carPrices[obj] = carPrices[obj]*0.9
// }
// console.log(carPrices)

// let examScores = {
//     math: 45,
//     english: 90,
//     programming: 98,
//     history: 75
// };

// let highestScore = 0;
// let bestSubject = "";
// let passedExamsCount = 0;

// for (let obj in examScores){
//     if (examScores[obj]>=50){
//         passedExamsCount++
//     }
//      if(highestScore<examScores[obj]){
//         highestScore = examScores[obj]
//         bestSubject = obj
//     }
// }
// console.log(`ჩაბარებული გამოცდების რაოდენობა: ${passedExamsCount}. საუკეთესო საგანია ${bestSubject}  - ${highestScore} ქულით.`);

// let roomArea = calculateArea (10, 5);

// function calculateArea(length, width){
//     return length * width
// }
// console.log(roomArea);

// let calculateDiscount = function(price, discount){
//     return price - discount
// }
// console.log(calculateDiscount(100,20))

// function showSuccessMessage(){
//     console.log(`ფაილი წარმატებით გადმოიწერა!`);
// }
// function downloadFile(fileName, callback){
//     console.log(`ვიწყებ გადმოწერას: ${fileName}...`);
//    callback()
// }

// downloadFile("movie.mp4", showSuccessMessage)

// function add(a,b){
//     return a+b
// }
// function multiply(a,b){
//     return a*b
// }
// function calculator( num1, num2, operation){
//     return operation(num1, num2)
// }
// console.log( calculator(10, 5, add));
// console.log( calculator(10, 5, multiply));

let products = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 40 },
  { name: "Keyboard", price: 120 },
  { name: "Monitor", price: 800 },
];

function filterProducts(arr, callback) {
  const result = [];
  for (let obj of products) {
    if (callback(obj)) {
      result.push(obj);
    }
  }
  console.log(result);
  
}
function isCheap(item){
    console.log(item);
    
    if(item.price < 100){
        return true 
    }
}
function isPremium(item){
    if(item.price>=800){ 
        return true
    }
}
filterProducts(products,isPremium);


let salaries = [1000, 1500, 2000, 800];

function transformSalaries(arr, callback) {
    let newSalaries = []; // 1. Added 'let'
    
    // 2. Used 'of' instead of 'in', and looped over 'arr' instead of 'salaries'
    for (let amount of arr) {   
        // 3. Passed the current item to the callback before pushing
        newSalaries.push(callback(amount)); 
    }
    
    return newSalaries; // 4. Returned the final array
}

function addBonus(amount) {
    return amount + 200;
}

function deductTax(amount) {
    return amount * 0.8;
}

// Test the function
let salariesWithBonus = transformSalaries(salaries, addBonus);
console.log(salariesWithBonus); 
// Output: [1200, 1700, 2200, 1000]

let salariesAfterTaxes = transformSalaries(salaries, deductTax);
console.log(salariesAfterTaxes); 
// Output: [800, 1200, 1600, 640]
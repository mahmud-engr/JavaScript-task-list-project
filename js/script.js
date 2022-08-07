
// var result = prompt();

// if( result>=80 )
// {
//   console.log("Your grade is A+");
// }

// else if (result<80 && result>=70){
//       console.log("Your Grade is A ")
// }
// else if(result<70 && result>=60){
//       console.log("Your Grade is A- ")
// }
// else if (result<60 && result>=50){
//       console.log("Your Grade is B");
// }
// else if(result<50 && result>=40){
//       console.log("Your Grade is C")

// }
// else{
//       console.log("Your Grade is F, Batter Luck Next Time");
// }



// var n1 = prompt("Enter Fisrt Number: ");
// var n2 = prompt("Enter Fisrt Number: ");
// var n3 = prompt("Enter Fisrt Number: ");

// n1 = parseInt(n1);
// n2 = parseInt(n2);
// n3 = parseInt(n3);

// if (n1>n2 && n>3){
//       console.log( n1 + "is the largest");
// }
// else if (n2>n1 && n2>n3){
//       console.log( n2 + "is the largest");
// }

// else {
//       console.log( n + "is the largest");
// }


// console.log("Select an Option: n1. Add n2. Subtract n3. Mulitply n4. Divide");

// var num1 = prompt("Enter First Number: ");
// var num2 = prompt("Enter Second Number: ");
// var option = prompt("Choose an option: ");
// var result = null;

// num1 = parseInt(num1);
// num2 = parseInt(num2);
// option = parseInt(option);

// var num1Con = isNaN(num1);
// var num2Con = isNaN(num2);
// var optionCon = isNaN(option);

// if (num1Con || num2Con || optionCon) {
//     console.log("Invalid Input!");
// } else {
//     switch (option) {
//         case 1:
//             result = num1 + num2;
//             break;
//         case 2:
//             result = num1 - num2;
//             break;
//         case 3:
//             result = num1 * num2;
//             break;
//         case 4:
//             result = num1 / num2;
//             break;
//         default:
//             break;
//     }

//     if (result == null) {
//         console.log("No Result!");
//     }
//     else {
//         console.log("Result: " + result);
//     }
// }



// var multi = 1

// while(i<=10){

//     //sum = sum + i;
//     multi = multi*i;
//     i++;
      

// }

// //console.log("result is: " +sum);
// console.log("result is: " +multi);


// for(i=1; i<=10; i++){

//     if( i % 2 == 1){
//         continue;
//     }
//     console.log(i);

// }

// for (var i =1; i <= 10; i++){
//     if(i % 2 == 1) {
//         continue;
//     }
//     console.log(i);
// }

// let name = "I am learning Javascript!";
// let food = ["Cake", "Chocolate", "Ice Cream"];
// let len = food.length;

// for(var i = 0; i < len; i++) {
//     console.log(`Index : ${i}`);
//     console.log(food[i]); 
// }

// let person = {
//     name: "Shakib Al Hasan",
//     profession: "Cricketer",
//     team: "Bangladesh",
//     age: 33,
// }

// // We will get index
//  for( var x in name ) {
//     console.log(`index ${x} and item ${ name[x] }` );
// } 


// var n = parseInt(prompt("Enter the number of terms: "));
// var sum = 0;
// var series = "";

// for (var i = 1; i <= n; i++) {
//     sum += i ** 2;
//     series += (i ** 2).toString();
//     if (i == n) { continue; }
//     series += " + ";
// }

// console.log(`${series} = ${sum}`);




// var n = parseInt(prompt("Enter the number: "));
// var sum = 0;
// series = "";

// for(i=1; i<=n; i++)
// {
//     sum = sum + i**2;
   
//     series += (i**2);
   
//     if(i==n){
//         continue;
//     }
//     series += "+"

// }

// console.log(`${series} = ${sum}`);


// function myfunction(fisrtName,lastName){

//     console.log (`${fisrtName} ${lastName}`);
 
// }

// let fisrtName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");

// myfunction(fisrtName,lastName);


//Array iteration using forEach

// var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
// var numbers = [1, 32, 31, 2];
// let printEverything = function(item, i, abc){
//     console.log(`Index : ${i} and Item ${item}`);
//     console.log(abc);
// }

// // 1st Parameter : Item
// // 2nd Parameter : Index
// // 3rd Parameter : Whole Array
// foods.forEach(printEverything);


// Array iteration using Mapping

// var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
// var numbers = [1, 32, 31, 2];


// function addSomething(item) {
//     return `${item} is a Food`;
// }

// let arr_res = foods.map(addSomething);
// let arr_square = numbers.map(function(item){
//     return item*item;
// })

// console.log(arr_res);
// console.log(arr_square);

// // Object Method
// let person = {
//     firstname: "Fazle",
//     lastname: "Rahat",
//     dob: "9-10-1995", //number, string, date, array, object

//     fullname: function() { //Method
//         return `${this.firstname} ${this.lastname}`;
//     }

// }

// console.log(person.firstname);
// console.log(person.fullname());


// let person = {

//     fisrtname: "Sakib",
//     lastname: "al mahmud",
//     dob: "7-1-1998",


//     fullname:function(){

//         return(`${this.fisrtname} ${this.lastname}`);

//     }
// }

// console.log(person.fullname());


// let val;
// let today = new Date();

// val = today.toString();

// console.log(val);

// Class(ES6) 
// Class is a template for creating objects

// class Person {
//       constructor(fname, lname, birthday) {
//           this.firstname = fname;
//           this.lastname = lname;
//           this.dob = birthday;
//       }
  
//       calculateAge() {
//           let birthday = new Date(this.dob);
//           let diff = Date.now() - birthday.getTime();
//           let ageDate = new Date(diff);
//           return Math.abs(ageDate.getUTCFullYear() - 1970);
//       }
  
//       fullname() {
//           console.log(this.firstname, this.lastname);
//       }
  
//   }
  
//   let person1 = new Person("Fazle", "Rahat", "11-13-1988"); 
//   let person2 = new Person("Moinul", "Islam", "02-11-1991");
//   let person3 = new Person("Rony", "Chy", "01-17-1996");
  
//   console.log(person1.calculateAge());
//   console.log(person2.calculateAge());
//   console.log(person3.calculateAge());
  
  
//   console.log(person1.fullname());
//   console.log(person2.fullname());
//   console.log(person3.fullname());

// class Person { //Base Class
//       constructor(fname, lname) {
//           this.firstname = fname;
//           this.lastname = lname;
//       }
  
//       greeting() {
//           return `Hello ${this.firstname} ${this.lastname}!`;
//       }
//   }
  
//   class Customer extends Person { //Sub Class
//       constructor(fname, lname, phone, memberShip) {
//           super(fname, lname);
  
//           this.phone = phone;
//           this.memberShip = memberShip;
//       }
  
//       fullname() {
//           console.log(this.firstname, this.lastname);
//       }
//   }
  
//   let person1 = new Person("Fazle", "Rahat");
//   console.log(person1);
//   console.log(person1.greeting());
//   console.log(person1.fullname());
  
//   let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
//   console.log(customer1);
//   console.log(customer1.greeting());
//   console.log(customer1.fullname());




//   class Person {

//       constructor(fname,lname){
//             this.firstname = fname;
//             this.lastname = lname;
//       }

//       greeting (){
//             return `Hello ${this.firstname} ${this.lastname}`;
//       }

//   }


//   class Customer extends Person{

//       constructor(fname,lname,phone,membership){

//             super(fname,lname);

//             this.phone = phone;
//             this.membership = membership;

//       }

//       fullname () {
//             console.log(this.firstname,this.lastname,this.phone,this.membership);
//       } 

//   }


//   let person1 = new Person("Sakib","Sajim");
//   console.log(person1);
//   console.log(person1.greeting());
 
//   let customer1 = new Customer("Sakib","Sajim","017873483748",12123)
//   console.log(customer1.fullname());

 //let val;
 //val = this;
// val = window;
// val = window.document;
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].method;
// val = document.forms[0].action;

 //val = document.links;
// val = document.links[0];
// val = document.links[0].href;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
 // val = document.scripts[0].getAttribute('src');

//   links = document.links;
//   let linkArr = Array.from(links);

//  linkArr.forEach(function(link){
//      console.log(link.getAttribute('href'));
//  });

//  console.log(links);
// console.log(val);


// let list = document.querySelector('ul'); 

//  val = list;

//  console.log(val);

// let val;

// val = document.getElementById('document-title').style.background ='red';
// val = document.getElementById('document-title').style.color ='white';

// console.log(val);

// Multiselector 
// document.getElementsByClassName()
// let list = document.getElementsByClassName('sample-class');
// list[0].style.background = 'red';
// list[0].style.color = 'white';
// list[0].style.padding = '10px';
// list[0].textContent = 'Hello World!';
// console.log(list[0]);

// let list = document.getElementsByTagName()
// list = document.getElementsByTagName('li');
// list = document.querySelector('ol').getElementsByTagName('li');

// let lis = Array.from(list);
// lis.forEach(function(item){
//     console.log(item);
// });
// console.log(list);
// // // document.querySelectorAll()
// // // id -> #
// // // classname -> .
// // // tagname -> nothing

// list = document.querySelectorAll('ol li');
// list.forEach(function(item){
//     //console.log(item);
// });

// let liOdd = document.querySelectorAll('li:nth-child(odd)');
// let liEve = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(item){
//     item.style.background = 'grey';
//     item.style.color = 'white';
// });

// liEve.forEach(function(item){
//     item.style.background = 'red';
//     item.style.color = 'white';
// });


// console.log(list);

// Traversing the DOM
// let val;
// let list = document.querySelector('ul');
// let listItem = document.querySelector('ul li:first-child');

// val = list;
// val = listItem;

// // Get Child Nodes
// val = list;
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1];
// val = list.childNodes[2];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[0].nodeType;

// // 1 Element
// // 2 Attribute
// // 3 Text Node
// // 8 Comment
// // 9 Document Itself
// // 10 Doctype
// val = list.childNodes;

// val = list.children;
// val = list.children[1];
// list.children[0].textContent = "Hello";
// val = list.children[1].children[0];
// val = list.children[1].children[0].href;

// val = list.firstChild;
// val = list.firstElementChild;
// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = listItem;
// val = listItem.parentElement;
// val = listItem.parentNode;
// val = listItem.parentElement.parentElement;

// val = listItem.nextSibling.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// val = document.querySelector('ul li:last-child');
// val = val.previousSibling;
// val = val.previousElementSibling;

// console.log(val);



// document.getElementById('sample-btn').addEventListener('click', message )

// function message(){
//     console.log("Button Clicked");
// }



// let re;

// re = /hello/i;

// console.log(re.source);

// let str;

// str = "Hello World";

// let result = re.exec(str);

// console.log(result);


//let re;
//let str;
// Literal Character
// re = /hello/;
// re = /hello/i;
// re = /hell/i;
// re = /lo W/i;
// re = /loW/i;

// // Meta Characters
// re = /^hello/; // Must start with
// re = /hello$/; // Must end with
// re = /world$/;
// re = /^hello$/; // Must start and end with
// re = /^h.llo$/; // Matches any one character
// re = /h.llo/;
// re = /h*llo/; // 0 or more times
// re = /he?a?llo/; // Optional
// re = /hello?/; // escaping

// // Character Set using Brackets []
// re = /h[eai]llo/; // Must be one of them inside brackets
// re = /[HA]ello/i;
// re = /[^ha]ello/; // Anything except those inside brackets
// re = /^[ha]ello/; // Must start with h or a
// re = /[A-Z]ello/; // Start with Uper Case
// re = /^[A-Z]/; // First Letter must be upper case
// re = /^[a-z]/;
// re = /[A-Za-z]ello/;
// re = /[0-9]ello/;
// re = /^[0-9]ello/;
// re = /[^0-9]ello/; // Not digit
// re = /^[0-9][0-9][0-9]ello/; // three digits
// re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits

// // Braces {} - Quantifier
// re = /el{2}o/; // Must occur exactly 2 times
// re = /el{3}o/; 
// re = /hel{2,5}o/; // Range
// re = /hel{2,}o/; // At least 2 times

// // Parentheses () - Grouping
// re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
// re = /^([0-9]xy){4}/;

// Bangladeshi Phone Number
// total 11 digits
//re = /^01[0-9]{9}$/;

//re = /^+8801[0-9]{9}$/;


//str = "2xy3xy7xy8xy";
//str = "01788888888";
//str = "+8801778402398";




//console.log(re.exec(str));
// reTest(re, str);
// function reTest(re, str) {
//     if(re.test(str)) {
//         console.log(`'${str}' matches '${re.source}'`);
//     }
//     else {
//         console.log(`'${str}' doesn't match '${re.source}'`);
//     }
// }

// console.log(re.exec(str));
// reTest(re,str);
// function reTest(re, str){
//     if(re.test(str)){
//         console.log(`'${str}' matches '${re.source}'`)
//     }

//     else {

//         console.log(`'${str}' doesn't match '${re.source}'`);
//     }

// }


// Examples
// let re;
// let str;

// // Postal Code
// // 4700, 4000
// // re = /^[0-9]{4}$/;
// // str = "4000";

// // // Phone Number
// // // 01717888888 +8801717888888 8801717888888
// // re = /^(+)?(88)?01[0-9]{9}$/;
// // str = "+8801717888888";

// // // Email Address
// // // bohubrihi8.learn@edu.com.bd
// re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
// str = "bohubrihi.learn@edu.com.bd" ;

// console.log(re.test(str));



// var person = {
//     name: "Sakib",
//     age: 23,
//     email: "mahmmud2461@gmail.com" 

// }

// var person_json = JSON.stringify(person);

// console.log(person_json);

// var person_new = JSON.parse(person_json);
// console.log(person_new);

// var person1 = {
//     "name": "Rahim",
//     "age": 25,
//     "hometown": "Dhaka",
//     "married": false
// };

// var person_new = JSON.stringify(person1);
// console.log(person_new);

// var person_json = JSON.parse(person_new);
// console.log(person_json);


// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = this.responseText;
//         console.log(data);
//         jsonData(data);
//     }
// };
// xmlhttp.open("GET", "/js/data.json", true);
// xmlhttp.send();


// function jsonData(json_obj) {
//     console.log(json_obj);
//     var js_obj = JSON.parse(json_obj);
//     console.log(js_obj);

//     for (x in js_obj.persons) {
//         //console.log(x);
      
//         var persons = js_obj.persons;
//         // console.log(persons[x]);
//         for (y in persons[x]) {
//             console.log(persons[x][y]);
//         }
//     }
// }

// http://www.icndb.com/api/
// API
// RESTful API

// document.getElementById('get_data').addEventListener('click', loadJokes);

// function loadJokes(e) {
//     let number = document.getElementById('numberJokes').value;
//     //console.log(number);
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//     xhr.onprogress = function () {
//         document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
//     }

//     xhr.onload = function () {
//         if (this.status === 200) {
//             let data = JSON.parse(this.responseText);
//             let jokes = data.value;
//             let output = "<ol>";

//             jokes.forEach(function (item) {
//                 //console.log(item.joke);
//                 output += `<li>${item.joke}</li>`;
//             });
//             output += "</ol>";

//             document.getElementById('output').innerHTML = output;
//             //console.log(jokes);
//             //console.log(data);
//         }
//     }

//     xhr.send();
// }

// let namearray = [
//       {firstName: "Abdullah", lastName: "Al Mahmud"},
//       {firstName: "Iftekhar", lastName: "Mahmud"}
//   ]
  
//   function createPerson(person, callback) {
//      setTimeout(function() {
//          namearray.push(person);
//          callback();
//      }, 2000); 
//   }
  
//   function getPerson() {
//       setTimeout(function(){
//           let output = '';
//           namearray.forEach(function(person){
//               output += `<li>${person.firstName} ${person.lastName}</li>`
//           }); 
//           document.getElementById('output').innerHTML = output;
//       }, 500);
//   }
  
//   createPerson({firstName:"Sajid", lastName: "Chy"}, getPerson);


// Promises
// .then
// let personarray = [
//       { firstName: "Simanta", lastName: "Paul" },
//       { firstName: "Fazle", lastName: "Rahat" }
//   ]
  
//   function createPerson(person) {
//       let prom = new Promise(function (resolve, reject) {
//           personarray.push(person);
          
//           let error = false;
  
//           if (!error) {
//               resolve();
//           }
//           else {
//               reject('Error!: Something Wrong!');
//           }
  
//       });
//       return prom;
//   }
  
//   function getPerson() {
//       setTimeout(function () {
//           let output = '';
//           personarray.forEach(function (person) {
//               output += `<li>${person.firstName} ${person.lastName}</li>`
//           });
//           document.getElementById('output').innerHTML = output;
//       }, 500);
//   }
  
//   createPerson({ firstName: "Rony", lastName: "Chy" })
//       .then(getPerson)
//       .catch(function (err) {
//           console.log(err);
//       });


// document.getElementById("get_data").addEventListener('click', getData);

// function getData(){

//     fetch('http://api.icndb.com/jokes/random/')
//     .then(res => res.json())
//     .then(data => {console.log(data);})
//     .catch(err => {console.log(err);})

// }


// ----------------------------------------Project 1------------------------------------------------- //


let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');


form.addEventListener('submit', addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTask);
filter.addEventListener('keyup',filterTask);
document.addEventListener('DOMContentLoaded', getTasks);


function addTask(e){
      if(taskInput.value === ''){
            alert('Add a task!');
      }
      else
      {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(taskInput.value + " "));
            let link = document.createElement('a');
            link.setAttribute('href', '#');
            link.innerHTML = 'x';
            li.appendChild(link);
            taskList.appendChild(li);

            storeTaskInLocalStorage(taskInput.value);


            taskInput.value = '';
      }
      e.preventDefault();
}

function removeTask(e){
      if(e.target.hasAttribute('href')){
            if(confirm("Are you sure?")){
                  let ele = e.target.parentElement;
                 ele.remove();
                  // console.log(ele);
                  removeFormLS(ele);
            }
          
      }
}


function clearTask(){

      //taskList.innerHTML = "";

      while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
      }
      localStorage.clear();
}

function filterTask(e){
      let text = e.target.value.toLowerCase();

      document.querySelectorAll('li').forEach(task => {
            let item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text)!=-1){
                  task.style.display = 'block';

            }
            else{
                  task.style.display = 'none';
            }
      });
}

function storeTaskInLocalStorage(task){
      let tasks;
      if(localStorage.getItem('tasks') === null){
            tasks = [];
      }
      else {

            tasks = JSON.parse(localStorage.getItem('tasks'));

      }

      tasks.push(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getTasks(){
      if(localStorage.getItem('tasks') === null){
         tasks = [];
      }
      else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
      }

      tasks.forEach(task =>{
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(task + " "));
            let link = document.createElement('a');
            link.setAttribute('href', '#');
            link.innerHTML = 'x';
            li.appendChild(link);
            taskList.appendChild(li);
      });
}


function removeFormLS(taskItem){
      let tasks;
      if(localStorage.getItem('tasks') === null){
            tasks = [];
         }
         else {
               tasks = JSON.parse(localStorage.getItem('tasks'));
         }
   let li = taskItem;
   li.removeChild(li.lastChild);

   tasks.forEach((task,index) => {
      if(li.textContent.trim()=== task){
            tasks.splice(index,1);
      }
   });

   localStorage.setItem('tasks',JSON.stringify(tasks));
}


// ---------------------------------------------End of project 1----------------------------------------- //
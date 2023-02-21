//console.dir(document); //examine document object

// console.log(document.URL);
// console.log(document.title); //document.title =123
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = "Hello"
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GETELEMENTBYID------

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
 //var header = document.getElementById('main-header');
//console.log(headerTitle);

// headerTitle.textContent = 'Hello';
// headerTitle.textContent = 'Bye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML  =' <h3>Hello</h3>';
//headerTitle.style.borderBottom ='solid 3px #000';


//GETELEMENTSBYCLASSNAME -----------

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[0].textContent = 'Anu';
items[1].textContent = 'Neha';
items[2].textContent = 'Ritu';
//items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = "green";

// for(var i=0; i < items.length; i++) {
//     items[i].style.color = 'green';   
// }

 for(var i=0; i < items.length; i++) {
     items[i].style.fontWeight = 'bold';   
 }




//gives error -----
//items.style.backgroundColor = "#f4f4f4";

// for(var i=0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';   
// }

 

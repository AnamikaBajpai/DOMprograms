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

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[0].textContent = 'Anu';
// items[1].textContent = 'Neha';
// items[2].textContent = 'Ritu';
// //items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = "green";

// // for(var i=0; i < items.length; i++) {
// //     items[i].style.color = 'green';   
// // }

//  for(var i=0; i < items.length; i++) {
//      items[i].style.fontWeight = 'bold';   
//  }




//gives error -----
//items.style.backgroundColor = "#f4f4f4";

// for(var i=0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';   
// }


//GETELEMENTSBYTAGNAME----------------

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[0].textContent = 'Anu';
// li[1].textContent = 'Neha';
// li[2].textContent = 'Ritu';
// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = "green";

// // for(var i=0; i < items.length; i++) {
// //     items[i].style.color = 'green';   
// // }

//  for(var i=0; i < li.length; i++) {
//      li[i].style.fontWeight = 'bold';   
//  }


//QUERYSELECTOR-----------


// var header = document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px #ccc';

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

//  var item = document.querySelector('.list-group');
//   item.style.color ='red';

//  var lastItem = document.querySelector('.list-group').lastElementChild;
//  lastItem.style.color ='blue';

//  var secondItem = document.querySelector('.list-group :nth-child(2)');
//  secondItem.style.backgroundColor ='green';

//   var thirdItem = document.querySelector('.list-group :nth-child(3)');
//  thirdItem.style.visibility ='hidden';








 //QUERYSELECTORALL --------

//   var titles = document.querySelectorAll('.title');
//  console.log(titles);
//   titles[0] = textContent ="Hello";

//  var odd = document.querySelectorAll('#items :nth-child(odd)');
 

//  var even = document.querySelectorAll('#items :nth-child(even)');

//  for(var i = 0;i< odd.length; i++) {
//     odd[i].style.backgroundColor ="green";
   
//     even[i].style.backgroundColor ="#f4f4f4";


// }
//   var secondItem = document.querySelector('#items :nth-child(2)');
//   secondItem.style.color ='green';


//Travering DOM ----------

var itemList = document.querySelector('#items');

//PrentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement -------(interchangable)

// console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor ='#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);

//Childnode -------(not use)--------

//console.log(itemList.childNodes);

//children-----(use)---------

//console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

//Firstchild------------------------------(not use)

//console.log(itemList.firstChild);

//firstelement child ---------------(use)
//console.log(itemList.firstElementChild);


//lastchild -----------(not use)

//console.log(itemList.lastChild);

//lastElementchild -------------------(use)

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4'

//nextsibling----------------------(not use)

//console.log(itemList.nextSibling);

//nextelementsibling---------------------(use)

//console.log(itemList.nextElementSibling);

//previoussibling ---------(not use)

//console.log(itemList.previousSibling);

//previouselementsibling-------------------(use)
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';






//Create elements ----------

var newDiv = document.createElement('div');
//Add class ---------

newDiv.className ='hello';

//Add id--------
newDiv.id = 'hello1';

// Add attribute ------
newDiv.setAttribute('title','Hello Div');

//create text node -----

var newDivText = document.createTextNode('HEllo word');

//Add text to div -------

newDiv.appendChild(newDivText);





//before itemlister---------

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontsize ='20px';
container.insertBefore(newDiv,h1);


// before item 1 -----------

let liFirst = document.createElement('li');
liFirst.innerHTML ='HEllo word';
items.prepend(liFirst);
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

 var secondItem = document.querySelector('.list-group :nth-child(2)');
 secondItem.style.backgroundColor ='green';

  var thirdItem = document.querySelector('.list-group :nth-child(3)');
 thirdItem.style.visibility ='hidden';








 //QUERYSELECTORALL --------

//   var titles = document.querySelectorAll('.title');
//  console.log(titles);
//   titles[0] = textContent ="Hello";

 var odd = document.querySelectorAll('#items :nth-child(odd)');
 

 var even = document.querySelectorAll('#items :nth-child(even)');

 for(var i = 0;i< odd.length; i++) {
    odd[i].style.backgroundColor ="green";
   
    even[i].style.backgroundColor ="#f4f4f4";


}
  var secondItem = document.querySelector('#items :nth-child(2)');
  secondItem.style.color ='green';

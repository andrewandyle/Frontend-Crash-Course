// Uncomment everything along with the list stuff to look back at this later on.

// // console.log(window);
// // window: parent object of the browser
// // ex: window.alert(1); also works, but isn't needed
//
// // Single element selector
//
// // The document object is what makes up the DOM
// console.log(document.getElementById('my-form'));
// // can assign to variable
// console.log(document.querySelector('.container'));
// // when selecting single elements; grabs the first occurrence if there are multiple
//
// // Multiple element selector
// const items = document.querySelectorAll('.item');
// // gives us a node list, similar to an array, we can do ops like forEach
// console.log(document.getElementsByClassName('item'));
// // this is an HTML collection, the difference is that you can't use array methods on them, must manually convert to an array
// console.log(document.getElementsByTagName('li'));
// // remember: <tag>.<class>
//
// items.forEach((item) => console.log(item));
//
// // Manipulating/changing things in the DOM (UI)
// const ul = document.querySelector('.items');
// // you can use a remove method
// // can remove the last item: ul.lastElementChild.remove();
// // can edit content: ul.firstElementChild.textContent = 'text';
// // ul.children[1].innerText = '' (node list, so select by index)
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1>' (this is a way to add HTML dynamically)
//
// const btn = document.querySelector('.btn');
// btn.style.background = 'red'; // editing CSS
//
// // Events
// btn.addEventListener('click', (e) => {
//   // can also do 'mouseover', 'mouseout' (hover then exit) (look up more events)
//   // to prevent default behavior
//   e.preventDefault();
//   // console.log('click');
//   // e.target gives you the actual element
//   // e.target.className is btn
//
//   document.querySelector('#my-form').style.background = '#ccc'; // changes background to light grey
//   // add a class using .classList.add()
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello<h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // nameInput.value gets the name you put in
  if (nameInput.value === '' || emailInput.value === '') {
    // tell the user they have to insert those fields
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields.';
    setTimeout(() => msg.remove(), 3000);
    // after 3 seconds, error message goes away
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    // To save data, you could have some back-end that interacts with a database, like Node.js or PHP
    // Send requests from front-end using something like the fetch API or Ajax
  }
}

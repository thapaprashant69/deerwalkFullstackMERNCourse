// const heading = document.createElement('h1');
// heading.textContent="Hello World";
// document.body.append(heading,"Prashant");
// console.log(heading);

// const subheading = document.getElementById("subheading");
// const heading = document.getElementsByTagName('h1');
// const description = document.getElementsByClassName('description')

const subheading = document.querySelector('#subheading');
const heading = document.querySelector('h1');
const description = document.querySelectorAll('.description');
const button = document.querySelector(".btn");

button.addEventListener("click",()=>{heading.remove()})

// console.log(subheading);
// console.log(heading);
// console.log(description);

// subheading.setAttribute('id','subtitle');
// const subheadingId=subheading.getAttribute('id');
// console.log(subheadingId);

// heading.remove();

// document.body.removeChild(subheading);

// subheading.innerHTML = `${subheading.innerHTML}, Enjoy your day!`;

// heading.innerText = "Goodmorning people.";

// description.textContent = "Everyday is a new beginning";
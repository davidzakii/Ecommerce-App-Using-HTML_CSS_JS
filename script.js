// const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('userName');
//ankor in pro
let aLimitFeatuerUser = document.querySelectorAll('.pro-container .pro a i');
console.log(aLimitFeatuerUser);
for (let i = 0; i < aLimitFeatuerUser.length; i++) {
  aLimitFeatuerUser[i].addEventListener('click', (e) => {
    alert('please login in to get more feature');
    e.preventDefault();
  });
}
// document.addEventListener('DOMContentLoaded', function () {
//   let div7 = document.getElementById('div7');
//   let xhr = new XMLHttpRequest();
//   xhr.open('get', 'https://fakestoreapi.com/products', true);
//   xhr.send();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       let data = JSON.parse(xhr.responseText);
//       for (let item of data) {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('pro');
//         newDiv.innerHTML = `<img src="${item.image}" alt="" />
//         <div class="des">
//           <span>adidas</span>
//           <h5>${item.title}</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$${item.price}</h4>
//         </div>
//         <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
//         `;
//         div7.insertAdjacentElement('afterend', newDiv);
//       }
//     }
//   };
// });

//navbar hum burger manu clickable
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeNavbar = document.getElementById('close');
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}
if (closeNavbar) {
  closeNavbar.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// Disable the back button by replacing the current page with itself
history.replaceState(null, null, location.href);
// Listen for the back button event
window.onpopstate = function (event) {
  // If the user tries to go back, push a new state and replace the current page with itself again
  history.pushState(null, null, location.href);
};

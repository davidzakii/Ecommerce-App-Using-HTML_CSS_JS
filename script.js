// const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('userName');

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

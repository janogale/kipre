const mainDiv = document.querySelector('.product-area');
const modalImg = document.querySelector('#modalimage');

mainDiv.addEventListener('click', (e) => {
  e.preventDefault();

  //current product data.
  let productWrapper = e.target.closest('.product-wrapper')
  let productTitle = productWrapper.querySelector('h4').textContent;
  let productPrice = productWrapper.querySelector('.product-price').firstElementChild.textContent;

  // capture modal fields
  let modalTitle = document.querySelector('#modaltitle');
  let oldPrice = document.querySelector('#oldprice');
  let newPrice = document.querySelector('#newprice');

  // modify modal fields.

  modalTitle.innerHTML = productTitle;
  newPrice.innerHTML = productPrice

  // price with discount
  let discount = parseInt(productPrice.slice(1)) * 10 / 100;
  oldPrice.innerHTML = parseInt(productPrice.slice(1)) + discount;

  // replace Modal image with the clicked Image.
  if (e.target.nodeName == 'IMG') {
    var img = e.target.src;
    modalImg.src = img
  }

})
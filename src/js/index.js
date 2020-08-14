const {
  data: {
    billingAddress,
    shippingAddress,
    productsList,
    orderDate,
    expectedDate,
  },
  productInitialData,
} = orderDetails;

const form = document.querySelector('form');
const billingAdd = document.querySelector('.billing-add');
const shippingAdd = document.querySelector('.shipping-add');
const products = document.querySelector('.products');
const order = document.querySelector('.order-date');
const expected = document.querySelector('.expected-date');
const addButton = document.getElementById('add-product');
const productHeadings = document.querySelector('.product-headings');

function handleBillingAddressInputChange (e) {
  let propName = e.target.name;
  billingAddress[propName] = e.target.value;
}

function handleShippingAddressInputChange (e) {
  let propName = e.target.name;
  shippingAddress[propName] = e.target.value;
}

billingAdd.addEventListener('keypress', handleBillingAddressInputChange);
shippingAdd.addEventListener('keypress', handleShippingAddressInputChange);


function handleProductFieldChange (e) {
  console.log(e.target);
  if(e.target.id === 'qty') {
    let qty = e.target.value;
    let unitPrice = document.getElementById('unitPrice').value;
    console.log('qty', qty)
    console.log('p', unitPrice)
    document.getElementById('totalPrice').value = qty*unitPrice;
  }
}

function renderBillingAddress () {
  for(let item in billingAddress) {
    let input = createAndValidateAddressFields(billingAddress, item);
    billingAdd.appendChild(input);
  }

  let dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.value = orderDate;
  order.appendChild(dateInput);
}

function renderShippingAddress () {
  for(let item in shippingAddress) {
    let input = createAndValidateAddressFields(shippingAddress, item);
    shippingAdd.appendChild(input);
  }

  let dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.value = expectedDate;
  expected.appendChild(dateInput);
}

function renderProductHeadings() {
  let itemNames = Object.keys(productsList[0]);
  itemNames.forEach(item => {
    let div = document.createElement('div');
    div.innerText = convertCamelCase(item);
    productHeadings.appendChild(div);
  });
}

function onClickDeleteProduct(e) {
  e.stopPropagation();
  let elementClicked = e.target;
  let parent = elementClicked.parentElement;
  parent.remove();
}

function getEachProduct(element) {
  let div = document.createElement('div');

  for(let item in element) {
    let productFields = createAndValidateProductFields(element, item);
    div.addEventListener('keypress', handleProductFieldChange);
    div.appendChild(productFields);
  }

  let button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-delete');
  button.setAttribute('id', element.id);
  button.innerText = 'DELETE';
  button.addEventListener('click', onClickDeleteProduct);
  div.appendChild(button);

  return div;
}

function onClickAddProduct(e) {
  e.stopPropagation();
  let productItem = getEachProduct(productInitialData);
  products.appendChild(productItem);
}

addButton.addEventListener('click', onClickAddProduct);

function renderProducts () {
  productsList.forEach(element => {
    let productItem = getEachProduct(element);
    products.appendChild(productItem);
  });
}

form.onsubmit = function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('Order Details', orderDetails.data);
}

window.onload = function () {
  renderBillingAddress();
  renderShippingAddress();
  renderProductHeadings();
  renderProducts();
}

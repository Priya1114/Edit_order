function createAndValidateAddressFields (address, item) {
  let input = document.createElement('input');
  input.type = 'text';
  input.name = item;
  input.placeholder = convertCamelCase(item);
  input.setAttribute('required', true);
  input.value = address[item];

  if(item == 'firstName' || item == 'lastName') {
    if(/[A-Za-z]/ .test(address[item])){
      console.log('true');
    }
    input.setAttribute('pattern', '[^/s][A-z]*');
    input.setAttribute('title', `${convertCamelCase(item)} should contain only characters without space`);
  }
  else if(item == 'address1' || item == 'address2' || item == 'city' || item == 'state' || item == 'country') {
    // input.setAttribute('pattern', '[^/s][A-z][/s][A-z]*');
    input.setAttribute('title', `Invalid ${convertCamelCase(item)}`);
  }
  else if(item == 'zipcode') {
    input.setAttribute('pattern', '^[1-9][0-9]{5}');
    input.setAttribute('title', `${convertCamelCase(item)} should conatins max 6 numbers`);
  }

  return input;
}

function createAndValidateProductFields (element, item) {
  if(item == 'notes') {
    let textarea = document.createElement('textarea');
    textarea.type = 'text';
    textarea.name = item;
    textarea.value = element[item];

    return textarea;
  }
  else if(item == 'qty' || item == 'unitPrice' || item == 'totalPrice') {
    let input = document.createElement('input');
    input.type = 'number';
    input.name = item;
    input.value = element[item];
    input.setAttribute('id', item);
    input.setAttribute('required', true);
    if(item == 'totalPrice') {
      input.setAttribute('disabled', true);
    }

    return input;
  }
  else {
    let input = document.createElement('input');
    input.type = 'text';
    input.name = item;
    input.value = element[item];
    input.setAttribute('id', item);
    input.setAttribute('required', true);
    if(item == 'totalPrice') {
      input.setAttribute('disabled', true);
    }

    if(item == 'productId') {
      input.setAttribute('pattern', '^[1-9][0-9]*');
      input.setAttribute('title', `${convertCamelCase(item)} should conatins only numbers`);
    }

    return input;
  }
}
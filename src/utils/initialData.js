const orderDetails = (function (){

  let productInitialData = {
    'id': '',
    'name': '',
    'qty': '',
    'price': '',
    'totalPrice': '',
    'notes': '',
  }

  let data = {
    'billingAddress' : {
      'firstName': 'John',
      'lastName': 'Doe',
      'address1': 'kefnk rkelkrkr',
      'address2': 'dmdmmf',
      'city': 'Bangalore',
      'state': 'Karnataka',
      'country': 'India',
      'zipcode': '255606',
    },
    'shippingAddress' : {
      'firstName': 'Priya',
      'lastName': 'Choudhary',
      'address1': 'nsns',
      'address2': 'dmdmmf',
      'city': 'Bangalore',
      'state': 'Karnataka',
      'country': 'India',
      'zipcode': '255606',
    },
    // change format
    'orderDate': '24/2/2019',
    'expectedDate': '18/3/2020',
    'productsList': [
      {
        'productId': '10000',
        'productName': 'Dinning Table',
        'qty': 2,
        'unitPrice': 100.00,
        'totalPrice': 200.00,
        'notes': 'Random things notes',
      },
      {
        'productId': '11000',
        'productName': 'Dinning chair',
        'qty': 1,
        'unitPrice': 100.00,
        'totalPrice': 200.00,
        'notes': 'Random things notes',
      },
    ]
  };

  return {
    data,
    productInitialData,
  }
}());
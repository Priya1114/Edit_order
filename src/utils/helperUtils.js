const convertCamelCase = function (value) {
  let newValue = value.replace(/[\w]([A-Z])/g, function(item) {
    return item[0] + " " + item[1].toUpperCase();
  });

  return newValue.charAt(0).toUpperCase() + newValue.slice(1)
}
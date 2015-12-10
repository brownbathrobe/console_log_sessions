var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName, function(error, file) {
  if (error) {
    throw error;
  }
  var result = file.toString().split(/\W+/).reduce(function (dict, word) {
    word && (dict[word] ? dict[word] += 1 : dict[word] = 1);
    return dict;
  }, {});
  console.log(result);
});

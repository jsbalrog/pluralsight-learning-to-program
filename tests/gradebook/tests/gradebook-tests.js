var book = require('../lib/gradebook').book;

exports['setUp'] = function(callback) {
  book.reset();
  callback();
};

exports['Can add new grade'] = function(test) {
  book.addGrade(90);
  var count = book.getCountOfGrades();

  test.equal(count, 1);
  test.done();
};

exports['Can average grades'] = function(test) {
  book.addGrade(100);
  book.addGrade(50);
  var average = book.getAverage();

  test.equal(average, 75);
  test.done();
};

exports["Can compute letter grade of A"] = function(test) {
  book.addGrade(100);
  book.addGrade(90);

  var result = book.getLetterGrade();

  test.equal(result, 'A');
  test.done();
};


exports["Can compute letter grade of B"] = function(test) {
  book.addGrade(84);
  book.addGrade(88);

  var result = book.getLetterGrade();

  test.equal(result, 'B');
  test.done();
};

exports["Can compute letter grade of C"] = function(test) {
  book.addGrade(77);
  book.addGrade(67);

  var result = book.getLetterGrade();

  test.equal(result, 'C');
  test.done();
};


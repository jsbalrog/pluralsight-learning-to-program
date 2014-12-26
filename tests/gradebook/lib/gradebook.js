var gradebook = {
  _grades: [],

  addGrade: function(newGrade) {
    this._grades.push(newGrade);
  },

  getCountOfGrades: function() {
    return this._grades.length;
  },
  
  getAverage: function() {
    var total = 0;
    for(var i = 0; i < this._grades.length; i++) {
      total = total + this._grades[i];
    }
    return total / this._grades.length;
  },

  getLetterGrade: function() {
    var result = this.getAverage();
    if(result > 89) {
      return 'A';
    } else if(result > 79) {
      return 'B';
    } else if(result > 69) {
      return 'C';
    } else if(result > 59) {
      return 'D';
    } else {
      return 'F';
    }
  },

  reset: function() {
    this._grades = [];
  }
};

exports.book = gradebook;

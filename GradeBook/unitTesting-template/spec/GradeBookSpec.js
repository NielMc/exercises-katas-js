describe("my function gradeBook", function() {

  it("should exist", function() {
    expect(gradeBook).toBeDefined();
  });

it("should return F when passed 10, 20, 30 as parameter", function() {
    var result = gradeBook(10, 20, 30);
    expect(result).toEqual("F");
  });

it("should return D when passed 61, 62, 63 as parameter", function() {
    var result = gradeBook(61, 62, 63);
    expect(result).toEqual("D");
  });

it("should return C when passed 71, 72, 73 as parameter", function() {
    var result = gradeBook(71, 72, 73);
    expect(result).toEqual("C");
  });

it("should return B when passed 81, 82, 83 as parameter", function() {
    var result = gradeBook(81, 82, 83);
    expect(result).toEqual("B");
  });

it("should return A when passed 90, 95, 100 as parameter", function() {
    var result = gradeBook(90, 95, 100);
    expect(result).toEqual("A");
  });

it("should return a string", function (){
  var result = gradeBook(85,86,87);
  var typeResult = typeof(result);
  expect (typeResult).toEqual("string")
});

it("should return a string of 1 char", function (){
  var result = gradeBook(85,86,87);
  var lengthResult = result.length;
  expect (lengthResult).toEqual(1)
});
});
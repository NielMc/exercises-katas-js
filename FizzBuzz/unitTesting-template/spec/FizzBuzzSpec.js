describe("my function fizzBuzz", function() {

  it("should exist", function() {
    expect(fizzBuzz).toBeDefined();
  });
  it("should return array from 1 to 100", function(){
    expect(fizzBuzz().length).toEqual(100);
  })

it("should return 'fizz' when number divisible by 3", 
  function() {
    expect(fizzBuzz()[3-1]).toEqual("fizz");
  });
it("should return 'buzz' when number divisible by 5", 
  function() {
    expect(fizzBuzz()[5-1]).toEqual("buzz");
  });
it("should return 'fizzbuzz' when number divisible by 3 & 5", 
  function() {
    expect(fizzBuzz()[15-1]).toEqual("fizzbuzz");
  });
it("should return 'fizz' when number contains 3", 
  function() {
    expect(fizzBuzz()[13-1]).toEqual("fizz");
  });
it("should return 'fizz' when number contains 52", 
  function() {
    expect(fizzBuzz()[52-1]).toEqual("buzz");
  });
});
  
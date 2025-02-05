import Calculator from '../src/Calculator';

describe('calculate', function() {
  it('add', function() {
    let result = Calculator.Sum(5, 2);
    expect(result).toBe(7);   
  });

  it('substract', function() {
    let result = Calculator.Difference(5, 2);
    expect(result).toBe(3);
  });

  it('multiply', function(){
    let res = Calculator.Multiply(2,3);
    expect(res).toBe(6);
  })
});

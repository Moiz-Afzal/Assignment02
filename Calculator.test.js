const Calculator = require("./Calculator.js");

test("Task 1 test case 1", ()=>{
    expect(Calculator.sum(1,2)).toBe(3);
});

test("Task 1 test case 2", ()=>{
    expect(Calculator.subtact(2,1)).toBe(1);
});

test("Task 1 test case 3", ()=>{
    expect(Calculator.multi(2,1)).toBe(2);
});

test("Task 1 test case 4", ()=>{
    expect(Calculator.divide(5,2)).toBe(2.5);
});

test("Task 1 test case 5", ()=>{
    expect(Calculator.multi(0,2)).toBe(0);
});

test("Task 1 test case 6", ()=>{
    expect(Calculator.divide(5,0)).toBe(NaN);
});

test("Task 2 test case 1", ()=>{
    expect(Calculator.power(2,3)).toBe(8);
});

test("Task 2 test case 2", ()=>{
    expect(Calculator.roundOff(2.33)).toBe(2);
});

test("Task 2 test case 3", ()=>{
    expect(Calculator.ceil(2.4)).toBe(3);
});
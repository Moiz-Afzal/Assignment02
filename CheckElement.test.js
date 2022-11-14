const checkElement = require("./CheckElement.js");

test("Task 5 test case 1", ()=>{
    expect(checkElement(1)).toBe(1);
});

test("Task 5 test case 2", ()=>{
    expect(checkElement(21)).toBe(0);
});
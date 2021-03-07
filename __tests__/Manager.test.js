const Manager = require("../lib/Manager");

test('Setting office number', () => {
    const testValue = 25;
    const emp = new Manager("S", 1, "testthisemail@gmail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test('Get role using method', () => {
    const testValue = "Manager";
    const emp = new Manager("S", 1, "testthisemail@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});

test('Get the offic number using method', () => {
    const testValue = "25";
    const emp = new Manager("S", 1, "testthisemail@gmail.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});
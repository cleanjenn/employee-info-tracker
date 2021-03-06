const Employee = require('../lib/Employee');

// #1
test('creates a new employee', () => {
    const employee = new Employee();
    
    expect(typeof (employee)).toBe('object');
});
// #2
test('nameing the employee', () => {
    const name = "Sally";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});
// #3
test('creating the employee ID', () => {
    const testValue = 20;
    const emp = new Employee("S", testValue);
    expect(emp.id).toBe(testValue);
});
// #4
test('creating the employee email', () => {
    const testValue = "testthisemail@gmail.com"
    const emp = new Employee("S", 1, testValue);
    expect(emp.email).toBe(testValue);
});
// #5
test('Get the employees name using method', () => {
    const testValue = "Sally";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});
// #6
test('Get the employees ID using method', () => {
    const testValue = 100;
    const emp = new Employee("S", testValue);
    expect(emp.getId()).toBe(testValue);
});
// #7
test('Get the employees email using method', () => {
    const testValue = "testthisemail@gmail.com";
    const emp = new Employee("S", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});
// #8
test('Get the employees role using method', () => {
    const testValue = "Employee";
    const emp = new Employee("Sally", 1, "testthisemail@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});
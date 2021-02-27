const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('sally');
    
    expect(employee.name).toBe('sally');
});
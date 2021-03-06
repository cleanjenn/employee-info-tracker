const Engineer = require("../lib/Engineer");
// #1
test('Sets the github account', () => {
    const testValue = "GitName";
    const emp = new Engineer("S", 1, "testthisemail@gmail.com", testValue);
    expect(emp.github).toBe(testValue);
});
// #2
test('Get the role using method', () => {
    const testValue = "Engineer";
    const emp = new Engineer("S", 1, "testthisemail@gmail.com","GitName");
    expect(emp.getRole()).toBe(testValue);
});
// #3
test('Get the github name using method', () => {
    const testValue = "GitName";
    const emp = new Engineer("S", 1, "testthisemail@gmail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});
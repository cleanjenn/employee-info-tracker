const Intern =require("../lib/Intern");
//# 1
test('Setting the school', () => {
    const testValue = "University";
    const emp = new Intern("S", 1, "testthisemail@gmail.com", testValue);
    expect(emp.school).toBe(testValue);
});
//# 2
test('Get the role using method', () => {
    const testValue = "Intern";
    const emp = new Intern("Sally", 1, "testthisemail@gmail.com", "University");
    expect(emp.getRole()).toBe(testValue);
});
//# 3
test('Get the school using method', () => {
    const testValue = "University";
    const emp = new Intern("S", 1, "testthisemail@gmail.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});
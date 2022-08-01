const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testSchool = "UTA";
    const e = new Intern(name, testId, testEmail, testSchool);
    expect(e.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testSchool = "UTA";
    const testRole = "Intern";
    const e = new Intern(name, testId, testEmail, testSchool);
    expect(e.getRole()).toBe(testRole);
});

test("Can get school via getSchool()", () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testSchool = "UTA";
    const e = new Intern(name, testId, testEmail, testSchool);
    expect(e.getSchool()).toBe(testSchool);
});
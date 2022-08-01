const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testOfficeNumber = 100;
  const e = new Manager(name, testId, testEmail, testOfficeNumber);
  expect(e.officeNumber).toBe(testOfficeNumber);
});

test('getRole() should return "Manager"', () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testOfficeNumber = 100;
    const testRole = "Manager";
  const e = new Manager(name, testId, testEmail, 100);
  expect(e.getRole()).toBe(testRole);
});

test("Can get office number via getOffice()", () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testOfficeNumber = 100;
  const e = new Manager(name, testId, testEmail, testOfficeNumber);
  expect(e.getOfficeNumber()).toBe(testOfficeNumber);
});
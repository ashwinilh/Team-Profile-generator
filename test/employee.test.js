const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Ashley";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const name = "Ashley";
  const testId = 100;
  const e = new Employee(name, testId);
  expect(e.id).toBe(testId);
});

test("Can set email via constructor argument", () => {
  const name = "Ashley";
  const testId = 100;
  const testEmail = "ashley@fakeemail.com";
  const e = new Employee(name, testId, testEmail);
  expect(e.email).toBe(testEmail);
});

test("Can get name via getName()", () => {
  const name = "Ashley";
  const e = new Employee(name);
  expect(e.getName()).toBe(name);
});

test("Can get id via getId()", () => {
  const name = "Ashley";
  const testId = 100;
  const e = new Employee(name, testId);
  expect(e.getId()).toBe(testId);
});

test("Can get email via getEmail()", () => {
  const name = "Ashley";
  const testId = 100;
  const testEmail = "ashley@fakeemail.com";
  const e = new Employee(name, testId, testEmail);
  expect(e.getEmail()).toBe(testEmail);
});

test("getRole() should return \"Employee\"", () => {
  const testRole = "Employee";
  const name = "Ashley";
  const testId = 100;
  const testEmail = "ashley@fakeemail.com";
  const e = new Employee(name, testId, testEmail);
  expect(e.getRole()).toBe(testRole);
});
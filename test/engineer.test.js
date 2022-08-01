const Engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testGitHubUser = "GitHubUser";
  const e = new Engineer(name,testId, testEmail, testGitHubUser);
  expect(e.github).toBe(testGitHubUser);
});

test("getRole() should return \"Engineer\"", () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testGitHubUser = "GitHubUser";
    const testRole = "Engineer";
    const e = new Engineer(name,testId, testEmail, testGitHubUser);
  expect(e.getRole()).toBe(testRole);
});

test("Can get GitHub username via getGithub()", () => {
    const name = "Ashley";
    const testId = 100;
    const testEmail = "ashley@fakeemail.com";
    const testGitHubUser = "GitHubUser";
  const e = new Engineer(name, testId, testEmail , testGitHubUser);
  expect(e.getGithub()).toBe(testGitHubUser);
});
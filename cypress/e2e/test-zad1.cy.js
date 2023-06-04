describe("Test for first task.", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!");
  });
});
describe("Test1", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Wpisz imie", () => {
    let user = "John Doe";
    cy.get('[data-testid="name-field"]').type("John");
    cy.get('[data-testid="surname-field"]').type("Doe");
    cy.get("button").click();
    cy.url().should("include", "/products/list");
    cy.contains(user);
    cy.get('[data-testid="loadButton-button"]').click();
    cy.get('[data-testid="productList-item"]').should("have.length", 9);
  });
});

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("check the button actions well", () => {
    cy.get(".project-view").click();
    for (let i = 0; i < 10; i++) {
      cy.get("h2").should("exist");
      cy.get("li").click({ multiple: true });
      cy.get(".project-view").click();
    }
    cy.get("h2").contains("%");
    cy.get(".project-view").click();
    cy.get("h2").contains("CAN YOU SCORE 100%?");
  });
});

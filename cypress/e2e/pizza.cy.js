describe("Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="cta-button"]').click();
  });

  it("name input testi", () => {
    cy.get('input[name="buyerName"]')
      .should("exist")
      .type("John Doe")
      .should("have.value", "John Doe");
  });

  it("birden fazla malzeme seçim testi", () => {
    const ingredients = ["Pepperoni", "Mozarella", "Domates", "Biber", "Mantar", "Soğan"];
    ingredients.forEach((ingredient) => {
      cy.get(`#${ingredient}`).check().should("be.checked");
    });
  });

  it("form gönderme testi", () => {

    cy.get('input[name="buyerName"]').type("Jane Doe");
    const ingredients = ["Pepperoni", "Mozarella", "Domates", "Biber"];
    ingredients.forEach((ingredient) => {
      cy.get(`#${ingredient}`).check();
    });

    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 200,
      body: { success: true, message: "Sipariş başarıyla gönderildi" },
    }).as("finalOrder");

    cy.get("button[type='submit']").click();

    cy.wait("@finalOrder").its("response.statusCode").should("eq", 200);
    cy.contains("Siparişiniz alındı! Teşekkür ederiz.").should("be.visible");
  });
});

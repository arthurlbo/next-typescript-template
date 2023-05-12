import { Hello } from "./Hello";

describe("<Hello />", () => {
    it("should have the text", () => {
        cy.mount(<Hello />);
        cy.get("h1").contains("Hello");
    });
});

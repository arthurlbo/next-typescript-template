import { Hello } from "./Hello";

describe("<Hello />", () => {
    it("should renders correctly", () => {
        cy.mount(<Hello />);
        cy.get("h1").contains("Hello");
    });
});

import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
    it("should renders correctly", async () => {
        render(<Heading />);

        expect(await screen.findByText(/Hello/i)).toBeInTheDocument();
    });
});

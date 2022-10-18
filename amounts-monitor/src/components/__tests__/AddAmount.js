import { render as testRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { unmountComponentAtNode } from "react-dom";
import AddAmount from "../Expanding/AddAmount";

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("form is shown only after button click", () => {
    testRender(<AddAmount />, container);

    screen.debug();
});

it("typing on form enables buttons", async () => {
    testRender(<AddAmount />, container);

    await userEvent.click(screen.getByRole("button"));

    expect(
        await screen.findByRole("button", { name: /add new/i })
    ).toBeDisabled();
});

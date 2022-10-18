import { render as testRender, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import AmountItem from "../Amounts/AmountItem";

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

describe("on initial render", () => {
    const dummyItemsList = [
        { description: "First expense", cost: "20", date: new Date() },
        { description: "", cost: "10000", date: new Date("2022-03-01") },
    ];

    it("its valid contents are available", () => {
        const currentObject = dummyItemsList[0];
        const trimmedDesc = currentObject.description.trim();

        testRender(
            <AmountItem
                description={trimmedDesc}
                cost={currentObject.cost}
                date={currentObject.date}
            />,
            container
        );

        expect(screen.getByRole("heading").textContent).toBe(trimmedDesc);
    });

    it("empty contents are not presented", () => {
        const currentObject = dummyItemsList[1];
        const trimmedDesc = currentObject.description.trim();

        testRender(
            <AmountItem
                description={trimmedDesc}
                cost={currentObject.cost}
                date={currentObject.date}
            />,
            container
        );

        expect(screen.getByRole("heading").textContent).toBe(trimmedDesc);
    });
});

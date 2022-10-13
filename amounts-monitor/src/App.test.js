import App from "./App";

import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";
import { render } from "@testing-library/react";

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

describe("my test", () => {
    it("renders without crashing", () => {
        act(() => {
            render(<App />, container);
        });
    });
});

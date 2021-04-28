import { HomeButton } from '../src/client/HomeButton';
import TestRenderer from 'react-test-renderer';

import React from "react";
import ReactDOM from "react-dom";
import  { act} from "react-dom/test-utils"

describe("home button", () => {
    it("test home button", () => {
        const view = TestRenderer.create(<HomeButton />);
        expect(view.toJSON()).toMatchSnapshot();
    });
    
    it("test home button", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<HomeButton />, container)
        });
        
        expect(container.innerHTML).toMatchSnapshot();
    })
    
})
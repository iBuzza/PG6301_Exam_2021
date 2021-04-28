import { ChatPage } from '../src/client/ChatPage';
import TestRenderer from 'react-test-renderer';

import React from "react";
import ReactDOM from "react-dom";
import  { act} from "react-dom/test-utils"

describe("loading view", () => {
    it("show loading view", () => {
        const view = TestRenderer.create(<ChatPage />);
        expect(view.toJSON()).toMatchSnapshot();
    });
    
    it("show loading view on dom", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<ChatPage />, container)
        });
        
        expect(container.innerHTML).toMatchSnapshot();
    })
    
})
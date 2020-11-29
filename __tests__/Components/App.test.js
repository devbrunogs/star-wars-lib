import React from "react";
import App from "../../src/Components/App";
import Loading from "../../src/Components/Layout/Loading";
import EmptyState from "../../src/Components/Layout/EmptyState";
import Header from "../../src/Components/Layout/Header";
import CharacterList from "../../src/Components/Character/CharacterList";
import { mockCharacters } from "../../src/Helpers";

describe("App Tests", () => {
    let wrapper, instance, requestSpy = jest.fn();
    
    beforeAll(() => {
        wrapper = mount(
            <App 
                requestCharacters={requestSpy}
            />
        );

        instance = wrapper.instance();
    });

    afterAll(() => {
        unmount(wrapper);
    });

    it("should render", () => {
        expect(wrapper).toHaveLength(1);
    });


    it("should have called request on mount", () => {
        expect(requestSpy).toHaveBeenCalledTimes(1);
    });

    it("should render EmptyState", () => {
        expect(wrapper.find(EmptyState)).toHaveLength(1);
    });

    it("should render Header", () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it("should render Loading component", () => {
        wrapper.setProps({
            fetching: true
        });

        expect(wrapper.find(Loading)).toHaveLength(1);
    });

    it("should render CharacterList if data is set", () => {
        wrapper.setProps({
            fetching: false,
            characters: mockCharacters
        });

        expect(wrapper.find(CharacterList)).toHaveLength(1);
    });
});

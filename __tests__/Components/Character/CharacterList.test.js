import React from "react";
import CharacterList from "../../../src/Components/Character/CharacterList";
import EmptyState from "../../../src/Components/Layout/EmptyState";
import { mockCharacters } from "../../../src/Helpers";

describe("CharacterList Tests", () => {
    let wrapper, instance, deleteSpy = jest.fn(), viewSpy = jest.fn();

    beforeAll(() => {
        wrapper = mount(
            <CharacterList
                deleteCharacter={deleteSpy}
                setCardCharacter={viewSpy}
            />
        );

        instance = wrapper.instance();
    });

    afterAll(() => {
        unmount(wrapper);
    });

    it("should render Empty State if there is no characters data", () => {
        expect(wrapper.find(EmptyState)).toHaveLength(1);
    });

    it("should render", () => {
        wrapper.setProps({
            characters: mockCharacters
        });

        expect(wrapper.find(EmptyState)).toHaveLength(0);
    });

    it("should render character info", () => {
        expect(wrapper.find("div").at(1).text()).toContain("Luke Skywalker");
    });

    it("should call delete function on click", () => {
        wrapper.find("button").at(0).simulate("click");

        expect(deleteSpy).toHaveBeenCalledTimes(1);
    });

    it("should call view function on click", () => {
        wrapper.find("button").at(1).simulate("click");

        expect(viewSpy).toHaveBeenCalledTimes(1);
    });
});
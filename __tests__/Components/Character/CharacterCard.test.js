import React from "react";
import CharacterCard from "../../../src/Components/Character/CharacterCard";
import { mockCharacters } from "../../../src/Helpers";

describe("CharacterCard Tests", () => {
    let wrapper, instance, deleteSpy = jest.fn(), removeSpy = jest.fn();

    beforeAll(() => {
        wrapper = mount(
            <CharacterCard
                deleteCharacter={deleteSpy}
                removeCardCharacter={removeSpy}
            />
        );

        instance = wrapper.instance();
    });

    afterAll(() => {
        unmount(wrapper);
    });

    it("should not render if there is no character Info", () => {
        expect(wrapper.find("dl")).toHaveLength(0);
    });

    it("should render", () => {
        wrapper.setProps({
            characterInfo: mockCharacters[0]
        });

        expect(wrapper.find("dl")).toHaveLength(1);
    });

    it("should render character info", () => {
        expect(wrapper.find("dd").at(0).text()).toEqual("Luke Skywalker");
    });

    it("should call delete function on click", () => {
        wrapper.find("button").at(0).simulate("click");

        expect(deleteSpy).toHaveBeenCalledTimes(1);
    });

    it("should call remove function on click", () => {
        wrapper.find("button").at(1).simulate("click");

        expect(removeSpy).toHaveBeenCalledTimes(1);
    });
});


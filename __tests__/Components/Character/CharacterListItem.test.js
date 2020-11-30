import React from "react";
import CharacterListItem from "../../../src/Components/Character/CharacterListItem";

describe("CharacterList Tests", () => {
    let wrapper, instance, deleteSpy = jest.fn(), viewSpy = jest.fn();

    beforeAll(() => {
        wrapper = mount(
            <CharacterListItem
                name={"Luke Skywalker"}
                color={"blue"}
                deleteCharacter={deleteSpy}
                setCardCharacter={viewSpy}
            />
        );

        instance = wrapper.instance();
    });

    afterAll(() => {
        unmount(wrapper);
    });

    it("should render", () => {
        expect(wrapper.find(CharacterListItem)).toHaveLength(1);
    });

    it("should render character info", () => {
        expect(wrapper.find("span").at(0).text()).toContain("Luke Skywalker");
    });

    it("should be blue", () => {
        expect(wrapper.find("span").at(0).prop("style").color).toEqual("blue");
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
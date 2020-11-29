import React from "react";
import Header from "../../../src/Components/Layout/Header";
import CharacterSelect from "../../../src/Components/Character/CharacterSelect";
import { mockCharacters } from "../../../src/Helpers";

describe("Header Tests", () => {
    let wrapper, instance, deleteSpy = jest.fn(), removeSpy = jest.fn();

    beforeAll(() => {
        wrapper = mount(
            <Header
                characters={mockCharacters}
                deleteCharacter={deleteSpy}
                removeCardCharacter={removeSpy}
            />
        );

        instance = wrapper.instance();
    });

    afterAll(() => {
        unmount(wrapper);
    });

    it("should render", () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it("should render character Select", () => {
        expect(wrapper.find(CharacterSelect)).toHaveLength(1);
    });

    it("should render title", () => {
        expect(wrapper.find("h2").text()).toEqual("Star Wars Lib");
    });
});


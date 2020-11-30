import React from "react";
import CharacterList from "../../../src/Components/Character/CharacterList";
import CharacterListItem from "../../../src/Components/Character/CharacterListItem";
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
        expect(wrapper.find(CharacterListItem)).toHaveLength(2);
    });
});
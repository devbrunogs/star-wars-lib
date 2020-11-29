import React from "react";
import CharacterSelect from "../../../src/Components/Character/CharacterSelect";
import Select from "../../../src/Components/Form/Select";
import { mockCharacters } from "../../../src/Helpers";

describe("CharacterSelect Tests", () => {
    let wrapper, instance;

    beforeAll(() => {
        wrapper = mount(
            <CharacterSelect
                characters={mockCharacters}
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

    it("should render Select", () => {
        expect(wrapper.find(Select)).toHaveLength(1);
    });

    it("should set character Name", () => {
        wrapper.setProps({
            cardCharacter: "test"
        });
        expect(wrapper.find(Select).text()).toContain("test");
    });
});


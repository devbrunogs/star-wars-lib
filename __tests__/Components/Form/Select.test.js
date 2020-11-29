import React from "react";
import Select from "../../../src/Components/Form/Select";
import { mockOptions } from "../../../src/Helpers";

const getOptions = () => {
    return mockOptions;
}

describe("Select Tests", () => {
    let wrapper, instance, requestSpy = jest.fn(), onSelectSpy = jest.fn();

    beforeAll(() => {
        wrapper = mount(
            <Select
                getOptions={() => []}
                onSelect={onSelectSpy}
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

    it("should not render options list if there is no option", () => {
        wrapper.setState({show: true});

        expect(wrapper.text()).toContain("Nothing to see Here");
    });

    it("should render options list", () => {
        wrapper.setState({show: false});

        wrapper.setProps({
            getOptions
        });

        wrapper.setState({show: true});

        expect(wrapper.find("span")).toHaveLength(5);
    });

    it("should render options extra action", () => {
        wrapper.setState({show: false});

        wrapper.setProps({
            extraAction: () => <span onClick={requestSpy}>test</span>
        });

        wrapper.setState({show: true});

        expect(wrapper.find("span")).toHaveLength(8);
    });

    it("should render options extra action", () => {
        wrapper.setState({show: false});

        wrapper.setProps({
            extraAction: () => <span onClick={() => requestSpy()}>test</span>
        });

        wrapper.setState({show: true});

        expect(wrapper.find("span")).toHaveLength(8);
    });

    it("should call extra action method", () => {
        wrapper.find("span").at(6).simulate("click");

        expect(requestSpy).toHaveBeenCalledTimes(1);
    });

    it("should call onSelect method", () => {
        wrapper.find("span").at(3).simulate("click");

        expect(onSelectSpy).toHaveBeenCalledTimes(1);
    });

    it("should render clear option if has value", () => {
        wrapper.setState({show: false});

        wrapper.setProps({
            selectedOptionText: "test"
        });

        expect(wrapper.find("span")).toHaveLength(2);
    });
});


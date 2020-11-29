import React from "react";
import EmptyState from "../../../src/Components/Layout/EmptyState";

describe("Header Tests", () => {
    let wrapper, actionSpy = jest.fn();

    beforeAll(() => {
        wrapper = mount(
            <EmptyState />
        );
    });

    afterAll(() => {
        unmount(wrapper);
    });

    it("should render", () => {
        expect(wrapper.find(EmptyState)).toHaveLength(1);
    });

    it("should render title", () => {
        expect(wrapper.find("h2").text()).toEqual("Nothing to see here... Move Along...");
    });

    it("should not render action", () => {
        expect(wrapper.find("button")).toHaveLength(0);
    });

    it("should render action", () => {
        wrapper.setProps({
            action: actionSpy
        })

        expect(wrapper.find("button")).toHaveLength(1);
    });

    it("should call action on click", () => {
        wrapper.find("button").simulate("click");

        expect(actionSpy).toHaveBeenCalledTimes(1);
    });
});
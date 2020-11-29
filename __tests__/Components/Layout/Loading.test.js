import React from "react";
import Loading from "../../../src/Components/Layout/Loading";

describe("Header Tests", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(
            <Loading />
        );
    });

    afterAll(() => {
        unmount(wrapper);
    });

    it("should render", () => {
        expect(wrapper.find(Loading)).toHaveLength(1);
    });

    it("should render title", () => {
        expect(wrapper.find("h2").text()).toEqual("Loading");
    });
});
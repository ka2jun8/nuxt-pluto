import { shallowMount } from "@vue/test-utils";
import ErrorComponent from "../Error.vue";

describe("Error.vue", () => {
  const propsData = {
    error: "this is error test",
  };
  it("props", () => {
    const wrapper = shallowMount(ErrorComponent, { propsData });
    expect(wrapper.props()).toEqual(propsData);
  });
  it("snapshot", () => {
    const wrapper = shallowMount(ErrorComponent, { propsData });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});

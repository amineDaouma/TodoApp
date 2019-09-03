import React from "react";
import Todo from "./Todo";
import { shallow } from "enzyme";

const todo = {
  id: 1,
  text: "myTodo",
  isCompleted: false
};

describe("Todo", () => {
  it("should render 2 divs", () => {
    const wrapper = shallow(<Todo todo={todo} />);
    expect(wrapper.find("button")).toHaveLength(2);
  });
});

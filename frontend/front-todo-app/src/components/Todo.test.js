import React from "react";
import Todo from "./Todo";
import { shallow, mount } from "enzyme";

const todo = {
  id: 1,
  text: "myTodo",
  isCompleted: false
};

describe("Todo", () => {
  it("should render one div", () => {
    const wrapper = shallow(<Todo todo={todo} />);
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should render complete text button", () => {
    const wrapper = shallow(
      <button
        style={{ background: "green" }}
        onClick={() => completeTodo(todo.id, todo.isCompleted)}
      >
        Complete a todo
      </button>
    );
    //expect(wrapper.find("button")).toEqual(true);
    expect(wrapper.text()).toEqual("Complete");
  });

  it("should render two buttons", () => {
    const wrapper = mount(<Todo todo={todo} />);
    //const length = todos.length + 4;
    expect(wrapper.find("button")).toHaveLength(2);
  });

  // it("should contain one div", () => {
  //   const wrapper = mount(<Todo todo={todo} />);
  //   expect(wrapper.containsAnyMatchingElements([(className = "todo")])).toEqual(
  //     true
  //   );
  // });

  // it("should not be instancied because it is a stateless component", () => {
  //   const wrapper = mount(<TodoList todos={todos} />);
  //   const instance = wrapper.instance();
  //   expect(instance).toEqual(null);
  // });
});

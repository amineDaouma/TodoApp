import React from "react";
import { shallow, mount } from "enzyme";
import TodoList from "./TodoList";
import Wrapper from "./Wrapper";
import Todo from "./Todo";
import { todo, actions } from "./Todo.stories";

export const unCompletedTodos = [
  { ...todo, id: "1", text: "Todo1" },
  { ...todo, id: "2", text: "Todo2" },
  { ...todo, id: "3", text: "Todo3" },
  { ...todo, id: "4", text: "Todo4" },
  { ...todo, id: "5", text: "Todo5" },
  { ...todo, id: "6", text: "Todo6" }
];

export const todos = [
  ...unCompletedTodos.slice(0, 5),
  { id: "6", text: "Todo 6 ", isCompleted: false }
];

export const completedTodos = unCompletedTodos.map(unCompletedTodo => ({
  ...unCompletedTodo,
  isCompleted: true
}));

export const mixedTodos = [...unCompletedTodos, ...completedTodos];

describe("TodoList", () => {
  it("should render TodoList", () => {
    shallow(<TodoList />);
  });
  it("should contain Todo component", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.containsAnyMatchingElements([Todo])).toEqual(true);
  });
  it("should render exactly 6 todos", () => {
    const wrapper = mount(<TodoList todos={todos} />);
    expect(wrapper.find(Todo)).toHaveLength(todos.length);
  });
  it("should render exactly 10 divs", () => {
    const wrapper = mount(<TodoList todos={todos} />);
    const length = todos.length + 4;
    expect(wrapper.find("div")).toHaveLength(length);
  });
  it("should not be instancied because it is a stateless component", () => {
    const wrapper = mount(<TodoList todos={todos} />);
    const instance = wrapper.instance();
    expect(instance).toEqual(null);
  });
});

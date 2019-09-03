import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Todo from "./Todo";

//mocked todo
export const todo = {
  id: "1",
  text: "My first todo with StoryBook",
  isCompleted: false
};

export const actions = {
  completeTodo: action("completeTodo"),
  removeTodo: action("removeTodo")
};

storiesOf("Todo", module)
  .add("default", () => <Todo todo={todo} {...actions} />)
  .add("completed", () => (
    <Todo todo={{ ...todo, isCompleted: true }} {...actions} />
  ))
  .add("deleted", () => <Todo todos={{}} />);

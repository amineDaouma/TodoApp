import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

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
const longTodoText = `This tasks name is absurdly large. 
In fact, I think if I keep going I might end up with content overflow. 
What will happen? The star that represents a pinned task could have text overlapping.
The text could cut-off abruptly when it reaches the star. I hope not. 
Well, You have to give it another try to see if everything could fit together in the CoreUX app.
I just wanna write anything to fill the space left to test the long title use case `;

storiesOf("Todo", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Todo todo={object("todo", { ...todo })} {...actions} />
  ))
  .add("completed", () => (
    <Todo todo={{ ...todo, isCompleted: true }} {...actions} />
  ))
  .add("deleted", () => <Todo todos={{}} />)
  .add("longTodoText", () => <Todo todo={{ ...todo, text: longTodoText }} />);

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { ListCard } from "../../components";

const stories = storiesOf("ListCard", module);

stories.addDecorator(withKnobs);

stories
  .add("with default text", () => (
    <ListCard cardHeader="Header" cardItems={["Item 1", "Item 2", "Item 3"]} />
  ))
  .add("with custom text", () => (
    <ListCard
      cardHeader="Hot Beverages"
      cardItems={["Coffee", "Tea", "Matcha"]}
    />
  ))
  .add("with some emoji", () => (
    <ListCard
      cardHeader="My Favorite Emojis"
      cardItems={["😀", "😎", "👍", "💯"]}
    />
  ))
  .add("with custom themes", () => {
    const theme = select("custom theme", ["light", "dark"], "light");
    return (
      <ListCard
        theme={theme}
        cardHeader="Available Themes"
        cardItems={["light", "dark"]}
      />
    );
  });

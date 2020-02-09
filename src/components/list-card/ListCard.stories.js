import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import ListCard from "./ListCard";

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
  .add("with overflowing text", () => (
    <ListCard
      cardHeader="Overflow"
      cardItems={[
        "Venti half calf double cupped no sleeve salted caramel mocha latte with 2 pumps of vanilla, a splash of soy milk extra foam with a dash of cinnamon",
        "Tea",
        "Matcha"
      ]}
    />
  ))
  .add("with many items", () => (
    <ListCard
      cardHeader="A few of my favorite things"
      cardItems={[
        "Raindrops on Roses",
        "Whiskers on Kittens",
        "Bright copper kettles",
        "Warm woolen mittens",
        "Cream colored ponies",
        "crisp apple strudels",
        "Doorbells",
        "Sleigh bells",
        "Schnitzel with noodles",
        "Girls in white dresses with blue satin sashes",
        "Snowflakes that stay on my nose and eyelashes",
        "Silver white winters that melt into springs"
      ]}
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

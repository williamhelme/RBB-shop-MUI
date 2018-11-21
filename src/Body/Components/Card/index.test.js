import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow, mount } from "enzyme";
import Card from "./";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const feature = loadFeature("./src/Body/Components/Card/card.feature", {
  errorOnMissingScenariosAndSteps: true
});

defineFeature(feature, test => {
  test("Loading the Card", ({ given, when, then, pending }) => {
    let Elem;
    given("the Card has loaded", () => {
      Elem = shallow(
        <Card title={"title"} image={"test.jpg"} description={"descript"} />
      );
    });

    then("a title, description and image should exist", () => {
      expect(
        Elem.contains(
          <Typography gutterBottom variant="headline" component="h2">
            title
          </Typography>
        )
      ).toEqual(true);

      expect(
        Elem.contains(
          <CardMedia
            image="test.jpg"
            component="img"
            title="Cake"
            style={{
              textAlign: "center",
              width: "inherit",
              margin: "0px auto"
            }}
          />
        )
      ).toEqual(true);
      expect(
        Elem.contains(<Typography component="p">descript</Typography>)
      ).toEqual(true);
    });

    then("buttons for view recipe and view ingredients should exist", () => {});
  });

  test("Viewing the recipe", ({ given, when, then, pending }) => {
    given("the Card has loaded", () => {
      pending();
    });

    when("it is in a default state", () => {
      pending();
    });

    then("it should not show the recipe", () => {
      pending();
    });

    when("the user selects view recipe", () => {
      pending();
    });

    then("it should show the recipe", () => {
      pending();
    });

    then("it should not show the ingredients", () => {
      pending();
    });
  });

  test("Viewing the ingredients", ({ given, when, then, pending }) => {
    given("the Card has loaded", () => {
      pending();
    });

    when("it is in a default state", () => {
      pending();
    });

    then("it should not show the ingredients", () => {
      pending();
    });

    when("the user selects view ingredients", () => {
      pending();
    });

    then("it should show the ingredients", () => {
      pending();
    });

    then("it should not show the recipe", () => {
      pending();
    });
  });
});

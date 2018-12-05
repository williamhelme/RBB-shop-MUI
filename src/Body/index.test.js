import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow, mount } from "enzyme";
import Body from "./";
import mocksdk from "firebase-mock";

jest.mock("../config/firebaseConfig.js", () => {
  return mocksdk;
});

const feature = loadFeature("./src/Body/body.feature", {
  errorOnMissingScenariosAndSteps: true
});

defineFeature(feature, test => {
  test("Loading the App body", ({ given, when, then, pending }) => {
    let elem;
    given("the Body has loaded", () => {
      elem = shallow(<Body />);
    });

    then("a page title should exist", () => {
      expect(elem.contains(<h1>Welcome to Bex's Bakes</h1>)).toEqual(true);
    });
  });
  //https://github.com/airbnb/enzyme/tree/master/docs/api/ReactWrapper
  test("Displaying the content", ({ given, when, then, pending }) => {
    let elem, container;

    given("the Body has loaded", () => {
      elem = mount(
        <Body
          loading={false}
          items={[
            {
              name: "test",
              description: "test",
              image: "./test.jpg"
            }
          ]}
        />
      );
    });

    when("it is setup correctly", () => {
      container = elem
        .findWhere(n => {
          return n.name() == "Grid" && n.prop("container");
        })
        .first();
      expect(container.props().spacing).toEqual(24);
    });

    then("a 3 column grid should exist for desktop", () => {
      expect(
        container
          .findWhere(n => {
            return n.name() == "Grid" && n.prop("item");
          })
          .first()
          .prop("lg")
      ).toEqual(3);
    });

    then("a 2 column grid should exist for tablet", () => {
      expect(
        container
          .findWhere(n => {
            return n.name() == "Grid" && n.prop("item");
          })
          .first()
          .prop("md")
      ).toEqual(6);
    });

    then("a 1 column grid should exist for mobile", () => {
      expect(
        container
          .findWhere(n => {
            return n.name() == "Grid" && n.prop("item");
          })
          .first()
          .prop("sm")
      ).toEqual(12);
    });
  });
  test("Displaying the insert form", ({ given, when, then, pending }) => {
    given("the Body has loaded", () => {
      pending();
    });

    when("the route is for the insert form", () => {
      pending();
    });

    then("the insert form should be displayed", () => {
      pending();
    });

    then("the grid of items should not exist", () => {
      pending();
    });
  });
});

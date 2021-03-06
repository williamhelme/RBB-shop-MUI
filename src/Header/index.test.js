import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow } from "enzyme";
import Header from "./";

const feature = loadFeature("./src/Header/header.feature", {
  errorOnMissingScenariosAndSteps: true
});

defineFeature(feature, test => {
  test("Loading the App header", ({ given, when, then, pending }) => {
    let Elem;

    given("the header has loaded", () => {
      Elem = shallow(<Header />);
    });

    then("there should be a header tag", () => {
      expect(Elem.type()).toEqual("header");
    });
  });

  test("Should skew the background", ({ given, when, then, pending }) => {
    let Elem;
    given("a skew property is provided", () => {
      Elem = shallow(<Header skew={6} />);
    });

    then("the background should skew", () => {
      expect(Elem.find("section").length).toEqual(1);
      expect(Elem.find("article").length).toEqual(1);
      expect(Elem.find("svg").props().style.height).toEqual("6%");
    });
  });

  test("it renders correctly", ({ given, when, then, pending }) => {
    let Elem;

    given("it has rendered", () => {
      Elem = shallow(<Header />);
    });

    then("it should match the snapshot", () => {
      expect(Elem).toMatchSnapshot();
    });
  });
});

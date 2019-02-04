import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow, mount } from "enzyme";
import ProductList from "./";

const feature = loadFeature(
  "./src/Body/Components/ProductList/ProductList.feature",
  {
    errorOnMissingScenariosAndSteps: true
  }
);

defineFeature(feature, test => {
  test("Loading the form", ({ given, when, then, pending }) => {
    const Form = null;
    given("the Form has loaded", () => {
      Form = shallow(<ProductList />);
    });

    then("the form should exist", () => {
      expect(Form).toExist();
    });
  });
});

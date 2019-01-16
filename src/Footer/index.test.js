import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow } from "enzyme";
import Footer from "./";

const feature = loadFeature("./src/Footer/footer.feature", {
  errorOnMissingScenariosAndSteps: true
});

defineFeature(feature, test => {
  test("Loading the App footer", ({ given, when, then, pending }) => {
    let Elem;

    given("the footer has loaded", () => {
      Elem = shallow(<Footer />);
    });

    then("there should be contact details", () => {
      expect(Elem.contains(<article>Tel: 01234 567890</article>)).toBeTruthy();
    });
  });
});

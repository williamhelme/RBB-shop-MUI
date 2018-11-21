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

    then("there should be a footer tag", () => {
      expect(Elem.type()).toEqual("footer");
    });
  });
});
// defineFeature(feature, test => {
//   test('Successful Login with Valid Credentials', ({ given, when, then, pending }) => {
//     given('User is on Home Page', () => {
//       pending();
//     });

//     when('User Navigate to LogIn Page', () => {
//       pending();
//     });

//     when('User enters UserName and Password', () => {
//       pending();
//     });

//     then('Message displayed Login Successfully', () => {
//       pending();
//     });
//   });
// })

import React from "react";
import ReactDOM from "react-dom";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow, mount } from "enzyme";
// import firebasemock from "firebase-mock";

// var mockauth = new firebasemock.MockAuthentication();
// var mockdatabase = new firebasemock.MockFirebase();
// var mockfirestore = new firebasemock.MockFirestore();
// var mockstorage = new firebasemock.MockStorage();
// var mockmessaging = new firebasemock.MockMessaging();
// var mocksdk = new firebasemock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   path => {
//     return path ? mockdatabase.child(path) : mockdatabase;
//   },
//   // use null if your code does not use AUTHENTICATION
//   () => {
//     return mockauth;
//   },
//   // use null if your code does not use FIRESTORE
//   () => {
//     return mockfirestore;
//   },
//   // use null if your code does not use STORAGE
//   () => {
//     return mockstorage;
//   },
//   // use null if your code does not use MESSAGING
//   () => {
//     return mockmessaging;
//   }
// );

// jest.mock("./config/firebaseConfig.js", () => {
//   return {
//     auth: () => {
//       return mockauth;
//     },
//     recipesCollection: path => {
//       return path ? mockdatabase.child(path) : mockdatabase;
//     }
//   };
// });
import App from "./App";
import Body from "./Body/";
import Header from "./Header/";
import Footer from "./Footer/";

const feature = loadFeature("./src/app.feature", {
  errorOnMissingScenariosAndSteps: true
});

defineFeature(feature, test => {
  test("Loading the App", ({ given, when, then, pending }) => {
    let Site;
    given("I am testing the app works", () => {
      Site = shallow(<App />);
    });

    then("the app should render", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
    });
  });

  test("The app contains a body", ({ given, when, then, pending }) => {
    let Site;

    given("the app has rendered", () => {
      Site = shallow(<App />);
    });

    then("a body should be available", () => {
      expect(Site.containsMatchingElement(<Body />)).toEqual(true);
    });
  });

  test("The app contains a header", ({ given, when, then, pending }) => {
    let Site;

    given("the app has rendered", () => {
      Site = shallow(<App />);
    });

    then("a header should be available", () => {
      expect(Site.containsMatchingElement(<Header />)).toEqual(true);
    });
  });
});

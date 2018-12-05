import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow, mount } from "enzyme";
import InsertForm from "./";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

const feature = loadFeature(
  "./src/Body/Components/InsertForm/InsertForm.feature",
  {
    errorOnMissingScenariosAndSteps: true
  }
);

defineFeature(feature, test => {
  test("Loading the form", ({ given, when, then, pending }) => {
    const Form = null;
    given("the Form has loaded", () => {
      Form = shallow(<InsertForm />);
    });

    then("the form should exist", () => {
      expect(Form).toExist();
    });

    then(
      "a name, description, instructions and image input field should exist",
      () => {
        // expect(Form).toContain(<TextField label="name" />);
        // expect(Form).toContain(
        //   <TextField label="description" multiline rows="4" />
        // );
        // expect(Form).toContain(<TextField label="description" />);
        // expect(Form).toContain(
        //   <input
        //     accept="image/*"
        //     id="contained-button-file"
        //     multiple
        //     type="file"
        //   />
        // );
        // expect(Form).toContain(
        //   <label htmlFor="contained-button-file">
        //     <Button variant="contained" component="span">
        //       Upload
        //     </Button>
        //   </label>
        // );
        pending();
      }
    );

    then("an insert button should exist", () => {
      pending();
    });
  });

  test("Submitting the form", ({ given, when, then, pending }) => {
    given("the form has been submitted", () => {
      pending();
    });
    when("a name and description are provided", () => {
      pending();
    });

    then("it should insert a new recipe", () => {
      pending();
    });
  });
});

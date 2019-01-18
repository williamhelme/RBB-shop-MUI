import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import InsertForm from "./";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Section } from "./";
import EditableList from "../EditableList/";
import { createShallow } from "@material-ui/core/test-utils";

const feature = loadFeature(
  "./src/Body/Components/InsertForm/InsertForm.feature",
  {
    errorOnMissingScenariosAndSteps: true
  }
);

defineFeature(feature, test => {
  let shallow = null;
  let Form = null;
  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });
  test("Loading the form", ({ given, when, then, pending }) => {
    given("the Form has loaded", () => {
      Form = shallow(<InsertForm />);
    });

    then("the form should exist", () => {
      expect(Form.exists()).toEqual(true);
    });

    then(
      "a name, description, instructions and image input field should exist",
      () => {
        expect(
          Form.containsMatchingElement(
            <TextField label="Name" id="insert-form-name" />
          )
        ).toBeTruthy();
        expect(
          Form.containsMatchingElement(
            <TextField label="Description" id="insert-form-description" />
          )
        ).toBeTruthy();
      }
    );

    then("a recipe section with an editable list should exist", () => {
      expect(
        Form.containsMatchingElement(
          <Section control={EditableList} heading={"Recipe"} />
        )
      ).toBeTruthy();
    });

    then("a instructions section with an editable list should exist", () => {
      expect(
        Form.containsMatchingElement(
          <Section control={EditableList} heading={"Cooking Instructions"} />
        )
      ).toBeTruthy();
    });

    then("an insert button should exist", () => {
      expect(
        Form.containsMatchingElement(
          <Button size="medium" variant="contained" color="primary">
            Submit
          </Button>
        )
      ).toBeTruthy();
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

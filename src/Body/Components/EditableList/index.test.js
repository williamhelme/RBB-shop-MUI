import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import EditableList from "./";
import InputBase from "@material-ui/core/InputBase/InputBase";
import { createShallow } from "@material-ui/core/test-utils";

const feature = loadFeature(
  "./src/Body/Components/EditableList/EditableList.feature",
  {
    errorOnMissingScenariosAndSteps: true
  }
);

defineFeature(feature, test => {
  let shallow = null;
  let elem = null;
  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });
  test("The lists does not have any items", ({
    given,
    when,
    then,
    pending
  }) => {
    given("the list is empty", () => {
      elem = shallow(<EditableList items={[]} />);
    });

    then("only an a text field and add button should exist", () => {
      expect(elem.find(".insert-field").length).toEqual(1);
      expect(elem.find(".add-button").length).toEqual(1);
      expect(elem.find(".list-item").length).toEqual(0);
    });
  });

  test("The list has items", ({ given, when, then, pending }) => {
    given("there are items in the list", () => {
      elem = shallow(<EditableList items={["list item 1", "list item 2"]} />);
    });

    then("a list should exists", () => {
      expect(elem.find(".list-item").length).toEqual(2);
    });

    then("an editable field should exists on each list item", () => {
      expect(
        elem
          .find(".list-item")
          .first()
          .find(InputBase).length
      ).toEqual(1);
    });

    then("a delete button should exists on each list item", () => {
      expect(
        elem
          .find(".list-item")
          .first()
          .find(".delete-item").length
      ).toEqual(1);
    });
  });

  test("Adding an item", ({ given, when, then, pending }) => {
    given("there is a list", () => {
      elem = shallow(
        <EditableList
          items={["list item 1", "list item 2", "list item 3", "list item 4"]}
        />
      );
      expect(elem.find(".list-item").length).toEqual(4);
    });

    when("the user adds an item", () => {
      elem.find(".insert-field").simulate("change", {
        target: { name: "item", value: "blah@gmail.com" }
      });

      expect(elem.state("term")).toEqual("blah@gmail.com");

      elem.find(".add-button").simulate("click");
    });

    then("a new entry should be added", () => {
      expect(elem.find(".list-item").length).toEqual(5);
    });
  });

  test("Deleting an item", ({ given, when, then, pending }) => {
    given("there is a list", () => {
      elem = shallow(
        <EditableList
          items={["list item 1", "list item 2", "list item 3", "list item 4"]}
        />
      );
      expect(elem.find(".list-item").length).toEqual(4);
    });

    when("the user deletes an item", () => {
      elem
        .find(".delete-item")
        .at(2)
        .simulate("click");
    });

    then("an entry should be deleted", () => {
      expect(elem.state("items")).toEqual([
        "list item 1",
        "list item 2",
        "list item 4"
      ]);
      expect(elem.find(".list-item").length).toEqual(3);
    });
  });

  test("Pressing Enter in the add section", ({
    given,
    when,
    then,
    pending
  }) => {
    given("there is a value in the add field", () => {
      elem = shallow(<EditableList items={[]} />);

      elem.setState({
        term: "testing enter"
      });
    });

    when("the user presses Enter", () => {
      elem
        .find(".insert-field")
        .first()
        .simulate("keyPress", { key: "Enter", keyCode: 13, which: 13 });
    });

    then("a new entry should be added", () => {
      expect(elem.state("items")).toEqual(["testing enter"]);
      expect(elem.find(".list-item").length).toEqual(1);
    });
  });

  test("Editing an item", ({ given, when, then, pending }) => {
    given("there is an item in the list", () => {
      elem = shallow(<EditableList items={["testing edit", "testing"]} />);
    });

    when("the user changes the value in the item", () => {
      elem
        .find(".list-item")
        .first()
        .find(InputBase)
        .simulate(
          "change",
          { target: { value: "testing the edit functionality" } },
          1
        );
    });

    then("the entry should be updated", () => {
      expect(elem.state("items")).toEqual([
        "testing the edit functionality",
        "testing"
      ]);
    });
  });

  test("Leaving an item empty", ({ given, when, then, pending }) => {
    given("there is an item in the list", () => {
      elem = shallow(<EditableList items={["testing edit", "testing"]} />);
    });

    when("the user empties the field and loses focus", () => {
      elem
        .find(".list-item")
        .first()
        .find(InputBase)
        .simulate("blur", { target: { value: "" } }, 1);
    });

    then("the entry should be deleted", () => {
      expect(elem.state("items")).toEqual(["testing"]);
    });
  });
});

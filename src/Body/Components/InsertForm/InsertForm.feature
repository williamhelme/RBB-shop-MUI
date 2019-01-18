Feature: Insert Form

  Scenario: Loading the form
    Given the Form has loaded
    Then the form should exist
    Then a name, description, instructions and image input field should exist
    Then a recipe section with an editable list should exist
    Then a instructions section with an editable list should exist
    Then an insert button should exist

  Scenario: Submitting the form
    Given the form has been submitted
    When a name and description are provided
    Then it should insert a new recipe
